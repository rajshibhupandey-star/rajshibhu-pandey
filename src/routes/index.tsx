import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronDown, Menu, X, Mail, Linkedin, Github, Phone, Sun, Moon,
  ChevronLeft, ChevronRight, ExternalLink, FileText,
} from "lucide-react";
import h1 from "@/assets/photos/img_7193.jpg.asset.json";
import h2 from "@/assets/photos/img_4999_v2.jpg.asset.json";
import h3 from "@/assets/photos/img_8814.jpeg.asset.json";
import h4 from "@/assets/photos/img_6220.jpg.asset.json";
import h5 from "@/assets/photos/img_6176.jpg.asset.json";
import pLatch from "@/assets/projects/latch.jpg.asset.json";
import pCfd from "@/assets/projects/cfd.jpg.asset.json";
import pPorsche from "@/assets/projects/porsche.jpg.asset.json";
import pEngine from "@/assets/projects/engine.jpg.asset.json";
import pSlicer from "@/assets/projects/slicer.jpg.asset.json";
import pProsthetic from "@/assets/projects/prosthetic.jpg.asset.json";
import pChemistry from "@/assets/projects/chemistry.jpg.asset.json";

const HERO_PHOTOS = [h1, h2, h3, h4, h5];

const PORTFOLIO_URL = "https://drive.google.com/file/d/1MRHgUNuyO2Ax6Y-BtzqytNFCwrSOFHOA/view?usp=sharing";
const TRANSCRIPT_URL = "https://drive.google.com/file/d/1hNM6yKpboBbn7ZJZiUk4K9lZnMazo-ZA/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/rajshibhu-pandey/";
const EMAIL = "rajshibhu.pandey@ufl.edu";
const PHONE = "352-219-0275";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajshibhu Pandey — Mechanical Engineering Portfolio" },
      { name: "description", content: "Mechanical Engineering student at the University of Florida. Projects, leadership, and experience." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Professional Experience" },
  { id: "volunteer", label: "Volunteering" },
];

const NOUNS = ["Student", "Researcher", "Content Creator", "Mentor", "Volunteer", "Sailor"];

type Project = {
  title: string;
  image: { url: string };
  what: string[];
  how: string[];
  result: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Latch Mechanism for Friction Measurement",
    image: pLatch,
    what: [
      "Bio-inspired latch mechanism for measuring friction between contact surfaces.",
      "Led the designing and manufacturing of the mechanism parts.",
    ],
    how: [
      "Designed parts in SOLIDWORKS.",
      "Manufactured using manual mill, lathe, and CNC machining.",
      "High-speed camera setup used to measure deflection between the contact cylinder and beam.",
    ],
    result: [
      "Validated the experimental data under PhD-student guidance — friction coefficient of 0.477.",
      "Hands-on experience with manual mill, lathe, and CNC machining.",
    ],
  },
  {
    title: "Motorbike Helmet CFD Analysis",
    image: pCfd,
    what: [
      "Optimized aerodynamic parameters of my motorbike helmet to reduce drag and increase downward lift.",
      "Built a highly accurate 3D helmet model in ANSYS Discovery.",
    ],
    how: [
      "Generated mesh in ANSYS Discovery.",
      "Simulated airflow at 30 m/s in ANSYS Fluent using k-omega SST turbulence model.",
      "Redesigned geometry — elongated tail, reduced frontal area, added rear spoiler.",
    ],
    result: [
      "21.2% reduction in drag coefficient.",
      "21.6% increase in downward lift — better stability at high speed.",
      "Gained comprehensive ANSYS Workbench and CFD best-practice knowledge.",
    ],
  },
  {
    title: "Porsche 911 GT2 (993) Design (in progress)",
    image: pPorsche,
    what: [
      "Designing a detailed 3D model of the Porsche 911 GT2 entirely from scratch.",
      "Modified downloaded blueprints to clarify dimensions and resolve inconsistencies.",
    ],
    how: [
      "Modeled as a single part in SOLIDWORKS.",
      "Created reference planes and sketches aligned with scaled blueprints.",
      "Surface modeling — loft, sweep, curves, surface features — for complex curves.",
    ],
    result: [
      "Accurate representation of the classic Porsche model.",
      "Enhanced surface-modeling and troubleshooting skills in SOLIDWORKS.",
    ],
  },
  {
    title: "Single Cylinder Air Engine (CNC + Manual)",
    image: pEngine,
    what: [
      "Manufactured a 5-part fully functional air engine using CNC machining and 3D printing for the ACE CNC machining workshop.",
    ],
    how: [
      "Created 3D models in Fusion 360.",
      "Generated optimized toolpaths for CNC operations (contour milling, drilling).",
      "Executed G&M codes on a HAAS Mini Mill.",
      "Inspected with calipers and micrometers — 100% compliance with design specs.",
    ],
    result: [
      "Fully operational engine and ACE CNC machining certificate.",
      "CNC, Fusion 360, manual machining, and DFM experience.",
    ],
  },
  {
    title: "Air-Powered Vegetable Slicer Design Report",
    image: pSlicer,
    what: [
      "User-friendly air-powered vegetable slicer with adjustable slice thickness — focused on manufacturability and cost efficiency.",
    ],
    how: [
      "Engineered a 4-bar linkage to translate flywheel rotation into linear blade motion, minimizing friction with aluminum washers and shoulder screws.",
      "Specified materials for durability, cost, and manufacturability.",
      "Sourced off-the-shelf parts from McMaster-Carr and Amazon to reduce cost.",
    ],
    result: [
      "97/100 on the design report for DFM, GD&T adherence, and cost efficiency.",
      "Prototyping workflow and manufacturing-process knowledge for human-centered design.",
    ],
  },
  {
    title: "Prosthetic Wrist Hinge Design",
    image: pProsthetic,
    what: [
      "Proposed and designed a versatile, low-cost prosthetic wrist for above-elbow amputees with the Ukraine Rescue Initiative (URI) club.",
    ],
    how: [
      "Designed a ball-socket joint with palm-embedded servo motors for active 180° rotation in SOLIDWORKS.",
      "Specified a 3D-printed polypropylene outer shell and TPU inner lining for pressure distribution.",
    ],
    result: [
      "Theoretically functional wrist mechanism.",
      "Addressed weight reduction, mobility, and low cost.",
      "Won 1st place for innovation and feasibility.",
    ],
  },
  {
    title: "Chemistry Research Paper — SO₂ Corrosion of Galvanized Iron",
    image: pChemistry,
    what: [
      "Investigated the corrosion rate of galvanized iron from atmospheric SO₂ at controlled temperature, pressure, and humidity.",
      "Linked industrial SO₂ emissions to accelerated corrosion.",
    ],
    how: [
      "Authored a 39-page research paper with theory supported by comprehensive experiments.",
      "Generated SO₂ in a controlled environment, exposed galvanized iron strips, measured mass loss before and after.",
    ],
    result: [
      "Experimental results closely matched the hypothesis.",
      "Earned the highest possible grade (A).",
    ],
  },
];

const LEADERSHIP = [
  {
    role: "Treasurer",
    org: "UF Club Sailing Team",
    period: "April 2024 – Present",
    bullets: [
      "Managed a $7,500+ budget, led team collaborations, aligning with the role's need for project coordination and adaptability.",
      "Led weekly training sessions for 20+ new members, fostering skill development and team cohesion while representing UF Sailing at 10+ competitive regattas across Florida, North Carolina, and South Carolina.",
      "Spearheaded sponsorship outreach, maintaining ongoing collaboration through regular updates and strategic partnerships.",
    ],
  },
  {
    role: "Orientation Leader",
    org: "University of Florida — Center for New Student & Family Programs",
    period: "Jan. 2024 – Aug. 2024",
    bullets: [
      "Collaborated with 56 student leaders to aid the smooth transition of 10,000+ incoming students during 30+ orientation sessions.",
      "Trained and collaborated with 20+ academic advisors to mentor small groups of 12+ engineering and pre-med students.",
      "Demonstrated critical thinking, communication, and flexibility under pressure while managing difficult conversations with families and students.",
    ],
  },
  {
    role: "Chassis Team Member",
    org: "Gator Motorsports",
    period: "Sept. 2023 – Present",
    bullets: [
      "Worked on the 3D design of 20+ tractive-system parts including enclosure mounts and chassis inserts.",
      "Collaborated closely with the team leader on a carbon-fiber headrest for the FSAE car using advanced CAD tools and engineering principles.",
    ],
  },
  {
    role: "External Affairs Ambassador",
    org: "Freshman Leadership Engineering Group",
    period: "Feb. 2024 – Aug. 2024",
    bullets: [
      "Coordinated a 2-day networking event by meeting biweekly for 7 months with peer undergraduates to handle logistics and contact 250 corporate and academic representatives.",
      "Helped organize 2 presentations for freshman attendees: resume building, elevator pitch practice, and professional prep for the networking event and career showcase.",
    ],
  },
  {
    role: "Professional Affairs Committee Member",
    org: "Freshman Leadership Engineering Group",
    period: "Sept. 2023 – April 2024",
    bullets: [
      "Selected from a competitive applicant pool of 200+ freshman engineering students.",
      "Worked with a team of 10 engineering students to plan and execute events connecting undergraduate engineers with academic and professional resources.",
    ],
  },
];

function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [nounIdx, setNounIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

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
      }, 250);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setPhotoIdx((i) => (i + 1) % HERO_PHOTOS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navTextLight = !scrolled && theme === "dark";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className={`font-bold tracking-tight text-lg transition-colors ${navTextLight ? "text-white" : "text-primary"}`}
          >
            RP<span className="text-blueprint">.</span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`text-sm font-medium transition-colors hover:text-blueprint ${
                  navTextLight ? "text-white/90" : "text-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-md border transition-colors ${
                navTextLight ? "border-white/30 text-white hover:bg-white/10" : "border-border text-foreground hover:bg-secondary"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-md ${navTextLight ? "text-white" : "text-foreground"}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setNavOpen((o) => !o)}
              className={`p-2 rounded-md ${navTextLight ? "text-white" : "text-foreground"}`}
              aria-label="Toggle menu"
            >
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
        {HERO_PHOTOS.map((p, i) => (
          <img
            key={p.url}
            src={p.url}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
              i === photoIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-28 px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight drop-shadow-2xl animate-fade-up leading-[0.95] whitespace-nowrap">
            Rajshibhu Pandey
          </h1>
          <div className="-mt-1 h-11 flex items-center">
            <span
              className={`text-2xl md:text-3xl font-normal text-white/90 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
              }`}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)", fontFamily: '"Times New Roman", Times, serif', marginLeft: "0.1em" }}
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
              I am a Mechanical Engineering student at the University of Florida interested in the
              intersection of sustainability, human-centered design, and engineering. I am currently
              studying LaMSA maneuvers in click beetles at the Tribology Lab under Dr. Alison C. Dunn.
            </p>
            <p>
              Throughout my time at UF I have undertaken several opportunities that have allowed me
              to enhance my leadership and communication skills. I am also passionate about sales and
              want to explore technical sales in the future.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`tel:${PHONE.replace(/[^0-9+]/g,"")}`}
                 className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors">
                <Phone size={16} /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`}
                 className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors">
                <Mail size={16} /> {EMAIL}
              </a>
            </div>
          </div>
          <aside className="md:col-span-2 rounded-lg border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <Row k="Focus" v="Mechanical Engineering and AI" />
              <Row k="Location" v="Open to relocation" />
              <Row k="Interests" v="Tribology, Technical Sales, AI, Manufacturing" />
              <Row k="Languages" v="English, Hindi, Turkish (basic)" />
            </dl>
          </aside>
        </div>
      </Section>

      {/* PROJECTS — carousel */}
      <Section id="projects" eyebrow="02 / Projects" title="Projects" muted>
        <ProjectCarousel projects={PROJECTS} />
        <div className="mt-10 text-center">
          <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-base font-semibold text-blueprint hover:underline">
            <ExternalLink size={18} /> Click for Engineering Portfolio
          </a>
        </div>
      </Section>

      {/* ACADEMICS & SOFTWARE */}
      <Section id="academics" eyebrow="03 / Academics" title="Academics & Software">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Major" body="Mechanical Engineering — University of Florida.">
            <a href={TRANSCRIPT_URL} target="_blank" rel="noopener noreferrer"
               className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blueprint hover:underline">
              <FileText size={14} /> View Transcript
            </a>
          </Card>
          <Card
            title="Software"
            body="AutoCAD, Fusion 360, ANSYS Fluent, NI LabVIEW, Microsoft Office, SOLIDWORKS, MATLAB, Python, Abaqus."
          />
          <Card
            title="Certifications"
            body="ACE CNC Machining · SOLIDWORKS CSWA · NVIDIA Fundamentals of Deep Learning."
          />
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" eyebrow="04 / Leadership" title="Leadership" muted>
        <ol className="relative border-l border-border ml-3 space-y-8">
          {LEADERSHIP.map((l, i) => (
            <li key={i} className="pl-6 relative">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blueprint ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-widest text-blueprint">{l.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-primary">{l.role} <span className="text-steel font-normal">| {l.org}</span></h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed max-w-3xl list-disc pl-5">
                {l.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="05 / Experience" title="Professional Experience">
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

      {/* VOLUNTEER */}
      <Section id="volunteer" eyebrow="06 / Volunteer" title="Volunteer Work" muted>
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

      {/* HOBBIES */}
      <Section id="hobbies" eyebrow="07 / Hobbies" title="Hobbies & Interests">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Sailing", "Photography", "Reading", "Hiking"].map((h) => (
            <div key={h} className="aspect-square rounded-lg bg-secondary border border-border flex items-end p-4 hover:border-blueprint transition-colors">
              <span className="font-semibold text-primary">{h}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="font-bold text-primary">Rajshibhu Pandey</p>
            <p className="text-sm text-muted-foreground mt-1">Mechanical Engineering · University of Florida.</p>
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${EMAIL}`} className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors" aria-label="Email"><Mail size={18} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
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

function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % projects.length);
  const prev = () => setI((v) => (v - 1 + projects.length) % projects.length);
  const p = projects[i];
  return (
    <div className="relative">
      <article className="grid md:grid-cols-2 gap-0 rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="relative aspect-[4/3] md:aspect-auto bg-secondary">
          <img src={p.image.url} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blueprint">
            Project {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-primary">{p.title}</h3>
          <div className="mt-5 space-y-4">
            <Block label="What?" items={p.what} />
            <Block label="How?" items={p.how} />
            <Block label="Result?" items={p.result} />
          </div>
        </div>
      </article>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-blueprint" : "w-2 bg-border hover:bg-steel"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous"
                  className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} aria-label="Next"
                  className="p-2 rounded-md border border-border hover:border-blueprint hover:text-blueprint transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-blueprint">{label}</p>
      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground list-disc pl-5">
        {items.map((it, idx) => <li key={idx}>{it}</li>)}
      </ul>
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
          <h2 className="mt-3 font-display text-4xl md:text-6xl uppercase text-primary text-balance">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ title, body, children }: { title: string; body: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
      {children}
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
