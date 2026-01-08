"use client";

export default function AdvantageGrid({
  title,
  items = [],
  background = "bg-gray-50",
}) {
  return (
    <section className={`w-full py-20 ${background}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  p-8 rounded-2xl bg-white
                  border border-gray-200
                  hover:shadow-lg transition
                  text-center
                "
              >
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                )}

                <h3 className="text-lg font-semibold text-primary-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-secondary-950">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
