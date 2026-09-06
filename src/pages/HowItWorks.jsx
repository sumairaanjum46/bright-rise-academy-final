import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import Reveal from "../components/Reveal";

const STEPS = [
  {
    title: "Tell Us What Your Student Needs",
    text: "Share your student's grade, subject, and learning goals using our simple enquiry form.",
  },
  {
    title: "Meet Your Tutor",
    text: "We'll match your student with a suitable tutor for an online trial session.",
  },
  {
    title: "Start Learning",
    text: "Begin regular live online classes, structured around your student's level and goals.",
  },
];

export default function HowItWorks() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "How It Works" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="How It Works | BrightRise Academy"
        description="See how BrightRise Academy's live, one-on-one online tutoring works, from your first enquiry to ongoing classes."
        path="/how-it-works"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Getting Started Is Simple</h1>
          <p>Here's exactly what to expect when you book a free trial with BrightRise Academy.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Ready to Take the First Step?</h2>
            <p>Book a free trial and meet your student's tutor.</p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
