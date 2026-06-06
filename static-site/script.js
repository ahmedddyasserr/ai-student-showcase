// Navbar scroll effect
const navbar = document.getElementById("navbar");
const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll);

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Skills
const skillGroups = [
  { title: "AI / ML", items: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "PyTorch", "TensorFlow"] },
  { title: "Languages", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
  { title: "Frameworks & Libraries", items: ["scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "Matplotlib"] },
  { title: "CS Fundamentals", items: ["Data Structures", "Algorithms", "OOP", "Linear Algebra", "Statistics"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Linux"] },
  { title: "Cloud & Frameworks", items: ["Huawei AI Framework", "NVIDIA CUDA", "MindSpore", "Hugging Face"] },
];
document.getElementById("skill-grid").innerHTML = skillGroups
  .map(
    (g) => `<div class="skill-card"><h3>${g.title}</h3><div class="tags">${g.items
      .map((i) => `<span class="tag">${i}</span>`)
      .join("")}</div></div>`
  )
  .join("");

// Certificates
const certificates = [
  {
    image: "assets/cert-nvidia.png",
    issuer: "NVIDIA",
    title: "Fundamentals of Deep Learning",
    date: "August 11, 2025",
    type: "Certificate of Competency",
    description:
      "Demonstrated competence in the fundamentals of deep learning — building and training neural networks, working with image data, and applying transfer learning.",
    skills: ["Deep Learning", "Neural Networks", "Transfer Learning", "CNNs"],
  },
  {
    image: "assets/cert-huawei-hcia.jpg",
    issuer: "Huawei ICT Academy",
    title: "HCIA-AI V3.5 Course",
    date: "August 24, 2025",
    type: "Certificate of Completion",
    description:
      "Completed the study and exam of the HCIA-AI V3.5 course covering AI overview, Python programming, machine learning, deep learning and the MindSpore framework.",
    skills: ["Machine Learning", "MindSpore", "AI Theory", "Python"],
  },
  {
    image: "assets/cert-miu.jpg",
    issuer: "MIU Continuing Education Center",
    title: "Huawei Certified ICT Associate — AI (HCIA-AI)",
    date: "Summer 2025",
    type: "Training Program",
    description:
      "Successfully completed the HCIA-AI training program hosted by Misr International University, Faculty of Computer Science.",
    skills: ["AI Training", "Huawei", "MIU", "Hands-on Labs"],
  },
];
document.getElementById("cert-list").innerHTML = certificates
  .map(
    (c, i) => `
    <article class="cert ${i % 2 === 1 ? "reverse" : ""}">
      <div class="cert-img"><img src="${c.image}" alt="${c.issuer} — ${c.title}" loading="lazy" /></div>
      <div class="cert-body">
        <div class="cert-type">★ ${c.type}</div>
        <h3>${c.title}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        <div class="cert-date">📅 ${c.date}</div>
        <p class="cert-desc">${c.description}</p>
        <div class="tags">${c.skills.map((s) => `<span class="tag">${s}</span>`).join("")}</div>
      </div>
    </article>`
  )
  .join("");

// Contact
const contacts = [
  { label: "Email", value: "ahmeddyasserr23@gmail.com", href: "mailto:ahmeddyasserr23@gmail.com", icon: "@" },
  { label: "Location", value: "Cairo, Egypt", icon: "◎" },
  { label: "GitHub", value: "github.com/ahmedddyasserr", href: "https://github.com/ahmedddyasserr", icon: "GH" },
  { label: "LinkedIn", value: "linkedin.com/in/ahmed-yasser", href: "https://www.linkedin.com/in/ahmed-yasser-15892a31a", icon: "in" },
];
document.getElementById("contact-grid").innerHTML = contacts
  .map((c) => {
    const inner = `<div class="icon">${c.icon}</div><div><p class="label">${c.label}</p><p class="value">${c.value}</p></div>`;
    return c.href
      ? `<a class="contact-card" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${inner}</a>`
      : `<div class="contact-card">${inner}</div>`;
  })
  .join("");