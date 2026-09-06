import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Subjects from "./pages/Subjects";
import HowItWorks from "./pages/HowItWorks";
import BookTrial from "./pages/BookTrial";
import SubjectPage from "./pages/SubjectPage";
import OnlineTutoring from "./pages/OnlineTutoring";
import GradesIndex from "./pages/GradesIndex";
import GradeDetail from "./pages/GradeDetail";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Give the new page a tick to render before looking for the anchor.
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/book-a-free-trial" element={<BookTrial />} />

          {/* Subject pages */}
          <Route path="/math-tutoring" element={<SubjectPage slug="math" />} />
          <Route path="/science-tutoring" element={<SubjectPage slug="science" />} />
          <Route path="/english-classes" element={<SubjectPage slug="english" />} />
          <Route path="/coding-classes" element={<SubjectPage slug="coding" />} />
          <Route path="/online-tutoring" element={<OnlineTutoring />} />

          {/* Grade pages */}
          <Route path="/grades" element={<GradesIndex />} />
          <Route path="/grades/:gradeSlug" element={<GradeDetail />} />

          {/* Support pages */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
