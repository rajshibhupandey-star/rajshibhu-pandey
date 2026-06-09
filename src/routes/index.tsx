import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Mail, Linkedin, Github } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajshibhu Pandey — Engineering Portfolio" },
      { name: "description", content: "Engineering student, researcher, content creator, mentor, volunteer, and sailor." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "research", label: "Research" },
  { id: "academics", label: "Academics" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Professional Experience" },
  { id: "hobbies", label: "Hobbies" },
  { id: "volunteer", label: "Volunteer" },
];

const NOUNS = ["Student", "Researcher", "Content Creator", "Mentor", "Volunteer", "Sailor"];

const NOUN_DETAIL: Record<string, string> = {
  Student: "Driven by curiosity and rigor, I approach every course as a chance to refine first-principles thinking and build a foundation for solving real engineering problems.",
  Researcher: "I love asking questions the textbook hasn't answered yet — designing experiments, iterating on hypotheses, and translating data into meaningful insight.",
  "Content Creator": "Through writing and video I distill complex engineering concepts for a broader audience, sharpening my own understanding while inspiring others.",
  Mentor: "Guiding younger students reminds me that engineering is a team sport. I focus on listening first and helping others find their own path forward.",
  Volunteer: "Service grounds me. Whether tutoring, organizing drives, or building for community causes, I bring engineering empathy to every project.",
  Sailor: "Time on the water taught me precision, patience, and respect for systems larger than myself — habits that carry into every design I touch.",
};

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [nounIdx, setNounIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setNounIdx((i) => (i + 1) % NOUNS.length);
        setVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className={`font-bold tracking-tight text-lg transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            RP<span className="text-blueprint">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`text-sm font-medium transition-colors hover:text-blueprint ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setNavOpen((o) => !o)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left text-sm font-medium text-foreground hover:text-blueprint py-1"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Rajshibhu Pandey portrait"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-28 px-6 text-center">
          <h1 className="font-display text-cream text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight drop-shadow-2xl animate-fade-up leading-[0.9]">
            Rajshibhu Pandey
          </h1>
          <div className="mt-5 h-8 flex items-center justify-center">
            <span
              className={`text-lg md:text-2xl font-medium text-white/95 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              {NOUNS[nounIdx]}
            </span>
          </div>
        </div>
        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce-down"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </button>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 / About" title="About Me">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm an engineering student with a deep interest in the intersection of
              applied research, systems design, and human-centered problem solving.
              My academic path combines core engineering disciplines with hands-on
              experimentation across the lab and the field.
            </p>
            <p>
              Beyond the classroom, I create content, mentor peers, volunteer in my
              community, and spend time on the water as a sailor. Each role sharpens
              a different muscle — and together they shape the kind of engineer I
              aspire to be.
            </p>
          </div>
          <aside className="md:col-span-2 rounded-lg border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
              At a glance
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Row k="Focus" v="Engineering & Applied Research" />
              <Row k="Location" v="Open to opportunities" />
              <Row k="Interests" v="Robotics, Sustainability, AI" />
              <Row k="Languages" v="English, Hindi" />
            </dl>
          </aside>
        </div>
      </Section>

      {/* CAROUSEL */}
      <Section id="roles" eyebrow="Many hats" title="The roles I play" muted>
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible scrollbar-thin">
          {NOUNS.map((n) => (
            <article
              key={n}
              className="group relative snap-start shrink-0 w-72 lg:w-auto h-64 rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-blueprint group-hover:text-white/80 transition-colors">
                  Role
                </span>
                <div>
                  <h3 className="text-3xl font-bold text-primary group-hover:text-white transition-colors">
                    {n}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/90 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                    {NOUN_DETAIL[n]}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" eyebrow="02 / Research" title="Research & Lab Work">
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="rounded-lg border border-border bg-card p-6 hover:border-blueprint transition-colors">
              <span className="text-xs font-semibold uppercase tracking-widest text-blueprint">Project 0{i}</span>
              <h3 className="mt-3 text-xl font-semibold text-primary">Research Title Placeholder</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Short description of the hypothesis, approach, and outcome. Highlight
                instrumentation, methodology, and the engineering insight gained.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Methodology", "Data Analysis", "Lab"].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ACADEMICS */}
      <Section id="academics" eyebrow="03 / Academics" title="Academics & Skills" muted>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Major" body="Engineering — discipline & concentration placeholder." />
          <Card title="Coursework" body="Linear Algebra, Thermodynamics, Circuits, Mechanics of Materials, Programming, Controls." />
          <Card title="Technical Skills" body="MATLAB, Python, SolidWorks, CAD, LabVIEW, C/C++, Git." />
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" eyebrow="04 / Leadership" title="Leadership">
        <ol className="relative border-l border-border ml-3 space-y-8">
          {[1, 2, 3].map((i) => (
            <li key={i} className="pl-6 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blueprint ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-widest text-blueprint">Year — Year</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">Leadership Role Placeholder</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Short description of the role, responsibilities, and measurable impact.
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="05 / Experience" title="Professional Experience" muted>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary">Role Title</h3>
                  <p className="text-sm text-steel">Company / Organization</p>
                </div>
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">Year</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Concise summary of responsibilities, technologies used, and outcomes achieved.
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* HOBBIES */}
      <Section id="hobbies" eyebrow="06 / Hobbies" title="Hobbies & Interests">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Sailing", "Photography", "Reading", "Hiking"].map((h) => (
            <div key={h} className="aspect-square rounded-lg bg-secondary border border-border flex items-end p-4 hover:border-blueprint transition-colors">
              <span className="font-semibold text-primary">{h}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* VOLUNTEER */}
      <Section id="volunteer" eyebrow="07 / Volunteer" title="Volunteer Work" muted>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-lg overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] bg-secondary" />
              <div className="p-5">
                <h3 className="font-semibold text-primary">Volunteer Initiative</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Brief description of the cause, role, and contribution to the community.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="font-bold text-primary">Rajshibhu Pandey</p>
            <p className="text-sm text-muted-foreground mt-1">Engineering · Research · Curiosity in motion.</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:hello@example.com" className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors" aria-label="Email"><Mail size={18} /></a>
            <a href="#" className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors" aria-label="GitHub"><Github size={18} /></a>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rajshibhu Pandey. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({
  id, eyebrow, title, children, muted = false,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={`py-24 ${muted ? "bg-surface" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blueprint">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary text-balance">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-foreground font-medium text-right">{v}</dd>
    </div>
  );
}
