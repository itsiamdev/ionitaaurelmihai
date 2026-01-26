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
      return new Response("Invalid confirmation link", {
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
      .select("id, confirmed")
      .eq("confirm_token", token)
      .single();

    if (fetchError || !subscriber) {
      return new Response("Invalid or expired confirmation link", {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    if (subscriber.confirmed) {
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Already Confirmed</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            .success { color: #2563eb; }
          </style>
        </head>
        <body>
          <h1 class="success">Already Confirmed!</h1>
          <p>Your email is already confirmed for our newsletter.</p>
          <a href="/">Go back to website</a>
        </body>
        </html>
      `, {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    // Update confirmed status
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({ confirmed: true, confirm_token: null }) // Clear token after use
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Error confirming subscription:", updateError);
      return new Response("Error confirming subscription", {
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
        <title>Subscription Confirmed</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .success { color: #2563eb; }
        </style>
      </head>
      <body>
        <h1 class="success">Subscription Confirmed!</h1>
        <p>Thank you for confirming your email. You'll now receive our newsletter updates.</p>
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