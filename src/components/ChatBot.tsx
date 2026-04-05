import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialGreeting: Message = {
  id: "greeting",
  role: "assistant",
  content: "Bună! Sunt un asistent virtual. Întreabă-mă despre proiectele mele, skill-uri sau cum mă poți contacta!",
  timestamp: new Date(),
};

const responses: Record<string, string[]> = {
  proiecte: [
    "Am lucrat la mai multe proiecte interesante! Vizitează secțiunea Projects pentru a le vedea pe toate.",
    "Am experiență cu proiecte web diverse. Check proiectele mele!",
  ],
  skill: [
    "Am skill-uri în web development: React, TypeScript, Node.js, și multe altele. Vezi secțiunea About pentru detalii!",
    "Sunt specializat în frontend dar am și experiență backend. Explorează site-ul pentru mai multe detalii!",
  ],
  contact: [
    "Poți să mă contactezi prin secțiunea Contact! Am conturi pe Facebook, Instagram, LinkedIn și GitHub.",
    "Scrie-mi pe LinkedIn sau trimite un mesaj pe Instagram!",
  ],
  html: [
    "Da, am experiență cu HTML, CSS și JavaScript. Multe din proiectele mele folosesc aceste tehnologii.",
  ],
  javascript: [
    "JavaScript este una din tehnologiile mele principale de lucru!",
  ],
  react: [
    "Lucrez cu React și am realizat mai multe proiecte cu această tehnologie!",
  ],
  default: [
    "Interesantă întrebare! Poți găsi mai multe informații navigând prin site-ul meu.",
    "Încearcă să mă întrebi despre proiecte, skill-uri sau cum mă poți contacta!",
    "Pentru mai multe detalii, explorează secțiunile site-ului!",
  ],
};

const getResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  for (const [key, value] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return value[Math.floor(Math.random() * value.length)];
    }
  }
  
  return responses.default[Math.floor(Math.random() * responses.default.length)];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialGreeting]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(input);
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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

          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Scrie un mesaj..."
                className="flex-1 bg-muted border-none rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;