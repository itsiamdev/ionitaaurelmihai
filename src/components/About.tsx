const About = () => {
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
