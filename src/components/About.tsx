import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
              Sunt dezvoltator Web pasionat de construirea de aplicații web
              moderne, scalabile și ușor de utilizat. Îmi place să transform
              idei complexe în soluții simple, eficiente și bine structurate.
            </p>
            <p>
              Am experiență în dezvoltarea de aplicații cu React și TypeScript,
              integrarea de API-uri complexe și implementarea de soluții
              cloud-ready, cu accent pe performanță, calitate și bune practici.
            </p>
            <p>
              Sunt mereu interesat de tehnologii noi și de îmbunătățirea
              continuă a modului în care scriu cod. În timpul liber explorez
              framework-uri emergente, contribui la proiecte open-source și
              împărtășesc cunoștințe cu comunitatea tech.
            </p>
            <p>
              Sunt deschis colaborărilor și proiectelor care aduc valoare reală
              și impact pe termen lung.
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
                        <li>• Supabase & MangoDB</li>
                        <li>• Tailwind CSS</li>
                        <li>• Git & GitHub</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        Pasiuni
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dezvoltare Web Modernă</li>
                        <li>• Sport</li>
                        <li>• Citit</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-amber-600" />
                      Câteva Lucruri Interesante
                    </h4>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>
                        Am 17 ani și sunt pasionat de programare de la vârsta de 15 ani.
                        Sunt elev în clasa a XI-a la Colegiul Național „Ștefan
                        cel Mare” din Târgu Neamț, la profilul Științe ale
                        Naturii. Sunt pasionat de programare și tehnologie și
                        îmi dedic o mare parte din timp învățării și dezvoltării
                        mele în acest domeniu.
                      </p>
                      <p>
                        Sunt o persoană motivată, curioasă și perseverentă,
                        mereu interesată să își îmbunătățească abilitățile și să
                        construiască soluții utile prin cod.
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
            src="/ionitaurelmihai.jpeg"
            alt="Ionita Aurel Mihai"
            className="w-full max-w-xs rounded-full shadow-lg border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
