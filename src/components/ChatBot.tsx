import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, User, Send } from "lucide-react";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";

interface ChatLink {
  label: string;
  url: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  links?: ChatLink[];
  timestamp: Date;
}

interface Reply {
  content: string;
  links?: ChatLink[];
}

const initialGreeting: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Bună! Sunt asistentul virtual al lui Aurel. Scrie-mi orice — întreabă-mă despre el, proiectele, skill-urile, certificările sau cum îl poți contacta și îți răspund instant.",
  timestamp: new Date(),
};

const quickQuestions = [
  "Cine este Aurel?",
  "Ce proiecte a făcut?",
  "Ce tehnologii folosește?",
  "Ce certificări are?",
  "Cum îl pot contacta?",
];

// Normalize text: lowercase + strip Romanian diacritics so matching is forgiving.
const normalize = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ăâ]/g, "a")
    .replace(/[î]/g, "i")
    .replace(/[șş]/g, "s")
    .replace(/[țţ]/g, "t");

const featuredProjects = projects.filter((p) => p.featured);

// Find a specific project the user might be referencing by name / slug.
const findProject = (normalizedMsg: string) => {
  return projects.find((project) => {
    const title = normalize(project.title);
    const slug = normalize(project.slug.replace(/-/g, " "));
    // Match on the most meaningful word of the title (e.g. "greenweek", "medix").
    const keyWords = [...title.split(/\s+/), ...slug.split(/\s+/)].filter(
      (w) => w.length >= 4
    );
    return keyWords.some((w) => normalizedMsg.includes(w));
  });
};

const projectReply = (): Reply => {
  const list = featuredProjects
    .map((p) => `• ${p.title} — ${p.shortDescription.replace(/<[^>]+>/g, "")}`)
    .join("\n");
  return {
    content:
      `Aurel are ${projects.length} proiecte în portofoliu. Câteva dintre cele mai importante:\n\n${list}\n\n` +
      "Întreabă-mă de un proiect anume (ex: „spune-mi despre Medix”) sau deschide pagina Proiecte pentru toate detaliile și demo-uri live.",
    links: featuredProjects
      .filter((p) => p.liveUrl)
      .slice(0, 4)
      .map((p) => ({ label: `${p.title} (live)`, url: p.liveUrl as string })),
  };
};

const certificationsReply = (): Reply => {
  const list = certifications
    .map((c) => `• ${c.name} — ${c.institution} (${c.date})`)
    .join("\n");
  return {
    content: `Aurel are ${certifications.length} certificări:\n\n${list}\n\nLe găsești pe toate în secțiunea Skills, cu link-uri verificabile.`,
    links: certifications
      .filter((c) => c.websiteUrl)
      .slice(0, 4)
      .map((c) => ({ label: c.name, url: c.websiteUrl as string })),
  };
};

interface Intent {
  keywords: string[];
  reply: () => Reply;
}

const intents: Intent[] = [
  {
    keywords: [
      "salut",
      "buna",
      "hello",
      "hey",
      "hi",
      "noroc",
      "servus",
      "ceau",
      "neata",
    ],
    reply: () => ({
      content:
        "Salut! Mă bucur să te cunosc. Sunt aici să-ți spun orice despre Aurel — proiecte, skill-uri, certificări sau contact. Cu ce te pot ajuta?",
    }),
  },
  {
    keywords: ["multumesc", "mersi", "thanks", "thx", "ms"],
    reply: () => ({
      content:
        "Cu plăcere! Dacă mai vrei să afli ceva despre Aurel, sunt aici. 😊",
    }),
  },
  {
    keywords: ["pa", "la revedere", "bye", "o zi buna", "ne vedem"],
    reply: () => ({
      content: "O zi minunată! Revino oricând ai întrebări despre Aurel.",
    }),
  },
  {
    keywords: [
      "cine esti",
      "ce esti",
      "esti un bot",
      "esti robot",
      "cum te cheama",
      "numele tau",
    ],
    reply: () => ({
      content:
        "Sunt asistentul virtual al lui Ioniță Aurel Mihai. Răspund instant la întrebări despre el: cine este, ce proiecte a construit, ce tehnologii stăpânește, ce certificări are și cum îl poți contacta.",
    }),
  },
  {
    keywords: [
      "cine este aurel",
      "cine e aurel",
      "despre aurel",
      "despre mine",
      "despre tine",
      "despre el",
      "ce stii despre",
      "spune-mi despre",
      "prezinta",
      "biografie",
      "cv",
    ],
    reply: () => ({
      content:
        "Ioniță Aurel Mihai este Web Developer, pasionat de aplicații web moderne, scalabile și ușor de utilizat. Are 17 ani, dezvoltă aplicații web încă de la 15 ani și e elev în clasa a XII-a la Colegiul Național „Ștefan cel Mare” din Târgu Neamț (profil Științe ale Naturii). În prezent se pregătește pentru admiterea la Facultatea de Informatică din Iași. Lucrează mai ales cu React și TypeScript, integrează API-uri și construiește soluții cloud-ready, punând accent pe performanță și bune practici.",
    }),
  },
  {
    keywords: [
      "varsta",
      "cati ani",
      "ce varsta",
      "ani are",
      "cat de tanar",
      "nascut",
    ],
    reply: () => ({
      content:
        "Aurel are 17 ani și dezvoltă aplicații web încă de la 15 ani — momentul în care a descoperit pasiunea pentru programare și tehnologie.",
    }),
  },
  {
    keywords: [
      "scoala",
      "liceu",
      "colegiu",
      "facultate",
      "student",
      "elev",
      "studii",
      "invata",
      "educatie",
      "iasi",
      "targu neamt",
      "stefan cel mare",
    ],
    reply: () => ({
      content:
        "Aurel este elev în clasa a XII-a la Colegiul Național „Ștefan cel Mare” din Târgu Neamț, profil Științe ale Naturii. Se pregătește pentru admiterea la Facultatea de Informatică din Iași și își dedică majoritatea timpului liber învățării practice și dezvoltării continue.",
    }),
  },
  {
    keywords: [
      "pasiun",
      "hobby",
      "hobiuri",
      "timp liber",
      "ii place",
      "interes",
      "sport",
      "citit",
    ],
    reply: () => ({
      content:
        "Pe lângă programare, lui Aurel îi plac sportul și cititul. În timpul liber explorează framework-uri noi, contribuie la proiecte open-source și împărtășește cunoștințe cu comunitatea tech.",
    }),
  },
  {
    keywords: [
      "proiect",
      "proiecte",
      "portofoliu",
      "portfolio",
      "lucrat",
      "construit",
      "aplicatii",
      "ce a facut",
      "ce ai facut",
    ],
    reply: projectReply,
  },
  {
    keywords: [
      "skill",
      "abilitat",
      "tehnologi",
      "limbaj",
      "stack",
      "stie",
      "competent",
      "programare",
      "react",
      "typescript",
      "javascript",
      "html",
      "css",
      "node",
      "express",
      "tailwind",
      "bootstrap",
      "unity",
      "c++",
      "c#",
    ],
    reply: () => ({
      content:
        "Aurel lucrează cu un stack modern:\n\n• Limbaje: C, C++, C#, JavaScript, TypeScript\n• Web: HTML5, CSS3, React, Node.js, Express.js, Tailwind CSS, Bootstrap\n• Baze de date: MongoDB, PostgreSQL, Supabase\n• Game dev: Unity\n• Tools: Git, GitHub, Vercel, REST APIs (VS Code, IntelliJ IDEA, Cursor AI)\n\nDetaliile complete sunt în secțiunea Skills.",
    }),
  },
  {
    keywords: ["baze de date", "database", "mongodb", "postgres", "supabase", "sql"],
    reply: () => ({
      content:
        "La baze de date Aurel folosește MongoDB, PostgreSQL și Supabase. Le-a integrat în proiecte fullstack precum Connecto.",
    }),
  },
  {
    keywords: [
      "certificat",
      "certificari",
      "diploma",
      "atestat",
      "acreditat",
      "freecodecamp",
      "development factory",
    ],
    reply: certificationsReply,
  },
  {
    keywords: [
      "contact",
      "email",
      "mail",
      "linkedin",
      "github",
      "twitter",
      " x ",
      "social",
      "retele",
      "scrie",
      "angaja",
      "colabor",
      "disponibil",
      "job",
      "freelance",
    ],
    reply: () => ({
      content:
        "Poți lua legătura cu Aurel prin oricare dintre canalele de mai jos. Este deschis la colaborări și proiecte interesante și răspunde de obicei în maxim 24 de ore.",
      links: [
        { label: "Email", url: "mailto:ionitaaurel32@gmail.com" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/itsiamdev/" },
        { label: "GitHub", url: "https://github.com/itsiamdev" },
        { label: "Twitter / X", url: "https://twitter.com/itsiamdev" },
      ],
    }),
  },
  {
    keywords: ["blog", "articol", "articole", "scris", "postari", "tutorial"],
    reply: () => ({
      content:
        "Aurel scrie articole pe blog despre algoritmi, bazele programării, HTML/CSS/JS, React, Git și dezvoltare mobilă cu Flutter. Le găsești în secțiunea Blog a site-ului.",
    }),
  },
  {
    keywords: [
      "deploy",
      "vercel",
      "hosting",
      "gazduit",
      "github pages",
      "productie",
      "publicat",
    ],
    reply: () => ({
      content:
        "Aurel își publică proiectele pe Vercel și GitHub Pages, cu build-uri optimizate pentru producție. Multe dintre proiectele lui au demo-uri live accesibile direct din portofoliu.",
    }),
  },
];

const getReply = (message: string): Reply => {
  const normalized = ` ${normalize(message)} `;

  // 1) Direct match on a specific project name.
  const project = findProject(normalized);
  if (project) {
    return {
      content:
        `${project.title} — ${project.shortDescription.replace(/<[^>]+>/g, "")}\n\n` +
        `Tehnologii: ${project.tech.join(", ")}.`,
      links: [
        project.liveUrl && { label: "Demo live", url: project.liveUrl },
        project.githubUrl && { label: "Cod sursă (GitHub)", url: project.githubUrl },
      ].filter(Boolean) as ChatLink[],
    };
  }

  // 2) Score every intent by how many of its keywords appear.
  let best: { score: number; reply: () => Reply } | null = null;
  for (const intent of intents) {
    const score = intent.keywords.reduce(
      (acc, kw) => (normalized.includes(normalize(kw)) ? acc + kw.length : acc),
      0
    );
    if (score > 0 && (!best || score > best.score)) {
      best = { score, reply: intent.reply };
    }
  }
  if (best) return best.reply();

  // 3) Fallback.
  return {
    content:
      "Bună întrebare! Pot să-ți povestesc despre Aurel: cine este, proiectele lui, tehnologiile pe care le folosește, certificările sau cum îl poți contacta. Încearcă de exemplu „Ce proiecte a făcut?” sau „Cum îl pot contacta?”.",
  };
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSend = (messageText: string) => {
    const text = messageText.trim();
    if (!text) return;

    const userMessage: Message = {
      id: `${Date.now()}-u`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    const reply = getReply(text);
    const assistantMessage: Message = {
      id: `${Date.now()}-a`,
      role: "assistant",
      content: reply.content,
      links: reply.links,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Near-instant reply with a brief typing indicator for a natural feel.
    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary rounded-full shadow-lg hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-110"
        aria-label="Deschide chat"
      >
        {isOpen ? <X className="text-background" size={24} /> : <MessageCircle className="text-background" size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-[520px] bg-card rounded-xl border border-border shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="p-4 bg-primary/10 border-b border-border flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-full">
              <Bot className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Asistent Virtual</h3>
              <p className="text-xs text-muted-foreground">Răspunde instant</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="p-2 bg-primary/10 rounded-full h-fit">
                    <Bot size={16} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  {message.links && message.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {message.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 bg-primary/15 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="p-2 bg-muted rounded-full h-fit">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-3 pt-3">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSend(question)}
                    className="text-xs px-3 py-1.5 bg-muted hover:bg-primary/20 hover:text-primary rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-3 border-t border-border flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrie un mesaj..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Mesaj"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-primary text-primary-foreground rounded-full transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
              aria-label="Trimite mesaj"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
