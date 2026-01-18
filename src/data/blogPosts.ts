export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  author: {
    name: string;
    avatar?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-practices-react-2024",
    title: "Best Practices în React pentru 2024",
    excerpt: "Descoperă cele mai importante tehnici și pattern-uri pentru dezvoltarea aplicațiilor React moderne și performante.",
    content: `
      <h2>Introducere</h2>
      <p>React continuă să evolueze, iar în 2024 avem la dispoziție o mulțime de instrumente și best practices care ne ajută să construim aplicații mai performante și mai ușor de întreținut.</p>
      
      <h2>1. Folosește Server Components</h2>
      <p>Server Components reprezintă viitorul React. Permit renderizarea pe server și reduc dimensiunea bundle-ului JavaScript.</p>
      
      <h2>2. Optimizează Performance-ul</h2>
      <p>Folosește React.memo, useMemo și useCallback doar când este necesar. Măsoară performance-ul înainte de a optimiza.</p>
      
      <h2>3. TypeScript pentru Type Safety</h2>
      <p>TypeScript devine standard în dezvoltarea React. Ajută la prevenirea bug-urilor și îmbunătățește developer experience.</p>
      
      <h2>Concluzie</h2>
      <p>Aceste best practices te vor ajuta să construiești aplicații React mai bune în 2024.</p>
    `,
    date: "2024-01-15",
    readTime: "5 min citire",
    tags: ["React", "JavaScript", "TypeScript", "Best Practices"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "ghid-complet-typescript",
    title: "Ghid Complet TypeScript pentru Începători",
    excerpt: "Tot ce trebuie să știi despre TypeScript: de la tipuri de bază până la generics și utility types.",
    content: `
      <h2>Ce este TypeScript?</h2>
      <p>TypeScript este un superset de JavaScript care adaugă tipare statice opționale limbajului.</p>
      
      <h2>Tipuri de Bază</h2>
      <p>TypeScript oferă tipuri precum string, number, boolean, array, tuple și multe altele.</p>
      
      <h2>Interfaces și Types</h2>
      <p>Interfaces și type aliases permit definirea structurilor de date complexe.</p>
      
      <h2>Generics</h2>
      <p>Generics oferă flexibilitate și type safety pentru cod reutilizabil.</p>
    `,
    date: "2024-01-10",
    readTime: "8 min citire",
    tags: ["TypeScript", "Tutorial", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "tailwind-css-tips-tricks",
    title: "10 Tips & Tricks pentru Tailwind CSS",
    excerpt: "Trucuri și tehnici avansate pentru a maximiza productivitatea cu Tailwind CSS în proiectele tale.",
    content: `
      <h2>De ce Tailwind CSS?</h2>
      <p>Tailwind CSS revolutionează modul în care scriem CSS, oferind un sistem utility-first.</p>

      <h2>1. Custom Design System</h2>
      <p>Configurează tailwind.config.js pentru a crea un design system consistent.</p>

      <h2>2. Componente Reutilizabile</h2>
      <p>Folosește @apply pentru a crea clase custom pentru componente reutilizabile.</p>

      <h2>3. Dark Mode</h2>
      <p>Implementează dark mode ușor cu clasa 'dark:' din Tailwind.</p>
    `,
    date: "2024-01-05",
    readTime: "6 min citire",
    tags: ["CSS", "Tailwind", "Design", "Frontend"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "javascript-es2024-features",
    title: "Noutățile JavaScript ES2024 - Ce Trebuie să Știi",
    excerpt: "Descoperă cele mai importante caracteristici noi din ES2024 și cum să le folosești în proiectele tale moderne.",
    content: `
      <h2>Introducere în ES2024</h2>
      <p>JavaScript continuă să evolueze rapid, iar ES2024 aduce noi caracteristici care îmbunătățesc productivitatea și performanța.</p>

      <h2>1. Array.fromAsync()</h2>
      <p>O metodă nouă pentru a crea array-uri din iterabile asincrone, foarte utilă pentru lucrul cu stream-uri de date.</p>

      <h2>2. Iterator helpers</h2>
      <p>Metode noi pentru iteratori precum map, filter și reduce, care permit procesarea lazy a datelor.</p>

      <h2>3. Promise.withResolvers()</h2>
      <p>O metodă convenabilă pentru crearea promise-urilor cu resolve/reject handlers separate.</p>

      <h2>4. RegExp v flag</h2>
      <p>Un nou flag pentru expresii regulate care permite set-uri Unicode și proprietăți string.</p>

      <h2>Impact asupra Dezvoltării</h2>
      <p>Aceste noi caracteristici fac JavaScript mai puternic și mai expresiv, reducând nevoia de biblioteci externe.</p>
    `,
    date: "2024-02-01",
    readTime: "7 min citire",
    tags: ["JavaScript", "ES2024", "Programming", "Web Development"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "nodejs-best-practices-2024",
    title: "Best Practices Node.js pentru 2024",
    excerpt: "Ghid complet pentru dezvoltarea aplicațiilor Node.js scalabile, sigure și performante în anul 2024.",
    content: `
      <h2>De ce Best Practices?</h2>
      <p>Node.js este matur, dar aplicarea best practices rămâne crucială pentru proiecte de succes.</p>

      <h2>1. Arhitectură Modulară</h2>
      <p>Împarte aplicația în module mici, independente, cu responsabilități clare. Folosește pattern-ul MVC sau Clean Architecture.</p>

      <h2>2. Gestionarea Erorilor</h2>
      <p>Implementează un sistem centralizat de gestionare a erorilor. Folosește middleware pentru erori și logging structurat.</p>

      <h2>3. Securitate</h2>
      <p>Validează toate input-urile, folosește helmet pentru headers de securitate, și implementează rate limiting.</p>

      <h2>4. Performance</h2>
      <p>Folosește clustering pentru utilizarea tuturor CPU-urilor, implementează caching, și optimizează database queries.</p>

      <h2>5. Testing</h2>
      <p>Scrie teste unitare, de integrare și E2E. Folosește Jest sau Mocha cu coverage reporting.</p>

      <h2>Concluzie</h2>
      <p>Aceste practici te vor ajuta să construiești aplicații Node.js robuste și ușor de întreținut.</p>
    `,
    date: "2024-02-15",
    readTime: "10 min citire",
    tags: ["Node.js", "Backend", "Best Practices", "JavaScript"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "responsive-design-techniques",
    title: "Tehnici Avansate de Responsive Design",
    excerpt: "Cum să creezi interfețe care se adaptează perfect pe toate dispozitivele folosind CSS modern și JavaScript.",
    content: `
      <h2>Importanța Responsive Design-ului</h2>
      <p>În era dispozitivelor mobile, responsive design-ul nu mai este opțional - este esențial pentru UX.</p>

      <h2>1. Mobile-First Approach</h2>
      <p>Începe design-ul de la mobile și adaugă complexitate pentru ecrane mai mari. Folosește min-width în media queries.</p>

      <h2>2. CSS Grid și Flexbox</h2>
      <p>Aceste layout systems moderne permit crearea de design-uri complexe care se adaptează automat.</p>

      <h2>3. Container Queries</h2>
      <p>O alternativă modernă la media queries, care permite componentelor să se adapteze bazat pe containerul părinte.</p>

      <h2>4. Fluid Typography</h2>
      <p>Folosește clamp() pentru font sizes care scalează fluid între valori minime și maxime.</p>

      <h2>5. JavaScript pentru Interactivitate</h2>
      <p>Detectează dispozitivul și ajustează comportamentul UI-ului folosind JavaScript modern.</p>

      <h2>Testing și Debugging</h2>
      <p>Testează pe dispozitive reale și folosește Chrome DevTools pentru debugging responsive.</p>
    `,
    date: "2024-03-01",
    readTime: "8 min citire",
    tags: ["CSS", "Responsive Design", "Frontend", "Mobile"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "api-security-best-practices",
    title: "Securitatea API-urilor: Best Practices pentru Dezvoltatori",
    excerpt: "Ghid complet pentru securizarea API-urilor REST și GraphQL împotriva amenințărilor comune.",
    content: `
      <h2>De ce este Importantă Securitatea API?</h2>
      <p>API-urile sunt puncte de intrare în aplicații și trebuie protejate împotriva atacurilor și abuzurilor.</p>

      <h2>1. Autentificare și Autorizare</h2>
      <p>Folosește JWT, OAuth 2.0 sau API keys. Implementează role-based access control (RBAC).</p>

      <h2>2. Validarea Input-urilor</h2>
      <p>Validează și sanitizează toate input-urile. Folosește biblioteci precum Joi sau Yup pentru validare.</p>

      <h2>3. Rate Limiting</h2>
      <p>Implementează rate limiting pentru a preveni abuzurile și atacurile DDoS. Folosește Redis pentru stocare.</p>

      <h2>4. HTTPS Everywhere</h2>
      <p>Folosește întotdeauna HTTPS. Implementează HSTS și certificate pinning pentru securitate suplimentară.</p>

      <h2>5. Logging și Monitoring</h2>
      <p>Loghează toate activitățile suspecte și implementează monitoring în timp real pentru detectarea amenințărilor.</p>

      <h2>6. Gestionarea Secretelor</h2>
      <p>Nu stoca secrete în cod. Folosește environment variables și servicii de management al secretelor.</p>

      <h2>Concluzie</h2>
      <p>Securitatea API este un proces continuu. Rămâi la curent cu ultimele vulnerabilități și patch-uri.</p>
    `,
    date: "2024-03-15",
    readTime: "9 min citire",
    tags: ["API", "Security", "Backend", "Best Practices"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "database-optimization-techniques",
    title: "Optimizarea Bazelor de Date: De la SQL la NoSQL",
    excerpt: "Strategii avansate pentru optimizarea performanței bazelor de date în aplicațiile web moderne.",
    content: `
      <h2>Importanța Optimizării Bazei de Date</h2>
      <p>Performanța aplicației depinde direct de eficiența bazei de date. Optimizarea poate îmbunătăți timpul de răspuns cu până la 10x.</p>

      <h2>1. Indexing Strategic</h2>
      <p>Creează indexuri pe coloanele frecvent căutate. Evită over-indexing care încetinește scrierile.</p>

      <h2>2. Query Optimization</h2>
      <p>Scrie queries eficiente. Folosește EXPLAIN pentru analiza planurilor de execuție în PostgreSQL/MySQL.</p>

      <h2>3. Caching</h2>
      <p>Implementează caching la nivel de aplicație (Redis) și database (query result caching).</p>

      <h2>4. Normalizare vs Denormalizare</h2>
      <p>Găsește echilibrul potrivit între integritatea datelor și performanță. Denormalizează pentru citiri frecvente.</p>

      <h2>5. Connection Pooling</h2>
      <p>Folosește connection pooling pentru a evita overhead-ul creării/distrugerii conexiunilor.</p>

      <h2>6. Sharding și Partitioning</h2>
      <p>Pentru scale mare, împarte datele în shard-uri sau partiții pentru distribuție eficientă.</p>

      <h2>Monitorizare și Maintenance</h2>
      <p>Monitorizează performanța continuu și efectuează maintenance regulat (VACUUM, ANALYZE).</p>
    `,
    date: "2024-04-01",
    readTime: "11 min citire",
    tags: ["Database", "SQL", "NoSQL", "Performance", "Backend"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "git-workflow-teams",
    title: "Git Workflow pentru Echipe de Dezvoltare",
    excerpt: "Ghid complet pentru gestionarea codului în echipe folosind Git Flow, GitHub Flow și alte strategii moderne.",
    content: `
      <h2>De ce un Git Workflow?</h2>
      <p>Un workflow clar previne conflictele și asigură calitatea codului în proiecte cu multiple persoane.</p>

      <h2>1. Git Flow</h2>
      <p>Un model clasic cu branch-uri separate pentru features, releases și hotfixes. Bun pentru proiecte cu releases planificate.</p>

      <h2>2. GitHub Flow</h2>
      <p>Un workflow simplu bazat pe branch-uri de feature și pull requests. Ideal pentru deploy continuu.</p>

      <h2>3. Trunk-Based Development</h2>
      <p>Toți dezvoltă pe main/master cu feature flags. Maximizează colaborarea dar necesită discipline.</p>

      <h2>4. Pull Requests și Code Review</h2>
      <p>Folosește PR-uri pentru review obligatoriu. Definește guidelines clare pentru code review.</p>

      <h2>5. Branch Naming Conventions</h2>
      <p>Stabilește convenții pentru numele branch-urilor: feature/nume, bugfix/description, etc.</p>

      <h2>6. Conflict Resolution</h2>
      <p>Învață să rezolvi conflicte eficient. Comunică cu echipa înainte de merge.</p>

      <h2>7. Automatizare</h2>
      <p>Folosește Git hooks, CI/CD și branch protection rules pentru automatizarea proceselor.</p>

      <h2>Concluzie</h2>
      <p>Alege workflow-ul potrivit pentru echipa ta și rămâi consistent în aplicarea lui.</p>
    `,
    date: "2024-04-15",
    readTime: "8 min citire",
    tags: ["Git", "Workflow", "Team Collaboration", "DevOps"],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  },
  {
    slug: "testing-strategies-web-development",
    title: "Strategii de Testing în Dezvoltarea Web",
    excerpt: "De la teste unitare la E2E: cum să implementezi o strategie completă de testing pentru aplicațiile web.",
    content: `
      <h2>Importanța Testing-ului</h2>
      <p>Testing-ul automat asigură calitatea codului și reduce bug-urile în producție. Este esențial pentru proiecte scalabile.</p>

      <h2>1. Teste Unitare</h2>
      <p>Testează funcții individuale. Folosește Jest pentru JavaScript, JUnit pentru Java. Acoperire minimă 80%.</p>

      <h2>2. Teste de Integrare</h2>
      <p>Testează interacțiunea între componente. Verifică API calls, database operations și middleware.</p>

      <h2>3. Teste End-to-End (E2E)</h2>
      <p>Simulează utilizatorul real. Folosește Cypress sau Playwright pentru testarea completă a flow-urilor.</p>

      <h2>4. Test-Driven Development (TDD)</h2>
      <p>Scrie teste înainte de cod. Acest approach duce la design mai bun și cod mai testabil.</p>

      <h2>5. Behavior-Driven Development (BDD)</h2>
      <p>Scrie teste în limbaj natural folosind Gherkin. Îmbunătățește colaborarea cu stakeholder-ii.</p>

      <h2>6. Testing Pyramid</h2>
      <p>Distribuția ideală: 70% unit tests, 20% integration tests, 10% E2E tests.</p>

      <h2>7. Mocking și Stubbing</h2>
      <p>Izolarea dependențelor externe folosind mock-uri. Folosește Sinon.js sau Mock Service Worker.</p>

      <h2>CI/CD Integration</h2>
      <p>Integrează testing-ul în pipeline-ul CI/CD. Rulează teste automat la fiecare push.</p>

      <h2>Concluzie</h2>
      <p>Un testing strategy bun combină toate tipurile de teste și se integrează în procesul de dezvoltare.</p>
    `,
    date: "2024-05-01",
    readTime: "10 min citire",
    tags: ["Testing", "Quality Assurance", "JavaScript", "Best Practices"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    }
  }
];
