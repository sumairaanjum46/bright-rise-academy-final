import { useParams, Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import FAQAccordion from "../components/FAQAccordion";
import { getGradeBySlug, GRADES } from "../data/grades";
import { SUBJECTS } from "../data/subjects";
import NotFound from "./NotFound";

const SUBJECT_SLUG_BY_NAME = Object.fromEntries(
  Object.values(SUBJECTS).map((s) => [s.name, `/${s.slug}`])
);

export default function GradeDetail() {
  const { gradeSlug } = useParams();
  const grade = getGradeBySlug(gradeSlug);

  if (!grade) return <NotFound />;

  const path = `/grades/${grade.slug}`;
  const subjectNames = Object.keys(grade.topics);

  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Grades", to: "/grades" },
    { label: grade.label },
  ];

  const faqs = [
    {
      q: `What subjects do you teach in ${grade.label}?`,
      a: `We offer ${grade.label} tutoring in ${subjectNames.join(", ")}, with lessons personalized to your student.`,
    },
    {
      q: `Is ${grade.label} tutoring one-on-one?`,
      a: "Yes. Every session is a live, one-on-one class between the student and their tutor.",
    },
    {
      q: "Will lessons match my child's school curriculum?",
      a: "Curriculum can vary by school and country, so tutors aim to align lessons with what your student is currently studying where possible.",
    },
    {
      q: "How do we get started?",
      a: 'Click "Book a Free Trial" and share your student\'s grade and subject — we\'ll arrange an introductory session with a suitable tutor.',
    },
  ];

  const structuredData = [
    buildBreadcrumbSchema(breadcrumbItems, SITE_URL),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const currentIndex = GRADES.findIndex((g) => g.slug === grade.slug);
  const prevGrade = GRADES[currentIndex - 1];
  const nextGrade = GRADES[currentIndex + 1];

  return (
    <>
      <Seo
        title={`Online Tutoring for ${grade.label} | BrightRise Academy`}
        description={`One-on-one online tutoring for ${grade.label} students (${grade.typicalAge}), covering ${subjectNames.join(", ")}.`}
        path={path}
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Online Tutoring for {grade.label}</h1>
          <p>{grade.overview}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="info-strip">
            Curriculum and topics can vary by school and location — your
            tutor will adapt lessons to match what your student is actually
            studying.
          </p>

          <h2 style={{ marginTop: 32 }}>Subjects &amp; Typical Topics</h2>
          <ul style={{ color: "var(--ink-soft)", paddingLeft: 20 }}>
            {Object.entries(grade.topics).map(([subject, desc]) => (
              <li key={subject} style={{ marginBottom: 10 }}>
                <strong style={{ color: "var(--ink)" }}>{subject}:</strong>{" "}
                {desc}
                {SUBJECT_SLUG_BY_NAME[subject] && (
                  <>
                    {" — "}
                    <Link to={SUBJECT_SLUG_BY_NAME[subject]}>
                      see {subject} tutoring
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: 40 }}>How Tutoring Helps at This Level</h2>
          <p>{grade.howTutoringHelps}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>{grade.label} Tutoring FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          {prevGrade ? (
            <Link to={`/grades/${prevGrade.slug}`}>&larr; {prevGrade.label}</Link>
          ) : <span />}
          <Link to="/grades">All Grades</Link>
          {nextGrade ? (
            <Link to={`/grades/${nextGrade.slug}`}>{nextGrade.label} &rarr;</Link>
          ) : <span />}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Ready to Start {grade.label} Tutoring?</h2>
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
