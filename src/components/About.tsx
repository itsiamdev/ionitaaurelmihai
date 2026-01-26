import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User, Code, Heart, Coffee } from "lucide-react";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="despre" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="mb-6">
            Despre <span className="text-gradient">Mine</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sunt un dezvoltator full stack pasionat de crearea de experiențe web 
              excepționale. Cu o experiență solidă în dezvoltarea de aplicații moderne, 
              aduc idei la viață prin cod elegant și eficient.
            </p>
            <p>
              Specializarea mea include dezvoltarea de aplicații React cu TypeScript, 
              integrări API complexe, și implementarea de soluții scalabile în cloud. 
              Sunt mereu la curent cu cele mai noi tehnologii și best practices din industrie.
            </p>
            <p>
              Când nu scriu cod, îmi place să explorez noi framework-uri, să contribui la
              proiecte open-source și să îmi împărtășesc cunoștințele cu comunitatea tech.
            </p>
          </div>
          <div className="pt-6">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <User className="w-4 h-4" />
                  Mai multe despre mine
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Mai multe despre Ionita Aurel Mihai
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary" />
                        Tehnologii Preferate
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• React & TypeScript</li>
                        <li>• Node.js & Express</li>
                        <li>• Supabase & PostgreSQL</li>
                        <li>• Tailwind CSS</li>
                        <li>• Next.js & Vite</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        Pasiuni
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dezvoltare Web Modernă</li>
                        <li>• Open Source</li>
                        <li>• Învățare Continuă</li>
                        <li>• Comunitatea Tech</li>
                        <li>• UI/UX Design</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-amber-600" />
                      Câteva Fapte Interesante
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>
                        Începând cu HTML și CSS în 2020, am evoluat rapid către JavaScript modern
                        și TypeScript. Cred cu tărie în puterea învățării practice și a construirii
                        de proiecte reale.
                      </p>
                      <p>
                        Când nu codez, îmi place să citesc documentații, să experimentez cu noi
                        tool-uri, și să ajut alți developeri în comunitate. Cea mai mare satisfacție
                        o am când văd cum codul meu rezolvă probleme reale pentru oameni.
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img
            src="/user.png"
            alt="Ionita Aurel Mihai"
            className="w-full max-w-sm rounded-lg shadow-lg border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
