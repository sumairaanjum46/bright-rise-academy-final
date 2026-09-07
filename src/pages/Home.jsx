import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import EducationHeroArt from "../components/EducationHeroArt";
import GrowthPathArt from "../components/GrowthPathArt";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import {
  IconMath,
  IconScience,
  IconEnglish,
  IconSocialStudies,
  IconCoding,
  IconPersonalized,
  IconOneOnOne,
  IconGrades,
  IconAnywhere,
  IconConcept,
  IconConfidence,
  IconLive,
} from "../components/Icons";

const TRUST_ITEMS = [
  { icon: IconPersonalized, label: "Personalized Learning" },
  { icon: IconOneOnOne, label: "1-on-1 Instruction" },
  { icon: IconGrades, label: "K–10 Academic Support" },
  { icon: IconAnywhere, label: "Learn From Anywhere" },
];

const SUBJECTS = [
  { icon: IconMath, name: "Mathematics", text: "From arithmetic to algebra and geometry — building strong problem-solving skills.", to: "/math-tutoring" },
  { icon: IconScience, name: "Science", text: "Clear, engaging instruction across biology, chemistry, physics, and earth science.", to: "/science-tutoring" },
  { icon: IconEnglish, name: "English", text: "Reading comprehension, writing, and grammar support at every grade level.", to: "/english-classes" },
  { icon: IconSocialStudies, name: "Social Studies", text: "History, geography, and civics taught in a way that connects and sticks.", to: "/subjects" },
  { icon: IconCoding, name: "Coding", text: "Programming fundamentals and computational thinking through hands-on practice.", to: "/coding-classes" },
];

const BENEFITS = [
  { icon: IconPersonalized, title: "Personalized Instruction", text: "Lessons are adapted to each student's needs, level, and learning pace." },
  { icon: IconConcept, title: "Concept-Based Learning", text: "We focus on understanding concepts rather than simply memorizing answers." },
  { icon: IconConfidence, title: "Confidence Building", text: "Students develop the confidence to ask questions, solve problems, and learn independently." },
  { icon: IconLive, title: "Live Online Classes", text: "Convenient online learning from the comfort of home." },
];

const STEPS = [
  { title: "Tell Us What Your Student Needs", text: "Share your student's grade, subject, and learning goals." },
  { title: "Meet Your Tutor", text: "We match your student with a tutor suited to their needs." },
  { title: "Start Learning", text: "Begin regular live sessions and build momentum together." },
];

const GRADE_BANDS = [
  { name: "Elementary", range: "K–5" },
  { name: "Middle School", range: "6–8" },
  { name: "High School", range: "9–10" },
];

const FAQ_ITEMS = [
  { q: "What grades do you teach?", a: "We support students from Kindergarten through Grade 10." },
  { q: "What subjects do you offer?", a: "Mathematics, Science, English, Social Studies, and Coding." },
  { q: "Are classes one-on-one?", a: "Yes. Every session is one-on-one between the student and their tutor." },
  { q: "Are classes online?", a: "Yes, all classes are held live online, so students can learn from anywhere." },
  { q: "How does the free trial work?", a: "Book a free trial through our form, and we'll arrange an introductory session with a suitable tutor." },
  { q: "Can tutoring be aligned with my child's school curriculum?", a: "Yes. Tutors shape lessons around what your student is currently studying in school where possible." },
  { q: "How long are tutoring sessions?", a: "Session length is arranged based on your student's needs when you book a trial." },
  { q: "How do I get started?", a: "Click \"Book a Free Trial\" and fill out a short form — our team will follow up with next steps." },
];

export default function Home() {
  return (
    <>
      <Seo
        title="BrightRise Academy | Online Math, Science, English & Coding Classes"
        description="BrightRise Academy offers live one-on-one online classes in Math, Science, English, and Coding for students from Kindergarten through Grade 10 worldwide."
        path="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <h1>Live One-on-One Online Classes for Students Worldwide</h1>
            <p className="lede">
              Personalized online learning in Math, Science, English, and Coding for
              students from Kindergarten through Grade 10.
            </p>
            <div className="hero-actions">
              <Link to="/book-a-free-trial" className="btn btn-primary">
                Book a Free Trial
              </Link>
              <Link to="/subjects" className="btn btn-outline">
                Explore Classes
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <EducationHeroArt />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-grid">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div className="trust-item" key={label}>
              <span className="icon-badge">
                <Icon />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* SUBJECTS */}
      <section className="section" id="subjects">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Everything Your Student Needs to Learn and Grow</h2>
            <p>Focused, parent-friendly tutoring across the subjects that matter most.</p>
          </Reveal>
          <div className="grid-flow">
            {SUBJECTS.map(({ icon: Icon, name, text, to }, i) => (
              <Reveal as={Link} to={to} className="card" delay={i * 60} key={name}>
                <span className="icon-badge">
                  <Icon />
                </span>
                <h3>{name}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BRIGHTRISE */}
      <section className="section section-alt">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>More Than Tutoring. A Better Way to Learn.</h2>
          </Reveal>
          <div className="grid-flow">
            {BENEFITS.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="div" className="card" delay={i * 60} key={title}>
                <span className="icon-badge">
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Getting Started Is Simple</h2>
          </Reveal>
          <div className="step-line-wrap">
            {STEPS.map((s, i) => (
              <Reveal as="div" className="step-line-item" delay={i * 100} key={s.title}>
                <div className="step-line-circle">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZED LEARNING SPLIT */}
      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <Reveal as="div">
              <h2>Learning That Meets Your Student Where They Are</h2>
              <p>
                Every student learns differently. Our tutoring sessions are designed
                around their current level, learning pace, areas of difficulty, and
                academic goals.
              </p>
              <div className="split-points">
                <div className="split-point">Current Level</div>
                <div className="split-point">Personalized Learning</div>
                <div className="split-point">Targeted Instruction</div>
                <div className="split-point">Growing Confidence</div>
              </div>
            </Reveal>
            <Reveal as="div" className="split-art" delay={120}>
              <GrowthPathArt />
            </Reveal>
          </div>
        </div>
      </section>

      {/* K-10 GRADE BANDS */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Academic Support From Kindergarten Through Grade 10</h2>
          </Reveal>
          <div className="grid-3">
            {GRADE_BANDS.map((g, i) => (
              <Reveal as={Link} to="/grades" className="card grade-card" delay={i * 80} key={g.name}>
                <h3>{g.name}</h3>
                <span className="grade-range">{g.range}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      

      {/* FREE TRIAL CTA */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="cta-band-wrap">
          <Reveal as="div" className="cta-band">
            <h2>Ready to Help Your Student Learn With Confidence?</h2>
            <p>
              Start with a free trial session and discover how personalized online
              tutoring can support your student's academic goals.
            </p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal as="div" className="section-head">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <FAQAccordion items={FAQ_ITEMS} />
          <p style={{ textAlign: "center", marginTop: 24 }}>
            <Link to="/faq">See the full FAQ page &rarr;</Link>
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <Reveal as="div" className="cta-band">
            <h2>Give Your Student the Support to Rise.</h2>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
