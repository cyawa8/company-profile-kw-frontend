"use client";

export default function ProcessStepper({
  title,
  subtitle,
  steps = [],
}) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-950">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-secondary-950">
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gray-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex-1 flex flex-col items-center text-center px-4"
            >
              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-950 text-white font-bold mb-4">
                {index + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-primary-950 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-secondary-950 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
