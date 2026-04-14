import { Linkedin, Github, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ionitaaurel32@gmail.com",
      link: "mailto:ionitaaurel32@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ionita-aurel-mihai-20648536a/",
      link: "https://www.linkedin.com/in/ionita-aurel-mihai-20648536a/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/itsiamdev",
      link: "https://github.com/itsiamdev",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "twitter.com/itsiamdev",
      link: "https://twitter.com/itsiamdev",
    }
  ];

  return (
    <section id="contact" className="section-container bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6">
          Hai să <span className="text-gradient">Colaborăm</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Sunt deschis la colaborări și proiecte interesante. Dacă ai o idee, o
          propunere de colaborare sau vrei să discutăm despre un proiect, nu
          ezita să mă contactezi. Hai să construim ceva împreună!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <contact.icon className="text-primary" size={24} />
              </div>
              <div>
                <div className="font-semibold mb-1">{contact.label}</div>
                <div className="text-sm text-muted-foreground break-all">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
