import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  BarChart3,
  Bot,
  Braces,
  ChartNoAxesCombined,
  DatabaseZap,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { MagicGearScene } from "../components/about/MagicGearScene";

const skills = [
  {
    icon: Bot,
    title: "AI as a working habit",
    text: "Claude and ChatGPT live on the workbench, not in the final slide.",
  },
  {
    icon: Search,
    title: "Research & scraping",
    text: "I do not look under every rock. I know which rock to lift.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Strategy & competitors",
    text: "First, find the real rival. Then find the space they left open.",
  },
  {
    icon: DatabaseZap,
    title: "CRM & automation",
    text: "“I’ll remember it” is technically a CRM. It just does not scale.",
  },
  {
    icon: Braces,
    title: "Product architecture",
    text: "The stack should fit the problem. The invoice should fit reality.",
  },
  {
    icon: BarChart3,
    title: "E-commerce & growth",
    text: "Revenue is lovely. Profit, retention and the customer journey are lovelier.",
  },
  {
    icon: Users,
    title: "Listening properly",
    text: "Good products often begin as one sentence someone actually listened to.",
  },
  {
    icon: Sparkles,
    title: "Creative tool fluency",
    text: "Adobe, Office, HubSpot, FL Studio, DaVinci… if it has a battery, we’ve probably met.",
  },
];

const ventures = [
  {
    number: "01",
    name: "Kârmatik",
    role: "Founder · Solopreneur",
    image: "/images/project-karmatik.webp",
    text: "Profitability, settlement checks, buybox monitoring, pricing and campaign decisions for e-commerce sellers. Excel may take the afternoon off.",
    href: "https://karmatik.io",
    cta: "Open the product",
  },
  {
    number: "02",
    name: "Independent AI",
    role: "Founder · Solopreneur",
    image: "/images/project-independent-ai.webp",
    text: "The awkward brand question: why does AI recommend my competitor instead of me? Independent AI is being built to measure exactly that.",
    href: "https://github.com/MukeTR/independentai",
    cta: "View the repository",
  },
  {
    number: "03",
    name: "Dipixel Media",
    role: "Co-founder",
    image: "/images/project-dipixel.webp",
    text: "A growth desk spanning beauty, e-commerce, software, services and digital agencies: 24 brands, including 8 Meta accounts under active management.",
    href: "https://github.com/MukeTR/dipixelmedia",
    cta: "See the work",
  },
];

export function EnglishPage() {
  return (
    <div className="english-page">
      <section className="english-hero container">
        <div className="english-hero-copy">
          <p className="eyebrow">
            <span className="live-dot" /> CURIOSITY × DATA × THINGS THAT WORK
          </p>
          <h1>
            I get curious.
            <br />
            Find the data.
            <br />
            <span>Build the thing.</span>
          </h1>
          <p>
            Usually, it works. If it does not, I find out why. I sit at every
            table between research, infrastructure, customer and product.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#work">
              See what I built <ArrowDown size={17} />
            </a>
            <a className="text-link" href="#about">
              Meet the human <ArrowDown size={16} />
            </a>
          </div>
          <small>
            One-person product team. Suspiciously crowded tool stack.
          </small>
        </div>
        <div className="english-hero-system" aria-hidden="true">
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-core">MK</div>
          <span className="system-node node-one">RESEARCH</span>
          <span className="system-node node-two">PRODUCT</span>
          <span className="system-node node-three">GROWTH</span>
          <span className="system-node node-four">SYSTEMS</span>
          <div className="system-caption">AI KEMAL / HUMAN IN THE LOOP</div>
        </div>
      </section>

      <div className="english-marquee">
        <div className="container">
          <span>AI PRODUCT BUILDER</span>
          <i>✳</i>
          <span>FOUNDER</span>
          <i>✳</i>
          <span>GROWTH OPERATOR</span>
          <i>✳</i>
          <span>PROFESSIONAL ROCK LIFTER</span>
        </div>
      </div>

      <section id="about" className="container english-about section">
        <div>
          <p className="eyebrow">01 / THE HUMAN VERSION</p>
          <h2>AI Kemal is a nickname. The work is very real.</h2>
        </div>
        <div className="english-prose">
          <p>
            My friends started calling me “AI Kemal.” It was not a branding
            workshop. It simply became a little too accurate to ignore.
          </p>
          <p>
            I am Mustafa Kemal Karataş: founder of Kârmatik and Independent AI,
            co-founder of Dipixel Media, and the person usually asking, “What if
            we connected these two things?” Five minutes later, there is a new
            repository.
          </p>
          <p>
            I have worked across customer experience, sales, SaaS, CRM and
            e-commerce. Today I combine that field experience with AI and
            end-to-end product building. I listen carefully, find the friction
            and wear whichever hat gets the system moving again.
          </p>
          <blockquote>
            “Impossible” is often just a problem that has not been broken into
            small enough pieces yet.
          </blockquote>
        </div>
      </section>

      <section className="container english-field-note">
        <div>
          <strong>24</strong>
          <span>brands in the Dipixel ecosystem</span>
        </div>
        <div>
          <strong>8</strong>
          <span>Meta accounts actively managed</span>
        </div>
        <p>
          I work with buyers, sellers and builders: beauty businesses,
          e-commerce brands, marketplace sellers, software companies, platforms,
          service businesses and digital agencies. The view is pleasantly
          complicated.
        </p>
      </section>

      <section id="expertise" className="container section english-expertise">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / WHAT IS ON THE WORKBENCH</p>
            <h2>Many tools. One operating system.</h2>
          </div>
        </div>
        <div className="english-skill-grid">
          {skills.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <Icon size={24} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="english-work">
        <div className="container section">
          <p className="eyebrow">03 / WE TALKED. THEN I BUILT IT.</p>
          <h2>Ideas escaped the meeting and became products.</h2>
          <div className="english-venture-grid">
            {ventures.map((venture) => (
              <article key={venture.name}>
                <img src={venture.image} alt="" loading="lazy" />
                <div>
                  <span>
                    {venture.number} / {venture.role}
                  </span>
                  <h3>{venture.name}</h3>
                  <p>{venture.text}</p>
                  <a href={venture.href} target="_blank" rel="noreferrer">
                    {venture.cta} <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="container english-machine-wrap">
        <MagicGearScene locale="en" />
      </div>

      <section className="container english-manifesto">
        <Asterisk size={42} />
        <p className="eyebrow">THE OTHER MOTTO</p>
        <h2>
          SpaceX was built by humans.
          <br />I am human. Why couldn’t I?
        </h2>
        <p>
          First I find how. Then I find the sensible, affordable and
          maintainable version of how. Ambition is welcome; unnecessary cloud
          invoices are not.
        </p>
      </section>

      <section className="container english-cta">
        <div>
          <p className="eyebrow">YOUR TURN / BRING THE ODD PROBLEM</p>
          <h2>“I have an idea” is one of my favourite sentences.</h2>
          <p>
            Tell me enough to make it interesting. We can open the rest
            together.
          </p>
        </div>
        <Link className="button dark" to="/en/ask">
          Put it on the table <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
