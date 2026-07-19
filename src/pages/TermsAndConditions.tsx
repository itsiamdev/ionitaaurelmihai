import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Termeni și Condiții - Ionita Aurel Mihai</title>
        <meta name="description" content="Termeni și condiții de utilizare ale site-ului Ionita Aurel Mihai. Reguli și acorduri pentru utilizarea serviciilor noastre." />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/termeni-si-conditii" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <main className="section-container pt-32 pb-20">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Termeni și Condiții</span>
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Ultima actualizare: 19 iulie 2026
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptarea termenilor</h2>
              <p>
                Prin accesarea și utilizarea acestui site, acceptați să fiți legat de acești Termeni și Condiții. Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați site-ul.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Drepturile de autor</h2>
              <p>
                Tot conținutul prezentat pe acest site, inclusiv text, imagini, logo-uri și cod, este proprietatea Ionita Aurel Mihai și este protejat de legile privind drepturile de autor. Nu este permisă reproducerea, distribuirea sau modificarea conținutului fără acordul scris prealabil.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Utilizarea site-ului</h2>
              <p>
                Vă angajați să utilizați acest site numai în scopuri legale și în conformitate cu acești termeni. Nu trebuie să utilizați site-ul în moduri care ar putea afecta funcționarea acestuia sau să încălcați drepturile altora.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Limitarea răspunderii</h2>
              <p>
                Ionita Aurel Mihai nu își asumă răspunderea pentru daune directe, indirecte, incidentale sau consecutive rezultate din utilizarea sau incapacitatea de a utiliza acest site.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Modificări ale termenilor</h2>
              <p>
                Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările intră în vigoare imediat după publicarea pe site. Vă încurajăm să consultați periodic acești termeni pentru a fi la curent cu eventualele modificări.
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact</h2>
              <p>
                Pentru întrebări legate de acești Termeni și Condiții, ne puteți contacta la adresa de e-mail: ionitaaurel32@gmail.com.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
