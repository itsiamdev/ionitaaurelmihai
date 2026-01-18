import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Ești asistentul virtual al lui Ionita Aurel Mihai, un tânăr dezvoltator web pasionat și creativ.

Informații despre Ionita Aurel Mihai:
- Este un dezvoltator web specializat în React, TypeScript, și tehnologii moderne
- Lucrează cu Next.js, Tailwind CSS, Node.js, și baze de date SQL/NoSQL
- Este pasionat de programare, învățare continuă și proiecte inovatoare
- Caută oportunități de colaborare și proiecte interesante

Rolul tău:
- Răspunde întrebărilor vizitatorilor despre Aurel, abilitățile și proiectele sale
- Fii prietenos, profesional și helpful
- Răspunde în limba română dacă întrebarea este în română, altfel în engleză
- Dacă nu știi ceva specific despre Aurel, sugerează vizitatorului să-l contacteze direct
- Menține răspunsurile concise și relevante`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: "user", content: message },
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("LOVABLE_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in ai-assistant function:", error);
    return new Response(
      JSON.stringify({ error: "A apărut o eroare. Te rog încearcă din nou." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
