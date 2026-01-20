import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPreview = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-container bg-muted/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <BookOpen className="w-3 h-3 mr-1" />
            Blog
          </Badge>
          <h2 className="mb-2">
            Ultimele <span className="text-gradient">Articole</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Articole despre programare, dezvoltare web și tehnologii moderne
          </p>
        </div>
        <Link to="/blog" className="mt-4 md:mt-0">
          <Button variant="outline" className="group">
            Vezi toate articolele
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
            <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
              {post.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
