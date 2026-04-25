import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmed.yasser@miuegypt.edu.eg",
    href: "mailto:ahmed.yasser@miuegypt.edu.eg",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ahmedyasser",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedyasser",
    href: "https://linkedin.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-secondary/20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Open to internships, research collaborations, and AI projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? "a" : "div";
            return (
              <Wrapper
                key={label}
                {...(href ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                className="group flex items-center gap-5 rounded-2xl border border-border p-6 transition-all hover:border-primary/50"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {label}
                  </p>
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <footer className="mt-20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Yasser. Built with passion for AI.
        </footer>
      </div>
    </section>
  );
}