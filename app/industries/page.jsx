const industries = [
  { name: "Healthcare", icon: "🏥", desc: "Patient-friendly websites and marketing for clinics and practitioners." },
  { name: "Retail", icon: "🛍️", desc: "E-commerce and in-store digital strategies that drive sales." },
  { name: "Restaurants", icon: "🍽️", desc: "Ordering platforms, social content, and local SEO for food brands." },
  { name: "Construction", icon: "🏗️", desc: "Project showcases and lead generation for contractors and builders." },
  { name: "Education", icon: "🎓", desc: "Enrollment-focused sites and communication tools for schools." },
  { name: "Churches", icon: "⛪", desc: "Websites, livestreaming support, and community engagement tools." },
  { name: "Law Firms", icon: "⚖️", desc: "Trust-building websites and content for legal practices." },
  { name: "Finance", icon: "💰", desc: "Secure, compliant digital platforms for financial services." },
  { name: "Tourism", icon: "✈️", desc: "Visually rich sites and campaigns for travel and hospitality brands." },
  { name: "Government", icon: "🏛️", desc: "Accessible, informative digital platforms for public sector bodies." },
  { name: "Manufacturing", icon: "🏭", desc: "B2B websites and lead generation for industrial businesses." },
  { name: "Artists & Creators", icon: "🎨", desc: "Personal branding and content strategy for creators and influencers." },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          INDUSTRIES WE SERVE
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Solutions Built for Your Sector</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          We tailor our branding, web, and marketing approach to the realities of your industry.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition">
              <div className="text-3xl">{ind.icon}</div>
              <h3 className="mt-4 font-semibold">{ind.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Don't see your industry listed?</h2>
        <p className="mt-3 text-purple-100">We work with businesses across every sector — let's talk about yours.</p>
        <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
}
