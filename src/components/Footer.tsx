import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    window.location.href = `/#${id}`;
  };

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Ionita Aurel Mihai</h3>
            <p className="text-muted-foreground text-sm">
              Fronted developer pasionat de tehnologii moderne
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navigare</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("despre")} className="text-muted-foreground hover:text-primary transition-colors">
                  Despre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("proiecte")} className="text-muted-foreground hover:text-primary transition-colors">
                  Proiecte
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("certificari")} className="text-muted-foreground hover:text-primary transition-colors">
                  Certificări
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Blog</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-muted-foreground hover:text-primary transition-colors">
                  Toate Articolele
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-muted-foreground hover:text-primary transition-colors">
                  Articole Recente
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/itsiamdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/itsiamdev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ionitaaurel32@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://twitter.com/itsiamdev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Ioniță Aurel Mihai. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
