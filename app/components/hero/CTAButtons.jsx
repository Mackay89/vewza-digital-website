export default function CTAButtons() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start" style={{ animation: "fadeInUp 0.6s ease-out 0.45s both" }}>
      <a href="/contact" className="rounded-full px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl" style={{ background: "linear-gradient(90deg, #32C5FF, #9F4DFF)" }}>Get a Free Consultation →</a>
      <a href="/services" className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-[#07122B]">View Our Services →</a>
    </div>
  );
}
