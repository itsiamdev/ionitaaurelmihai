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
      name: "Ioniță Aurel Mihai",
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
      name: "Ioniță Aurel Mihai",
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
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
  },
  {
    slug: "dezvoltarea-aplicatiilor-mobile-cum-sa-incepi",
    title: "Dezvoltarea aplicațiilor mobile: Cum să începi?",
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
      <p>Sistemul de operare Android domină piața globală cu peste 70% cotă de pieŃă. Se dezvoltă cu <strong>Kotlin</strong> sau Java.</p>
      <h3>Cross-platform</h3>
      <p>Dacă vrei să acoperi ambele platforme simultan, poți folosi:</p>
      <ul>
        <li><strong>React Native</strong> – folosește JavaScript/React</li>
        <li><strong>Flutter</strong> – folosește Dart</li>
        <li><strong>Xamarin</strong> – folosește C#</li>
        <li><strong>Expo</strong> – tool pentru React Native</li>
      </ul>

      <h2>Primul pas: alegează tehnologia</h2>
      <h3>Dacă ești începător</h3>
      <p><strong>Flutter</strong> este o alegere excelentă pentru începători, indiferent dacă știi sau nu programare. Beneficii:</p>
      <ul>
        <li>aceeași codă pentru iOS și Android (100% shared)</li>
        <li>Dart – limbaj ușor de învățat</li>
        <li>Hot reload extrem de rapid</li>
        <li>UI frumos din start cu widget-uri Material și Cupertino</li>
        <li>comunitate în creștere rapidă</li>
        <li>documentație excelentă</li>
      </ul>
      <h3>Dacă știi JavaScript/React</h3>
      <p><strong>React Native</strong> cu Expo este o opțiune bună dacă ai experiență cu React. Beneficii:</p>
      <ul>
        <li>aceeași codă pentru iOS și Android</li>
        <li>comunitate mare</li>
        <li>se înțelege ușor dacă știi React</li>
        <li>deployment rapid cu EAS Build</li>
      </ul>
      <h3>Dacă vrei performanță maximă</h3>
      <p><strong>Swift</strong> pentru iOS sau <strong>Kotlin</strong> pentru Android oferă cele mai bune performanțe și acces la toate funcționalitățile platformei.</p>
      <h3>Comparație tehnologii</h3>
      <pre><code class="language-dart">// Flutter:
// + Single codebase 100%
// + Beautiful UI out of the box
// + Hot reload excelent
// + Performanță bună
// + Dart ușor de învățat
// - Ecosistem mai mic decât React

// React Native:
// + Large ecosystem
// + Dacă știi React, e natural
// - Performanță limitată pentru cazuri complexe

// Swift:
// + Full platform access
// + Best performance
// + SwiftUI modern
// - Doar iOS

// Kotlin:
// + Modern, concise
// + Jetpack Compose
// - Doar Android</code></pre>

      <h2>Structura unei aplicații mobile</h2>
      <p>O aplicație mobile tipică are:</p>
      <ul>
        <li><strong>Ecrane</strong> – paginile aplicației</li>
        <li><strong>Navigație</strong> – cum se trece de la un ecran la altul</li>
        <li><strong>Stare</strong> – datele aplicației</li>
        <li><strong>API calls</strong> – comunicarea cu serverul</li>
        <li><strong>Componente reutilizabile</strong> – butoane, inputs, carduri</li>
      </ul>
      <p><strong>Exemplu structură Flutter:</strong></p>
      <pre><code class="language-dart">// Structură proiect Flutter
lib/
├── main.dart           # Punct de intrare
├── app.dart           # Configurare app
├── core/
│   ├── constants/     # Constante
│   │   └── app_colors.dart
│   ├── theme/        # Tema aplicației
│   │   └── app_theme.dart
│   └── utils/        # Funcții utilitare
├── data/
│   ├── models/       # Modele de date
│   │   └── user.dart
│   ├── repositories/ # Repositories
│   │   └── user_repository.dart
│   └── services/     # API services
│       └── api_service.dart
├── presentation/
│   ├── screens/      # Ecrane
│   │   ├── home/
│   │   │   ├── home_screen.dart
│   │   │   └── widgets/
│   │   └── profile/
│   │       └── profile_screen.dart
│   ├── widgets/      # Widget-uri comune
│   │   ├── custom_button.dart
│   │   └── loading_indicator.dart
│   └── providers/   # State management (Provider/Riverpod)
│       └── user_provider.dart
└── routes/
    └── app_router.dart  # Navigație cu GoRouter</code></pre>

      <h2>State Management în Flutter</h2>
      <p>Gestionarea stării este critică pentru aplicații complexe. Opțiuni populare în Flutter:</p>
      <h3>1. Provider (cel mai popular)</h3>
      <p>Simple și eficient, recomandat pentru începători:</p>
      <pre><code class="language-dart">import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// Model
class User {
  final String name;
  final String email;
  User({required this.name, required this.email});
}

// ChangeNotifier pentru stare
class UserProvider extends ChangeNotifier {
  User? _user;
  bool _isLoading = false;

  User? get user => _user;
  bool get isLoading => _isLoading;

  Future<void> login(String email, String password) async {
    _isLoading = true;
    notifyListeners();

    // Simulează API call
    await Future.delayed(const Duration(seconds: 1));
    _user = User(name: 'John Doe', email: email);
    
    _isLoading = false;
    notifyListeners();
  }

  void logout() {
    _user = null;
    notifyListeners();
  }
}

// Utilizare în widget
class ProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final userProvider = context.watch&lt;UserProvider&gt;();

    if (userProvider.isLoading) {
      return const CircularProgressIndicator();
    }

    if (userProvider.user == null) {
      return const Text('Nu ești logat');
    }

    return Text('Bine ai venit, userProvider.user!.name');
  }
}</code></pre>

      <p><em>Notă pentru React Native: În React Native, state management se face diferit. Poți folosi Context API sau hooks:</em></p>
      <pre><code class="language-javascript">// React Native - Context API
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Simulează API call
    await new Promise(r => setTimeout(r, 1000));
    setUser({ name: 'John Doe', email });
    setLoading(false);
  };

  const logout = () => setUser(null);

  return (
    &lt;UserContext.Provider value={{ user, loading, login, logout }}&gt;
      {children}
    &lt;/UserContext.Provider&gt;
  );
}

export function useUser() {
  return useContext(UserContext);
}

// Utilizare în componentă
function ProfileScreen() {
  const { user, loading } = useUser();

  if (loading) return &lt;ActivityIndicator /&gt;;
  if (!user) return &lt;Text&gt;Nu ești logat&lt;/Text&gt;;

  return &lt;Text&gt;Bine ai venit, {user.name}&lt;/Text&gt;;
}</code></pre>

      <h3>2. Riverpod (recomandat pentru proiecte mari)</h3>
      <p>Mai flexibil și testabil:</p>
      <pre><code class="language-dart">import 'package:flutter_riverpod/flutter_riverpod.dart';

// Definire provider
final userProvider = StateNotifierProvider&lt;UserNotifier, UserState&gt;((ref) {
  return UserNotifier();
});

class UserState {
  final User? user;
  final bool isLoading;
  final String? error;

  UserState({this.user, this.isLoading = false, this.error});
}

class UserNotifier extends StateNotifier&lt;UserState&gt; {
  UserNotifier() : super(UserState());

  Future&lt;void&gt; login(String email, String password) async {
    state = UserState(isLoading: true);
    try {
      final user = await api.login(email, password);
      state = UserState(user: user);
    } catch (e) {
      state = UserState(error: e.toString());
    }
  }

  void logout() {
    state = UserState();
  }
}

// Utilizare
class HomeScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final userState = ref.watch(userProvider);
    
    return userState.when(
      data: (user) => Text(user.name),
      loading: () => CircularProgressIndicator(),
      error: (e) => Text('Eroare: eroare'),
    );
  }
}</code></pre>
</code></pre>

      <h3>3. Bloc (Business Logic Component)</h3>
      <p>Excelent pentru aplicații cu logică complexă:</p>
      <pre><code class="language-dart">import 'package:flutter_bloc/flutter_bloc.dart';

// Evenimente
abstract class CounterEvent {}
class Increment extends CounterEvent {}
class Decrement extends CounterEvent {}

// State
class CounterState {
  final int count;
  CounterState(this.count);
}

// Bloc
class CounterBloc extends Bloc&lt;CounterEvent, CounterState&gt; {
  CounterBloc() : super(CounterState(0));

  @override
  Stream&lt;CounterState&gt; mapEventToState(CounterEvent event) async* {
    if (event is Increment) {
      yield CounterState(state.count + 1);
    } else if (event is Decrement) {
      yield CounterState(state.count - 1);
}

// Utilizare
class CounterPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => CounterBloc(),
      child: BlocBuilder&lt;CounterBloc, CounterState&gt;(
        builder: (context, state) {
          return Column(
            children: [
              Text('Count: state.count'),
              ElevatedButton(
                onPressed: () => context.read&lt;CounterBloc&gt;().add(Increment()),
                child: Text('+'),
              ),
            ],
          );
        },
      ),
    );
  }
}</code></pre>

      <h2>Navigație în Flutter</h2>
      <p>Flutter oferă mai multe modalități de navigație:</p>
      <h3>1. Navigator basic</h3>
      <pre><code class="language-dart">// Navigare simplă
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => DetailsScreen()),
);

// Cu parametri
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => DetailsScreen(productId: 123),
  ),
);

// Revenire
Navigator.pop(context);

// Navigator 2.0 (declarativ)
Navigator.pushNamed(context, '/details', arguments: product);</code></pre>

      <h3>2. GoRouter (recomandat)</h3>
      <p>Navigație declarativă cu deep linking:</p>
      <pre><code class="language-dart">import 'package:go_router/go_router.dart';

final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => HomeScreen(),
    ),
    GoRoute(
      path: '/details/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return DetailsScreen(productId: id);
      },
    ),
    GoRoute(
      path: '/profile',
      builder: (context, state) => ProfileScreen(),
    ),
  ],
);

// În main.dart
MaterialApp.router(
  routerConfig: router,
  title: 'My App',
);

// Navigare
context.go('/details/123');</code></pre>

      <h3>3. Bottom Navigation cu IndexedStack</h3>
      <pre><code class="language-dart">class MainScreen extends StatefulWidget {
  @override
  State&lt;MainScreen&gt; createState() => _MainScreenState();
}

class _MainScreenState extends State&lt;MainScreen&gt; {
  int _currentIndex = 0;
  
  final _screens = [
    HomeScreen(),
    SearchScreen(),
    ProfileScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _screens,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) => setState(() => _currentIndex = index),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}</code></pre>
      <pre><code class="language-javascript">import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    &lt;Tab.Navigator&gt;
      &lt;Tab.Screen name="Home" component={HomeScreen} /&gt;
      &lt;Tab.Screen name="Profile" component={ProfileScreen} /&gt;
    &lt;/Tab.Navigator&gt;
  );
}

function App() {
  return (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator&gt;
        &lt;Stack.Screen name="Login" component={LoginScreen} /&gt;
        &lt;Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }}
        /&gt;
        &lt;Stack.Screen name="Details" component={DetailsScreen} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}</code></pre>

      <h2>Comunicare cu serverul (API)</h2>
      <p>Aplicațiile mobile au nevoie de date externe:</p>
      <h3>HTTP cu Dio</h3>
      <pre><code class="language-dart">import 'package:dio/dio.dart';

final dio = Dio(BaseOptions(
  baseURL: 'https://api.exemplu.com',
  connectTimeout: const Duration(seconds: 10),
));

// GET request
Future&lt;List&lt;User&gt;&gt; fetchUsers() async {
  final response = await dio.get('/users');
  return (response.data as List).map((e) => User.fromJson(e)).toList();
}

// POST request cu auth
Future&lt;User&gt; login(String email, String password) async {
  final response = await dio.post(
    '/auth/login',
    data: {'email': email, 'password': password},
  );
  return User.fromJson(response.data);
}</code></pre>

      <h3>Interceptors pentru auth</h3>
      <pre><code class="language-dart">dio.interceptors.add(InterceptorsWrapper(
  onRequest: (options, handler) {
    final token = getToken();
    if (token != null) {
      options.headers['Authorization'] = 'Bearer token';
    }
    return handler.next(options);
  },
  onError: (error, handler) {
    if (error.response?.statusCode == 401) {
      // Token expirat - logout
      logout();
    }
    return handler.next(error);
  },
));</code></pre>
}</code></pre>

      <h3>Push Notifications</h3>
      <pre><code class="language-dart">import 'package:flutter_local_notifications/flutter_local_notifications.dart';

final flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();

Future&lt;void&gt; initNotifications() async {
  const androidSettings = AndroidInitializationSettings('@mipmap/ic_launcher');
  const iosSettings = DarwinInitializationSettings(
    requestAlertPermission: true,
    requestBadgePermission: true,
    requestSoundPermission: true,
  );

  const initSettings = InitializationSettings(
    android: androidSettings,
    iOS: iosSettings,
  );

      await flutterLocalNotificationsPlugin.initialize(initSettings);
}

      <h2>Testare</h2>
      <p>Asigură calitatea aplicației:</p>
      <h3>Widget Testing</h3>
      <pre><code class="language-dart">import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/widgets/my_button.dart';

void main() {
  testWidgets('Button apasă corect', (WidgetTester tester) async {
    bool pressed = false;

    await tester.pumpWidget(
      MaterialApp(
        home: MyButton(
          onPressed: () => pressed = true,
          child: Text('Click me'),
        ),
      ),
    );

    await tester.tap(find.text('Click me'));
    expect(pressed, true);
  });

  testWidgets('Button disabled nu funcționează', (WidgetTester tester) async {
    bool pressed = false;

    await tester.pumpWidget(
      MaterialApp(
        home: MyButton(
          onPressed: null,
          child: Text('Click me'),
        ),
      ),
    );

    await tester.tap(find.text('Click me'));
    expect(pressed, false);
  });
}</code></pre>

      <h3>Integration Testing</h3>
      <pre><code class="language-dart">import 'package:flutter_test/flutter_test.dart';
import 'package:integration_test/integration_test.dart';
import 'package:my_app/main.dart' as app;

void main() {
  IntegrationTestWidgetsFlutterBinding.ensureInitialized();

  group('Login flow', () {
    testWidgets('login cu succes', (WidgetTester tester) async {
      app.main();
      await tester.pumpAndSettle();

      // Complete login form
      await tester.enterText(find.byKey('email'), 'test@test.com');
      await tester.enterText(find.byKey('password'), 'password123');
      
      // Tap login button
      await tester.tap(find.byKey('login-button'));
      await tester.pumpAndSettle();

      // Verify we're on home screen
      expect(find.byKey('home-screen'), findsOneWidget);
    });
  });
}</code></pre>

      <h3>Unit Testing cu Mockito</h3>
      <pre><code class="language-dart">import 'package:flutter_test/flutter_test.dart';
import 'package:mockito/annotations.dart';
import 'package:mockito/mockito.dart';
import 'package:my_app/services/user_service.dart';
import 'package:my_app/repositories/user_repository.dart';

@GenerateMocks([UserService])
void main() {
  late UserRepository repository;
  late MockUserService mockService;

  setUp(() {
    mockService = MockUserService();
    repository = UserRepository(mockService);
  });

  test('getUserById returnează user corect', () async {
    final expectedUser = User(id: '1', name: 'John');
    when(mockService.getUser('1')).thenAnswer((_) async => expectedUser);

    final result = await repository.getUserById('1');

    expect(result.name, 'John');
    verify(mockService.getUser('1')).called(1);
  })
});</code></pre>

      <h2>Publicare în store-uri</h2>
      <h3>Google Play Store</h3>
      <ul>
        <li>Cont Google Developer (o singură taxă de $25)</li>
        <li>APK sau AAB (Android App Bundle)</li>
        <li>Screenshot-uri și descriere</li>
        <li>Review în ~2-24 ore</li>
      </ul>
      <h3>App Store (iOS)</h3>
      <ul>
        <li>Cont Apple Developer ($99/an)</li>
        <li>Build din Flutter pentru iOS simulator</li>
        <li>Certificate și profile de provisioning</li>
        <li>Review în ~1-3 zile</li>
      </ul>
      <h3>Build și deploy cu Flutter</h3>
      <pre><code class="language-bash"># Verifică configurarea
flutter doctor

# Build pentru Android
flutter build apk --release

# Build pentru iOS (necesită macOS)
flutter build ios --release --no-codesign

# Build pentru iOS simulator (pentru testare)
flutter build ios --simulator --no-codesign

# Upload la Google Play (după configurare)
flutter build appbundle --release</code></pre>

      <h2>Pattern-uri arhitectură</h2>
      <h3>Clean Architecture</h3>
      <pre><code class="language-dart">// Structura Clean Architecture
lib/
├── core/               # Cod partajat
│   ├── errors/         # Erori custom
│   ├── usecases/       # Use case base
│   └── utils/          # Utilități
├── features/
│   └── users/
│       ├── data/       # Implementare
│       │   ├── datasources/
│       │   ├── models/
│       │   └── repositories/
│       ├── domain/    # Logica de business
│       │   ├── entities/
│       │   ├── repositories/
│       │   └── usecases/
│       └── presentation/  # UI
│           ├── bloc/
│           ├── pages/
│           └── widgets/
└── injection_container.dart  # Dependency Injection</code></pre>

      <h3>BLoC Pattern</h3>
      <pre><code class="language-dart">// Event
abstract class UserEvent {}
class LoadUsers extends UserEvent {}

class LoadMoreUsers extends UserEvent {}

// State
abstract class UserState {}
class UserInitial extends UserState {}
class UserLoading extends UserState {}
class UserLoaded extends UserState {
  final List&lt;User&gt; users;
  UserLoaded(this.users);
}
class UserError extends UserState {
  final String message;
  UserError(this.message);
}

// Bloc
class UserBloc extends Bloc&lt;UserEvent, UserState&gt; {
  final UserRepository repository;

  UserBloc(this.repository) : super(UserInitial()) {
    on&lt;LoadUsers&gt;(_onLoadUsers);
  }

  Future&lt;void&gt; _onLoadUsers(LoadUsers event, Emitter&lt;UserState&gt; emit) async {
    emit(UserLoading());
    try {
      final users = await repository.getUsers();
      emit(UserLoaded(users));
    } catch (e) {
      emit(UserError(e.toString()));
    }
  }
}

// Utilizare în UI
class UsersPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => UserBloc(UserRepository())..add(LoadUsers()),
      child: BlocBuilder&lt;UserBloc, UserState&gt;(
        builder: (context, state) {
          if (state is UserLoading) {
            return CircularProgressIndicator();
          }
          if (state is UserLoaded) {
            return ListView.builder(
              itemCount: state.users.length,
              itemBuilder: (context, index) => Text(state.users[index].name),
            );
          }
          return SizedBox();
        },
      ),
    );
  }
}</code></pre>

// View
function UsersScreen() {
  const { users, loading, error, refresh } = useUserViewModel();

  if (loading) return &lt;Spinner /&gt;;
  if (error) return &lt;Error message={error} /&gt;;

  return &lt;FlatList data={users} onRefresh={refresh} /&gt;;
}</code></pre>

      <h2>De unde să începi?</h2>
      <p><strong>Pasul 1:</strong> Alege tehnologia (recomand Flutter pentru începători)</p>
      <p><strong>Pasul 2:</strong> Instalează mediul de dezvoltare</p>
      <pre><code class="language-bash"># Instalează Flutter SDK
# Descarcă de pe flutter.dev

# Verifică instalarea
flutter doctor

# Creează proiect
flutter create my_app

# Rulează
cd my_app
flutter run</code></pre>
      <p><strong>Pasul 3:</strong> Învață bazele Dart și widget-urile Flutter</p>
      <p><strong>Pasul 4:</strong> Creează un proiect practic – todo list, weather app, sau tracker</p>
      <p><strong>Pasul 5:</strong> Învață navigație și state management</p>
      <p><strong>Pasul 6:</strong> Adaugă funcționalități native (camera, localizare)</p>
      <p><strong>Pasul 7:</strong> Publică prima ta aplicație!</p>

      <h2>Concluzie</h2>
      <p>Dezvoltarea aplicațiilor mobile este accesibilă oricui are determinare. Cu instrumentele potrivite și practică constantă, poți crea aplicații reale în câteva săptămâni.</p>
      <p>Indiferent de tehnologia aleasă, cel mai important este să începi și să nu te oprești. Structură, widget-uri, state management, API calls – toate aceste concepte devin naturale cu practică.</p>
      <p>Flutter este o excelentă alegere pentru începători, dar odată ce ai învățat conceptele de bază, poți explora și alte tehnologii precum <strong>React Native</strong>, <strong>Kotlin</strong> pentru Android, sau <strong>Swift</strong> pentru iOS. Fiecare tehnologie are avantajele sale, iar cunoașterea multiplelor framework-uri te va face un dezvoltator mai versatil.</p>
      <p><em>Urmărește site-ul pentru tutoriale practice despre dezvoltarea aplicațiilor mobile!</em></p>
    `,
    date: "2026-04-11",
    readTime: "12 min citire",
    tags: ["App Development", "Mobile", "Flutter", "React Native", "Swift", "Kotlin", "State Management", "Performance"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
    author: {
      name: "Ioniță Aurel Mihai",
      avatar: "/icons/profileblog.png"
    }
  }
];
