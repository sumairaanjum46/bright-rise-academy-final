import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import FAQAccordion from "../components/FAQAccordion";
import { SUBJECTS, SUBJECT_LIST } from "../data/subjects";

export default function SubjectPage({ slug }) {
  const subject = SUBJECTS[slug];
  if (!subject) return null;

  const path = `/${subject.slug}`;
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Subjects", to: "/subjects" },
    { label: subject.name },
  ];

  const otherSubjects = SUBJECT_LIST.filter((s) => s.slug !== subject.slug);

  const structuredData = [
    buildBreadcrumbSchema(breadcrumbItems, SITE_URL),
    {
      "@context": "https://schema.org",
      "@type": "Course",
      name: `${subject.name} Tutoring`,
      description: subject.metaDescription,
      provider: {
        "@type": "EducationalOrganization",
        name: "BrightRise Academy",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: subject.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={subject.metaTitle}
        description={subject.metaDescription}
        path={path}
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>{subject.h1}</h1>
          <p>{subject.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Who This Is For</h2>
          <p>{subject.whoFor}</p>

          <h2 style={{ marginTop: 40 }}>What Students Learn</h2>
          <ul style={{ color: "var(--ink-soft)", paddingLeft: 20 }}>
            {subject.whatYouLearn.map((item) => (
              <li key={item} style={{ marginBottom: 8 }}>{item}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: 40 }}>How Live Classes Work</h2>
          <p>{subject.howItWorks}</p>

          <h2 style={{ marginTop: 40 }}>Benefits of Personalized Online {subject.shortName} Tutoring</h2>
          <ul style={{ color: "var(--ink-soft)", paddingLeft: 20 }}>
            {subject.benefits.map((item) => (
              <li key={item} style={{ marginBottom: 8 }}>{item}</li>
            ))}
          </ul>

          <div className="info-strip">
            {subject.shortName} tutoring is available for students from Kindergarten
            through Grade 10. Explore{" "}
            <Link to="/grades">grade-level details</Link> or see how tutoring works
            on our <Link to="/how-it-works">How It Works</Link> page.
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>{subject.name} Tutoring FAQs</h2>
          </div>
          <FAQAccordion items={subject.faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Explore Other Subjects</h2>
          </div>
          <div className="grid-flow">
            {otherSubjects.map((s) => (
              <Link to={`/${s.slug}`} className="card" key={s.slug}>
                <h3>{s.name}</h3>
                <p>{s.intro.slice(0, 96)}…</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Try a Free {subject.shortName} Trial Session</h2>
            <p>Book a free trial and we'll match your student with a suitable tutor.</p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
