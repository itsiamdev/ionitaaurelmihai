 // @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { subject, content } = await req.json();

    if (!subject || !content) {
      return new Response(JSON.stringify({ error: "Subject and content are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get confirmed subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from("newsletter_subscribers")
      .select("email, unsubscribe_token")
      .eq("confirmed", true);

    if (fetchError) {
      console.error("Error fetching subscribers:", fetchError);
      return new Response(JSON.stringify({ error: "Failed to fetch subscribers" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!subscribers || subscribers.length === 0) {
      return new Response(JSON.stringify({ message: "No subscribers to send to" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send emails using Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not set");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const batchSize = 50; // Resend allows up to 100, but let's be safe
    let sentCount = 0;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);

      // For each subscriber, create personalized email with unsubscribe link
      const emailPromises = batch.map(async (subscriber) => {
        const supabaseUrl = Deno.env.get("SUPABASE_URL");
        const unsubscribeUrl = `${supabaseUrl}/functions/v1/newsletter-unsubscribe?token=${subscriber.unsubscribe_token}`;

        const personalizedHtml = `
          ${content}
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 12px; color: #666; text-align: center;">
            <a href="${unsubscribeUrl}" style="color: #666;">Unsubscribe from this newsletter</a>
          </p>
        `;

        return {
          from: "Ionita Aurel Mihai <newsletter@yourdomain.com>", // Replace with your domain
          to: [subscriber.email],
          subject,
          html: personalizedHtml,
        };
      });

      const emailDataBatch = await Promise.all(emailPromises);

      // Send each email individually (Resend allows batching, but for personalization we send one by one)
      for (const emailData of emailDataBatch) {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });

        if (response.ok) {
          sentCount++;
        } else {
          console.error("Error sending email:", await response.text());
        }
      }
    }

    return new Response(JSON.stringify({
      message: `Newsletter sent to ${sentCount} confirmed subscribers`
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});