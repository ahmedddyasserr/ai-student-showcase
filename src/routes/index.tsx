import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ahmed Yasser — AI Student & Engineer | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ahmed Yasser, third-year Artificial Intelligence undergraduate at Misr International University. NVIDIA & Huawei certified.",
      },
      { property: "og:title", content: "Ahmed Yasser — AI Portfolio" },
      {
        property: "og:description",
        content:
          "AI undergraduate at MIU. Deep learning, machine learning, and computer vision projects.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
