import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import TrialForm from "../components/TrialForm";

export default function Contact() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "Contact" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="Contact BrightRise Academy"
        description="Get in touch with BrightRise Academy. Send an enquiry about tutoring in Math, Science, English, or Coding for your student."
        path="/contact"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Contact BrightRise Academy</h1>
          <p>
            Have a question before booking a trial, or want to talk through
            which subject or grade fits your student? Send us a message and
            our team will get back to you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
          <div className="form-wrap">
            <TrialForm submitLabel="Send Enquiry" />
          </div>

          <div style={{ textAlign: "center" }}>
            <h2>Other Ways to Reach Us</h2>
            {/* Same placeholder contact details as the footer — replace with
                real values once available. */}
            <p>Email: brightriseacademy@gmail.com</p>
            <p>
              <a
                href="https://wa.me/918179270850"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +91 8179270850
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
