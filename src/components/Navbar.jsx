import { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandMark from "./BrandMark";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/subjects", label: "Subjects" },
  { to: "/grades", label: "Grades" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          BrightRise Academy
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/book-a-free-trial" className="btn btn-primary nav-cta">
            Book a Free Trial
          </NavLink>
        </nav>

        <button
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span style={open ? { transform: "translateY(7px) rotate(45deg)" } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : {}} />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/book-a-free-trial"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Book a Free Trial
        </NavLink>
      </div>
    </header>
  );
}
