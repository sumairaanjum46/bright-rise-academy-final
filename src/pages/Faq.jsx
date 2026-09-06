import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";
import FAQAccordion from "../components/FAQAccordion";

const FAQ_ITEMS = [
  {
    q: "What subjects does BrightRise Academy teach?",
    a: "We teach Mathematics, Science, English, Social Studies, and Coding for students from Kindergarten through Grade 10.",
  },
  { q: "Do you teach Math?", a: "Yes. See our dedicated Math Tutoring page for details on topics and grade levels." },
  { q: "Do you teach Science?", a: "Yes. See our dedicated Science Tutoring page for details on topics and grade levels." },
  { q: "Do you teach English?", a: "Yes. See our dedicated English Classes page for details on topics and grade levels." },
  { q: "Do you teach Coding?", a: "Yes. See our dedicated Coding Classes page — sessions are beginner-friendly." },
  {
    q: "What grades do you teach?",
    a: "We support students from Kindergarten through Grade 10. Visit our Grades page to find your student's level.",
  },
  { q: "Are classes live?", a: "Yes, all classes are held live online, so students can learn from anywhere." },
  {
    q: "Are classes one-on-one?",
    a: "Yes. Every session is one-on-one between the student and their tutor, not a group class.",
  },
  {
    q: "Can students join from other countries?",
    a: "Yes. Because classes are held online, students can join live sessions from anywhere in the world.",
  },
  {
    q: "How are classes scheduled?",
    a: "Scheduling is arranged directly with your family based on your student's needs and preferred timing when you book a trial.",
  },
  {
    q: "Can lessons be aligned with my child's school curriculum?",
    a: "Yes, where possible. Curriculum can vary by school and country, so tutors adapt lessons to match what your student is currently studying.",
  },
  {
    q: "How can I book a free trial?",
    a: 'Click "Book a Free Trial" anywhere on the site, fill out the short form with your student\'s grade and subject, and our team will follow up with next steps.',
  },
  {
    q: "How can I contact BrightRise Academy?",
    a: "You can reach us through our Contact page, using the enquiry form or the contact details listed there.",
  },
];

export default function Faq() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "FAQ" }];
  const structuredData = [
    buildBreadcrumbSchema(breadcrumbItems, SITE_URL),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title="Frequently Asked Questions | BrightRise Academy"
        description="Answers to common questions from parents about BrightRise Academy's live, one-on-one online tutoring in Math, Science, English, and Coding."
        path="/faq"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the questions parents ask us most.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Still Have Questions?</h2>
            <p>Reach out and our team will be happy to help.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
