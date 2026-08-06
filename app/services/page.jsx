const serviceCategories = [
  { title: "Branding", icon: "🎨", items: ["Logo Design", "Corporate Identity", "Brand Strategy", "Brand Guidelines"] },
  { title: "Website Development", icon: "💻", items: ["Business Websites", "E-Commerce Stores", "Landing Pages", "Custom Web Applications"] },
  { title: "Mobile App Development", icon: "📱", items: ["Android Apps", "iOS Apps", "Cross-Platform Apps"] },
  { title: "Digital Marketing", icon: "📣", items: ["Google Ads", "Facebook Marketing", "Instagram Marketing", "TikTok Marketing", "LinkedIn Marketing", "Email Marketing"] },
  { title: "SEO", icon: "📈", items: ["Local SEO", "Technical SEO", "Keyword Research", "Website Optimization"] },
  { title: "Content Creation", icon: "🎥", items: ["Graphic Design", "Photography", "Videography", "Video Editing", "Motion Graphics"] },
  { title: "Business Solutions", icon: "⚙️", items: ["CRM Systems", "AI Chatbots", "Business Automation", "WhatsApp Business", "Cloud Solutions"] },
];

const processSteps = [
  { step: "01", title: "Discover", desc: "We learn your business, goals, and audience." },
  { step: "02", title: "Strategize", desc: "We build a tailored plan across brand and channels." },
  { step: "03", title: "Execute", desc: "Our team designs, builds, and launches with precision." },
  { step: "04", title: "Grow", desc: "We track results and optimize for ongoing growth." },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          OUR SERVICES
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">End-to-End Digital Solutions</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          From branding to marketing to automation — everything your business needs to grow online, under one roof.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat) => (
            <div key={cat.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100 hover:shadow-lg transition">
              <div className="text-3xl">{cat.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{cat.title}</h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-block text-sm font-semibold text-purple-600 hover:text-purple-700">
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">How We Work</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Not sure which service is right for you?</h2>
        <p className="mt-3 text-purple-100">Book a free consultation and we'll help you map out a plan.</p>
        <a href="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
}
