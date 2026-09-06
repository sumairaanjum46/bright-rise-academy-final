import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import TrialForm from "../components/TrialForm";

export default function BookTrial() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Book a Free Trial" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="Book a Free Trial | BrightRise Academy"
        description="Book a free trial session with BrightRise Academy. Tell us your student's grade and subject and we'll match them with a suitable tutor."
        path="/book-a-free-trial"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Book a Free Trial</h1>
          <p>
            Tell us a bit about your student and we'll get back to you to arrange a
            free trial session.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-wrap">
            <TrialForm submitLabel="Request Free Trial" />
          </div>
          <p style={{ textAlign: "center", color: "var(--ink-soft)" }}>
            Prefer to just ask a question first? Visit our <Link to="/contact">Contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
