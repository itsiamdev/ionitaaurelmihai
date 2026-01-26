// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { crypto } from "https://deno.land/std@0.168.0/crypto/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email: rawEmail } = await req.json();
    const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : '';

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Valid email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id, confirmed")
      .eq("email", email)
      .single();

    if (existing) {
      if (existing.confirmed) {
        return new Response(JSON.stringify({ error: "Email already subscribed" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } else {
        // Resend confirmation if not confirmed
        const confirmToken = generateToken();
        await supabase
          .from("newsletter_subscribers")
          .update({ confirm_token: confirmToken })
          .eq("id", existing.id);
        await sendConfirmationEmail(email, confirmToken);
        return new Response(JSON.stringify({ message: "Confirmation email sent again" }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Generate tokens
    const confirmToken = generateToken();
    const unsubscribeToken = generateToken();

    // Insert subscriber
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{
        email,
        confirmed: false,
        confirm_token: confirmToken,
        unsubscribe_token: unsubscribeToken
      }]);

    if (error) {
      console.error("Error inserting subscriber:", error);
      return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send confirmation email
    await sendConfirmationEmail(email, confirmToken);

    return new Response(JSON.stringify({ message: "Confirmation email sent. Please check your inbox." }), {
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

async function sendConfirmationEmail(email: string, token: string) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("RESEND_API_KEY not set");
    return;
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const confirmUrl = `${supabaseUrl}/functions/v1/newsletter-confirm?token=${token}`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirm your newsletter subscription</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #2563eb;">Confirm your newsletter subscription</h1>
      <p>Thank you for subscribing to our newsletter! Please click the button below to confirm your email address.</p>
      <a href="${confirmUrl}" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0;">Confirm Subscription</a>
      <p>If the button doesn't work, copy and paste this link into your browser:</p>
      <p style="word-break: break-all; color: #666;">${confirmUrl}</p>
      <p>If you didn't request this subscription, you can safely ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
      <p style="font-size: 12px; color: #666;">This email was sent to ${email}. If you have any questions, please contact us.</p>
    </body>
    </html>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Ionita Aurel Mihai <newsletter@yourdomain.com>", // Replace with your domain
      to: [email],
      subject: "Confirm your newsletter subscription",
      html: emailHtml,
    }),
  });

  if (!response.ok) {
    console.error("Error sending confirmation email:", await response.text());
  }
}