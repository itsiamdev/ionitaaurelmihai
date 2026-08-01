import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate - Ionita Aurel Mihai</title>
        <meta name="description" content="Politica de confidențialitate a site-ului Ionita Aurel Mihai. Informații detaliate despre modul în care colectăm, utilizăm, stocăm și protejăm datele personale, în conformitate cu RGPD." />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/politica-de-confidentialitate" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <main className="section-container pt-32 pb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Politica de Confidențialitate</span>
            </h1>
            <p className="text-muted-foreground mb-8">
              Ultima actualizare: 1 august 2026
            </p>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introducere și scop</h2>
                <p>
                  Această Politică de Confidențialitate descrie modul în care site-ul <strong className="text-foreground">Ionita Aurel Mihai</strong> colectează, utilizează, stochează și protejează datele dumneavoastră personale atunci când vizitați acest site web. Ne angajăm să respectăm legislația aplicabilă în materie de protecția datelor, inclusiv Regulamentul General privind Protecția Datelor (RGPD) și Legea nr. 190/2018.
                </p>
                <p>
                  Prin utilizarea acestui site, sunteți de acord cu practicile descrise în această politică. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Definiții</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Date personale</strong> — orice informație care poate identifica direct sau indirect o persoană fizică.</li>
                  <li><strong className="text-foreground">Utilizator</strong> — orice persoană fizică care accesează sau interacționează cu site-ul.</li>
                  <li><strong className="text-foreground">Cookie-uri</strong> — fișiere text mici stocate pe dispozitivul dumneavoastră pentru a îmbunătăți experiența de navigare.</li>
                  <li><strong className="text-foreground">Titularul datei</strong> — persoana fizică ale cărei date personale sunt colectate.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Datele pe care le colectăm</h2>
                <p>În funcție de modul în care utilizați site-ul, putem colecta următoarele categorii de date:</p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Date furnizate voluntar</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Date de contact</strong> — nume, adresă de e-mail, număr de telefon, mesaje trimise prin formularul de contact.</li>
                  <li><strong className="text-foreground">Date de abonament</strong> — adresă de e-mail dacă vă abonați la newsletter sau actualizări.</li>
                </ul>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Date colectate automat</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Date de utilizare</strong> — adresă IP, tip browser, dispozitiv, sistem de operare, pagini vizitate, timp petrecut pe site, referrer.</li>
                  <li><strong className="text-foreground">Cookie-uri și tehnologii similare</strong> — cookie-uri esențiale, analitice și de marketing, conform preferințelor dumneavoastră.</li>
                  <li><strong className="text-foreground">Date de localizare</strong> — aproximative, bazate pe adresa IP, pentru analiză de trafic.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Scopurile prelucrării datelor</h2>
                <p>Utilizăm datele dumneavoastră personale exclusiv pentru următoarele scopuri:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Furnizarea și îmbunătățirea serviciilor noastre</li>
                  <li>Răspuns la solicitări și întrebări transmise prin formularul de contact</li>
                  <li>Analiză statistică a traficului și a modului de utilizare a site-ului</li>
                  <li>Personalizarea conținutului și a experienței de navigare</li>
                  <li>Prevenirea fraudelor și asigurarea securității site-ului</li>
                  <li>Respectarea obligațiilor legale</li>
                  <li>Trimitere de notificări sau actualizări (doar cu acordul dumneavoastră)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Temeiul legal pentru prelucrare</h2>
                <p>Prelucrăm datele dumneavoastră personale pe baza unuia sau mai multor următoarelor temeiuri legale:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Consimțământ</strong> — pentru cookie-uri neesențiale și marketing</li>
                  <li><strong className="text-foreground">Executarea contractului</strong> — pentru răspunsul la solicitările dumneavoastră</li>
                  <li><strong className="text-foreground">Interesul legitim</strong> — pentru securitate, prevenirea fraudelor și îmbunătățirea serviciilor</li>
                  <li><strong className="text-foreground">Obligația legală</strong> — pentru conformitatea cu legislația aplicabilă</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Partajarea datelor</h2>
                <p>Nu vindem, nu închiriem și nu divulgăm datele dumneavoastră personale către terți, cu excepția următoarelor situații:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Furnizori de servicii</strong> — parteneri care ne ajută să operăm site-ul (hosting, analytics, CDN), cu contracte de confidentialitate stricte</li>
                  <li><strong className="text-foreground">Obligații legale</strong> — dacă legea ne cere să divulgăm datele</li>
                  <li><strong className="text-foreground">Protecția drepturilor</strong> — pentru a proteja drepturile, siguranța sau proprietatea noastră</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookie-uri și tehnologii de urmărire</h2>
                <p>
                  Site-ul utilizează cookie-uri și tehnologii similare pentru a îmbunătăți experiența de navigare, analiza traficul și personaliza conținutul. Puteți gestiona preferințele dumneavoastră privind cookie-urile oricând din banner-ul de consimțământ sau din setările browserului.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7.1 Tipuri de cookie-uri</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Cookie-uri esențiale</strong> — necesare pentru funcționarea site-ului; nu pot fi dezactivate</li>
                  <li><strong className="text-foreground">Cookie-uri analitice</strong> — colectează date anonimizate despre utilizare (ex: Google Analytics)</li>
                  <li><strong className="text-foreground">Cookie-uri de marketing</strong> — utilizate pentru publicitate direcționată (dacă sunt activate)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Drepturile dumneavoastră</h2>
                <p>Conform legislației aplicabile, aveți următoarele drepturi:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Dreptul de acces</strong> — să solicitați o copie a datelor personale pe care le deținem despre dumneavoastră</li>
                  <li><strong className="text-foreground">Dreptul la rectificare</strong> — să corectați datele incorecte sau incomplete</li>
                  <li><strong className="text-foreground">Dreptul la ștergere</strong> — să solicitați ștergerea datelor dumneavoastră ("dreptul de a fi uitat")</li>
                  <li><strong className="text-foreground">Dreptul la restricționarea prelucrării</strong> — să solicitați limitarea modului în care utilizăm datele</li>
                  <li><strong className="text-foreground">Dreptul la portabilitate</strong> — să primiți datele într-un format structurat și utilizabil</li>
                  <li><strong className="text-foreground">Dreptul de opoziție</strong> — să vă opuneți prelucrării bazate pe interesul legitim</li>
                  <li><strong className="text-foreground">Dreptul de a retrage consimțământul</strong> — oricând, fără a afecta legalitatea prelucrărilor anterioare</li>
                  <li><strong className="text-foreground">Dreptul de a depune o plângere</strong> — la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</li>
                </ul>
                <p className="mt-4">
                  Pentru a vă exercita aceste drepturi, ne puteți contacta la adresa de e-mail menționată în secțiunea 12.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Păstrarea datelor</h2>
                <p>
                  Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru îndeplinirea scopurilor pentru care au fost colectate, sau conform obligațiilor legale. După expirarea perioadei de păstrare, datele sunt șterse sau anonimizate în mod sigur.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li><strong className="text-foreground">Date de contact</strong> — păstrate până la solicitarea dumneavoastră de ștergere</li>
                  <li><strong className="text-foreground">Date de utilizare (analitice)</strong> — păstrate pentru maximum 26 de luni</li>
                  <li><strong className="text-foreground">Cookie-uri</strong> — conform duratei specificate în fiecare tip de cookie</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Securitatea datelor</h2>
                <p>
                  Am implementat măsuri de securitate tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat, modificării, divulgării, distrugerii sau pierderii accidentale.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Cifrare HTTPS pentru toate comunicările</li>
                  <li>Acces restricționat la datele personale</li>
                  <li>Actualizări regulate de securitate</li>
                  <li>Monitorizare pentru prevenirea accesului neautorizat</li>
                </ul>
                <p className="mt-4">
                  În ciuda eforturilor noastre, nu există o securitate absolută în mediul online. Vă recomandăm să folosiți parole puternice și să vă protejați dispozitivele.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Confidențialitatea copiilor</h2>
                <p>
                  Site-ul nu se adresează în mod intenționat persoanelor sub 16 ani și nu colectează în mod conștient date personale de la minori. Dacă sunteți părinte sau tutore și credeți că un minor ne-a furnizat date personale, vă rugăm să ne contactați pentru a le șterge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Link-uri către site-uri externe</h2>
                <p>
                  Site-ul poate conține link-uri către site-uri externe care nu sunt operate de noi. Nu suntem responsabili pentru practicile de confidențialitate ale acestor site-uri. Vă recomandăm să citiți politicile de confidențialitate ale fiecărui site pe care îl vizitați.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Modificări ale politicii</h2>
                <p>
                  Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate oricând pentru a reflecta modificări ale legislației, practicilor noastre sau ale serviciilor oferite. Orice modificare va fi publicată pe această pagină, iar data ultimei actualizări va fi modificată corespunzător. Vă încurajăm să consultați periodic această pagină.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact</h2>
                <p>
                  Pentru orice întrebări, solicitări sau preocupări legate de această Politică de Confidențialitate sau de prelucrarea datelor dumneavoastră personale, ne puteți contacta la:
                </p>
                <div className="mt-4 p-6 bg-muted/50 rounded-lg border border-border/50">
                  <p className="text-foreground font-medium">Ioniță Aurel Mihai</p>
                  <p>E-mail: <a href="mailto:ionitaaurel32@gmail.com" className="text-primary hover:underline">ionitaaurel32@gmail.com</a></p>
                  <p>Site web: <a href="https://ionitaaurelmihai.vercel.app/" className="text-primary hover:underline">ionitaaurelmihai.vercel.app</a></p>
                  <p>Răspundem în maxim 30 de zile calendaristice de la primirea solicitării.</p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
