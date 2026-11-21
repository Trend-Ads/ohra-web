"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What distinguishes an OHRA sanctuary from standard luxury rentals?",
    answer:
      "Every OHRA property is an independently curated architectural gem—not an ordinary rental. We combine private villa seclusion with luxury boutique hospitality: dedicated on-site concierge, professionally trained private chefs, luxury linens, daily housekeeping, and 24/7 guest support.",
  },
  {
    question: "Can OHRA curate bespoke itineraries, private dining, or local transport?",
    answer:
      "Yes. Prior to your arrival, your private concierge designs customized experiences tailored to your desires—ranging from traditional Sadhya feasts and backwater shikara sunset rides to guided rainforest treks and luxury airport transfers.",
  },
  {
    question: "What is your booking, reservation, and cancellation policy?",
    answer:
      "We provide flexible, transparent terms for both direct bookings and exclusive estate buyouts. Detailed reservation schedules and cancellation windows are provided at booking confirmation, with priority rescheduling available for unforeseen circumstances.",
  },
  {
    question: "How does OHRA partner with villa owners and NRI property investors?",
    answer:
      "We offer full-spectrum estate stewardship across Kerala. From interior staging and preventive architectural preservation to guest vetting, licensing compliance, and transparent monthly yield distribution, owners enjoy complete peace of mind without operational burden.",
  },
  {
    question: "Are OHRA estates available for private gatherings, buyouts, or retreats?",
    answer:
      "Yes. Our expansive villas in Kumarakom, Munnar, and Wayanad are ideally suited for family reunions, executive offsites, wellness retreats, and intimate celebrations. Our concierge can coordinate full estate buyout logistics, private catering, and event setups.",
  },
  {
    question: "How can I inquire about a stay or discuss managing my property?",
    answer:
      "You can submit an inquiry through our direct email or WhatsApp links at the bottom of this page. Our hospitality advisory team typically responds within 24 business hours to arrange a personalized consultation or reservation walkthrough.",
  },
];

export function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First item open by default

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faqs" className="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        {/* Header Block */}
        <div className="faq-header">
          <div className="faq-badge">
            <span className="faq-badge-dot" aria-hidden="true">✦</span>
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 id="faq-title" className="faq-heading">
            Clear answers to <em>frequent inquiries</em>.
          </h2>
          <p className="faq-subheading">
            Everything you need to know about reserving an OHRA sanctuary or entrusting your private estate to our management.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={faq.question}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  id={questionId}
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`faq-answer-collapse ${isOpen ? "faq-answer-expanded" : ""}`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="faq-footer-callout">
          <p className="faq-callout-text">
            Still have questions? Our concierge team is happy to assist you directly.
          </p>
          <a href="#contact" className="faq-callout-link">
            Get in Touch With Us ↗
          </a>
        </div>
      </div>
    </section>
  );
}
