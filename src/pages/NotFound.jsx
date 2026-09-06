import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | BrightRise Academy"
        description="The page you're looking for doesn't exist or may have moved."
        path="/404"
        noindex
      />

      <section className="page-head">
        <div className="container">
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or may have moved.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p>Here are a few places to start instead:</p>
          <div className="grid-flow">
            <Link to="/" className="card">
              <h3>Home</h3>
              <p>Back to the homepage.</p>
            </Link>
            <Link to="/subjects" className="card">
              <h3>Subjects</h3>
              <p>See everything we teach.</p>
            </Link>
            <Link to="/grades" className="card">
              <h3>Grades</h3>
              <p>Find your student's grade level.</p>
            </Link>
            <Link to="/contact" className="card">
              <h3>Contact</h3>
              <p>Get in touch with our team.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
