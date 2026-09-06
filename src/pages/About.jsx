import { Link } from "react-router-dom";
import Seo, { SITE_URL } from "../components/Seo";
import Breadcrumbs, { buildBreadcrumbSchema } from "../components/Breadcrumbs";

export default function About() {
  const breadcrumbItems = [{ label: "Home", to: "/" }, { label: "About" }];
  const structuredData = buildBreadcrumbSchema(breadcrumbItems, SITE_URL);

  return (
    <>
      <Seo
        title="About BrightRise Academy"
        description="BrightRise Academy provides personalized, one-on-one live online tutoring for students from Kindergarten through Grade 10, worldwide."
        path="/about"
        structuredData={structuredData}
      />

      <section className="page-head">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <h1>About BrightRise Academy</h1>
          <p>
            BrightRise Academy provides personalized online tutoring for students from
            Kindergarten through Grade 10 — designed to help students understand
            concepts, build confidence, and grow academically.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to help every student understand what they're
            learning, at their own pace, with support that feels personal rather than
            one-size-fits-all. We believe tutoring works best when it's built around the
            individual student in front of us, not a fixed curriculum script.
          </p>

          <h2 style={{ marginTop: 48 }}>Our Approach</h2>
          <p>
            Each student works one-on-one with a tutor in live online sessions. Lessons
            are shaped around the student's current level, the subject they need help
            with, and the curriculum they're following at school. As a student
            progresses, their learning plan adjusts alongside them.
          </p>

          <h2 style={{ marginTop: 48 }}>Why Personalized Learning Matters</h2>
          <p>
            Every student learns differently — some need more time on foundations,
            others are ready to move faster or go deeper. Personalized, one-on-one
            tutoring gives students the space to ask questions, work through
            misunderstandings, and build real confidence, rather than being carried
            along by the pace of a group classroom.
          </p>

          <p style={{ marginTop: 24 }}>
            Explore what we teach on our <Link to="/subjects">Subjects</Link> page,
            find your student's level on our <Link to="/grades">Grades</Link> page,
            or see <Link to="/how-it-works">how live classes work</Link>.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="cta-band-wrap">
          <div className="cta-band">
            <h2>Ready to Get Started?</h2>
            <p>Book a free trial and see how personalized tutoring can help your student.</p>
            <Link to="/book-a-free-trial" className="btn btn-primary">
              Book a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
