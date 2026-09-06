import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import { GRADES } from "../data/grades";

const BANDS = ["Elementary", "Middle School", "High School"];

export default function GradesIndex() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Grades" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="Grades We Teach, K–10 | BrightRise Academy"
        description="BrightRise Academy offers one-on-one online tutoring for every grade from Kindergarten through Grade 10. Find grade-specific tutoring details."
        path="/grades"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Online Tutoring by Grade, Kindergarten Through Grade 10</h1>
          <p>
            Every student learns differently, so lessons are shaped around each
            student's grade level and current needs. Choose a grade below to see
            what tutoring typically covers.
          </p>
        </div>
      </section>

      {BANDS.map((band) => (
        <section className="section" key={band}>
          <div className="container">
            <div className="section-head" style={{ textAlign: "left", margin: "0 0 24px" }}>
              <h2>{band}</h2>
            </div>
            <div className="grid-flow">
              {GRADES.filter((g) => g.band === band).map((g) => (
                <Link to={`/grades/${g.slug}`} className="card grade-card" key={g.slug}>
                  <h3>{g.label}</h3>
                  <span className="grade-range">{g.typicalAge}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Not Sure Which Level Fits Best?</h2>
            <p>Book a free trial and we'll help place your student at the right level.</p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
