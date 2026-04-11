import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialGreeting: Message = {
  id: "greeting",
  role: "assistant",
  content: "Bună! Sunt un asistent virtual al lui Aurel. Întreabă-mă despre proiectele ,skill-uri ,certificări,etc...",
  timestamp: new Date(),
};

const quickQuestions = [
  "Ce proiecte ai lucrat?",
  "Care sunt skill-urile tale?",
  "Cum te pot contacta?",
  "Ce tehnologii folosești?",
  "Care sunt framework-urile?",
  "Ai făcut deployment?",
];

const qa = {
  proiecte: [
    "Am lucrat la peste 15 proiecte interesante, de la aplicații web simple până la platforme complexe (e-commerce, dashboards, bloguri, aplicații în timp real). Vizitează secțiunea Proiecte pentru a vedea toate detaliile, tehnologiile folosite și link-uri live!",
  ],
  skill: [
    "Am skill-uri solide în web development: React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Next.js, Tailwind CSS, Git, REST APIs, Vue, Angular, Python (Flask, Django), și multe altele. Pentru o listă completă și detalii despre nivelul fiecărei competențe, vizitează secțiunea Skills!",
  ],
  contact: [
    "Poți să mă contactezi prin secțiunea Contact! Am conturi active pe X, Instagram, LinkedIn și GitHub. Răspund de obicei în maxim 24 de ore. Ai și un formular direct în aceeași secțiune.",
  ],
  tehnologii: [
    "Folosesc un stack modern: Frontend: React, Vue, Angular, Next.js, TypeScript, Tailwind CSS; Backend: Node.js, Express, Python (Flask, Django); Baze de date: MongoDB, PostgreSQL; Altele: Git, REST APIs, GraphQL, JWT. Toate detaliile sunt în secțiunea Skills!",
  ],
  frameworkuri: [
    "Da! Am experiență solidă cu React (inclusiv Hooks, Context API, Redux), Vue.js (Composition API, Pinia) și Angular (RxJS, NgRx). În secțiunea Skills găsești detalii despre fiecare framework și proiecte demonstrative.",
  ],
  deployment: [
    "Da! Am deployat aplicații pe Vercel, Netlify, Heroku și AWS (EC2, S3). Știu să configurez domenii, variabile de mediu, CI/CD cu GitHub Actions și să optimizez performanța pentru producție. În secțiunea Skills găsești toate detaliile despre DevOps și hosting!",
  ],
  openSource: [
    "Am mai multe proiecte personale pe GitHub, inclusiv un task manager, o aplicație de vreme, un blog cu Next.js și un dashboard cu React. De asemenea, am contribuit la câteva proiecte open-source (traduceri, bug-uri mici). Toate link-urile sunt în secțiunea Skills și Proiecte!",
  ],
  organizareCod: [
    "Folosesc Git pentru version control, cu strategii precum Git Flow. Scriu cod curat, modular, cu comentarii relevante și urmez principiile SOLID. În secțiunea Skills găsești și exemple de structuri de proiect.",
  ],
  tooluri: [
    "Da! Am experiență cu Webpack, Vite, ESLint, Prettier, și tool-uri de testare precum Jest, Vitest și Cypress (teste end-to-end). Vizitează secțiunea Skills pentru o listă completă de tool-uri.",
  ],
  certificari: [
    "Am finalizat multiple cursuri avansate (Frontend Masters, Udemy, freeCodeCamp) și am certificări în JavaScript modern, React, Node.js și Python. În secțiunea Skills sunt detaliate toate certificările și link-urile către ele.",
  ],
  default: [
    "Interesantă întrebare! Cel mai bine este să explorezi secțiunile site-ului: Skills pentru toate abilitățile mele, Proiecte pentru exemple practice, și Contact pentru a vorbi direct cu mine.",
    "Încearcă să mă întrebi despre proiecte, skill-uri, tehnologii specifice (React, Vue, Node, Python) sau cum mă poți contacta! Toate detaliile sunt în secțiunea Skills.",
  ],
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, value] of Object.entries(qa)) {
    if (lowerMessage.includes(key)) {
      return value[Math.floor(Math.random() * value.length)];
    }
  }
  
  return qa.default[Math.floor(Math.random() * qa.default.length)];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(messageText);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
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
        {isOpen ? <X className="text-background" size={24} /> : <MessageCircle className="text-background" size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] bg-card rounded-xl border border-border shadow-2xl z-50 flex flex-col overflow-hidden">
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
                  {message.content}
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

          <div className="px-3 pt-3 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-3 py-1.5 bg-muted hover:bg-primary/20 hover:text-primary rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          
        </div>
      )}
    </>
  );
};

export default ChatBot;