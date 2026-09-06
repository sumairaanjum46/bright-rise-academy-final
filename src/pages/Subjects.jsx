import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import {
  IconMath,
  IconScience,
  IconEnglish,
  IconSocialStudies,
  IconCoding,
} from "../components/Icons";

const SUBJECTS = [
  {
    icon: IconMath,
    name: "Mathematics",
    grade: "Kindergarten through Grade 10",
    to: "/math-tutoring",
    topics: [
      "Arithmetic",
      "Fractions & Decimals",
      "Algebra",
      "Geometry",
      "Equations",
      "Problem Solving",
      "Advanced Mathematics",
    ],
  },
  {
    icon: IconScience,
    name: "Science",
    grade: "Kindergarten through Grade 10",
    to: "/science-tutoring",
    topics: [
      "General Science",
      "Biology",
      "Chemistry",
      "Physics",
      "Earth & Space Science",
    ],
  },
  {
    icon: IconEnglish,
    name: "English",
    grade: "Kindergarten through Grade 10",
    to: "/english-classes",
    topics: [
      "Reading Comprehension",
      "Writing & Composition",
      "Grammar",
      "Vocabulary Building",
      "Literature",
    ],
  },
  {
    icon: IconSocialStudies,
    name: "Social Studies",
    grade: "Kindergarten through Grade 10",
    to: null,
    topics: [
      "History",
      "Geography",
      "Civics",
      "Cultures & Communities",
      "Current Events",
    ],
  },
  {
    icon: IconCoding,
    name: "Coding",
    grade: "Beginner-friendly, all ages",
    to: "/coding-classes",
    topics: [
      "Programming Fundamentals",
      "Python",
      "Problem Solving",
      "Computational Thinking",
      "Beginner Coding",
    ],
  },
];

export default function Subjects() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Subjects" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="Subjects We Teach | BrightRise Academy"
        description="Personalized one-on-one online tutoring in Mathematics, Science, English, Social Studies, and Coding for students from Kindergarten through Grade 10."
        path="/subjects"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Subjects We Teach</h1>
          <p>
            Personalized tutoring in Mathematics, Science, English, Social Studies, and
            Coding for students from Kindergarten through Grade 10.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-flow">
            {SUBJECTS.map(({ icon: Icon, name, grade, topics, to }) => {
              const Wrapper = to ? Link : "div";
              const wrapperProps = to ? { to } : {};
              return (
                <Wrapper className="card" key={name} {...wrapperProps}>
                  <span className="icon-badge">
                    <Icon />
                  </span>
                  <span className="eyebrow-plain">{grade}</span>
                  <h3>{name}</h3>
                  <p style={{ marginBottom: 14 }}>Topics can include:</p>
                  <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-soft)" }}>
                    {topics.map((t) => (
                      <li key={t} style={{ marginBottom: 6 }}>{t}</li>
                    ))}
                  </ul>
                  {to && (
                    <p style={{ marginTop: 14, marginBottom: 0, fontWeight: 600, color: "var(--teal)" }}>
                      Learn more &rarr;
                    </p>
                  )}
                </Wrapper>
              );
            })}
          </div>

          <div className="info-strip">
            The exact topics covered depend on each student's grade level and school
            curriculum. Your tutor will tailor lessons accordingly. See our{" "}
            <Link to="/grades">Grades</Link> page for grade-specific details, or our{" "}
            <Link to="/online-tutoring">Online Tutoring</Link> page for an overview
            of how classes work.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Find the Right Fit for Your Student</h2>
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
