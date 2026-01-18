import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "ionita.aurel.mihai@example.com",
      link: "mailto:ionita.aurel.mihai@example.com",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+40 7XX XXX XXX",
      link: "tel:+40700000000",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ionita-aurel-mihai",
      link: "https://linkedin.com/in/ionita-aurel-mihai",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ionita-aurel-mihai",
      link: "https://github.com/ionita-aurel-mihai",
    },
  ];

  return (
    <section id="contact" className="section-container bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6">
          Hai să <span className="text-gradient">Colaborăm</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Sunt mereu interesat de proiecte noi și oportunități interesante. 
          Fie că ai o întrebare sau doar vrei să spui bună, nu ezita să mă contactezi!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-1">{contact.label}</div>
                  <div className="text-sm text-muted-foreground break-all">
                    {contact.value}
                  </div>
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
