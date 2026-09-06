import { useState } from "react";
import { IconChevron } from "./Icons";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <IconChevron className="faq-chevron" />
            </button>
            {isOpen && <div className="faq-answer">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
