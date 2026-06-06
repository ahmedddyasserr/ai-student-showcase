import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-2xl text-gradient">
          Portfolio
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/AhmedYasser-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="ml-4 px-4 py-2 rounded-full bg-gradient-brand text-primary-foreground text-xs tracking-widest uppercase font-medium hover:opacity-90 transition-opacity shadow-[var(--shadow-glow)]"
        >
          Check CV
        </a>
      </nav>
    </header>
  );
}