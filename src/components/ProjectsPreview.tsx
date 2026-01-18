import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectsPreview = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section id="proiecte" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="mb-2">
            Proiecte <span className="text-gradient">Recente</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            O selecție din proiectele mele personale și profesionale
          </p>
        </div>
        <Link to="/projects" className="mt-4 md:mt-0">
          <Button variant="outline" className="group">
            Vezi toate proiectele
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group"
          >
            <article className="h-full bg-card rounded-xl overflow-hidden border border-border/50 card-hover">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay buttons */}
                <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubUrl, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.liveUrl, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
