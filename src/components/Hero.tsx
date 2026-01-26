import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZGZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in">
          <p className="text-primary text-lg mb-4 font-mono">Salut, sunt</p>
          <h1 className="mb-6">
            <span className="text-gradient">Ionita Aurel Mihai</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground mb-8">
            Frontend Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Dezvolt aplicații web moderne folosind React și TypeScript. Sunt
            pasionat de programare, învăț continuu și construiesc proiecte
            practice pentru a evolua spre soluții web scalabile.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
          >
            Contactează-mă
          </button>
        </div>

        <button
          onClick={() => scrollToSection("despre")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
