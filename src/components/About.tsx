import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Code,
  Heart,
  Coffee,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const aboutImages = [
  {
    src: "public/ionitaaurelmihai/image.png",
    alt: "Ionita Aurel Mihai - Fotografie 1",
  },
  {
    src: "public/ionitaaurelmihai/image2.png",
    alt: "Ionita Aurel Mihai - Fotografie 2",
  },
];

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImage((prev) => (prev === aboutImages.length - 1 ? 0 : prev + 1));

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
                        <li>• Programare</li>
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
                        Pasiunea mea pentru programare a început la 15 ani, când
                        am descoperit lumea tehnologiei și posibilitățile pe
                        care le oferă dezvoltarea software. Astăzi, lucrez la
                        proiecte web și mobile, îmi dezvolt constant abilitățile
                        și urmăresc să construiesc produse digitale care pot
                        avea un impact real. În prezent, sunt elev în clasa a
                        XII-a la{" "}
                        <a
                          href="https://www.cnsm.ro/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary transition-colors"
                        >
                          Colegiul Național „Ștefan cel Mare"
                        </a>{" "}
                        din Târgu Neamț, la profilul Științe ale Naturii, și îmi
                        dedic majoritatea timpului liber învățării practice și
                        dezvoltării continue în acest sector.
                      </p>
                      <p>
                        Mă caracterizează prin perseverență și atenție la
                        detalii, iar procesul de construire a unui produs
                        digital funcțional începe cu înțelegerea profundă a
                        problemelor pe care le rezolvă. În ultima perioadă mă
                        concentrez pe admiterea la{" "}
                        <a
                          href="https://info.uaic.ro/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary transition-colors"
                        >
                          Facultatea de Informatică din Iași
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-xs px-10">
            <img
              src={aboutImages[currentImage].src}
              alt={aboutImages[currentImage].alt}
              className="w-full rounded-2xl shadow-lg border-4 border-blue-500"
              loading="eager"
              decoding="async"
            />
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition-colors"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
            <div className="flex justify-center gap-2 mt-3">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentImage
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Mergi la imaginea ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
