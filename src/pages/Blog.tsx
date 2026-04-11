import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Articole despre programare, dezvoltare web și tehnologii moderne. 
              Sfaturi practice, tutoriale și ghiduri pentru toți nivelurile.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {([...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post, index) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative flex flex-col md:flex-row">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {post.image && (
                    <div className="w-full md:w-80 h-48 md:h-auto shrink-0 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm flex items-center gap-2 flex-wrap mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        Citește articolul
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            )))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
