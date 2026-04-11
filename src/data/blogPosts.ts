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
      name: "Ionita Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
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
      name: "Ionita Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
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
      name: "Ionita Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
  },
  {
    slug: "dezvoltarea-aplicatiilor-mobile-cum-sa-incepi",
    title: "Dezvoltarea aplicațiilor mobile: Cum să începi",
    excerpt: "Dezvoltarea aplicațiilor mobile este un domeniu în plină expansiune. Indiferent dacă vrei să creezi o aplicație pentru iOS, Android sau ambele, în acest articol voi explica pașii esențiali și tehnologiile disponibile pentru a începe în app development.",
    content: `
      <h2>De ce să dezvolți aplicații mobile?</h2>
      <p>Aplicațiile mobile sunt peste tot astăzi. Fiecare persoană cu un smartphone are zeci de aplicații instalate.</p>
      <p>Dezvoltarea mobile îți oferă șansa de a:</p>
      <ul>
        <li>crea produse care ajută milioane de oameni</li>
        <li>învăța tehnologii moderne și cerute pe piață</li>
        <li>construi o carieră bine plătită</li>
        <li>transforma ideile în realitate</li>
      </ul>

      <h2>Ce platforme poți viza?</h2>
      <h3>iOS</h3>
      <p>Apple oferă acces la peste 2 miliarde de dispozitive active. Dezvoltarea pentru iOS se face în principal cu <strong>Swift</strong>.</p>
      <h3>Android</h3>
      <p>Sistemul de operare Android domină piața globală cu peste 70% cotă de piață. Se dezvoltă cu <strong>Kotlin</strong> sau Java.</p>
      <h3>Cross-platform</h3>
      <p>Dacă vrei să acoperi ambele platforme simultan, poți folosi:</p>
      <ul>
        <li><strong>React Native</strong> – folosește JavaScript/React</li>
        <li><strong>Flutter</strong> – folosește Dart</li>
        <li><strong>Xamarin</strong> – folosește C#</li>
      </ul>

      <h2>Primul pas: alegează tehnologia</h2>
      <h3>Dacă ești începător</h3>
      <p><strong>React Native</strong> este o alegere excelentă dacă știi JavaScript. Beneficii:</p>
      <ul>
        <li>aceeași codă pentru iOS și Android</li>
        <li>comunitate mare</li>
        <li>se întețelege ușor dacă știi React</li>
      </ul>
      <h3>Dacă vrei performanță maximă</h3>
      <p><strong>Swift</strong> pentru iOS sau <strong>Kotlin</strong> pentru Android oferă cele mai bune performanțe și acces la toate funcționalitățile platformei.</p>

      <h2>Structura unei aplicații mobile</h2>
      <p>O aplicație mobile tipică are:</p>
      <ul>
        <li><strong>Ecrane</strong> – paginile aplicației</li>
        <li><strong>Navigație</strong> – cum se trece de la un ecran la altul</li>
        <li><strong>Stare</strong> – datele aplicației</li>
        <li><strong>API calls</strong> – comunicarea cu serverul</li>
      </ul>
      <p><strong>Exemplu structură React Native:</strong></p>
      <pre><code class="language-javascript">function App() {
  return (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator&gt;
        &lt;Stack.Screen name="Home" component={HomeScreen} /&gt;
        &lt;Stack.Screen name="Details" component={DetailsScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}</code></pre>

      <h2>Funcționalități comune</h2>
      <p>Majoritatea aplicațiilor mobile includ:</p>
      <ul>
        <li><strong>Autentificare</strong> – login/signup</li>
        <li><strong>Camera</strong> – poze și video</li>
        <li><strong>Localizare</strong> – GPS</li>
        <li><strong>Notificări</strong> – push notifications</li>
        <li><strong>Stocare locală</strong> – salvare date pe device</li>
      </ul>

      <h2>De unde să începi?</h2>
      <p><strong>Pasul 1:</strong> Alege o tehnologie (recomand React Native pentru începători)</p>
      <p><strong>Pasul 2:</strong> Instalează mediul de dezvoltare (Node.js, Android Studio, Xcode)</p>
      <p><strong>Pasul 3:</strong> Creează un proiect simplu – un todo list sau un converter</p>
      <p><strong>Pasul 4:</strong> Explorează documentația oficială și tutoriale</p>
      <p><strong>Pasul 5:</strong> Publică prima ta aplicație în App Store sau Google Play</p>

      <h2>Concluzie</h2>
      <p>Dezvoltarea aplicațiilor mobile este accesibilă oricui are determinare. Cu instrumentele potrivite și practică constantă, poți crea aplicații reale în câteva săptămâni.</p>
      <p>Indiferent de tehnologia aleasă, cel mai important este să începi și să nu te oprești.</p>

      <p><em>Urmărește site-ul pentru tutoriale practice despre dezvoltarea aplicațiilor mobile!</em></p>
    `,
    date: "2026-04-11",
    readTime: "6 min citire",
    tags: ["App Development", "Mobile", "React Native", "Swift", "Kotlin"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    author: {
      name: "Ionita Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
  }
];
