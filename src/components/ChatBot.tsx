import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, User, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialGreeting: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Bun\u0103! Sunt asistentul virtual al lui Aurel. Pot s\u0103-\u021bi spun orice despre el \u2014 proiecte, skill-uri, certific\u0103ri, educa\u021bie, pasiuni sau cum \u00eel po\u021bi contacta. Scrie-mi orice!",
  timestamp: new Date(),
};

const quickQuestions = [
  "Cine este Aurel?",
  "Ce proiecte ai?",
  "Care sunt skill-urile?",
  "Ce certific\u0103ri ai?",
  "Cum te contactez?",
  "Ce v\u00e2rst\u0103 ai?",
];

interface KnowledgeEntry {
  keywords: string[];
  response: string;
  priority: number;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["cine", "aurel", "ionita", "despre", "prezinta", "prezentare", "bio", "biografie", "el", "tu"],
    response: "Sunt Ioni\u021b\u0103 Aurel Mihai, un Web Developer de 17 ani din T\u00e2rgu Neam\u021b. Dezvolt aplica\u021bii web de la 15 ani \u0219i sunt pasionat de React, TypeScript \u0219i tehnologii moderne. Sunt elev \u00een clasa a XII-a la Colegiul Na\u021bional \u0218tefan cel Mare din T\u00e2rgu Neam\u021b, la profilul \u0218tiin\u021be ale Naturii. M\u0103 preg\u0103tesc pentru admiterea la Facultatea de Informatic\u0103 din Ia\u0219i (UAIC).",
    priority: 10,
  },
  {
    keywords: ["varsta", "v\u00e2rsta", "ani", "old", "nascut", "cati ani"],
    response: "Am 17 ani. Am \u00eenceput s\u0103 dezvolt aplica\u021bii web la 15 ani, moment \u00een care am descoperit pasiunea pentru programare \u0219i tehnologie.",
    priority: 9,
  },
  {
    keywords: ["scoala", "\u0219coala", "liceu", "elev", "educatie", "educa\u021bie", "clasa", "colegiu", "facultate", "universitate", "admitere", "invata", "\u00eenv\u0103\u021ba", "studii"],
    response: "Sunt elev \u00een clasa a XII-a la Colegiul Na\u021bional \u0218tefan cel Mare din T\u00e2rgu Neam\u021b, la profilul \u0218tiin\u021be ale Naturii. M\u0103 preg\u0103tesc pentru admiterea la Facultatea de Informatic\u0103 din Ia\u0219i (UAIC). Dezvolt aplica\u021bii web deja de la 15 ani!",
    priority: 9,
  },
  {
    keywords: ["unde", "locatie", "loca\u021bie", "oras", "ora\u0219", "targu", "neamt", "iasi", "romania"],
    response: "Sunt din T\u00e2rgu Neam\u021b, un ora\u0219 frumos din jude\u021bul Neam\u021b, Rom\u00e2nia. Studiez la Colegiul Na\u021bional \u0218tefan cel Mare de aici \u0219i m\u0103 preg\u0103tesc s\u0103 merg la Facultatea de Informatic\u0103 din Ia\u0219i.",
    priority: 8,
  },
  {
    keywords: ["pasiuni", "hobby", "hobbyuri", "timp liber", "interese", "sport", "citit", "citesc"],
    response: "Pasiunile mele sunt: Programare (evident!), Sport \u0219i Citit. \u00cen timpul liber explorez framework-uri noi, contribui la proiecte open-source \u0219i \u00eemp\u0103rt\u0103\u0219esc cuno\u0219tin\u021be cu comunitatea tech.",
    priority: 8,
  },
  {
    keywords: ["proiecte", "proiect", "lucrat", "portfolio", "aplicatii", "aplica\u021bii", "facut", "f\u0103cut", "creat"],
    response: "Am lucrat la mai multe proiecte interesante:\n\n\u2022 **Green Week** \u2014 Platform\u0103 ecologic\u0103 pentru ac\u021biuni de mediu \u0219i cur\u0103\u021benie comunitar\u0103\n\u2022 **Medix** \u2014 Platform\u0103 medical\u0103 pentru gestionarea pacien\u021bilor \u0219i program\u0103rilor\n\u2022 **Geolocation API** \u2014 Tracking \u00een timp real cu h\u0103r\u021bi interactive (Leaflet.js)\n\u2022 **Christmas Memory** \u2014 Jocuri festive de memorie \u0219i Gift Catcher\n\u2022 **Stan Radu Gabriel** \u2014 Portofoliu pentru un coleg\n\u2022 **Task Manager** \u2014 Aplica\u021bie de productivitate\n\u2022 **Connecto** \u2014 Platform\u0103 de mesagerie \u00een timp real\n\u2022 **T\u00e2rgu Neam\u021b Tourism** \u2014 Ghid digital turistic\n\u2022 **Olimpix** \u2014 Platform\u0103 educa\u021bional\u0103\n\nToate sunt construite cu React, TypeScript \u0219i Tailwind CSS. Viziteaz\u0103 sec\u021biunea Proiecte pentru demo-uri live!",
    priority: 10,
  },
  {
    keywords: ["green", "week", "ecologic", "mediu", "cur\u0103\u021benie", "curatenie", "verde"],
    response: "**Green Week** este o platform\u0103 digital\u0103 pentru protejarea mediului, dezvoltat\u0103 cu React + TypeScript + Vite + Tailwind CSS. Include sec\u021biuni Hero, Activit\u0103\u021bi de cur\u0103\u021benie comunitar\u0103, Resurse pentru reciclare, Sfaturi practice, Galerie foto \u0219i Video-uri educa\u021bionale. E live pe: itsiamdev.github.io/greenweek/",
    priority: 9,
  },
  {
    keywords: ["medix", "medical", "medic", "pacienti", "pacien\u021bi", "programari", "program\u0103ri", "sanatate", "s\u0103n\u0103tate"],
    response: "**Medix** este o platform\u0103 medical\u0103 complet\u0103 pentru gestionarea pacien\u021bilor, program\u0103rilor \u0219i dosarelor medicale. Include dashboard, calendar interactiv, c\u0103utare avansat\u0103 \u0219i export date. Construit\u0103 cu React 18 + TypeScript + Vite + Tailwind CSS. Live pe: medix-eosin.vercel.app",
    priority: 9,
  },
  {
    keywords: ["geolocation", "gps", "harta", "hart\u0103", "localizare", "map", "leaflet"],
    response: "**Geolocation API** \u2014 Aplica\u021bie web care folose\u0219te GPS-ul browserului pentru localizare \u00een timp real. Include h\u0103r\u021bi interactive cu Leaflet.js + OpenStreetMap, reverse geocoding cu Nominatim API, urm\u0103rire \u00een timp real \u0219i design glass-morphism cu dark/light mode. Tech: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, TanStack Query.",
    priority: 9,
  },
  {
    keywords: ["christmas", "craciun", "cr\u0103ciun", "memory", "joc", "jocuri", "cadouri"],
    response: "**Christmas Memory** \u2014 Aplica\u021bie web festiv\u0103 cu jocuri interactive: Memory Game cu teme de Cr\u0103ciun, Gift Catcher cu cronometru, Easter Eggs ascunse, Memory Wall pentru amintiri, countdown, z\u0103pad\u0103 animat\u0103 \u0219i muzic\u0103. Tech: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, shadcn/ui.",
    priority: 9,
  },
  {
    keywords: ["skill", "skiluri", "competente", "competen\u021be", "stii", "\u0219tii", "poti", "po\u021bi", "abilit\u0103\u021bi", "abilitati"],
    response: "Skill-urile mele acoper\u0103 mai multe categorii:\n\n**Limbaje:** C, C++, C#, JavaScript, TypeScript\n**Web Dev:** HTML5, CSS3, React, Node.js, Express.js, Tailwind CSS, Bootstrap\n**Baze de Date:** MongoDB, PostgreSQL, Supabase\n**Game Dev:** Unity\n**Tools:** Git, GitHub, Vercel, REST APIs, VS Code, Cursor AI, IntelliJ IDEA\n\nPlus: Framer Motion, shadcn/ui, Vite, TanStack Query, Leaflet.js \u0219i altele!",
    priority: 10,
  },
  {
    keywords: ["frontend", "front-end", "react", "vue", "angular", "ui", "interfata", "interfa\u021b\u0103"],
    response: "Pe frontend lucrez \u00een principal cu **React** + **TypeScript**. Folosesc Tailwind CSS pentru styling, shadcn/ui pentru componente, Framer Motion pentru anima\u021bii, \u0219i Vite ca build tool. Am experien\u021b\u0103 \u0219i cu Bootstrap. Construiesc interfe\u021be moderne, responsive \u0219i accesibile.",
    priority: 8,
  },
  {
    keywords: ["backend", "back-end", "server", "node", "express", "api"],
    response: "Pe backend lucrez cu **Node.js** \u0219i **Express.js**. Folosesc Supabase pentru autentificare \u0219i baze de date, plus PostgreSQL \u0219i MongoDB. \u0218tiu s\u0103 construiesc REST APIs, s\u0103 integrez servicii externe \u0219i s\u0103 configurez Edge Functions.",
    priority: 8,
  },
  {
    keywords: ["typescript", "ts", "tipizare", "tipuri", "type"],
    response: "TypeScript este limbajul meu preferat pentru dezvoltare web! \u00cel folosesc \u00een toate proiectele React pentru tipizare static\u0103, cod mai sigur \u0219i mai u\u0219or de \u00eentre\u021binut. Am \u0219i certificare de TypeScript de la Development Factory.",
    priority: 7,
  },
  {
    keywords: ["baza", "date", "database", "mongodb", "postgresql", "supabase", "sql"],
    response: "Am experien\u021b\u0103 cu mai multe baze de date: **MongoDB** (NoSQL), **PostgreSQL** (relational) \u0219i **Supabase** (BaaS cu PostgreSQL + Auth + Realtime + Edge Functions). Le folosesc \u00een proiectele mele pentru persistarea datelor \u0219i func\u021bionalit\u0103\u021bi \u00een timp real.",
    priority: 8,
  },
  {
    keywords: ["certificari", "certific\u0103ri", "certificat", "certificate", "curs", "cursuri", "diploma", "diplome"],
    response: "Am urm\u0103toarele certific\u0103ri:\n\n\u2022 **HTML Certificate** \u2014 Development Factory (2025)\n\u2022 **CSS Certificate** \u2014 Development Factory (2025)\n\u2022 **JavaScript Certificate** \u2014 Development Factory (2025)\n\u2022 **TypeScript Certificate** \u2014 Development Factory (2025)\n\u2022 **Git Certificate** \u2014 Development Factory (2026)\n\u2022 **Responsive Web Design** \u2014 FreeCodeCamp (2026)\n\nToate sunt verificabile online! Viziteaz\u0103 sec\u021biunea Certific\u0103ri de pe site.",
    priority: 10,
  },
  {
    keywords: ["contact", "contactez", "email", "mail", "mesaj", "scriu", "vorbesc"],
    response: "M\u0103 po\u021bi contacta prin:\n\n\u2022 **Email:** ionitaaurel32@gmail.com\n\u2022 **LinkedIn:** linkedin.com/in/itsiamdev\n\u2022 **GitHub:** github.com/itsiamdev\n\u2022 **Twitter/X:** twitter.com/itsiamdev\n\nSunt deschis la colabor\u0103ri \u0219i r\u0103spund de obicei rapid!",
    priority: 10,
  },
  {
    keywords: ["social", "linkedin", "github", "twitter", "instagram", "retea", "re\u021bea"],
    response: "Conturile mele active:\n\u2022 **LinkedIn:** linkedin.com/in/itsiamdev\n\u2022 **GitHub:** github.com/itsiamdev\n\u2022 **Twitter/X:** twitter.com/itsiamdev\n\nPe GitHub g\u0103se\u0219ti tot codul surs\u0103 al proiectelor mele.",
    priority: 8,
  },
  {
    keywords: ["tehnologii", "tech", "stack", "folosesti", "folose\u0219ti", "lucrez"],
    response: "Stack-ul meu principal: **React** + **TypeScript** + **Vite** + **Tailwind CSS** + **shadcn/ui** pe frontend, **Node.js** + **Express** + **Supabase** pe backend, cu **Git** + **GitHub** + **Vercel** pentru DevOps. Plus multe altele: Framer Motion, TanStack Query, Leaflet.js, etc.",
    priority: 9,
  },
  {
    keywords: ["deploy", "deployment", "hosting", "vercel", "netlify", "github pages", "online", "live"],
    response: "\u00cemi deploy-ez aplica\u021biile pe **Vercel**, **GitHub Pages** \u0219i **Netlify**. \u0218tiu s\u0103 configurez domenii custom, variabile de mediu, CI/CD cu GitHub Actions \u0219i s\u0103 optimizez performan\u021ba pentru produc\u021bie. Majoritatea proiectelor mele au versiuni live pe care le po\u021bi testa!",
    priority: 8,
  },
  {
    keywords: ["git", "github", "version", "versiune", "branch", "commit"],
    response: "Folosesc Git zilnic pentru version control. Am certificare Git de la Development Factory. Lucrez cu branching strategies, pull requests, code reviews \u0219i GitHub Actions pentru CI/CD. Tot codul meu e pe github.com/itsiamdev.",
    priority: 7,
  },
  {
    keywords: ["colaborare", "colaborez", "angajare", "job", "munca", "munc\u0103", "freelance", "lucrez", "echipa", "echip\u0103"],
    response: "Sunt deschis la colabor\u0103ri \u0219i proiecte interesante! Dac\u0103 ai o idee, o propunere sau vrei s\u0103 discut\u0103m despre un proiect, contacteaz\u0103-m\u0103 prin email (ionitaaurel32@gmail.com) sau LinkedIn. Hai s\u0103 construim ceva \u00eempreun\u0103!",
    priority: 8,
  },
  {
    keywords: ["experienta", "experien\u021b\u0103", "c\u00e2t", "cat", "timp", "programez"],
    response: "Dezvolt aplica\u021bii web de aproximativ 2 ani (de la 15 ani). \u00cen acest timp am construit peste 9 proiecte complete, am ob\u021binut 6 certific\u0103ri \u0219i am acumulat experien\u021b\u0103 solid\u0103 \u00een React, TypeScript, Node.js \u0219i tot ecosistemul web modern.",
    priority: 8,
  },
  {
    keywords: ["site", "website", "portofoliu", "portfolio"],
    response: "Acest site este portofoliul meu personal \u2014 construit cu React + TypeScript + Vite + Tailwind CSS + shadcn/ui + Supabase. Include sec\u021biuni pentru: prezentare, proiecte, skill-uri, certific\u0103ri, blog \u0219i contact. E deployat pe Vercel la ionitaaurelmihai.vercel.app!",
    priority: 7,
  },
  {
    keywords: ["blog", "articole", "scrie", "scriu", "postari", "post\u0103ri"],
    response: "Am o sec\u021biune de blog pe site cu articole despre web development: programare de baz\u0103, dezvoltare web, Git & GitHub, \u0219i dezvoltare mobil\u0103 cu Flutter. Include c\u0103utare, filtrare pe categorii \u0219i sugestii de articole similare.",
    priority: 7,
  },
  {
    keywords: ["favorit", "preferat", "mandru", "m\u00e2ndru", "cel mai bun", "best"],
    response: "Proiectele de care sunt cel mai m\u00e2ndru sunt **Green Week** (impact ecologic real), **Medix** (utilitate practic\u0103 \u00een domeniul medical) \u0219i **Geolocation API** (provocare tehnic\u0103 interesant\u0103 cu h\u0103r\u021bi \u0219i GPS \u00een timp real). Fiecare m-a \u00eenv\u0103\u021bat ceva nou!",
    priority: 8,
  },
  {
    keywords: ["viitor", "plan", "planuri", "urmeaza", "urm\u0103z\u0103", "obiectiv", "obiective", "vis"],
    response: "Planurile mele: admiterea la Facultatea de Informatic\u0103 din Ia\u0219i (UAIC), continuarea dezvolt\u0103rii profesionale \u00een web development, explorarea framework-urilor emergente \u0219i contribuirea la proiecte open-source mai mari. Vreau s\u0103 construiesc produse digitale cu impact real!",
    priority: 8,
  },
  {
    keywords: ["joc", "jocuri", "game", "unity", "gaming"],
    response: "Am experien\u021b\u0103 cu **Unity** pentru game development. Pe l\u00e2ng\u0103 asta, am creat \u0219i jocuri web precum Christmas Memory (joc de memorie de Cr\u0103ciun) \u0219i Gift Catcher. \u00cemi place s\u0103 combin creativitatea cu programarea!",
    priority: 7,
  },
  {
    keywords: ["salut", "buna", "bun\u0103", "hey", "hello", "hi", "hei", "ce faci"],
    response: "Salut! M\u0103 bucur c\u0103 e\u0219ti aici. Cu ce te pot ajuta? Pot s\u0103-\u021bi spun despre proiectele lui Aurel, skill-urile sale, educa\u021bia, certific\u0103rile sau cum \u00eel po\u021bi contacta. \u00centreab\u0103 orice!",
    priority: 5,
  },
  {
    keywords: ["multumesc", "mul\u021bumesc", "mersi", "thanks", "ms"],
    response: "Cu pl\u0103cere! Dac\u0103 mai ai \u00eentreb\u0103ri despre Aurel sau proiectele sale, nu ezita s\u0103 \u00eentrebi. Sunt aici s\u0103 ajut!",
    priority: 5,
  },
  {
    keywords: ["connecto", "mesagerie", "chat", "messaging", "real-time"],
    response: "**Connecto** este o platform\u0103 de mesagerie \u00een timp real cu management de contacte. Permite comunicare instant \u00eentre utilizatori cu o interfa\u021b\u0103 modern\u0103 \u0219i prietenoas\u0103.",
    priority: 9,
  },
  {
    keywords: ["olimpix", "olimpiada", "educational", "educa\u021bional", "invatare", "\u00eenv\u0103\u021bare", "examen"],
    response: "**Olimpix** este o platform\u0103 educa\u021bional\u0103 pentru studen\u021bi, conceput\u0103 pentru \u00eenv\u0103\u021bare \u0219i preg\u0103tire de examene. Ofer\u0103 resurse interactive \u0219i instrumente de studiu organizate eficient.",
    priority: 9,
  },
  {
    keywords: ["turism", "tourism", "targu neamt", "t\u00e2rgu neam\u021b", "ghid", "atractii", "atrac\u021bii"],
    response: "**T\u00e2rgu Neam\u021b Tourism Guide** este un ghid digital turistic pentru ora\u0219ul T\u00e2rgu Neam\u021b, prezent\u00e2nd atrac\u021biile locale, istoria ora\u0219ului \u0219i informa\u021bii utile pentru vizitatori. Ora\u0219ul meu natal are o istorie bogat\u0103 \u0219i multe locuri frumoase de vizitat!",
    priority: 9,
  },
  {
    keywords: ["c++", "cplusplus", "c#", "csharp", "limbaj", "programare"],
    response: "Cunosc mai multe limbaje de programare: **C** (baza algoritmic\u0103), **C++** (structuri de date, OOP), **C#** (Unity game dev), **JavaScript** \u0219i **TypeScript** (web development principal). Am o funda\u021bie solid\u0103 at\u00e2t \u00een low-level c\u00e2t \u0219i \u00een high-level programming.",
    priority: 7,
  },
];

const getResponse = (message: string): string => {
  const lowerMessage = message
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[?!.,;:'"]/g, "");

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (lowerMessage.includes(normalizedKeyword)) {
        score += entry.priority;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.response;
  }

  return "Hmm, nu sunt sigur la ce te referi exact. \u00cencearc\u0103 s\u0103 m\u0103 \u00eentrebi despre: cine este Aurel, proiectele lui, skill-uri, certific\u0103ri, educa\u021bie, pasiuni sau cum \u00eel po\u021bi contacta. Sunt aici s\u0103 ajut!";
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText.trim(),
      timestamp: new Date(),
    };

    const response = getResponse(messageText);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary rounded-full shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-110"
        aria-label="Deschide chat"
      >
        {isOpen ? (
          <X className="text-background" size={24} />
        ) : (
          <MessageCircle className="text-background" size={24} />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-[520px] bg-card rounded-xl border border-border shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 bg-primary/10 border-b border-border flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <Bot className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Asistentul lui Aurel</h3>
              <p className="text-xs text-muted-foreground">
                R\u0103spunde instant despre Aurel
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-green-600 font-medium">Online</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="p-1.5 bg-primary/10 rounded-full h-fit mt-1">
                    <Bot size={14} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed whitespace-pre-line ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={i}>{part.slice(2, -2)}</strong>
                      );
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </div>
                {message.role === "user" && (
                  <div className="p-1.5 bg-muted rounded-full h-fit mt-1">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-3 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                \u00centreb\u0103ri rapide:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-2.5 py-1 bg-muted hover:bg-primary/20 hover:text-primary rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Scrie o \u00eentrebare..."
              className="flex-1 px-3 py-2 text-sm bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Trimite mesaj"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
