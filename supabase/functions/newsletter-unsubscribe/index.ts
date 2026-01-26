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
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response("Invalid unsubscribe link", {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Find subscriber with this token
    const { data: subscriber, error: fetchError } = await supabase
      .from("newsletter_subscribers")
      .select("id, email")
      .eq("unsubscribe_token", token)
      .single();

    if (fetchError || !subscriber) {
      return new Response("Invalid or expired unsubscribe link", {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    // Delete subscriber
    const { error: deleteError } = await supabase
      .from("newsletter_subscribers")
      .delete()
      .eq("id", subscriber.id);

    if (deleteError) {
      console.error("Error unsubscribing:", deleteError);
      return new Response("Error unsubscribing", {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unsubscribed</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .success { color: #2563eb; }
        </style>
      </head>
      <body>
        <h1 class="success">Unsubscribed Successfully</h1>
        <p>You have been unsubscribed from our newsletter. We're sorry to see you go!</p>
        <p>If you change your mind, you can always subscribe again.</p>
        <a href="/">Go back to website</a>
      </body>
      </html>
    `, {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal server error", {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "text/html" },
    });
  }
});