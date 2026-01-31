/**
 * AI Knowledge Base for Ionita Aurel Mihai's Portfolio
 * This file contains all the information about Aurel that the AI assistant can use to answer questions.
 */

export const aiKnowledgeBase = {
  // Basic Information
  basicInfo: {
    name: "Ionita Aurel Mihai",
    role: "Full Stack Developer & Student",
    location: "Romania",
    tagline: "Pasjonat de crearea de experiențe web excepționale",
    startedCoding: 2020,
    email: "ionitaaurelmihai@gmail.com",
    school: "Liceul Național \"Ștefan cel Mare\" din Târgu Neamț",
    profile: "Științe ale Naturii",
  },

  // About
  about: {
    summary: `Sunt dezvoltator Full-Stack pasionat de construirea de aplicații web moderne, scalabile și ușor de utilizat. Îmi place să transform idei complexe în soluții simple, eficiente și bine structurate.

Am experiență în dezvoltarea de aplicații cu React și TypeScript, integrarea de API-uri complexe și implementarea de soluții cloud-ready, cu accent pe performanță, calitate și bune practici.

Sunt mereu interesat de tehnologii noi și de îmbunătățirea continuă a modului în care scriu cod. În timpul liber explorez framework-uri emergente, contribui la proiecte open-source și împărtășesc cunoștințe cu comunitatea tech.

Sunt deschis colaborărilor și proiectelor care aduc valoare reală și impact pe termen lung.`,

    moreDetails: {
      technologies: [
        "React & TypeScript",
        "Node.js & Express",
        "Supabase & PostgreSQL",
        "Tailwind CSS",
        "Next.js & Vite",
      ],
      passions: [
        "Dezvoltare Web Modernă",
        "Sport",
        "Citit",
        "Open Source",
        "Învățare Continuă",
        "Comunitatea Tech",
      ],
      journey: `Sunt elev în clasa a XI-a la Colegiul Național „Ștefan cel Mare" din Târgu Neamț, la profilul Științe ale Naturii. Sunt pasionat de programare și tehnologie și îmi dedic o mare parte din timp învățării și dezvoltării mele în acest domeniu.

Sunt o persoană motivată, curioasă și perseverentă, mereu interesată să îmi îmbunătățesc abilitățile și să construiesc soluții utile prin cod.`,
    },
  },

  // Skills
  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Supabase",
    ],
    devops: ["Git", "GitHub", "CI/CD", "VS Code"],
    softSkills: [
      "Problem Solving",
      "Team Work",
      "Communication",
      "Agile",
      "Leadership",
    ],
  },

  // Certifications
  certifications: [
    {
      name: "HTML Certificate",
      institution: "Development Factory",
      date: "2024",
      description:
        "Pot crea structuri HTML semantice, formulare interactive și asigur accesibilitatea web-ului.",
    },
    {
      name: "CSS Certificate",
      institution: "Development Factory",
      date: "2024",
      description:
        "Stilizez pagini web cu CSS modern, folosind flexbox, grid și animații pentru design responsive.",
    },
    {
      name: "JavaScript Certificate",
      institution: "Development Factory",
      date: "2024",
      description:
        "Dezvolt funcționalități interactive cu JavaScript, manipulez DOM-ul și lucrez cu API-uri.",
    },
    {
      name: "TypeScript Certificate",
      institution: "Development Factory",
      date: "2024",
      description:
        "Scriu cod TypeScript tipizat pentru aplicații scalabile și întreținere ușoară.",
    },
    {
      name: "Git Certificate",
      institution: "Development Factory",
      date: "2024",
      description:
        "Mă pricep la controlul versiunilor cu Git, inclusiv branching, merging și colaborare în echipă.",
    },
  ],

  // Projects
  projects: [
    {
      name: "Stan-Radu-Gabriel",
      description:
        "Site portofoliu personal al lui Stan Radu Gabriel, elev în clasa a 10-a și membru în Consiliul Elevilor la Colegiul Național 'Ștefan cel Mare'.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/iam269/Stan-Radu-Gabriel",
      liveUrl: "https://iam269.github.io/Stan-Radu-Gabriel/",
      featured: false,
    },
    {
      name: "Green Week",
      description:
        "Platformă digitală pentru protejarea mediului, dezvoltată cu React, care susține acțiuni ecologice și inițiative sustenabile.",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/iam269/greenweek",
      liveUrl: "https://iam269.github.io/greenweek/",
      featured: true,
    },
    {
      name: "Geolocation API",
      description:
        "Aplicație web modernă care folosește GPS și API-ul de Geolocalizare al browserului pentru a afișa în timp real locația utilizatorului.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/iam269/geolocation-api",
      liveUrl: "https://iam269.github.io/geolocation-api/",
      featured: true,
    },
    {
      name: "Christmas Memory",
      description:
        "Aplicație web interactivă și festivă care permite utilizatorilor să creeze, să împărtășească și să retrăiască amintiri de Crăciun.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/iam269/christmas-memory",
      liveUrl: "https://iam269.github.io/christmas-memory/",
      featured: true,
    },
  ],

  // Blog Posts
  blogPosts: [
    {
      title:
        "Algoritmi de bază pentru începători: sortare, căutare și complexitate",
      excerpt:
        "Indiferent de limbajul de programare folosit, algoritmii stau la baza oricărei aplicații. Un algoritm este o succesiune de pași clari care rezolvă o problemă.",
      tags: ["Algoritmi", "Programare", "Sortare", "Căutare", "Complexitate"],
      date: "2026-01-20",
    },
    {
      title: "Cum funcționează HTML, CSS și JavaScript într-o aplicație web",
      excerpt:
        "Atunci când vizităm un website, tot ce vedem și cu care interacționăm este rezultatul colaborării dintre HTML, CSS și JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Web Development", "Începători"],
      date: "2026-01-20",
    },
    {
      title: "Bazele programării: variabile, tipuri de date și funcții",
      excerpt:
        "Programarea poate părea complicată la început, dar orice limbaj de programare se bazează pe câteva concepte fundamentale.",
      tags: ["Programare", "Bazele programării", "C++", "Variabile", "Funcții"],
      date: "2026-01-20",
    },
  ],

  // Contact Information
  contact: {
    facebook: {
      name: "Ionita Aurel Mihai",
      url: "https://www.facebook.com/profile.php?id=61572090980230&locale=ro_RO",
    },
    instagram: {
      username: "@eusuntaurel1",
      url: "https://instagram.com/eusuntaurel1",
    },
    linkedin: {
      username: "linkedin.com/in/ionita-aurel-mihai-20648536a/",
      url: "https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/",
    },
    github: {
      username: "github.com/iam269",
      url: "https://github.com/iam269",
    },
  },

  // Services/Offerings
  services: [
    "Dezvoltare aplicații web complete",
    "Dezvoltare React cu TypeScript",
    "Integrări API și backend",
    "Design și implementare UI/UX",
    "Optimizare performanță web",
    "Consultanță tehnică",
    "Mentenanță și actualizări",
  ],
};

/**
 * Helper function to format the knowledge base for AI context
 */
export function formatKnowledgeForAI(): string {
  const kb = aiKnowledgeBase;

  return `
# Informații despre Ionita Aurel Mihai

## Despre
${kb.about.summary}

## Pasiuni
${kb.about.moreDetails.passions.map((p) => `- ${p}`).join("\n")}

## Tehnologii
- Frontend: ${kb.skills.frontend.join(", ")}
- Backend: ${kb.skills.backend.join(", ")}
- DevOps: ${kb.skills.devops.join(", ")}
- Soft Skills: ${kb.skills.softSkills.join(", ")}

## Certificări
${kb.certifications.map((c) => `- **${c.name}** (${c.institution}, ${c.date}): ${c.description}`).join("\n")}

## Proiecte
${kb.projects.map((p) => `- **${p.name}**: ${p.description} (Tehnologii: ${p.technologies.join(", ")})`).join("\n")}

## Articole Blog
${kb.blogPosts.map((b) => `- **${b.title}** - ${b.excerpt.substring(0, 100)}... (Tags: ${b.tags.join(", ")})`).join("\n")}

## Contact
- Facebook: ${kb.contact.facebook.name}
- Instagram: ${kb.contact.instagram.username}
- LinkedIn: ${kb.contact.linkedin.username}
- GitHub: ${kb.contact.github.username}

## Servicii Oférite
${kb.services.map((s) => `- ${s}`).join("\n")}
`;
}

export default aiKnowledgeBase;
