export default function H1({ children, className = "" }) {
  return (
    <h1
      className={`font-bold text-2xl sm:text-3xl md:text-[40px] leading-snug mb-6 md:mb-8 text-primary-950 ${className}`}
    >
      {children}
    </h1>
  );
}
