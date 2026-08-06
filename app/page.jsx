import Hero from "./components/hero/Hero";
import CompanyUpdates from "./components/CompanyUpdates";

const trustBadges = [
  { title: "Expert Team", desc: "Experienced professionals delivering excellence.", icon: "👥" },
  { title: "Results Driven", desc: "Data-driven strategies that grow your business.", icon: "🚀" },
  { title: "Fast Delivery", desc: "On-time delivery with quality guaranteed.", icon: "⏱️" },
  { title: "Innovative Solutions", desc: "Creative and innovative solutions for your brand.", icon: "💡" },
  { title: "24/7 Support", desc: "We're always here to support you.", icon: "🎧" },
];

const services = [
  { title: "Branding", desc: "Build a powerful brand identity that connects with your audience.", icon: "🎨" },
  { title: "Website Development", desc: "Modern, responsive websites that look great and drive results.", icon: "💻" },
  { title: "Mobile App Development", desc: "Custom mobile apps for Android & iOS that scale your business.", icon: "📱" },
  { title: "Digital Marketing", desc: "Strategic marketing campaigns that increase visibility and generate leads.", icon: "📣" },
  { title: "SEO & Analytics", desc: "Improve rankings, drive traffic, and grow your business organically.", icon: "📈" },
];

export default function Home() {
  return (
    <div style={{ background: "#080B1A" }} className="min-h-screen text-white">
      <Hero />

      <section style={{ background: "#0E1630" }} className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustBadges.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg" style={{ background: "rgba(96,165,250,0.15)" }}>{b.icon}</div>
              <div>
                <p className="font-semibold text-white">{b.title}</p>
                <p className="mt-1 text-sm text-[#94A3B8]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#101B3D" }} className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#A855F7]">Our Services</span>
          <h2 className="mt-2 text-3xl font-bold text-white">Solutions That Drive Real Results</h2>
          <p className="mx-auto mt-3 max-w-xl text-[#CBD5E1]">From branding to digital marketing and development, we provide end-to-end solutions to grow your business online.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <a key={s.title} href="/services" className="group block rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.06)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-2xl" style={{ background: "rgba(96,165,250,0.15)" }}>{s.icon}</div>
                <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-[#94A3B8]">{s.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#60A5FA]">Learn More →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
	  <CompanyUpdates />
	  </div>
  );
}
