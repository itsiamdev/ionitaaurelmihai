import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_NEWSLETTER_API_URL || "http://localhost:3001";

const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const { toast } = useToast();

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Eroare",
        description: "Te rog să introduci adresa de email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/newsletter/unsubscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Eroare",
          description: data.error || "Nu s-a putut realiza dezabonarea.",
          variant: "destructive",
        });
      } else {
        setIsUnsubscribed(true);
        toast({
          title: "Succes!",
          description: "Te-ai dezabonat cu succes.",
        });
      }
    } catch (error) {
      toast({
        title: "Eroare",
        description: "Nu s-a putut conecta la server.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnsubscribed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Dezabonare reușită!</h2>
            <p className="text-muted-foreground mb-6">
              Adresa {email} a fost dezabonată de la newsletter.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi acasă
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 w-fit mx-auto">
            <Mail className="w-3 h-3 mr-1" />
            Dezabonare
          </Badge>
          <CardTitle className="text-2xl mb-2">
            Dezabonează-te de la <span className="text-gradient">newsletter</span>
          </CardTitle>
          <p className="text-muted-foreground">
            Introdu adresa de email cu care te-ai abonat pentru a te dezabona.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUnsubscribe} className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold">Nu mai vrei să primești articole?</p>
                  <p className="mt-1">Introdu email-ul tău mai jos și te vom dezabona imediat.</p>
                </div>
              </div>
            </div>

            <Input
              type="email"
              placeholder="Adresa ta de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Se procesează..." : "Dezabonează-mă"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 inline mr-1" />
              Înapoi acasă
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;
