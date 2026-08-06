const audiences = [
  "SMEs, startups, and entrepreneurs ready to scale",
  "Artists, musicians, content creators, and influencers",
  "Churches, schools, NGOs, and government departments",
  "Retail, real estate, healthcare, and professional service firms",
];

const solutions = [
  { title: "Branding", desc: "Logo design, brand identity, corporate identity & strategy." },
  { title: "Website & App Development", desc: "Business sites, e-commerce, Android/iOS & cross-platform apps." },
  { title: "Digital Marketing", desc: "Social media, Google Ads, Facebook & Instagram Ads, TikTok, LinkedIn." },
  { title: "SEO & Content", desc: "Website SEO, local SEO, graphic design, motion graphics, videography." },
];

const businessSolutions = [
  { title: "CRM Setup & Business Automation", desc: "Streamline operations and customer management." },
  { title: "AI Chatbots & WhatsApp Business Integration", desc: "Always-on customer engagement." },
  { title: "Digital Transformation", desc: "Future-proof your business with smart technology." },
];

const whyChooseUs = [
  "Affordable, professional services with experienced digital specialists",
  "Data-driven strategies focused on measurable business growth",
  "End-to-end solutions — from brand creation to campaign execution",
  "Transparent communication and ongoing client support",
];

const coreValues = [
  { title: "Innovation & Creativity", desc: "Modern, forward-thinking solutions." },
  { title: "Excellence & Integrity", desc: "Delivering quality with honesty." },
  { title: "Collaboration & Accountability", desc: "Your success is our success." },
  { title: "Customer Success", desc: "Every strategy is built around your growth." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-24 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          AFRICA'S NEXT LEADING DIGITAL AGENCY
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
          Building Brands. Driving Growth.{" "}
          <span className="text-purple-400">Creating Digital Success.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          A full-service digital marketing & branding agency — Gauteng, South Africa.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
            <h2 className="text-lg font-bold text-purple-700">Our Vision</h2>
            <p className="mt-3 text-slate-600">
              Become Africa's leading digital marketing and branding agency, empowering businesses with world-class digital solutions.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
            <h2 className="text-lg font-bold text-blue-700">Our Mission</h2>
            <p className="mt-3 text-slate-600">
              Help businesses grow through innovative branding, digital marketing, web development, and creative services that increase visibility, engagement, and revenue.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-slate-500 italic">
          We combine creativity, technology, and data-driven strategies to deliver measurable results.
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Who We Serve</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {audiences.map((a) => (
              <div key={a} className="rounded-xl bg-white p-6 text-left shadow-sm ring-1 ring-slate-100">
                <p className="text-slate-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Our Full-Service Digital Solutions</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
              <h3 className="font-semibold text-purple-700">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Social Media & Content Management</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-6">
              <p>Full content planning, daily posting, and community management.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p>Audience engagement and performance reporting.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p>Photography, videography, and product photography for brands.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Business Solutions & Automation</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {businessSolutions.map((b) => (
            <div key={b.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-bold text-purple-700">Creative</h2>
            <p className="mt-3 text-slate-600">
              Company profiles, presentations, brochures, flyers, posters, business cards.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-bold text-blue-700">Training</h2>
            <p className="mt-3 text-slate-600">
              Digital marketing workshops, social media training, branding masterclasses, AI for Business.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Why Choose VEWZA Digital?</h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {whyChooseUs.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
              <span className="mt-0.5 text-purple-600">✓</span>
              <span className="text-slate-700">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="font-semibold text-purple-700">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Let's Build Your Digital Future</h2>
        <div className="mt-8 flex flex-col items-center gap-2 text-slate-300">
          <p>Email: info@vewza.co.za</p>
          <p>Website: www.vewza.co.za</p>
          <p>Head Office: Gauteng, South Africa</p>
          <p className="mt-2 text-sm text-purple-300">VEWZA Digital — A Division of VEWZA</p>
        </div>
        <a href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition">
          Get a Free Consultation →
        </a>
      </section>
    </div>
  );
}
