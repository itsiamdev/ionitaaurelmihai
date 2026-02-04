// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = generateContextualResponse(message, conversationHistory);

    return new Response(
      JSON.stringify({ response }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function generateContextualResponse(message: string, history: any[]): string {
  const lowerMessage = message.toLowerCase();

  // Specific "La ce liceu sunt?" question
  if (lowerMessage === "la ce liceu esti" ||
      lowerMessage === "la ce liceu sunt" ||
      lowerMessage.includes("la ce liceu") && lowerMessage.includes("esti")) {
    return "Colegiul Național Ștefan cel Mare";
  }

  // About questions
  if (lowerMessage.includes("cine") && lowerMessage.includes("aurel") || 
      lowerMessage.includes("cine") && lowerMessage.includes("tine") ||
      lowerMessage.includes("despre") && lowerMessage.includes("tine") ||
      lowerMessage.includes("despre") && lowerMessage.includes("aurel") ||
      lowerMessage.includes("prezintă") || lowerMessage.includes("portfolio") ||
      lowerMessage.includes("portofoliu")) {
    return `Bună! 👋 Sunt asistentul virtual al lui Ionita Aurel Mihai.

**Despre Aurel:**
Ionita Aurel Mihai este dezvoltator Full-Stack pasionat de construirea de aplicații web moderne, scalabile și ușor de utilizat. Îi place să transforme idei complexe în soluții simple, eficiente și bine structurate.

Este elev la **Colegiul Național „Ștefan cel Mare" din Târgu Neamț**, la profilul Științe ale Naturii, unde combină pasiunea pentru programare cu studiul științelor naturale.

Are experiență în dezvoltarea de aplicații cu React și TypeScript, integrarea de API-uri complexe și implementarea de soluții cloud-ready, cu accent pe performanță, calitate și bune practici.

Este mereu interesat de tehnologii noi și de îmbunătățirea continuă a modului în care scrie cod. În timpul liber explorează framework-uri emergente, contribuie la proiecte open-source și împărtășește cunoștințe cu comunitatea tech.

Este deschis colaborărilor și proiectelor care aduc valoare reală și impact pe termen lung.

**Tehnologii:**
- Frontend: HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS
- Backend: Node.js, Express, PostgreSQL, Supabase
- DevOps: Git, GitHub

**Pasiuni:**
Dezvoltare Web Modernă, Sport, Citit, Open Source, Învățare Continuă, Comunitatea Tech

Dacă ai întrebări specifice despre proiectele sale, experiență, sau vrei să colaborezi cu el, sunt aici să te ajut! 😊`;
  }

  // Projects questions
  if (lowerMessage.includes("proiect") || lowerMessage.includes("project") ||
      lowerMessage.includes("realizare") || lowerMessage.includes("munca") ||
      lowerMessage.includes("a lucrat") || lowerMessage.includes("făcut")) {
    return `Aurel a lucrat la mai multe proiecte interesante:

**Proiecte de seamă:**
1. **Green Week** - Platformă digitală pentru protejarea mediului cu React și TypeScript
2. **Geolocation API** - Aplicație web cu geolocalizare GPS
3. **Christmas Memory** - Aplicație interactivă festivă cu jocuri tematice
4. **Stan-Radu-Gabriel** - Site portofoliu personal

Toate proiectele sunt disponibile pe GitHub: https://github.com/iam269

Dorești detalii despre un proiect specific?`;
  }

  // Skills/Technologies questions
  if (lowerMessage.includes("skill") || lowerMessage.includes("tehnologie") ||
      lowerMessage.includes("tehnolog") || lowerMessage.includes("sti") ||
      lowerMessage.includes("programare") || lowerMessage.includes("limbaj")) {
    return `Aurel are competențe solide în:

**Frontend:**
HTML, CSS, JavaScript, Bootstrap, React, TypeScript, Tailwind CSS

**Backend:**
Node.js, Express, PostgreSQL, MongoDB, REST APIs, Supabase

**DevOps & Tools:**
Git, GitHub, CI/CD, VS Code

**Soft Skills:**
Problem Solving, Team Work, Communication, Agile, Leadership

A început cu HTML și CSS în 2020 și a evoluat rapid către JavaScript modern și TypeScript. Are certificări în HTML, CSS, JavaScript, TypeScript și Git de la Development Factory.`;
  }

  // Certifications questions
  if (lowerMessage.includes("certificare") || lowerMessage.includes("certificat") ||
      lowerMessage.includes("diplomă") || lowerMessage.includes("curs")) {
    return `Aurel deține următoarele certificări de la Development Factory (2024):

1. **HTML Certificate** - Creare structuri HTML semantice, formulare interactive, accesibilitate web
2. **CSS Certificate** - Stilizare modernă cu flexbox, grid, animații, design responsive
3. **JavaScript Certificate** - Funcționalități interactive, manipulare DOM, API-uri
4. **TypeScript Certificate** - Cod tipizat pentru aplicații scalabile
5. **Git Certificate** - Control versiuni, branching, merging, colaborare în echipă

Dorești să afli mai multe despre experiența sa?`;
  }

  // Contact questions
  if (lowerMessage.includes("contact") || lowerMessage.includes("email") ||
      lowerMessage.includes("telefon") || lowerMessage.includes("adresă") ||
      lowerMessage.includes("social") || lowerMessage.includes("rețea")) {
    return `Poți lua legătura cu Aurel prin:

📧 **Email:** ionitaaurelmihai@gmail.com

📱 **Rețele sociale:**
- Facebook: Ionita Aurel Mihai
- Instagram: @eusuntaurel1
- LinkedIn: ionita-aurel-mihai-20648536a
- GitHub: iam269

Este deschis la colaborări și proiecte interesante. Hai să construim ceva împreună! 🤝`;
  }

  // Social Networks questions
  if (lowerMessage.includes("facebook") || lowerMessage.includes("fb") ||
      lowerMessage.includes("instagram") || lowerMessage.includes("ig") ||
      lowerMessage.includes("linkedin") || lowerMessage.includes("linked in") ||
      lowerMessage.includes("github") || lowerMessage.includes("social") ||
      lowerMessage.includes("retele") || lowerMessage.includes("rețele") ||
      lowerMessage.includes("social media")) {
    return `📱 **Rețelele sociale ale lui Aurel:**

**Facebook:**
- Nume: Ionita Aurel Mihai
- Link: https://www.facebook.com/profile.php?id=61572090980230&locale=ro_RO

**Instagram:**
- Username: @eusuntaurel1
- Link: https://instagram.com/eusuntaurel1

**LinkedIn:**
- Profile: ionita-aurel-mihai-20648536a
- Link: https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/

**GitHub:**
- Username: iam269
- Link: https://github.com/iam269

Poți să-l urmărești sau să-l contactezi pe oricare dintre aceste platforme! 😊`;
  }

  // Services questions
  if (lowerMessage.includes("serviciu") || lowerMessage.includes("ofertă") ||
      lowerMessage.includes("preț") || lowerMessage.includes("cost") ||
      lowerMessage.includes("colabor") || lowerMessage.includes("angajează")) {
    return `Aurel oferă următoarele servicii:

- 🖥️ **Dezvoltare aplicații web complete**
- ⚛️ **Dezvoltare React cu TypeScript**
- 🔌 **Integrări API și backend**
- 🎨 **Design și implementare UI/UX**
- ⚡ **Optimizare performanță web**
- 💡 **Consultanță tehnică**
- 🛠️ **Mentenanță și actualizări**

Dacă ai un proiect în minte sau vrei să discuti o colaborare, nu ezita să-l contactezi! 😊`;
  }

  // Blog questions
  if (lowerMessage.includes("blog") || lowerMessage.includes("articol") ||
      lowerMessage.includes("scrie") || lowerMessage.includes("tutorial")) {
    return `Aurel a scris mai multe articole pe blog:

1. **Algoritmi de bază pentru începători** - Sortare, căutare și complexitate
2. **Cum funcționează HTML, CSS și JavaScript** - Explicații pentru începători
3. **Bazele programării** - Variabile, tipuri de date și funcții

Articolele acopă subiecte de la programare de bază până la dezvoltare web modernă.

Dorești să afli mai multe despre un anumit subiect?`;
  }

  // Location/Romania questions
  if (lowerMessage.includes("unde") || lowerMessage.includes("românia") ||
      lowerMessage.includes("romania") || lowerMessage.includes("țară") ||
      lowerMessage.includes("tara") || lowerMessage.includes("localitate")) {
    return `Aurel este din **România** 🇨🇩

Dacă ai întrebări specifice despre locație sau vrei să discuți un proiect, nu ezita să-l contactezi!`;
  }

  // Experience/Years questions
  if (lowerMessage.includes("experiență") || lowerMessage.includes("experienta") ||
      lowerMessage.includes("ani") || lowerMessage.includes("când") ||
      lowerMessage.includes("de când")) {
    return `Aurel a început să programeze în **2020**, începând cu HTML și CSS. De atunci, a evoluat rapid către JavaScript modern și TypeScript.

Cred cu tărie în puterea învățării practice și a construirii de proiecte reale. Când nu codează, îi place să citească documentații, să experimenteze cu noi tool-uri, și să ajute alți developeri în comunitate.`;
  }

  // Education/School questions
  if (lowerMessage.includes("școală") || lowerMessage.includes("scoala") ||
      lowerMessage.includes("liceu") || lowerMessage.includes("facultate") ||
      lowerMessage.includes("university") || lowerMessage.includes("school") ||
      lowerMessage.includes("stefan cel mare") || lowerMessage.includes("targu neamt") ||
      lowerMessage.includes("târgu neamț") || lowerMessage.includes("unde invata") ||
      lowerMessage.includes("unde învață") || lowerMessage.includes("studiaza") ||
      lowerMessage.includes("stă") || lowerMessage.includes("este la") ||
      lowerMessage.includes("profil") || lowerMessage.includes("științe ale naturii")) {
    return `Aurel este elev la **Colegiul Național "Ștefan cel Mare" din Târgu Neamț** 🏫

Este la profilul **Științe ale Naturii**, combinând pasiunea pentru programare cu studiul științelor naturale.

Este unul dintre cele mai prestigioase licee din județul Neamț, cu o tradiție educațională deosebită.

Dacă ai întrebări despre proiectele sale sau alte subiecte, sunt aici să te ajut! 😊`;
  }

  // Newsletter questions
  if (lowerMessage.includes("newsletter") || lowerMessage.includes("abona") ||
      lowerMessage.includes("noutăți") || lowerMessage.includes("noutati") ||
      lowerMessage.includes("email") || lowerMessage.includes("update")) {
    return `Poți să te abonezi la newsletter-ul lui Aurel pentru a primi:

📬 **Noutăți despre proiectele sale**
📚 **Articole și tutoriale**
🚀 **Tips & Tricks despre dezvoltare web**

Este o modalitate excelentă să rămâi la curent cu activitatea sa și să înveți lucruri noi despre programare!

Dorești să afli mai multe despre cum te poți abona?`;
  }

  // Availability questions
  if (lowerMessage.includes("disponibil") || lowerMessage.includes("disponibilitate") ||
      lowerMessage.includes("angajat") || lowerMessage.includes("job") ||
      lowerMessage.includes("muncă") || lowerMessage.includes("munca") ||
      lowerMessage.includes("freelance") || lowerMessage.includes("colabor")) {
    return `Aurel este deschis la colaborări și proiecte interesante! 🤝

Poți colabora cu el pentru:
- 🖥️ Dezvoltare aplicații web
- ⚛️ Proiecte cu React și TypeScript
- 🔌 Integrări API
- 🎨 Design UI/UX

Contactează-l pe email sau social media pentru a discuta detaliile!

El este elev, dar dedică mult timp programării și dezvoltării de proiecte.`;
  }

  // Pricing/Rates questions
  if (lowerMessage.includes("preț") || lowerMessage.includes("pret") ||
      lowerMessage.includes("cost") || lowerMessage.includes("tarif") ||
      lowerMessage.includes("cât") || lowerMessage.includes("plată") ||
      lowerMessage.includes("bani")) {
    return `Pentru informații despre prețuri și tarife, cel mai bine este să contactezi direct pe Aurel la **ionitaaurelmihai@gmail.com** 📧

El oferă:
- 🖥️ Dezvoltare aplicații web complete
- ⚛️ Dezvoltare React cu TypeScript
- 🔌 Integrări API și backend
- 🎨 Design și implementare UI/UX
- ⚡ Optimizare performanță web
- 💡 Consultanță tehnică
- 🛠ă Mentenanță și actualizări

Fiecare proiect este unic, așa că discutați detaliile direct! 😊`;
  }

  // Open Source questions
  if (lowerMessage.includes("open source") || lowerMessage.includes("opensource") ||
      lowerMessage.includes("github") || lowerMessage.includes("contribu") ||
      lowerMessage.includes("repo") || lowerMessage.includes("repository")) {
    return `Aurel contribuie la proiecte open-source și are propriile sale proiecte pe GitHub! 🐙

Poți verifica toate proiectele sale pe: **https://github.com/iam269**

Proiectele sale includ:
- Green Week - Platformă pentru protecția mediului
- Geolocation API - Aplicație cu geolocalizare
- Christmas Memory - Joc interactiv de Crăciun
- Stan-Radu-Gabriel - Site portofoliu

Este mereu interesat să exploreze framework-uri noi și să contribuie la comunitate!`;
  }

  // Thank you questions
  if (lowerMessage.includes("mulțumesc") || lowerMessage.includes("multumesc") ||
      lowerMessage.includes("mersi") || lowerMessage.includes("thanks") ||
      lowerMessage.includes("thank you")) {
    return `Cu plăcere! 😊 Mă bucur că te-am putut ajuta!

Dacă ai alte întrebări despre Aurel, proiectele sale, sau orice altceva legat de dezvoltare web, nu ezita să întrebi!

Îi poți trimite și un email la ionitaaurelmihai@gmail.com pentru colaborări sau întrebări specifice. 🤝`;
  }

  // General website questions
  if (lowerMessage.includes("website") || lowerMessage.includes("site") ||
      lowerMessage.includes("portfolio") || lowerMessage.includes("portofoliu") ||
      lowerMessage.includes("creat") || lowerMessage.includes("făcut")) {
    return `Acest website portofoliu a fost creat de Aurel pentru a prezenta:

👤 **Despre el** - Cine este și ce face
🛠️ **Proiectele sale** - Aplicații web dezvoltate
📜 **Blog** - Articole despre programare
🏆 **Certificări** - Diplomele și cursurile sale
💼 **Servicii** - Ce oferă clienților
📬 **Contact** - Cum să-l găsești

Explorează secțiunile pentru a afla mai multe! 🚀`;
  }

  // Default response
  return `Bună! 👋 Sunt asistentul virtual al lui Ionita Aurel Mihai.

Am informații despre:
- **Despre Aurel** - Cine este, educația, pasiunile
- **Proiecte** - Green Week, Geolocation API, Christmas Memory, etc.
- **Tehnologii** - React, TypeScript, Node.js, și altele
- **Certificări** - HTML, CSS, JavaScript, TypeScript, Git
- **Blog** - Articole despre programare
- **Contact** - Email și rețele sociale
- **Servicii** - Ce oferă
- **Newsletter** - Abonare la noutăți
- **Open Source** - Contribuții pe GitHub

Cu ce te pot ajuta? 😊`;
}
