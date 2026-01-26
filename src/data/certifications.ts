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
    logo: "/html.png",
    date: "2024",
    credentialUrl: "/html.png",
    description: "Pot crea structuri HTML semantice, formulare interactive și asigur accesibilitatea web-ului.",
  },
  {
    id: "2",
    name: "CSS Certificate",
    institution: "Development Factory",
    logo: "/css.png",
    date: "2024",
    credentialUrl: "/css.png",
    description: "Stilizez pagini web cu CSS modern, folosind flexbox, grid și animații pentru design responsive.",
  },
  {
    id: "3",
    name: "JavaScript Certificate",
    institution: "Development Factory",
    logo: "/js.png",
    date: "2024",
    credentialUrl: "/js.png",
    description: "Dezvolt funcționalități interactive cu JavaScript, manipulez DOM-ul și lucrez cu API-uri.",
  },
  {
    id: "4",
    name: "TypeScript Certificate",
    institution: "Development Factory",
    logo: "/ts.png",
    date: "2024",
    credentialUrl: "/ts.png",
    description: "Scriu cod TypeScript tipizat pentru aplicații scalabile și întreținere ușoară.",
  },
  {
    id: "5",
    name: "Git Certificate",
    institution: "Development Factory",
    logo: "/git.png",
    date: "2024",
    credentialUrl: "/git.png",
    description: "Mă pricep la controlul versiunilor cu Git, inclusiv branching, merging și colaborare în echipă.",
  },
];
