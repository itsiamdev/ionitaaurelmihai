import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Folder } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{project.title} - Ionita Aurel Mihai | Proiect</title>
        <meta name="description" content={project.shortDescription} />
        <meta name="keywords" content={project.tech.join(", ") + ", Ionita Aurel Mihai"} />
        <link rel="canonical" href={`https://ionita-aurel-mihai.lovable.app/projects/${project.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${project.title} - Ionita Aurel Mihai`} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="section-container pt-32">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la Proiecte
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize">
                <Folder className="w-3 h-3 mr-1" />
                {project.category}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Vezi Codul
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo Live
                  </a>
                </Button>
              )}
            </div>
          </header>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-xl border border-border/50 mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-semibold
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-primary hover:prose-a:text-primary/80"
                dangerouslySetInnerHTML={{ __html: project.fullDescription }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Technologies */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Tehnologii Folosite</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Link-uri</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="border-t border-border/50 pt-12">
              <h2 className="text-2xl font-semibold mb-8">Proiecte Similare</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    to={`/projects/${relatedProject.slug}`}
                    className="group flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {relatedProject.shortDescription}
                      </p>
                    </div>
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

export default ProjectDetail;
