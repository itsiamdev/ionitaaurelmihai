import { Link } from "react-router-dom";
import { certifications } from "@/data/certifications";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CertificationsPreview = () => {
  const topCertifications = [...certifications]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  return (
    <section id="certificari" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="mb-2">
            Certificări <span className="text-gradient">Recente</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            O selecție din certificările mele obținute în ultimele luni.
          </p>
        </div>
        <Link to="/certificari" className="mt-4 md:mt-0">
          <Button variant="outline" className="group">
            Vezi toate certificările
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {topCertifications.map((cert) => (
          <Card
            key={cert.id}
            className="card-hover border-border/50 bg-card/50 backdrop-blur-sm group"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
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
                className="w-full"
                asChild
              >
                <a href={cert.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Vezi certificat
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CertificationsPreview;
