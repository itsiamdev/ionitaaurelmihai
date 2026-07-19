import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate - Ionita Aurel Mihai</title>
        <meta name="description" content="Politica de confidențialitate a site-ului Ionita Aurel Mihai. Informații despre modul în care colectăm, utilizăm și protejăm datele personale." />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/politica-de-confidentialitate" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <main className="section-container pt-32 pb-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Politica de Confidențialitate</span>
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Ultima actualizare: 19 iulie 2026
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introducere</h2>
              <p>
                Această politică de confidențialitate descrie modul în care site-ul Ionita Aurel Mihai colectează, utilizează și protejează informațiile pe care le furnizați atunci când vizitați acest site. Ne angajăm să vă protejăm confidențialitatea și să asigurăm securitatea informațiilor dvs.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Informațiile pe care le colectăm</h2>
              <p>
                Putem colecta următoarele tipuri de informații:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informații de identificare (nume, adresă de e-mail)</li>
                <li>Date de utilizare a site-ului</li>
                <li>Informații colectate automat prin cookie-uri și tehnologii similare</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Utilizarea informațiilor</h2>
              <p>
                Informațiile colectate sunt utilizate pentru:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Îmbunătățirea experienței pe site</li>
                <li>Analizarea traficului și comportamentului utilizatorilor</li>
                <li>Trimiterea de actualizări și informații relevante</li>
                <li>Asigurarea securității site-ului</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Protejarea datelor</h2>
              <p>
                Luăm măsuri de securitate adecvate pentru a proteja informațiile dvs. personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii accidentale.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Cookie-uri</h2>
              <p>
                Site-ul utilizează cookie-uri pentru a îmbunătăți experiența de navigare. Puteți configura browserul pentru a refuza cookie-urile, dar unele funcționalități ale site-ului pot fi afectate.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact</h2>
              <p>
                Pentru întrebări sau preocupări legate de această politică de confidențialitate, ne puteți contacta la adresa de e-mail: ionitaaurel32@gmail.com.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
