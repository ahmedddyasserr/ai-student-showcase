import { Brain, Code2, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const features = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Hands-on with deep learning, neural networks, and Huawei's HCIA-AI framework.",
  },
  {
    icon: Code2,
    title: "Machine Learning",
    desc: "Building, training and evaluating models with PyTorch, TensorFlow and scikit-learn.",
  },
  {
    icon: Sparkles,
    title: "Problem Solving",
    desc: "Strong CS fundamentals — algorithms, data structures, and analytical thinking.",
  },
];

export function About() {
  return (
    <section id="about" className="relative pt-32 md:pt-40 pb-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            About Me
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold">
            <span className="text-gradient">Ahmed Yasser</span>
          </h2>
          <p className="mt-4 text-primary/80 font-mono text-sm tracking-wider">
            Open to AI &amp; ML Opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
            <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-primary/40 glow-ring">
              <img
                src={profilePhoto}
                alt="Ahmed Yasser"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a third-year{" "}
              <span className="text-foreground font-medium">
                Artificial Intelligence
              </span>{" "}
              undergraduate at{" "}
              <span className="text-foreground font-medium">
                Misr International University
              </span>
              . Passionate about deep learning, computer vision, and applying AI
              to solve real-world problems. I bridge theory and practice —
              completing certified programs from NVIDIA and Huawei alongside my
              university coursework.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border p-8 transition-all hover:border-primary/50"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}