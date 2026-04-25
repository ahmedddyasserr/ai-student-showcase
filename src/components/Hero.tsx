import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-sm md:text-base text-primary tracking-[0.3em] uppercase mb-6">
          &lt;AI Engineer / Student&gt;
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
          Turning <span className="text-gradient">Data</span>
          <br />
          into <span className="text-gradient">Intelligence</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          AI undergraduate at Misr International University, building intelligent
          systems with deep learning, computer vision, and modern AI frameworks.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#certificates"
            className="px-8 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity shadow-[var(--shadow-glow)]"
          >
            View Certificates
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium tracking-wide hover:bg-card transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest uppercase animate-pulse">
        Scroll ↓
      </div>
    </section>
  );
}