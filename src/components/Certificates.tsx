import certNvidia from "@/assets/cert-nvidia.png";
import certHuawei from "@/assets/cert-huawei-hcia.jpg";
import certMiu from "@/assets/cert-miu.jpg";
import { Award, Calendar } from "lucide-react";

const certificates = [
  {
    image: certNvidia,
    issuer: "NVIDIA",
    title: "Fundamentals of Deep Learning",
    date: "August 11, 2025",
    type: "Certificate of Competency",
    description:
      "Demonstrated competence in the fundamentals of deep learning — building and training neural networks, working with image data, and applying transfer learning.",
    skills: ["Deep Learning", "Neural Networks", "Transfer Learning", "CNNs"],
  },
  {
    image: certHuawei,
    issuer: "Huawei ICT Academy",
    title: "HCIA-AI V3.5 Course",
    date: "August 24, 2025",
    type: "Certificate of Completion",
    description:
      "Completed the study and exam of the HCIA-AI V3.5 course covering AI overview, Python programming, machine learning, deep learning and the MindSpore framework.",
    skills: ["Machine Learning", "MindSpore", "AI Theory", "Python"],
  },
  {
    image: certMiu,
    issuer: "MIU Continuing Education Center",
    title: "Huawei Certified ICT Associate — AI (HCIA-AI)",
    date: "Summer 2025",
    type: "Training Program",
    description:
      "Successfully completed the HCIA-AI training program hosted by Misr International University, Faculty of Computer Science.",
    skills: ["AI Training", "Huawei", "MIU", "Hands-on Labs"],
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            My Achievements
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Industry-recognized credentials from world-leading AI organizations.
          </p>
        </div>

        <div className="space-y-12">
          {certificates.map((c, i) => (
            <article
              key={c.title}
              className={`group grid md:grid-cols-2 gap-8 items-center rounded-3xl border border-border overflow-hidden transition-all hover:border-primary/50 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background/40">
                <img
                  src={c.image}
                  alt={`${c.issuer} — ${c.title}`}
                  loading="lazy"
                  className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
                  <Award className="h-3.5 w-3.5" />
                  {c.type}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                  {c.title}
                </h3>
                <p className="text-accent font-medium mb-4">{c.issuer}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                  <Calendar className="h-4 w-4" />
                  {c.date}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {c.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/30 text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}