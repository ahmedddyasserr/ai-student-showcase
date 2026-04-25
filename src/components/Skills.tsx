const groups = [
  {
    title: "AI / ML",
    items: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "PyTorch", "TensorFlow"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "Matplotlib"],
  },
  {
    title: "CS Fundamentals",
    items: ["Data Structures", "Algorithms", "OOP", "Linear Algebra", "Statistics"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Linux"],
  },
  {
    title: "Cloud & Frameworks",
    items: ["Huawei AI Framework", "NVIDIA CUDA", "MindSpore", "Hugging Face"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">
            My Skills
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold">
            <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border p-7 transition-all hover:border-primary/50"
              style={{ background: "var(--gradient-card)" }}
            >
              <h3 className="text-lg font-semibold mb-5 text-foreground">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-background/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}