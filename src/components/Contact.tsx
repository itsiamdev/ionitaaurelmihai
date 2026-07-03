import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Linkedin, Github, Mail, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  email: z.string().email("Adresa de email este invalidă"),
  message: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        toast.success("Mesajul a fost trimis cu succes!");
        form.reset();
      } else {
        const result = await response.json();
        toast.error(result.error || "A apărut o eroare. Te rugăm să încerci din nou.");
      }
    } catch {
      toast.error("A apărut o eroare. Te rugăm să încerci din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      value: "linkedin.com/in/itsiamdev/",
      link: "https://www.linkedin.com/in/itsiamdev/",
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
    },
  ];

  return (
    <section id="contact" className="section-container bg-card/30">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="mb-6">
          Hai să <span className="text-gradient">Colaborăm</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Sunt deschis la colaborări și proiecte interesante. Dacă ai o idee, o
          propunere sau vrei să discutăm, nu ezita să mă contactezi.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-left">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nume</FormLabel>
                    <FormControl>
                      <Input placeholder="Numele tău" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="nume@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mesaj</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Scrie-ți mesajul aici..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send size={18} className="mr-2" />
                {isSubmitting ? "Se trimite..." : "Trimite mesaj"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex flex-col justify-center space-y-4 text-left">
          <h3 className="text-xl font-semibold mb-2">Rețele sociale</h3>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-primary transition-all duration-300 group"
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
