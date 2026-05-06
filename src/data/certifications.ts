export interface Certification {
  id: string;
  name: string;
  institution: string;
  logo: string;
  date: string;
  credentialUrl?: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "HTML Certificate",
    institution: "Development Factory",
    logo: "public/certification/html.png",
    date: "2024",
    credentialUrl: "public/certification/html.png",
    description: "Pot crea structuri HTML semantice, formulare interactive și asigur accesibilitatea web-ului.",
  },
  {
    id: "2",
    name: "CSS Certificate",
    institution: "Development Factory",
    logo: "public/certification/css.png",
    date: "2024",
    credentialUrl: "public/certification/css.png",
    description: "Stilizez pagini web cu CSS modern, folosind flexbox, grid și animații pentru design responsive.",
  },
  {
    id: "3",
    name: "JavaScript Certificate",
    institution: "Development Factory",
    logo: "public/certification/js.png",
    date: "2024",
    credentialUrl: "public/certification/js.png",
    description: "Dezvolt funcționalități interactive cu JavaScript, manipulez DOM-ul și lucrez cu API-uri.",
  },
  {
    id: "4",
    name: "TypeScript Certificate",
    institution: "Development Factory",
    logo: "public/certification/ts.png",
    date: "2024",
    credentialUrl: "public/certification/ts.png",
    description: "Scriu cod TypeScript tipizat pentru aplicații scalabile și întreținere ușoară.",
  },
  {
    id: "5",
    name: "Git Certificate",
    institution: "Development Factory",
    logo: "public/certification/git.png",
    date: "2024",
    credentialUrl: "public/certification/git.png",
    description: "Mă pricep la controlul versiunilor cu Git, inclusiv branching, merging și colaborare în echipă.",
  },
];
