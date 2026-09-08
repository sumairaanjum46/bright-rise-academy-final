import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  grade: "",
  subject: "",
  country: "",
  timing: "",
  message: "",
};

/**
 * The parent/student enquiry form used on both /book-a-free-trial and
 * /contact. Extracted from the original BookTrial page so both pages share
 * one implementation instead of duplicating form markup.
 */
export default function TrialForm({ submitLabel = "Request Free Trial" }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby22nMa4JSm0KuopEvP9rjQSa3vL52Uhzg2hQOmBrP2aTBC5KeniVwFVLdEdAtb4hFyxQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
    if (typeof window.gtag_report_conversion === "function") {
  window.gtag_report_conversion();
}

    setSubmitted(true);
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Something went wrong. Please try again.");
  }
}

  
  if (submitted) {
    return (
      <div className="success-box" role="status">
        Thank you! We've received your enquiry. Our team will contact you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Parent / Student Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="grade">Student Grade</label>
          <select id="grade" name="grade" required value={form.grade} onChange={handleChange}>
            <option value="" disabled>Select grade</option>
            <option>Kindergarten</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1}>{`Grade ${i + 1}`}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="subject">Subject Interested In</label>
          <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
            <option value="" disabled>Select subject</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>Social Studies</option>
            <option>Coding</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            required
            value={form.country}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="timing">Preferred Class Timing</label>
          <input
            id="timing"
            name="timing"
            type="text"
            placeholder="e.g. Weekday evenings"
            value={form.timing}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <p className="form-note">
         Your information is secure and will only be used to contact you about your free trial.
      </p>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {submitLabel}
      </button>
    </form>
  );
}
