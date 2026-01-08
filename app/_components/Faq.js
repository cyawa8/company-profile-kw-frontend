"use client";

import { Collapse } from "antd";

export default function FaqAccordion({ faqs = [], accordion = true }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const items = faqs.map((faq) => ({
    key: faq.id ?? faq.question,
    label: (
      <span className="font-semibold text-base">
        {faq.question}
      </span>
    ),
    children: (
      <p className="text-gray-700 leading-relaxed">
        {faq.answer}
      </p>
    ),
  }));

  return (
    <Collapse
      accordion={accordion}
      items={items}
      bordered={false}
      className="bg-white"
    />
  );
}
