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
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "algoritmi-de-baza-pentru-incepatori-sortare-cautare-complexitate",
    title: "Algoritmi de bază pentru începători: sortare, căutare și complexitate",
    excerpt: "Indiferent de limbajul de programare folosit, algoritmii stau la baza oricărei aplicații. Un algoritm este o succesiune de pași clari care rezolvă o problemă. În acest articol voi prezenta câțiva algoritmi de bază, esențiali pentru orice programator începător.",
    content: `
      <h2>Ce este un algoritm?</h2>
      <p>Un algoritm reprezintă o metodă clară și finită de rezolvare a unei probleme.</p>
      <p>Exemplu simplu:</p>
      <ul>
        <li>citim o listă de numere</li>
        <li>le sortăm</li>
        <li>afișăm rezultatul</li>
      </ul>
      <p>Chiar și cele mai simple aplicații folosesc algoritmi.</p>

      <h2>Algoritmi de sortare</h2>
      <p>Sortarea este una dintre cele mai comune operații în programare.</p>
      <h3>Bubble Sort</h3>
      <p>Bubble Sort compară elemente alăturate și le interschimbă dacă nu sunt în ordinea corectă.</p>
      <p><strong>Exemplu în C++:</strong></p>
      <pre><code class="language-cpp">for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
        if (v[j] > v[j + 1]) {
            swap(v[j], v[j + 1]);
        }
    }
}</code></pre>
      <p>Este ușor de înțeles, dar ineficient pentru liste mari.</p>

      <h2>Algoritmi de căutare</h2>
      <h3>Căutarea liniară</h3>
      <p>Parcurge elementele unul câte unul până găsește valoarea căutată.</p>
      <ul>
        <li>simplă</li>
        <li>funcționează pe orice listă</li>
        <li>complexitate: <strong>O(n)</strong></li>
      </ul>
      <h3>Căutarea binară</h3>
      <p>Funcționează doar pe liste sortate și împarte lista în jumătate la fiecare pas.</p>
      <ul>
        <li>mult mai rapidă</li>
        <li>complexitate: <strong>O(log n)</strong></li>
      </ul>

      <h2>Ce este complexitatea unui algoritm?</h2>
      <p>Complexitatea arată cât de eficient este un algoritm în funcție de numărul de date de intrare.</p>
      <p>Cele mai comune:</p>
      <ul>
        <li><strong>O(1)</strong> – timp constant</li>
        <li><strong>O(n)</strong> – timp liniar</li>
        <li><strong>O(n²)</strong> – timp pătratic</li>
        <li><strong>O(log n)</strong> – timp logaritmic</li>
      </ul>
      <p>Un algoritm mai eficient va rula mai rapid pentru volume mari de date.</p>

      <h2>De ce sunt importanți algoritmii?</h2>
      <p>Algoritmii te ajută să:</p>
      <ul>
        <li>gândești logic</li>
        <li>rezolvi probleme complexe</li>
        <li>scrii cod eficient</li>
        <li>te descurci mai bine la interviuri</li>
      </ul>
      <p>Chiar și în web development, algoritmii sunt esențiali pentru performanță.</p>

      <h2>Concluzie</h2>
      <p>Înțelegerea algoritmilor de bază este un pas important în formarea oricărui programator. De la sortare și căutare până la aplicații complexe, totul pornește de la aceleași principii.</p>

      <p><em>Acest articol face parte dintr-o serie dedicată începătorilor în programare. Urmărește site-ul pentru articole noi și explicații clare.</em></p>
    `,
    date: "2026-01-20",
    readTime: "5 min citire",
    tags: ["Algoritmi", "Programare", "Sortare", "Căutare", "Complexitate"],
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    },
    relatedPosts: ["bazele-programarii-variabile-tipuri-date-functii", "cum-functioneaza-html-css-javascript-intr-o-aplicatie-web"]
  },
  {
    slug: "cum-functioneaza-html-css-javascript-intr-o-aplicatie-web",
    title: "Cum funcționează HTML, CSS și JavaScript într-o aplicație web?",
    excerpt: "Atunci când vizităm un website, tot ce vedem și cu care interacționăm este rezultatul colaborării dintre HTML, CSS și JavaScript. Fiecare dintre aceste tehnologii are un rol bine definit, iar împreună formează baza oricărei aplicații web moderne.",
    content: `
      <h2>Ce este HTML?</h2>
      <p>HTML (HyperText Markup Language) este limbajul care definește <strong>structura</strong> unei pagini web.</p>
      <p>Cu HTML stabilim:</p>
      <ul>
        <li>titluri</li>
        <li>paragrafe</li>
        <li>butoane</li>
        <li>imagini</li>
        <li>formulare</li>
      </ul>
      <p><strong>Exemplu simplu de HTML:</strong></p>
      <pre><code class="language-html"><h1>Bun venit!</h1>
<p>Acesta este primul meu website.</p>
<button>Click aici</button></code></pre>
      <p>Fără HTML, o pagină web nu ar avea conținut.</p>

      <h2>Ce este CSS?</h2>
      <p>CSS (Cascading Style Sheets) se ocupă de <strong>aspectul vizual</strong> al paginii.</p>
      <p>Cu CSS putem controla:</p>
      <ul>
        <li>culorile</li>
        <li>fonturile</li>
        <li>poziționarea elementelor</li>
        <li>layout-ul (responsive design)</li>
      </ul>
      <p><strong>Exemplu de CSS:</strong></p>
      <pre><code class="language-css">body {
  font-family: Arial;
  background-color: #f5f5f5;
}

button {
  background-color: blue;
  color: white;
}</code></pre>
      <p>Dacă HTML este scheletul, CSS este designul.</p>

      <h2>Ce este JavaScript?</h2>
      <p>JavaScript este limbajul care adaugă <strong>interactivitate</strong> unei pagini web.</p>
      <p>Cu JavaScript putem:</p>
      <ul>
        <li>răspunde la click-uri</li>
        <li>valida formulare</li>
        <li>modifica conținutul paginii dinamic</li>
        <li>comunica cu servere (API-uri)</li>
      </ul>
      <p><strong>Exemplu simplu de JavaScript:</strong></p>
      <pre><code class="language-javascript"><button onclick="afiseazaMesaj()">Click aici</button>

<script>
  function afiseazaMesaj() {
    alert("Ai apăsat butonul!");
  }
</script></code></pre>
      <p>Fără JavaScript, un website ar fi static.</p>

      <h2>Cum lucrează împreună?</h2>
      <p>Un mod simplu de a le înțelege este următorul:</p>
      <ul>
        <li><strong>HTML</strong> – ce elemente există pe pagină</li>
        <li><strong>CSS</strong> – cum arată aceste elemente</li>
        <li><strong>JavaScript</strong> – cum se comportă</li>
      </ul>
      <p>Exemplu:</p>
      <ul>
        <li>HTML creează un buton</li>
        <li>CSS îl colorează</li>
        <li>JavaScript definește ce se întâmplă când este apăsat</li>
      </ul>

      <h2>Greșeli frecvente ale începătorilor</h2>
      <ul>
        <li>Învățarea CSS sau JavaScript fără a înțelege bine HTML</li>
        <li>Amestecarea logicii JavaScript direct în HTML</li>
        <li>Ignorarea structurii și organizării codului</li>
      </ul>
      <p>O bază solidă în aceste tehnologii face învățarea framework-urilor precum <strong>React</strong> mult mai ușoară.</p>

      <h2>Concluzie</h2>
      <p>HTML, CSS și JavaScript sunt fundamentul web developmentului. Orice framework sau librărie modernă se bazează pe aceste trei tehnologii.</p>
      <p>În următorul articol voi discuta despre <strong>algoritmi de bază pentru începători</strong> și de ce sunt importanți chiar și pentru programatorii web.</p>

      <p><em>Dacă ești la început în web development, acest site va conține articole care explică conceptele pas cu pas.</em></p>
    `,
    date: "2026-01-20",
    readTime: "5 min citire",
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "Începători"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    },
    relatedPosts: ["bazele-programarii-variabile-tipuri-date-functii", "algoritmi-de-baza-pentru-incepatori-sortare-cautare-complexitate"]
  },
  {
    slug: "bazele-programarii-variabile-tipuri-date-functii",
    title: "Bazele programării: variabile, tipuri de date și funcții",
    excerpt: "Programarea poate părea complicată la început, dar orice limbaj de programare se bazează pe câteva concepte fundamentale. În acest articol voi explica variabilele, tipurile de date și funcțiile, trei elemente esențiale pe care orice programator trebuie să le înțeleagă.",
    content: `
      <h2>Ce este o variabilă?</h2>
      <p>O variabilă este un „container" în care stocăm o valoare ce poate fi folosită sau modificată pe parcursul unui program.</p>
      <p>Gândește-te la o variabilă ca la o cutie etichetată, în care pui o informație.</p>
      <p><strong>Exemplu în C++:</strong></p>
      <pre><code class="language-cpp">int varsta = 16;</code></pre>
      <p>În acest exemplu:</p>
      <ul>
        <li><code>int</code> este tipul de date</li>
        <li><code>varsta</code> este numele variabilei</li>
        <li><code>16</code> este valoarea stocată</li>
      </ul>

      <h2>Tipuri de date de bază</h2>
      <p>Tipurile de date definesc <strong>ce fel de informație</strong> poate stoca o variabilă.</p>
      <h3>Cele mai comune tipuri de date:</h3>
      <ul>
        <li><strong>int</strong> – numere întregi
          <pre><code class="language-cpp">int scor = 100;</code></pre>
        </li>
        <li><strong>float / double</strong> – numere zecimale
          <pre><code class="language-cpp">double temperatura = 36.5;</code></pre>
        </li>
        <li><strong>char</strong> – un singur caracter
          <pre><code class="language-cpp">char litera = 'A';</code></pre>
        </li>
        <li><strong>string</strong> – text
          <pre><code class="language-cpp">string nume = "Alex";</code></pre>
        </li>
        <li><strong>bool</strong> – adevărat sau fals
          <pre><code class="language-cpp">bool esteLogat = true;</code></pre>
        </li>
      </ul>
      <p>Alegerea corectă a tipului de date este importantă pentru eficiența și corectitudinea programului.</p>

      <h2>Ce este o funcție?</h2>
      <p>O funcție este un bloc de cod care îndeplinește o anumită sarcină și poate fi reutilizat de mai multe ori.</p>
      <p>Funcțiile ajută la:</p>
      <ul>
        <li>organizarea codului</li>
        <li>evitarea repetării</li>
        <li>o mai bună înțelegere a programului</li>
      </ul>
      <p><strong>Exemplu de funcție în C++:</strong></p>
      <pre><code class="language-cpp">int suma(int a, int b) {
    return a + b;
}</code></pre>
      <p>Această funcție:</p>
      <ul>
        <li>primește două numere (<code>a</code> și <code>b</code>)</li>
        <li>returnează suma lor</li>
      </ul>
      <p><strong>Apelarea funcției:</strong></p>
      <pre><code class="language-cpp">int rezultat = suma(3, 5);</code></pre>

      <h2>De ce sunt aceste concepte atât de importante?</h2>
      <p>Fără variabile, tipuri de date și funcții:</p>
      <ul>
        <li>nu ai putea stoca informații</li>
        <li>nu ai putea lua decizii</li>
        <li>nu ai putea construi aplicații reale</li>
      </ul>
      <p>Aceste concepte apar în <strong>toate limbajele de programare</strong>, fie că vorbim de C++, JavaScript, Python sau Java.</p>

      <h2>Concluzie</h2>
      <p>Dacă înțelegi bine aceste baze, restul programării devine mult mai ușor. Orice aplicație complexă este construită pornind de la aceste elemente simple.</p>
      <p>În articolele următoare voi vorbi despre <strong>HTML, CSS și JavaScript</strong> și despre <strong>algoritmi de bază pentru începători</strong>.</p>

      <p><em>Dacă ești la început în programare, urmărește acest site pentru articole noi și explicații clare.</em></p>
    `,
    date: "2026-01-20",
    readTime: "5 min citire",
    tags: ["Programare", "Bazele programării", "C++", "Variabile", "Funcții"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    },
    relatedPosts: ["cum-functioneaza-html-css-javascript-intr-o-aplicatie-web", "algoritmi-de-baza-pentru-incepatori-sortare-cautare-complexitate"]
  },
  {
    slug: "dezvoltarea-aplicatiilor-mobile-cum-sa-incepi",
    title: "Dezvoltarea aplicațiilor mobile cu Flutter",
    excerpt: "Flutter este framework-ul Google pentru dezvoltarea aplicațiilor mobile cross-platform. Cu o singură bază de cod, poți crea aplicații pentru iOS și Android. În acest articol voi explica tot ce trebuie să știi pentru a începe.",
    content: `
      <h2>Ce este Flutter?</h2>
      <p>Flutter este un framework open-source dezvoltat de Google, care permite crearea de aplicații mobile pentru iOS și Android din aceeași bază de cod. Folosește limbajul <strong>Dart</strong>, care este ușor de învățat și puternic.</p>
      <p>De ce să alegi Flutter?</p>
      <ul>
        <li><strong>Single codebase</strong> – aceelași cod pentru iOS și Android</li>
        <li><strong>Hot reload</strong> – vezi modificările instant</li>
        <li><strong>Beautiful UI</strong> – widget-uri Material și Cupertino</li>
        <li><strong>Performanță</strong> – apropiată de native</li>
        <li><strong>Comunitate</strong> – în creștere rapidă</li>
      </ul>

      <h2>Instalare și configurare</h2>
      <p>Pași pentru a începe cu Flutter:</p>
      <ol>
        <li>Descarcă Flutter SDK de pe <a href="https://flutter.dev">flutter.dev</a></li>
        <li>Instalează Android Studio pentru Android</li>
        <li>Instalează Xcode pentru iOS (necesită Mac)</li>
        <li>Adaugă Flutter la PATH</li>
      </ol>
      <p><strong>Verifică instalarea:</strong></p>
      <pre><code class="language-bash">flutter doctor</code></pre>

      <h2>Primul proiect Flutter</h2>
      <p>Crearea unui proiect nou:</p>
      <pre><code class="language-bash">flutter create my_app
cd my_app
flutter run</code></pre>

      <h2>Widget-uri de bază</h2>
      <p>Flutter folosește widget-uri pentru tot. Iată cele mai comune:</p>
      <ul>
        <li><strong>Text</strong> – afișare text</li>
        <li><strong>Container</strong> – layout și styling</li>
        <li><strong>Row/Column</strong> – aranjare orizontală/verticală</li>
        <li><strong>ListView</strong> – liste scrollabile</li>
        <li><strong>Image</strong> – afișare imagini</li>
        <li><strong>Button</strong> – butoane interactibile</li>
      </ul>

      <h2>State Management</h2>
      <p>Gestionarea stării în Flutter:</p>
      <ul>
        <li><strong>setState</strong> – pentru stare locală simplă</li>
        <li><strong>Provider</strong> – pentru stare globală</li>
        <li><strong>Riverpod</strong> – alternativă modernă la Provider</li>
        <li><strong>BLoC</strong> – pentru aplicații complexe</li>
      </ul>

      <h2>Navigație</h2>
      <p>Flutter oferă mai multe modalități de navigație:</p>
      <ul>
        <li><strong>Navigator.push/pop</strong> – navigație de bază</li>
        <li><strong>GoRouter</strong> – navigație declarativă</li>
        <li><strong>Bottom Navigation</strong> – navigație cu tab-uri</li>
      </ul>

      <h2>API calls</h2>
      <p>Pentru comunicarea cu serverul, poți folosi:</p>
      <ul>
        <li><strong>Dio</strong> – client HTTP puternic</li>
        <li><strong>http</strong> – pachet simplu</li>
      </ul>

      <h2>Baze de date locale</h2>
      <p>Pentru stocarea datelor pe dispozitiv:</p>
      <ul>
        <li><strong>SharedPreferences</strong> – date simple cheie-valoare</li>
        <li><strong>SQLite/sqflite</strong> – bază de date relațională</li>
        <li><strong>Isar</strong> – bază de date NoSQL rapidă</li>
      </ul>

      <h2>Funcționalități native</h2>
      <p>Flutter oferă acces la funcționalitățile dispozitivului:</p>
      <ul>
        <li><strong>Camera</strong> – cu pachetul camera</li>
        <li><strong>Location</strong> – cu geolocator</li>
        <li><strong>Notificări</strong> – cu flutter_local_notifications</li>
        <li><strong>Sensors</strong> – accelerometru, giroscop</li>
      </ul>

      <h2>Publicare în store-uri</h2>
      <h3>Google Play Store</h3>
      <ul>
        <li>Creează cont Google Developer ($25 taxă unică)</li>
        <li>Generează APK sau AAB</li>
        <li>Încarcă în Google Play Console</li>
        <li>Publică (review în 2-24 ore)</li>
      </ul>
      <h3>App Store (iOS)</h3>
      <ul>
        <li>Creează cont Apple Developer ($99/an)</li>
        <li>Generează build din Flutter</li>
        <li>Încarcă în App Store Connect</li>
        <li>Publică (review în 1-3 zile)</li>
      </ul>

      <h2>Resurse pentru învățare</h2>
      <ul>
        <li><a href="https://docs.flutter.dev">Documentație oficială Flutter</a></li>
        <li><a href="https://flutter.dev/codelabs">Codelabs</a></li>
      </ul>

      <h2>Concluzie</h2>
      <p>Flutter este o alegere excelentă pentru dezvoltarea aplicațiilor mobile. Cu o singură bază de cod, poți ajunge la milioane de utilizatori pe iOS și Android.</p>
      <p>Conceptele prezentate în acest articol sunt fundamentul pe care îl vei folosi în orice proiect Flutter. Practică și vei deveni fluent în Flutter.</p>
      <p><em>Urmărește site-ul pentru tutoriale practice despre dezvoltarea aplicațiilor mobile cu Flutter!</em></p>
    `,
    date: "2026-04-11",
    readTime: "6 min citire",
    tags: ["App Development", "Mobile", "Flutter", "Dart", "Google"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    },
    relatedPosts: ["bazele-programarii-variabile-tipuri-date-functii", "cum-functioneaza-html-css-javascript-intr-o-aplicatie-web"]
  },
  {
    slug: "git-si-github-ghid-complet",
    title: "Git și GitHub - Ghid Complet pentru Începători",
    excerpt: "Git și GitHub sunt instrumente esențiale pentru orice programator. Află ce sunt, cum au apărut, care sunt avantajele și cum să le folosești în proiectele tale.",
    content: `
      <h2>Introducere</h2>
      <p>Git și GitHub sunt două dintre cele mai utilizate instrumente în lumea programării. Deși sunt adesea amestecate, ele au roluri diferite dar complementare.</p>
      <p><strong>Git</strong> este un sistem de control al versiunilor (Version Control System) care urmărește modificările în fișierele unui proiect. <strong>GitHub</strong> este o platformă de hosting care permite stocarea și colaborarea pe proiecte Git.</p>
      <p>Împreună, aceste instrumente au revoluționat modul în care programatorii lucrează în echipă și gestionează proiectele.</p>

      <h2>Istoria</h2>
      <h3>Git</h3>
      <p>Git a fost creat de <strong>Linus Torvalds</strong> în 2005, creatorul sistemului de operare Linux. A fost inițial conceput pentru a gestiona dezvoltarea kernelului Linux, după ce compania BitKeeper (folosită anterior) a încetat să fie gratuită.</p>
      <p>Numele „Git" vine din argoul britanic și înseamnă „neînțelept" sau „idiot" - Torvalds și-a numit proiectul așa ca o glumă.</p>
      <p>Git a fost proiectat pentru a fi:</p>
      <ul>
        <li><strong>rapid</strong> - operațiile locale sunt instantanee</li>
        <li><strong>distribuit</strong> - fiecare dezvoltator are o copie completă a proiectului</li>
        <li><strong>sigur</strong> - folosește hashing SHA-1 pentru integritate</li>
        <li><strong>flexibil</strong> - suportă branching și merging ușor</li>
      </ul>

      <h3>GitHub</h3>
      <p>GitHub a fost fondat în 2008 de <strong>Tom Preston-Werner</strong>, <strong>Chris Wanstrath</strong> și <strong>PJ Hyett</strong>. A fost una dintre primele platforme care au făcut Git accesibil tuturor.</p>
      <p>În 2018, Microsoft a achiziționat GitHub pentru 7.5 miliarde de dolari. În 2025, GitHub avea peste 100 de milioane de dezvoltatori.</p>
      <p>Alte platforme populare care folosesc Git:</p>
      <ul>
        <li><strong>GitLab</strong> - open-source, cu versiune gratuită self-hosted</li>
        <li><strong>Bitbucket</strong> - de la Atlassian</li>
        <li><strong>SourceForge</strong> - veche dar încă populară</li>
      </ul>

      <h2>Ai avantaje ale Git</h2>
      <p>Git oferă numeroase avantaje pentru dezvoltatori:</p>
      <ul>
        <li><strong>Urmărirea modificărilor</strong> - știi cine a schimbat ce și când</li>
        <li><strong>Branching</strong> - creezi ramuri separate pentru funcționalități noi</li>
        <li><strong>Revenire</strong> - poți întoarce ușor la versiuni anterioare</li>
        <li><strong>Colaborare</strong> - echipe multiple pot lucra simultan</li>
        <li><strong>Merge</strong> - combinarea modificărilor se face automat</li>
        <li><strong>Backup</strong> - codul este în siguranță</li>
      </ul>

      <h2>Beneficiile GitHub</h2>
      <h3>Hosting Gratuit</h3>
      <p>GitHub oferă <strong>depozite publice gratuite</strong> nelimitate pentru oricine dorește să-și găzduiască proiectele open-source. Pentru proiecte private, există planuri plătise.</p>
      <p>Beneficiile includ:</p>
      <ul>
        <li>Stocare nelimitată pentru cod</li>
        <li>Folosiți GitHub Pages pentru site-uri web statice</li>
        <li>Acces la GitHub Actions pentru CI/CD</li>
        <li>Comunitate vastă de dezvoltatori</li>
      </ul>

      <h3>Organizații</h3>
      <p>GitHub Organizations permit:</p>
      <ul>
        <li>Gestionarea echipelor multiple</li>
        <li>Permisiuni diferite pe depozite</li>
        <li>Organizarea proiectelor pe echipe</li>
        <li>Review-uri de cod în echipă</li>
        <li>Wiki-uri și documentație</li>
        <li>Issue tracker integrat</li>
      </ul>
      <p>Planul gratuit pentru organizații include depozite publice și private nelimitate, cu până la 3 colaboratori.</p>

      <h2>Utilitate</h2>
      <p>Git și GitHub sunt esențiale pentru:</p>
      <ul>
        <li><strong>Proiecte personale</strong> - backup și versiuni ale codului</li>
        <li><strong>Colaborare</strong> - lucru în echipă pe același proiect</li>
        <li><strong>Portofoliu</strong> - arătarea proiectelor angajatorilor</li>
        <li><strong>Open source</strong> - contribuții la proiecte publice</li>
        <li><strong>Documentație</strong> - Wiki-uri și README-uri</li>
      </ul>

      <h3>Comenzi de bază Git</h3>
      <pre><code class="language-bash">git init</code></pre>
      <p>initializează un depozit nou</p>
      <pre><code class="language-bash">git add .</code></pre>
      <p>adaugă toate fișierele</p>
      <pre><code class="language-bash">git commit -m "mesaj"</code></pre>
      <p>salvează modificările</p>
      <pre><code class="language-bash">git push</code></pre>
      <p>încarcă pe GitHub</p>
      <pre><code class="language-bash">git pull</code></pre>
      <p>descarcă modificările</p>
      <pre><code class="language-bash">git clone url</code></pre>
      <p>descarcă un proiect</p>

      <h2>Folosirea în Industrie</h2>
      <p>Git este folosit de companii mari:</p>
      <ul>
        <li><strong>Google</strong> - toate proiectele interne folosesc Git</li>
        <li><strong>Microsoft</strong> - Windows, VS Code, și multe altele</li>
        <li><strong>Facebook</strong> - infrastructura și aplicațiile</li>
        <li><strong>Netflix</strong> - streaming și sisteme distribuite</li>
        <li><strong>Airbnb</strong> - aplicații web și mobile</li>
      </ul>
      <p>GitHub este standardul în industrie:</p>
      <ul>
        <li>Peste 90% din companiile tech folosesc Git</li>
        <li>Majoritatea joburilor necesită cunoștințe de Git</li>
        <li>Proiectele open-source sunt găzduite pe GitHub</li>
        <li>Interviurile tehnice includ întrebări despre Git</li>
      </ul>

      <h2>Concluzie</h2>
      <p>Git și GitHub sunt instrumente fundamentale pentru orice programator. Indiferent dacă ești începător sau experimentat, înțelegerea acestor instrumente este esențială pentru cariera ta în tech.</p>
      <p>Începe cu basics-ul: creează un cont GitHub, încarcă primul tău proiect și explorează. Restul vine cu practica.</p>
      <p><em>Urmărește site-ul pentru tutoriale practice despre Git și GitHub!</em></p>
    `,
    date: "2026-04-14",
    readTime: "6 min citire",
    tags: ["Git", "GitHub", "Version Control", "Programare", "Colaborare"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    },
    relatedPosts: ["cum-functioneaza-html-css-javascript-intr-o-aplicatie-web", "bazele-programarii-variabile-tipuri-date-functii"]
  }
];