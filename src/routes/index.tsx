import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Radio,
  Server,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return <>{text.split(" ").map((w, i) => <span key={i} className="split-word"><span style={{ animationDelay: `${delay + i * 90}ms` }}>{w}</span>{" "}</span>)}</>;
}
import portrait from "@/assets/hari-portrait.jpg.asset.json";
import resume from "@/assets/hari-prasanth-resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hari Prasanth S | Network Engineer | Network Support | NOC | CCNA | Linux" },
      { name: "description", content: "Hari Prasanth S is an AI & Data Science graduate with skills in Network Engineering, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, Azure, and IT Infrastructure." },
      { property: "og:title", content: "Hari Prasanth S | Network Engineer | Network Support | NOC | CCNA | Linux" },
      { property: "og:description", content: "Hari Prasanth S is an AI & Data Science graduate with skills in Network Engineering, Network Support, NOC, CCNA, Linux, Cloud Computing, AWS, Azure, and IT Infrastructure." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    icon: Network,
    title: "College Network Infrastructure",
    label: "Cisco Packet Tracer",
    description: "A secure campus network with VLANs, inter-VLAN routing, and DHCP—designed for reliable communication across departments.",
    outcome: "Improved security & connectivity",
  },
  {
    number: "02",
    icon: Database,
    title: "Recruitment Management System",
    label: "MySQL",
    description: "A structured system for job postings, applications, interviews, and recruitment records using optimized queries and procedures.",
    outcome: "Clearer, faster data management",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Railway Station Navigation",
    label: "UI · Location Mapping",
    description: "An intuitive navigation experience helping travellers locate platforms, facilities, and essential station services efficiently.",
    outcome: "30% less navigation time",
  },
  {
    number: "04",
    icon: Server,
    title: "Student Management System",
    label: "MySQL",
    description: "A centralized platform for student profiles, enrollment, attendance, and academic records with efficient retrieval workflows.",
    outcome: "40% better retrieval efficiency",
  },
];

const experience = [
  { date: "Dec 2025 — Jun 2026", company: "BDreamz Global Solutions", role: "Cloud Computing Intern", copy: "Supported AWS and Azure deployments, monitoring, troubleshooting, Docker, Kubernetes, Linux, and DevOps workflows." },
  { date: "Jun 2025 — Dec 2025", company: "Supernova AI", role: "Sales Audit Agent", copy: "Audited sales records across business units, improving reporting accuracy by 28% and reducing manual review by 20%." },
  { date: "Jul 2023 — Aug 2023", company: "VGM Soft Tech", role: "Web Developer Intern", copy: "Built and tested a responsive commerce experience, reducing interface defects by 35% through debugging and cross-browser testing." },
];

function PortraitWaves() {
  const bars = Array.from({ length: 48 });
  return (
    <div className="portrait-waves relative aspect-square w-64 sm:w-80 lg:w-[26rem]">
      {[0, 1, 2].map((i) => <span key={i} className="wave-ripple" style={{ animationDelay: `${i * 1.1}s` }} />)}
      {bars.map((_, i) => (
        <span key={i} className="eq-holder" style={{ transform: `rotate(${i * 7.5}deg)` }}>
          <span className="eq-bar" style={{ animationDelay: `${(i * 137) % 900}ms`, animationDuration: `${700 + ((i * 53) % 600)}ms` }} />
        </span>
      ))}
      <div className="absolute inset-[16%] overflow-hidden rounded-full border-2 border-primary shadow-2xl">
        <img src="/hariprasanth.jpg" alt="Portrait of Hari Prasanth" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => { window.removeEventListener("scroll", update); io.disconnect(); };
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#top" className="font-display text-xl font-bold">HP<span className="text-primary">.</span></a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
            <a className="nav-link" href="#about">About</a><a className="nav-link" href="#work">Work</a><a className="nav-link" href="#experience">Experience</a><a className="nav-link" href="#contact">Contact</a>
          </div>
          <Button asChild size="sm"><a href="#contact"><Mail /> Contact</a></Button>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-[94vh] items-center overflow-hidden pt-24">
        <div className="hero-overlay absolute inset-0" />
        <div className="network-grid absolute inset-0 opacity-30" style={{ transform: `translate3d(0, ${scrollY * 0.08}px, 0)` }} />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div className="order-2 max-w-4xl animate-fade-in lg:order-1">
            <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary"><span className="status-dot" /> Available for network & infrastructure roles</div>
            <p className="mb-3 font-mono text-sm text-muted-foreground">Hello, I’m</p>
            <h1 className="font-display text-6xl font-bold leading-[0.9] sm:text-8xl lg:text-[7.5rem]"><SplitText text="Hari" /><br /><span className="text-primary"><SplitText text="Prasanth." delay={200} /></span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">Network engineer building stable infrastructure, resolving complex faults, and keeping every connection secure.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#work">View my work <ArrowDown /></a></Button>
              <Button asChild size="lg" variant="outline"><a href={resume.url} download>Résumé <Download /></a></Button>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6 text-sm">
              <div className="flex items-center gap-2"><Radio className="icon-float h-4 w-4 text-primary" /><span className="font-mono text-xs uppercase tracking-widest">Signal established</span></div>
              <div><dt className="text-xs text-muted-foreground">Based in</dt><dd className="font-semibold">Coimbatore, TN</dd></div>
              <div><dt className="text-xs text-muted-foreground">Focus</dt><dd className="font-semibold">Networks · Linux · Cloud</dd></div>
              <div><dt className="text-xs text-muted-foreground">Education</dt><dd className="font-semibold">B.Tech AI & DS</dd></div>
            </dl>
          </div>
          <div className="order-1 flex justify-center lg:order-2" style={{ transform: `translate3d(0, ${scrollY * -0.1}px, 0)` }}>
            <PortraitWaves />
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-border bg-surface py-24 sm:py-32">
        <div className="pointer-events-none absolute right-[-5rem] top-8 font-display text-[15rem] font-bold leading-none text-foreground/[0.025]" style={{ transform: `translate3d(0, ${(scrollY - 600) * 0.12}px, 0)` }}>CONNECTED</div>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
          <div className="reveal"><p className="section-kicker">01 / Profile</p><h2 className="section-title">Built to keep<br />systems moving.</h2></div>
          <div>
            <p className="max-w-3xl text-2xl leading-relaxed sm:text-3xl">I turn network complexity into dependable infrastructure—combining hands-on troubleshooting with a calm, methodical approach.</p>
            <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
              {[['28%', 'Reporting accuracy'], ['35%', 'Fewer UI defects'], ['40%', 'Faster data retrieval']].map(([value, label]) => <div key={value} className="bg-surface p-7"><strong className="font-display text-4xl text-primary">{value}</strong><p className="mt-2 text-sm text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-ink-foreground">
        <div className="marquee-track flex w-max items-center gap-8 font-display text-3xl font-bold uppercase sm:text-5xl">
          {["TCP/IP", "Routing & Switching", "Linux", "VLAN", "DHCP & DNS", "AWS & Azure", "Docker", "Kubernetes", "TCP/IP", "Routing & Switching", "Linux", "VLAN"].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-8 whitespace-nowrap"><span>{item}</span><span className="icon-spin inline-block text-primary">✦</span></span>)}
        </div>
      </section>

      <section id="work" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mb-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div className="reveal"><p className="section-kicker">02 / Selected work</p><h2 className="section-title">Systems with purpose.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Projects across networking, structured data, and accessible digital experiences.</p></div>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {projects.map(({ number, icon: Icon, title, label, description, outcome }) => <article key={number} className="reveal project-card group bg-background p-7 sm:p-10"><div className="mb-16 flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">/{number}</span><Icon className="icon-float h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" /></div><p className="font-mono text-xs uppercase tracking-widest text-primary">{label}</p><h3 className="mt-4 max-w-md font-display text-3xl font-bold sm:text-4xl">{title}</h3><p className="mt-5 max-w-lg leading-7 text-muted-foreground">{description}</p><div className="mt-8 flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold"><CheckCircle2 className="text-primary" />{outcome}</div></article>)}
          </div>
        </div>
      </section>

      <section id="experience" className="border-y border-border bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-10"><div className="reveal"><p className="section-kicker">03 / Experience</p><h2 className="section-title">Learning by<br />building.</h2><div className="mt-10 flex gap-4 text-primary"><Cloud className="icon-float" /><Terminal className="icon-float-delay" /><Code2 className="icon-float" /></div></div><div>{experience.map((item) => <article key={item.company} className="reveal experience-row grid gap-3 border-t border-border py-8 sm:grid-cols-[170px_1fr]"><p className="font-mono text-xs text-muted-foreground">{item.date}</p><div><p className="text-sm font-semibold text-primary">{item.role}</p><h3 className="mt-1 font-display text-2xl font-bold">{item.company}</h3><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{item.copy}</p></div></article>)}</div></div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
        <div className="network-grid absolute inset-0 opacity-10" style={{ transform: `translate3d(0, ${(scrollY - 2200) * 0.09}px, 0)` }} />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-10">
          <div className="reveal">
            <p className="section-kicker">04 / Let’s connect</p>
            <h2 className="mt-7 font-display text-5xl font-bold leading-none sm:text-6xl lg:text-7xl">Have a network challenge?<br /><span className="text-primary">Let’s solve it.</span></h2>
            <p className="mt-6 max-w-md text-ink-muted">Share your project, role, or infrastructure problem and I’ll get back to you within a day.</p>
            <div className="mt-10 space-y-4 text-sm">
              <a href="mailto:shariprasanth28@gmail.com" className="flex items-center gap-3 hover:text-primary"><Mail className="icon-float text-primary" /> shariprasanth28@gmail.com</a>
              <a href="https://www.linkedin.com/in/hariprasanth32/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin className="icon-float-delay text-primary" /> linkedin.com/in/hariprasanth32</a>
              <a href="https://github.com/hariprasanth32" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Github className="icon-float text-primary" /> github.com/hariprasanth32</a>
            </div>
          </div>
          <div className="reveal"><ContactForm /></div>
        </div>
      </section>

      <footer className="bg-ink px-5 pb-8 text-ink-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-ink-border pt-8 text-xs text-ink-muted sm:flex-row"><span>© 2026 Hari Prasanth S</span><span>Coimbatore · India</span></div></footer>
    </main>
  );
}