import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import ProjectsPreview from "@/components/ProjectsPreview";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <ProjectsPreview />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
