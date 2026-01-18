import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platformă completă de comerț electronic cu React, Node.js și Stripe. Gestionare produse, coș de cumpărături și plăți integrate.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      title: "Task Management App",
      description: "Aplicație de management al sarcinilor cu funcționalități în timp real, colaborare în echipă și notificări push.",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard interactiv pentru analiza datelor cu grafice complexe, rapoarte și export în multiple formate.",
      tech: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Social Media Platform",
      description: "Platformă socială cu feed în timp real, chat, stories și sistem complex de notificări.",
      tech: ["Vue.js", "Firebase", "Node.js", "WebSockets"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    },
  ];

  return (
    <section id="proiecte" className="section-container">
      <h2 className="text-center mb-16">
        Proiecte <span className="text-gradient">Recente</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-card rounded-lg overflow-hidden border border-border card-hover group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <h3 className="mb-3 text-primary">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
