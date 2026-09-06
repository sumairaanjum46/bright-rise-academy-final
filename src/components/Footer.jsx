import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <BrandMark />
              BrightRise Academy
            </div>
            <p style={{ color: "#a9b3ca", maxWidth: "34ch" }}>
              Live one-on-one online tutoring for K–10 students, worldwide.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/subjects">Subjects</Link></li>
              <li><Link to="/grades">Grades</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Subjects</h4>
            <ul>
              <li><Link to="/math-tutoring">Math Tutoring</Link></li>
              <li><Link to="/science-tutoring">Science Tutoring</Link></li>
              <li><Link to="/english-classes">English Classes</Link></li>
              <li><Link to="/coding-classes">Coding Classes</Link></li>
              <li><Link to="/online-tutoring">Online Tutoring</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul>
              {/* Replace these placeholders with your real contact details */}
              <li>Email: brightriseacademy@gmail.com</li>
              <li>
                <a
                  href="https://wa.me/918179270850"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +91 8179270850
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2026 BrightRise Academy</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
