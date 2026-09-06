import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import { SUBJECT_LIST } from "../data/subjects";

export default function OnlineTutoring() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Online Tutoring" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="One-on-One Online Tutoring for Students | BrightRise Academy"
        description="BrightRise Academy offers live, one-on-one online tutoring in Math, Science, English, and Coding for students from Kindergarten through Grade 10, worldwide."
        path="/online-tutoring"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>One-on-One Online Tutoring for Students Worldwide</h1>
          <p>
            Live, personalized online tutoring for students from Kindergarten
            through Grade 10 — wherever they are in the world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Live, Personalized Online Learning</h2>
          <p>
            Every session is live and one-on-one between a student and their
            tutor. Rather than following a fixed classroom pace, lessons are
            shaped around your student's current level, learning style, and
            goals.
          </p>

          <h2 style={{ marginTop: 40 }}>Multiple Subjects, One Place</h2>
          <p>
            We offer online tutoring in Mathematics, Science, English, and
            Coding for students from Kindergarten through Grade 10.
          </p>
          <div className="grid-flow">
            {SUBJECT_LIST.map((s) => (
              <Link to={`/${s.slug}`} className="card" key={s.slug}>
                <h3>{s.name}</h3>
                <p>{s.intro.slice(0, 100)}…</p>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: 40 }}>Learn From Anywhere in the World</h2>
          <p>
            Because classes are held online, students can join live sessions
            from any country, on a schedule that works for their family.
          </p>

          <h2 style={{ marginTop: 40 }}>A Parent-Friendly Process</h2>
          <p>
            Getting started is simple: share your student's grade and subject,
            get matched with a tutor, and begin with a free trial session. See
            the full breakdown on our{" "}
            <Link to="/how-it-works">How It Works</Link> page.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Start With a Free Trial</h2>
            <p>Tell us about your student and we'll match them with a suitable tutor.</p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
