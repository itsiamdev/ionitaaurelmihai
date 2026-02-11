export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "fullstack" | "other";
  date: string;
}

export const projects: Project[] = [
  {
    slug: "stan-radu-gabriel",
    title: "Portofolio Personal - Stan Radu Gabriel",
    shortDescription: "Site portofoliu personal al lui Stan Radu Gabriel, elev în clasa a 10-a și membru în Consiliul Elevilor la Colegiul Național 'Ștefan cel Mare'.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Site-ul portofoliu personal al lui Stan Radu Gabriel reprezintă o platformă digitală modernă unde își prezintă identitatea, activitățile școlare și contribuțiile în cadrul Consiliului Elevilor. Proiectul reflectă pasiunea pentru literatură, istorie și munca în echipă, demonstrând cum ideile și colaborarea pot aduce schimbări pozitive în comunitatea școlară.</p>

      <br><br>

      <h2>Funcționalități Cheie</h2>
      <ul>
        <li><strong>Prezentare Personală:</strong> Informații detaliate despre Stan Radu Gabriel, elev în clasa a 10-a la Colegiul Național "Ștefan cel Mare" și membru activ în Consiliul Elevilor</li>
        <li><strong>Proiecte Școlare:</strong> Prezentarea inițiativelor caritabile și ecologice, inclusiv "Raftul lui Moș Crăciun", evenimente artistice caritabile și "Eco Creații"</li>
        <li><strong>Contact și Rețele Sociale:</strong> Link-uri către email (raduq.stan@gmail.com), Instagram (@raduq.st) și Facebook (Radu Gabriel Stan)</li>
        <li><strong>Design Modern:</strong> Interfață atractivă și responsivă pentru o experiență utilizator optimă</li>
      </ul>

      <br><br>

      <h2>Tehnologii Utilizate</h2>
      <p>Site-ul este dezvoltat folosind tehnologii web moderne pentru a asigura performanță și accesibilitate:</p>
      <ul>
        <li><strong>React:</strong> Framework JavaScript pentru crearea unei interfețe dinamice și interactive</li>
        <li><strong>HTML & CSS:</strong> Structura și stilizarea fundamentală a paginilor web</li>
        <li><strong>JavaScript:</strong> Funcționalități interactive și dinamice</li>
      </ul>

      <br><br>

      <h2>Instalare și Dezvoltare Locală</h2>
      <p>Pentru a rula proiectul local, urmați acești pași:</p>

      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js (versiunea 16 sau mai recentă)</li>
        <li>Manager de pachete npm</li>
      </ul>
      <h3>Pași de Instalare</h3>
      <ol>
        <li>Clonați repository-ul: <code>git clone https://github.com/iam269/Stan-Radu-Gabriel.git</code></li>
        <li>Intrați în director: <code>cd Stan-Radu-Gabriel</code></li>
        <li>Instalați dependențele: <code>npm install</code></li>
        <li>Porniți serverul de dezvoltare: <code>npm run dev</code></li>
      </ol>

      <p>Aplicația va fi disponibilă la <code>http://localhost:3000</code> sau similar.</p>

      <h3>Build de Producție</h3>
      <p>Pentru a crea un build optimizat: <code>npm run build</code></p>

      <br><br>

      <h2>Structura Proiectului</h2>
      <pre><code>Stan-Radu-Gabriel/
├── public/                 # Active statice (imagini, favicon)
├── src/
│   ├── components/         # Componente React reutilizabile
│   ├── pages/              # Pagini principale (Acasă, Despre, Proiecte, Contact)
│   ├── App.js              # Componenta principală
│   └── index.js            # Punctul de intrare
├── package.json            # Dependențe și script-uri
└── README.md               # Documentație</code></pre>

      <br><br>

      <h2>Contribuții</h2>
      <p>Proiectul este open-source și contribuțiile sunt binevenite pentru îmbunătățiri.</p>

      <br><br>

      <h2>Licență</h2>
      <p>Acest proiect este open-source și licențiat sub Licența MIT.</p>

      <br><br>

      <h2>Contact</h2>
      <p>Pentru întrebări, contactați Stan Radu Gabriel prin email sau rețele sociale.</p>
    `,
    tech: ["HTML", "CSS", "JavaScript", "React"],
    image: "/projects/RaduStanGabriel.jpg",
    githubUrl: "https://github.com/iam269/Stan-Radu-Gabriel",
    liveUrl: "https://iam269.github.io/Stan-Radu-Gabriel/",
    featured: false,
    category: "web",
    date: "2026-01-26"
  },
  {
    slug: "greenweek",
    title: "Green Week",
    shortDescription: "Platformă digitală pentru protejarea mediului, dezvoltată cu React, care susține acțiuni ecologice și inițiative sustenabile.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Green Week este o aplicație web <em>modernă și interactivă</em> dedicată promovării activităților de mediu și a inițiativelor de curățenie comunitară în timpul <strong>Săptămânii Verzi</strong>. Proiectul reprezintă o <em>inițiativă digitală</em> pentru creșterea conștientizării publice asupra problemelor de mediu, oferind resurse educaționale, informații despre evenimente locale și instrumente pentru implicarea activă în protejarea mediului înconjurător.</p>

      <br><br>

      <h2>Funcționalități Cheie</h2>
      <ul>
        <li><strong>Secțiune Hero:</strong> Prezentare vizuală atractivă cu imagini reprezentative pentru activitățile de mediu</li>
        <li><strong>Activități:</strong> Informații detaliate despre evenimentele de curățenie comunitară și programele de reciclare</li>
        <li><strong>Resurse:</strong> Ghiduri și materiale utile pentru reciclare și reducerea deșeurilor</li>
        <li><strong>Sfaturi Practice:</strong> Recomandări pentru un stil de viață sustenabil</li>
        <li><strong>Galerie Foto:</strong> Colecție de imagini din evenimentele anterioare pentru inspirație</li>
        <li><strong>Video Educaționale:</strong> Conținut multimedia pentru învățare interactivă</li>
        <li><strong>Footer Informativ:</strong> Link-uri către organizații partenere și informații de contact</li>
      </ul>

      <br><br>

      <h2>Tehnologii Utilizate</h2>
      <p>Proiectul este construit folosind tehnologii web de ultimă generație:</p>
      <ul>
        <li><strong>Vite:</strong> Bundler rapid pentru dezvoltarea și procesele de build ale aplicației</li>
        <li><strong>React:</strong> Framework JavaScript pentru crearea interfețelor utilizator dinamice</li>
        <li><strong>TypeScript:</strong> Superset JavaScript pentru tipizare statică și dezvoltare mai sigură</li>
        <li><strong>Tailwind CSS:</strong> Framework CSS utility-first pentru stilizare rapidă și responsivă</li>
        <li><strong>shadcn/ui:</strong> Componente UI accesibile și personalizabile</li>
        <li><strong>ESLint:</strong> Pentru asigurarea calității și consistenței codului</li>
      </ul>

      <br><br>

      <h2>Instalare și Dezvoltare Locală</h2>
      <p>Pentru a rula proiectul local, urmați acești pași:</p>

      <br>

      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js (versiunea 16 sau mai recentă)</li>
        <li>Manager de pachete npm sau yarn</li>
      </ul>
      <h3>Pași de Instalare</h3>
      <ol>
        <li>Clonați repository-ul: <code>git clone https://github.com/iam269/greenweek.git</code></li>
        <li>Intrați în director: <code>cd greenweek</code></li>
        <li>Instalați dependențele: <code>npm install</code></li>
        <li>Porniți serverul de dezvoltare: <code>npm run dev</code></li>
      </ol>

      <br>

      <p>Aplicația va fi disponibilă la <code>http://localhost:5173/</code>.</p>

      <h3>Build de Producție</h3>
      <p>Pentru a crea un build optimizat pentru producție: <code>npm run build</code></p>
      <p>Fișierele build vor fi generate în directorul <code>dist/</code>.</p>

      <br><br>

      <h2>Structura Proiectului</h2>
      <pre><code>greenweek/
├── public/                 # Active statice
├── src/
│   ├── components/         # Componente React reutilizabile
│   │   ├── Activities.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Resources.jsx
│   │   ├── Tips.jsx
│   │   └── Videos.jsx
│   ├── pages/              # Componente pagină
│   ├── hooks/              # Hook-uri React personalizate
│   ├── assets/             # Imagini și fișiere media
│   ├── App.jsx             # Componenta principală a aplicației
│   └── main.jsx            # Punctul de intrare al aplicației
├── package.json            # Dependențe și script-uri ale proiectului
├── vite.config.js          # Configurație Vite
├── tailwind.config.js      # Configurație Tailwind CSS
└── README.md               # Documentație proiect</code></pre>

      <br><br>

      <h2>Contribuții</h2>
      <p>Contribuțiile sunt binevenite! Dacă doriți să îmbunătățiți proiectul:</p>
      <ol>
        <li>Fork repository-ul</li>
        <li>Creați o ramură pentru feature (<code>git checkout -b feature/new-feature</code>)</li>
        <li>Commit schimbările (<code>git commit -am 'Add new feature'</code>)</li>
        <li>Push la ramură (<code>git push origin feature/new-feature</code>)</li>
        <li>Deschideți un Pull Request</li>
      </ol>

      <br><br>

      <h2>Variabile de Mediu</h2>
      <p>Aplicația utilizează Google Analytics pentru urmărirea interacțiunilor utilizatorilor. ID-ul de tracking este configurat în fișierul <code>index.html</code>.</p>

      <br><br>

      <h2>Optimizări de Performanță</h2>
      <ul>
        <li><strong>Lazy Loading:</strong> Componentele sunt încărcate la cerere pentru îmbunătățirea timpilor de încărcare inițială</li>
        <li><strong>Optimizarea Imaginilor:</strong> Imaginile sunt optimizate pentru livrare web</li>
        <li><strong>Code Splitting:</strong> Codul aplicației este împărțit în chunk-uri pentru caching mai bun</li>
        <li><strong>Minificare:</strong> Build-urile de producție includ CSS și JavaScript minificat</li>
      </ul>

      <br><br>

      <h2>Suport Browser</h2>
      <p>Aplicația suportă toate browserele moderne:</p>
      <ul>
        <li>Chrome (ultima versiune)</li>
        <li>Firefox (ultima versiune)</li>
        <li>Safari (ultima versiune)</li>
        <li>Edge (ultima versiune)</li>
      </ul>

      <br><br>

      <h2>Licență</h2>
      <p>Acest proiect este open-source și licențiat sub Licența MIT.</p>

      <br><br>

      <h2>Contact</h2>
      <p>Pentru întrebări sau sugestii, vă rugăm să deschideți un issue în repository-ul GitHub sau să contactați echipa de dezvoltare.</p>
    `,
    tech: ["Vite", "React" , "TypeScript", "Tailwind CSS"],
    image: "/projects/greenweek.jpg",
    githubUrl: "https://github.com/iam269/greenweek",
    liveUrl: "https://iam269.github.io/greenweek/",
    featured: true,
    category: "web",
    date: "2025-10-21"
  },
  {
    slug: "geolocation-api",
    title: "Geolocation API",
    shortDescription: "Aplicație web modernă care folosește GPS și API-ul de Geolocalizare al browserului pentru a afișa în timp real locația utilizatorului, coordonate precise și informații de adresă pe hărți interactive.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p><strong>Geolocation App</strong> este o aplicație web <em>modernă</em> care permite utilizatorilor să își detecteze și să își exploreze locația geografică în timp real, folosind tehnologia GPS și API-ul de Geolocalizare al browserului. Aplicația oferă coordonate precise, nivelul de acuratețe al locației și informații detaliate despre adresă prin servicii de <em>reverse geocoding</em>.</p>
      <p>Proiectul pune accent pe experiența utilizatorului, confidențialitate și performanță, fiind potrivit atât pentru testarea funcționalităților bazate pe locație, cât și pentru utilizatori curioși de poziția lor exactă.</p>

      <br><br>

      <h2>Funcționalități Cheie</h2>
      <ul>
        <li><strong>Detectare locație GPS:</strong> Obținerea coordonatelor latitude și longitude în timp real</li>
        <li><strong>Acuratețe locație:</strong> Afișarea preciziei poziției în metri</li>
        <li><strong>Hărți interactive:</strong> Vizualizare pe hartă folosind Leaflet și OpenStreetMap</li>
        <li><strong>Reverse Geocoding:</strong> Conversia coordonatelor în adrese lizibile</li>
        <li><strong>Urmărire în timp real:</strong> Monitorizarea modificării poziției utilizatorului</li>
        <li><strong>Design modern:</strong> Interfață glass-morphism cu animații fluide</li>
        <li><strong>Dark / Light Mode:</strong> Temă adaptivă în funcție de preferințele utilizatorului</li>
      </ul>

      <br><br>

      <h2>Tehnologii Utilizate</h2>
      <p>Aplicația este dezvoltată folosind tehnologii moderne:</p>
      <ul>
        <li><strong>React 18</strong> – interfață dinamică și component-based</li>
        <li><strong>TypeScript</strong> – siguranță și claritate în dezvoltare</li>
        <li><strong>Vite</strong> – build rapid și server de dezvoltare performant</li>
        <li><strong>Leaflet.js</strong> – hărți interactive</li>
        <li><strong>OpenStreetMap & Nominatim API</strong> – date geografice și reverse geocoding</li>
        <li><strong>Tailwind CSS</strong> – stilizare rapidă și responsive</li>
        <li><strong>Framer Motion</strong> – animații fluide</li>
        <li><strong>TanStack Query</strong> – gestionarea eficientă a datelor</li>
      </ul>

      <br><br>

      <h2>Instalare și Dezvoltare Locală</h2>

      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js (versiunea 18 sau mai recentă)</li>
        <li>npm sau yarn</li>
        <li>Browser modern cu suport pentru Geolocation API</li>
      </ul>

      <h3>Pași de Instalare</h3>
      <ol>
        <li>Clonați repository-ul: <code>git clone https://github.com/iam269/geolocation-api.git</code></li>
        <li>Intrați în directorul proiectului: <code>cd geolocation-api</code></li>
        <li>Instalați dependențele: <code>npm install</code></li>
        <li>Porniți serverul de dezvoltare: <code>npm run dev</code></li>
      </ol>

      <p>Aplicația va fi disponibilă la <code>http://localhost:8080</code>.</p>

      <h3>Build de Producție</h3>
      <p>Pentru a genera un build optimizat:</p>
      <pre><code>npm run build</code></pre>
      <p>Fișierele vor fi generate în directorul <code>dist/</code>.</p>

      <br><br>

      <h2>Structura Proiectului</h2>
      <pre><code>geolocation-api/
├── public/                 # Active statice
├── src/
│   ├── components/         # Componente UI reutilizabile
│   ├── hooks/              # Hook-uri personalizate (geolocation, geocoding)
│   ├── pages/              # Pagini aplicație
│   ├── lib/                # Funcții utilitare
│   ├── App.tsx             # Componenta principală
│   └── main.tsx            # Punctul de intrare
├── package.json            # Dependențe și script-uri
├── vite.config.ts          # Configurație Vite
├── tailwind.config.ts      # Configurație Tailwind CSS
└── README.md               # Documentație</code></pre>

      <br><br>

      <h2>Optimizări de Performanță</h2>
      <ul>
        <li>Lazy loading pentru componente</li>
        <li>Code splitting automat cu Vite</li>
        <li>Caching eficient al datelor</li>
        <li>Optimizarea resurselor vizuale</li>
      </ul>

      <br><br>

      <h2>Confidențialitate</h2>
      <ul>
        <li>Datele de locație sunt procesate exclusiv pe client</li>
        <li>Nu se stochează informații pe server</li>
        <li>Accesul la locație necesită consimțământ explicit</li>
      </ul>

      <br><br>

      <h2>Licență</h2>
      <p>Proiect open-source, licențiat sub <strong>MIT License</strong>.</p>

      <br><br>

      <h2>Contact</h2>
      <p>Pentru sugestii sau probleme, vă rugăm să deschideți un issue în repository-ul GitHub.</p>
    `,
    tech: ["React","TypeScript", "Vite", "Tailwind CSS"],
    image: "/projects/geolocationapi.jpg",
    githubUrl: "https://github.com/iam269/geolocation-api",
    liveUrl: "https://iam269.github.io/geolocation-api/",
    featured: true,
    category: "web",
    date: "2026-01-3"
  },
  {
    slug: "christmas-memory",
    title: "Christmas Memory",
    shortDescription: "Aplicație web interactivă și festivă care permite utilizatorilor să creeze, să împărtășească și să retrăiască amintiri de Crăciun prin jocuri tematice și conținut personalizat.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Christmas Memory este o aplicație web <em>interactivă și festivă</em> care permite utilizatorilor să creeze, să împărtășească și să retrăiască amintiri de Crăciun prin jocuri tematice și conținut personalizat. Proiectul combină distracția cu elemente de nostalgie, oferind experiențe interactive precum potrivirea cardurilor, prinderea cadourilor și adăugarea de urări și amintiri personale.</p>
      <p>Aplicația pune accent pe experiența utilizatorului, atmosfera festivă și accesibilitate, fiind potrivită atât pentru jucători, cât și pentru cei care doresc să creeze amintiri digitale de Crăciun.</p>

      <br><br>

      <h2>Funcționalități Cheie</h2>

      <h3>Jocuri Interactive</h3>
      <ul>
        <li><strong>Christmas Memory Game</strong> – potrivește carduri cu teme de Crăciun, Moș Crăciun, reni și ornamente</li>
        <li><strong>Gift Catcher</strong> – prinde cadouri care cad într-un joc cu cronometru</li>
        <li><strong>Easter Eggs</strong> ascunse pentru surprize suplimentare</li>
      </ul>

      <h3>Gestionarea Amintirilor</h3>
      <ul>
        <li>Formular pentru adăugarea de povești, poze și urări de Crăciun</li>
        <li><strong>Memory Wall</strong> – vizualizează amintirile comunității</li>
        <li><strong>Panou Admin</strong> – moderarea amintirilor (acces admin)</li>
      </ul>

      <h3>Atmosferă Festivă</h3>
      <ul>
        <li>Countdown până la Crăciun</li>
        <li>Zăpadă animată și efecte vizuale</li>
        <li>Muzică de Crăciun cu control audio</li>
      </ul>

      <h3>Experiență Utilizator</h3>
      <ul>
        <li>Light/Dark Mode</li>
        <li>Design responsive pentru desktop, tabletă și mobil</li>
        <li>Emoji Picker pentru amintiri și interacțiuni</li>
      </ul>

      <br><br>

      <h2>Tehnologii Utilizate</h2>
      <p>Proiectul este construit folosind tehnologii web moderne:</p>
      <ul>
        <li><strong>Frontend Framework:</strong> React 18 + TypeScript</li>
        <li><strong>Build Tool:</strong> Vite</li>
        <li><strong>Styling:</strong> Tailwind CSS + shadcn/ui</li>
        <li><strong>Animații:</strong> Framer Motion</li>
        <li><strong>State Management:</strong> React hooks și custom hooks</li>
        <li><strong>Altele:</strong> SVG personalizate, audio festive, ESLint</li>
      </ul>

      <br><br>

      <h2>Instalare și Dezvoltare Locală</h2>
      <p>Pentru a rula proiectul local, urmați acești pași:</p>

      <br>

      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js (versiunea 18 sau mai recentă)</li>
        <li>npm sau Bun</li>
        <li>Browser modern</li>
      </ul>

      <h3>Pași de Instalare</h3>
      <ol>
        <li>Clonați repository-ul: <code>git clone https://github.com/iam269/christmas-memory.git</code></li>
        <li>Intrați în director: <code>cd christmas-memory</code></li>
        <li>Instalați dependențele: <code>npm install</code> sau <code>bun install</code></li>
        <li>Porniți serverul de dezvoltare: <code>npm run dev</code> sau <code>bun run dev</code></li>
      </ol>

      <br>

      <p>Aplicația va fi disponibilă la <code>http://localhost:5173</code>.</p>

      <h3>Build de Producție</h3>
      <p>Pentru a crea un build optimizat pentru producție:</p>
      <pre><code>npm run build
# sau
bun run build</code></pre>
      <p>Fișierele build vor fi generate în directorul <code>dist/</code> și gata pentru deploy.</p>

      <br><br>

      <h2>Structura Proiectului</h2>
      <pre><code>christmas-memory/
├── public/                 # Active statice (imagini, audio, icoane)
├── src/
│   ├── components/         # Componente React reutilizabile
│   │   ├── ui/            # Componente shadcn/ui
│   │   └── ...            # Componente specifice funcționalităților
│   ├── hooks/              # Hook-uri React personalizate
│   ├── lib/                # Funcții utilitare
│   ├── pages/              # Pagini aplicație
│   └── ...                 # Fișiere principale ale aplicației
├── package.json            # Dependențe și script-uri
├── tailwind.config.ts      # Configurare Tailwind CSS
├── vite.config.ts          # Configurare Vite
└── README.md               # Documentație</code></pre>

      <br><br>

      <h2>Optimizări de Performanță</h2>
      <ul>
        <li>Lazy loading pentru componente și jocuri</li>
        <li>Code splitting automat cu Vite</li>
        <li>Caching eficient al resurselor și imaginilor</li>
        <li>Minificare CSS și JS în build de producție</li>
      </ul>

      <br><br>

      <h2>Confidențialitate</h2>
      <p>Toate amintirile și datele introduse sunt stocate local sau în baza de date doar cu acordul utilizatorului. Accesul la funcționalități sensibile necesită consimțământ explicit.</p>

      <br><br>

      <h2>Licență</h2>
      <p>Proiect open-source, licențiat sub <strong>MIT License</strong>.</p>

      <br><br>

      <h2>Contact</h2>
      <p>Pentru sugestii sau probleme, vă rugăm să deschideți un issue în repository-ul GitHub: <a href="https://github.com/iam269/christmas-memory" target="_blank">Christmas Memory GitHub</a>.</p>
    `,
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/projects/christmasmemory.jpg",
    githubUrl: "https://github.com/iam269/christmas-memory",
    liveUrl: "https://iam269.github.io/christmas-memory/",
    featured: true,
    category: "web",
    date: "2026-01-19"
  },
  {
    slug: "medix",
    title: "Medix",
    shortDescription: "Platformă medicală modernă pentru gestionarea pacienților, programărilor și dosarelor medicale, dezvoltată cu React și tehnologii web avansate.",
    fullDescription: `
      <h2>Despre Proiect</h2>
      <p>Medix este o <em>platformă medicală completă</em> destinată gestionării eficiente a pacienților, programărilor și dosarelor medicale. Proiectul oferă o interfață modernă și intuitivă pentru personalul medical, facilitând organizarea și accesul rapid la informațiile esențiale despre pacienți.</p>
      <p>Platforma este concepută pentru a îmbunătăți fluxul de lucru în cabinetele medicale și clinicile mici, reducând timpul pierdut în sarcini administrative și permițând medicilor să se concentreze pe îngrijirea pacienților.</p>

      <br><br>

      <h2>Funcționalități Cheie</h2>
      <ul>
        <li><strong>Gestionarea Pacienților:</strong> Adaugare, editare și vizualizare dosare pacienți cu istoricul medical complet</li>
        <li><strong>Programări:</strong> Sistem de programări cu calendar interactiv și notificări</li>
        <li><strong>Dosare Medicale:</strong> Documentare detaliată a consultațiilor, diagnosticelor și tratamentelor</li>
        <li><strong>Dashboard Medical:</strong> Vizualizare statistici și rapoarte despre activitatea cabinetului</li>
        <li><strong>Căutare Avansată:</strong> Găsire rapidă a pacienților și programărilor</li>
        <li><strong>Export Date:</strong> Export programări și rapoarte în diferite formate</li>
      </ul>

      <br><br>

      <h2>Tehnologii Utilizate</h2>
      <p>Proiectul este construit folosind tehnologii web moderne:</p>
      <ul>
        <li><strong>Frontend:</strong> React 18 cu TypeScript pentru o aplicație sigură și performantă</li>
        <li><strong>Build Tool:</strong> Vite pentru dezvoltare rapidă și build optimizat</li>
        <li><strong>Styling:</strong> Tailwind CSS pentru un design modern și responsiv</li>
        <li><strong>State Management:</strong> React hooks și context pentru gestionarea stării aplicației</li>
        <li><strong>Routing:</strong> React Router pentru navigare între pagini</li>
        <li><strong>UI Components:</strong> Componente personalizate pentru interfața de utilizator</li>
      </ul>

      <br><br>

      <h2>Instalare și Dezvoltare Locală</h2>
      <p>Pentru a rula proiectul local, urmați acești pași:</p>

      <h3>Prerequisites</h3>
      <ul>
        <li>Node.js (versiunea 18 sau mai recentă)</li>
        <li>npm sau yarn</li>
        <li>Browser modern</li>
      </ul>

      <h3>Pași de Instalare</h3>
      <ol>
        <li>Clonați repository-ul: <code>git clone https://github.com/iam269/Medix.git</code></li>
        <li>Intrați în director: <code>cd Medix</code></li>
        <li>Instalați dependențele: <code>npm install</code></li>
        <li>Porniți serverul de dezvoltare: <code>npm run dev</code></li>
      </ol>

      <p>Aplicația va fi disponibilă la <code>http://localhost:5173</code>.</p>

      <h3>Build de Producție</h3>
      <p>Pentru a crea un build optimizat pentru producție:</p>
      <pre><code>npm run build</code></pre>
      <p>Fișierele build vor fi generate în directorul <code>dist/</code>.</p>

      <br><br>

      <h2>Structura Proiectului</h2>
      <pre><code>Medix/
├── public/                 # Active statice
├── src/
│   ├── components/         # Componente React reutilizabile
│   ├── pages/              # Pagini aplicație
│   ├── hooks/              # Hook-uri React personalizate
│   ├── lib/                # Funcții utilitare
│   ├── App.tsx             # Componenta principală
│   └── main.tsx            # Punctul de intrare
├── package.json            # Dependențe și script-uri
├── vite.config.ts          # Configurație Vite
├── tailwind.config.ts      # Configurație Tailwind CSS
└── README.md               # Documentație</code></pre>

      <br><br>

      <h2>Securitate și Confidențialitate</h2>
      <ul>
        <li>Datele pacienților sunt gestionate conform standardelor de confidențialitate</li>
        <li>Accesul la informații sensibile necesită autentificare</li>
        <li>Toate datele sunt stocate local sau securizat pe server</li>
      </ul>

      <br><br>

      <h2>Licență</h2>
      <p>Proiect open-source, licențiat sub <strong>MIT License</strong>.</p>

      <br><br>

      <h2>Contact</h2>
      <p>Pentru sugestii sau probleme, vă rugăm să deschideți un issue în repository-ul GitHub: <a href="https://github.com/iam269/Medix" target="_blank">Medix GitHub</a>.</p>
    `,
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/projects/Medix.png",
    githubUrl: "https://github.com/iam269/Medix",
    liveUrl: "https://medix-eosin.vercel.app/",
    featured: false,
    category: "web",
    date: "2025-12-15"
  }
];
