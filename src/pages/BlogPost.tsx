import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

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
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Înapoi la blog
            </Button>
          </Link>

          <article className="max-w-3xl">
            <header className="mb-8">
              <div className="flex gap-2 mb-4 flex-wrap">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="mb-4">{post.title}</h1>
              
              {/* Author and Meta */}
              <div className="flex items-center gap-4 py-4 border-y border-border/50">
                {post.author?.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-medium">{post.author?.name || "Ionita Aurel Mihai"}</p>
                  <div className="flex gap-3 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </header>

            {post.image && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
