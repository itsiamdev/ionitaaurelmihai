import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_NEWSLETTER_API_URL || "http://localhost:3001";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!gdprAccepted) {
      toast({
        title: "Acceptați termenii",
        description: "Trebuie să acceptați politica de confidențialitate pentru a vă abona.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Trimit cerere către:", `${API_URL}/api/newsletter/subscribe`);
      
      const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Răspuns:", data);

      if (!response.ok) {
        toast({
          title: "Eroare",
          description: data.error || "Nu s-a putut realiza abonarea. Încearcă din nou.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Succes!",
          description: data.message,
        });
        setEmail("");
        setGdprAccepted(false);
      }
    } catch (error) {
      console.error("Eroare la abonare:", error);
      toast({
        title: "Eroare de conectare",
        description: "Nu s-a putut conecta la server. Verifică dacă serverul rulează pe portul 3001.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-container">
      <Card className="max-w-2xl mx-auto border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 w-fit mx-auto">
            <Mail className="w-3 h-3 mr-1" />
            Newsletter
          </Badge>
          <CardTitle className="text-2xl mb-2">
            Rămâi la <span className="text-gradient">curent</span>
          </CardTitle>
          <p className="text-muted-foreground">
            Abonează-te la newsletter pentru a primi instant mesaje pe email cu cele mai recente articole, tutoriale și actualizări despre dezvoltarea web.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Adresa ta de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="shrink-0" disabled={isLoading}>
                {isLoading ? "Se abonează..." : "Abonează-te"}
                {isLoading ? <CheckCircle className="w-4 h-4 ml-2" /> : <Send className="w-4 h-4 ml-2" />}
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gdpr"
                checked={gdprAccepted}
                onCheckedChange={(checked) => setGdprAccepted(checked as boolean)}
              />
              <label
                htmlFor="gdpr"
                className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept termenii și condițiile și politica de confidențialitate. Datele tale sunt protejate conform GDPR.
              </label>
            </div>
          </form>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Nu trimitem spam. Te poți dezabona oricând.
            <Link to="/unsubscribe" className="text-primary hover:underline ml-1">
              Dezabonează-te
            </Link>
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default Newsletter;