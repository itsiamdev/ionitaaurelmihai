import { useState } from "react";
import { certifications, Certification } from "@/data/certifications";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Award, Download, FileText, Palette, Code, GitBranch, Globe } from "lucide-react";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certificari" className="section-container">
      <div className="mb-12">
        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
          <Award className="w-3 h-3 mr-1" />
          Certificări
        </Badge>
        <h2 className="mb-4">
          Certificări <span className="text-gradient">Profesionale</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Certificări și diplome obținute pentru a-mi valida cunoștințele și competențele tehnice.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                {cert.name.includes("HTML") && <FileText className="w-8 h-8 text-orange-500" />}
                {cert.name.includes("CSS") && <Palette className="w-8 h-8 text-blue-500" />}
                {cert.name.includes("JavaScript") && <Code className="w-8 h-8 text-yellow-500" />}
                {cert.name.includes("TypeScript") && <Code className="w-8 h-8 text-blue-600" />}
                {cert.name.includes("Git") && <GitBranch className="w-8 h-8 text-red-500" />}
                
              </div>
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-muted rounded-lg p-3">
                <img
                  src={cert.logo}
                  alt={`${cert.institution} logo`}
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {cert.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-2">
                {cert.institution}
              </p>
              
              <Badge variant="secondary" className="mb-4 text-xs">
                {cert.date}
              </Badge>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCert(cert)}
                className="w-full"
              >
                Vezi certificat
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCert?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src={selectedCert?.logo}
                alt={selectedCert?.name}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-muted-foreground">
              {selectedCert?.description}
            </p>
             <div className="flex justify-center gap-4">
               {selectedCert?.websiteUrl && (
                 <Button asChild variant="outline">
                   <a href={selectedCert.websiteUrl} target="_blank" rel="noopener noreferrer">
                     <Globe className="w-4 h-4 mr-2" />
                     Vezi live
                   </a>
                 </Button>
               )}
               <Button asChild>
                 <a href={selectedCert?.credentialUrl} download={`${selectedCert?.name}.png`}>
                   <Download className="w-4 h-4 mr-2" />
                   Descarcă
                 </a>
               </Button>
             </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;