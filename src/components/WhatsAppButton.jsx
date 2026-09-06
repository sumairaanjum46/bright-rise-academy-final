import { IconWhatsApp } from "./Icons";

// Replace this with your real WhatsApp number in international format, no
// spaces, no leading "+" (e.g. "15551234567" for a US number +1 555 123 4567).
const WHATSAPP_NUMBER = "918179270850"; // Example: +91 8179270850
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about BrightRise Academy.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with BrightRise Academy on WhatsApp"
      title="Chat on WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
