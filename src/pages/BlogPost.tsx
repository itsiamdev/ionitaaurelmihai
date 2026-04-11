import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, Heart } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import parse from 'html-react-parser';
import CodeBlock from "@/components/CodeBlock";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(() => {
    const saved = localStorage.getItem("likedPosts");
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem("likeCounts");
    const defaultCounts: Record<string, number> = {};
    blogPosts.forEach(p => {
      defaultCounts[p.slug] = Math.floor(Math.random() * 50) + 10;
    });
    return saved ? JSON.parse(saved) : defaultCounts;
  });
  const isLiked = post && likedPosts.has(post.slug);
  const likeCount = post ? likeCounts[post.slug] || 0 : 0;

  const handleLike = () => {
    if (!post) return;
    const newLiked = new Set(likedPosts);
    const newCounts = { ...likeCounts };
    if (newLiked.has(post.slug)) {
      newLiked.delete(post.slug);
      newCounts[post.slug] = Math.max(0, (newCounts[post.slug] || 1) - 1);
    } else {
      newLiked.add(post.slug);
      newCounts[post.slug] = (newCounts[post.slug] || 0) + 1;
    }
    setLikedPosts(newLiked);
    setLikeCounts(newCounts);
    localStorage.setItem("likedPosts", JSON.stringify([...newLiked]));
    localStorage.setItem("likeCounts", JSON.stringify(newCounts));
  };

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Ionita Aurel Mihai"
    },
    "image": post.image,
    "keywords": post.tags.join(", ")
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Ionita Aurel Mihai Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={`https://ionita-aurel-mihai.lovable.app/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main className="section-container pt-32">
          <Link to="/blog">
            <Button 
              variant="ghost" 
              className="mb-8 -ml-4 group flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Înapoi la blog
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex gap-2 mb-6 flex-wrap">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-border/50">
                <div className="flex items-center gap-3">
                  {post.author?.avatar && (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{post.author?.name || "Ionita Aurel Mihai"}</p>
                    <p className="text-sm text-muted-foreground">Autor</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </header>

            {post.image && (
              <div className="aspect-video overflow-hidden rounded-2xl mb-12 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              {parse(post.content, {
                replace: (domNode) => {
                  if (domNode.type === 'tag' && domNode.name === 'pre') {
                    const codeElement = (domNode as any).children?.[0];
                    if (codeElement && codeElement.type === 'tag' && codeElement.name === 'code') {
                      const className = codeElement.attribs?.class || '';
                      const language = className.replace('language-', '') || 'text';
                      
                      const getRawContent = (children: any[]): string => {
                        if (!children) return '';
                        return children.map((child: any) => {
                          if (child.type === 'text') return child.data;
                          if (child.type === 'tag') {
                            const tagName = child.name;
                            const attrs = child.attribs ? ' ' + Object.entries(child.attribs)
                              .map(([k, v]) => `${k}="${v}"`)
                              .join(' ') : '';
                            const inner = getRawContent(child.children);
                            return `<${tagName}${attrs}>${inner}</${tagName}>`;
                          }
                          return '';
                        }).join('');
                      };
                      
                      const code = getRawContent(codeElement.children);
                      return <CodeBlock code={code} language={language} />;
                    }
                  }
                }
              })}
            </div>

            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-border/50">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={async () => {
                  const url = window.location.href;
                  const title = post.title;
                  
                  try {
                    if (navigator.share) {
                      await navigator.share({ title, url });
                    } else {
                      await navigator.clipboard.writeText(url);
                      alert('Link copiat în clipboard!');
                    }
                  } catch (err) {
                    await navigator.clipboard.writeText(url);
                    alert('Link copiat în clipboard!');
                  }
                }}
              >
                <Share2 className="w-4 h-4" />
                Distribuie
              </Button>
              <Button 
                variant={isLiked ? "default" : "outline"}
                className={`flex items-center gap-2 ${isLiked ? "bg-red-500 hover:bg-red-600" : ""}`}
                onClick={handleLike}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                {likeCount} {isLiked ? "Apreciat!" : "Apreciază"}
              </Button>
            </div>

            {relatedPosts.length > 0 && (
              <section className="mt-16 pt-8 border-t border-border/50">
                <h2 className="text-2xl font-bold mb-8">Articole similare</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.slug} 
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      {relatedPost.image && (
                        <div className="aspect-video overflow-hidden rounded-lg mb-4">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                        Citește mai mult
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
