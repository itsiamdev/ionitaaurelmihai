export interface Certification {
  id: string;
  name: string;
  institution: string;
  logo: string;
  date: string;
  credentialUrl?: string;
  websiteUrl?: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "HTML Certificate",
    institution: "Development Factory",
    logo: "/certification/html.png",
    date: "2025",
    credentialUrl: "/certification/html.png",
    websiteUrl: "https://learn.developmentfactory.ro/certificates/cert_VRGiYKql",
    description: "Pot crea structuri HTML semantice, formulare interactive și asigur accesibilitatea web-ului.",
  },
  {
    id: "2",
    name: "CSS Certificate",
    institution: "Development Factory",
    logo: "/certification/css.png",
    date: "2025",
    credentialUrl: "/certification/css.png",
    websiteUrl: "https://learn.developmentfactory.ro/certificates/cert_gmghAKaz",
    description: "Stilizez pagini web cu CSS modern, folosind flexbox, grid și animații pentru design responsive.",
  },
  {
    id: "3",
    name: "JavaScript Certificate",
    institution: "Development Factory",
    logo: "/certification/js.png",
    date: "2025",
    credentialUrl: "/certification/js.png",
    websiteUrl: "https://learn.developmentfactory.ro/certificates/cert_GeAURmVZ",
    description: "Dezvolt funcționalități interactive cu JavaScript, manipulez DOM-ul și lucrez cu API-uri.",
  },
  {
    id: "4",
    name: "TypeScript Certificate",
    institution: "Development Factory",
    logo: "/certification/ts.png",
    date: "2025",
    credentialUrl: "/certification/ts.png",
    websiteUrl: "https://learn.developmentfactory.ro/certificates/cert_pGOFOZlV",
    description: "Scriu cod TypeScript tipizat pentru aplicații scalabile și întreținere ușoară.",
  },
  {
    id: "5",
    name: "Git Certificate",
    institution: "Development Factory",
    logo: "/certification/git.png",
    date: "2026",
    credentialUrl: "/certification/git.png",
    websiteUrl: "https://learn.developmentfactory.ro/certificates/cert_rBJCeZwg",
    description: "Mă pricep la controlul versiunilor cu Git, inclusiv branching, merging și colaborare în echipă.",
  },
  {
    id: "6",
    name: "Responsive Web Design Certificate",
    institution: "FreeCodeCamp",
    logo: "/certification/responsive web design.png",
    date: "2026",
    credentialUrl: "/certification/responsive web design.png",
    websiteUrl: "https://www.freecodecamp.org/certification/itsiamdev/responsive-web-design",
    description: "Creez site-uri web responsive care se adaptează la orice dispozitiv și dimensionare de ecran.",
  },
];
