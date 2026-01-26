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

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${Deno.env.get("GEMINI_API_KEY")}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n\n') + '\n\nAssistant:'
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

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
