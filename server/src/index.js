import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '../data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Articole pentru email-ul de bun venit
const WELCOME_ARTICLES = [
  {
    slug: "algoritmi-de-baza-pentru-incepatori-sortare-cautare-complexitate",
    title: "Algoritmi de bază pentru începători",
    excerpt: "Indiferent de limbajul de programare folosit, algoritmii stau la baza oricărei aplicații. Un algoritm este o succesiune de pași clari care rezolvă o problemă.",
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
      <p>Înțelegerea algoritmilor de bază este un pas important în formarea oricărui programator.</p>

      <p><em>Acest articol face parte dintr-o serie dedicată începătorilor în programare.</em></p>
    `,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=450&fit=crop",
    tags: ["Algoritmi", "Programare", "Sortare", "Căutare"]
  },
  {
    slug: "cum-functioneaza-html-css-javascript",
    title: "Cum funcționează HTML, CSS și JavaScript",
    excerpt: "Atunci când vizităm un website, tot ce vedem și cu care interacționăm este rezultatul colaborării dintre HTML, CSS și JavaScript.",
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
      <pre><code class="language-html"><button onclick="afiseazaMesaj()">Click aici</button>

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

      <h2>Concluzie</h2>
      <p>HTML, CSS și JavaScript sunt fundamentul web developmentului.</p>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"]
  },
  {
    slug: "bazele-programarii",
    title: "Bazele programării: variabile, tipuri de date și funcții",
    excerpt: "Programarea poate părea complicată la început, dar orice limbaj de programare se bazează pe câteva concepte fundamentale.",
    content: `
      <h2>Ce este o variabilă?</h2>
      <p>O variabilă este un „container" în care stocăm o valoare ce poate fi folosită sau modificată pe parcursul unui program.</p>
      <p>Gândește-te la o variabilă ca la o cutie etichetată, în care pui o informație.</p>
      <p><strong>Exemplu în C++:</strong></p>
      <pre><code class="language-cpp">int varsta = 16;</code></pre>

      <h2>Tipuri de date de bază</h2>
      <p>Tipurile de date definesc <strong>ce fel de informație</strong> poate stoca o variabilă.</p>
      <h3>Cele mai comune tipuri de date:</h3>
      <ul>
        <li><strong>int</strong> – numere întregi</li>
        <li><strong>float / double</strong> – numere zecimale</li>
        <li><strong>char</strong> – un singur caracter</li>
        <li><strong>string</strong> – text</li>
        <li><strong>bool</strong> – adevărat sau fals</li>
      </ul>

      <h2>Ce este o funcție?</h2>
      <p>O funcție este un bloc de cod care îndeplinește o anumită sarcină și poate fi reutilizat de mai multe ori.</p>
      <p><strong>Exemplu de funcție în C++:</strong></p>
      <pre><code class="language-cpp">int suma(int a, int b) {
    return a + b;
}</code></pre>

      <h2>Concluzie</h2>
      <p>Dacă înțelegi bine aceste baze, restul programării devine mult mai ușor.</p>
    `,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    tags: ["Programare", "Bazele programării", "C++"]
  }
];

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password',
  },
});

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function getSubscribers() {
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function saveSubscribers(subscribers) {
  await ensureDataDir();
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getRandomArticle() {
  const randomIndex = Math.floor(Math.random() * WELCOME_ARTICLES.length);
  return WELCOME_ARTICLES[randomIndex];
}

function generateWelcomeEmail(article) {
  const tagsHtml = article.tags.map(tag => `<span style="background: #e0e0e0; padding: 4px 8px; border-radius: 4px; font-size: 12px; margin-right: 5px;">${tag}</span>`).join(' ');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Bine ai venit!</h1>
    <p style="color: white; margin-top: 10px;">Ai fost abonat cu succes la newsletter</p>
  </div>

  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
    <p style="font-size: 16px;">Ca parte a bun venit, ți-am pregătit un articol special:</p>

    <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-top: 20px;">
      ${article.image ? `<img src="${article.image}" alt="${article.title}" style="width: 100%; height: 200px; object-fit: cover;">` : ''}
      <div style="padding: 20px;">
        <h2 style="margin: 0 0 10px 0; color: #333;">${article.title}</h2>
        <p style="color: #666; margin-bottom: 15px;">${article.excerpt}</p>
        <div style="margin-bottom: 15px;">${tagsHtml}</div>
        <a href="https://ionitaaurelmihai.com/blog/${article.slug}" style="display: inline-block; background: #667eea; color: white; padding: 10px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Citește articolul complet</a>
      </div>
    </div>

    <p style="margin-top: 30px; color: #666; font-size: 14px;">
      Vei primi în continuare cele mai noi articole și tutoriale direct în inbox-ul tău.
    </p>

    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

    <p style="color: #999; font-size: 12px; text-align: center;">
      Dacă nu te-ai abonat la acest newsletter, poți ignora acest email sau te poți dezabona <a href="https://ionitaaurelmihai.com/unsubscribe">aici</a>.
    </p>
  </div>
</body>
</html>
  `;
}

// ============ ENDPOINTS ============

app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email-ul este obligatoriu' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Email-ul nu este valid' });
    }

    const subscribers = await getSubscribers();

    if (subscribers.find(sub => sub.email === email)) {
      return res.status(400).json({ error: 'Această adresă de email este deja abonată' });
    }

    const newSubscriber = {
      id: Date.now().toString(),
      email,
      subscribedAt: new Date().toISOString(),
      confirmed: false,
    };

    subscribers.push(newSubscriber);
    await saveSubscribers(subscribers);

    // Trimite email de bun venit cu un articol
    const article = getRandomArticle();
    const welcomeHtml = generateWelcomeEmail(article);

    try {
      console.log(`Trimit email de bun venit către ${email} cu articolul: ${article.title}`);
      
      await transporter.sendMail({
        from: '"Newsletter" <your-email@gmail.com>',
        to: email,
        subject: `Bine ai venit! ${article.title}`,
        html: welcomeHtml,
      });
      
      console.log(`✓ Email de bun venit trimis către ${email}`);
    } catch (emailError) {
      console.error('Eroare la trimiterea emailului de bun venit:', emailError.message);
      // Nu blocăm abonarea dacă emailul nu se trimite
    }

    res.json({
      success: true,
      message: 'Te-ai abonat cu succes! Verifică email-ul pentru a citi articolul de bun venit.',
    });
  } catch (error) {
    console.error('Eroare la abonare:', error);
    res.status(500).json({ error: 'A apărut o eroare la abonare' });
  }
});

app.post('/api/newsletter/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email-ul este obligatoriu' });
    }

    const subscribers = await getSubscribers();
    const filteredSubscribers = subscribers.filter(sub => sub.email !== email);

    if (subscribers.length === filteredSubscribers.length) {
      return res.status(404).json({ error: 'Această adresă de email nu este abonată' });
    }

    await saveSubscribers(filteredSubscribers);

    res.json({ success: true, message: 'Te-ai dezabonat cu succes.' });
  } catch (error) {
    console.error('Eroare la dezabonare:', error);
    res.status(500).json({ error: 'A apărut o eroare la dezabonare' });
  }
});

app.get('/api/newsletter/subscribers', async (req, res) => {
  try {
    const { adminKey } = req.query;

    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Acces neautorizat' });
    }

    const subscribers = await getSubscribers();
    res.json({ count: subscribers.length, subscribers });
  } catch (error) {
    console.error('Eroare la obținerea abonaților:', error);
    res.status(500).json({ error: 'A apărut o eroare' });
  }
});

app.post('/api/newsletter/send', async (req, res) => {
  try {
    const { subject, content, adminKey } = req.body;

    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Acces neautorizat' });
    }

    if (!subject || !content) {
      return res.status(400).json({ error: 'Subiectul și conținutul sunt obligatorii' });
    }

    const subscribers = await getSubscribers();

    if (subscribers.length === 0) {
      return res.status(400).json({ error: 'Nu există abonați' });
    }

    const emails = subscribers.map(sub => sub.email);

    const results = [];
    for (const email of emails) {
      try {
        await transporter.sendMail({
          from: '"Newsletter" <your-email@gmail.com>',
          to: email,
          subject,
          html: content,
        });
        results.push({ email, status: 'sent' });
      } catch (emailError) {
        console.error(`Eroare la trimiterea către ${email}:`, emailError);
        results.push({ email, status: 'failed', error: emailError.message });
      }
    }

    const sentCount = results.filter(r => r.status === 'sent').length;

    res.json({
      success: true,
      message: `Newsletter trimis către ${sentCount}/${emails.length} abonați`,
      results,
    });
  } catch (error) {
    console.error('Eroare la trimiterea newsletter-ului:', error);
    res.status(500).json({ error: 'A apărut o eroare la trimiterea newsletter-ului' });
  }
});

app.listen(PORT, () => {
  console.log(`Server newsletter pornit pe portul ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
