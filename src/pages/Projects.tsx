import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <>
      <Helmet>
        <title>Proiecte - Ionita Aurel Mihai | Portfolio Dezvoltator Web</title>
        <meta name="description" content="Portofoliu cu proiecte de dezvoltare web și aplicații. E-commerce, dashboards, aplicații mobile și multe altele de la Ionita Aurel Mihai." />
        <meta name="keywords" content="portofoliu programare, proiecte web, Ionita Aurel Mihai proiecte, React projects" />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/projects" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="section-container pt-32">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Portfolio
            </Badge>
            <h1 className="mb-4">
              Proiecte <span className="text-gradient">Recente</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              O selecție din proiectele mele personale și profesionale. Fiecare proiect reprezintă o provocare unică și o oportunitate de a învăța tehnologii noi.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-20">
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Proiecte Principale
              </h2>
              <div className="grid gap-8 lg:grid-cols-2">
                {featuredProjects.map((project) => (
                  <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                    <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs capitalize">
                            {project.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{project.date}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tech.length - 4}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-3">
                            {project.githubUrl && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2"
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
                                variant="ghost"
                                size="sm"
                                className="h-8 px-2"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.liveUrl, "_blank");
                                }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                            Vezi detalii <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-8">Alte Proiecte</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                    <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs capitalize">
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
