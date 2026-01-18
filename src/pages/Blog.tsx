import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Ionita Aurel Mihai | Articole Programare & Tech</title>
        <meta name="description" content="Articole despre programare, dezvoltare web, React, TypeScript și tehnologii moderne de la Ionita Aurel Mihai." />
        <meta name="keywords" content="blog programare, articole tech, Ionita Aurel Mihai blog, tutoriale programare" />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/blog" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main className="section-container pt-32">
          <div className="mb-16">
            <h1 className="mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Articole despre programare, dezvoltare web și tehnologii moderne
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                  {post.image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      {post.author?.avatar && (
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      )}
                      <span>{post.author?.name || "Ionita Aurel Mihai"}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
