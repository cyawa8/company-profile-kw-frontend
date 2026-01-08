"use client";

import Container from "./Container";
import H1 from "./H1";

export default function FeatureGrid({
  title,
  items = [],
  background = "bg-white",
}) {
  return (
    <section className={`${background} py-16`}>
      <Container>
        <H1 className="text-center mb-12">{title}</H1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon; // 🔑 INI KUNCINYA

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                )}

                <h3 className="font-bold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
