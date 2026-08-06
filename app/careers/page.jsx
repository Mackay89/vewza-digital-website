// app/careers/page.jsx
"use client";

import { useState } from "react";

const stats = [
  { value: "250+", label: "Registered Professionals" },
  { value: "15+", label: "Career Categories" },
  { value: "20+", label: "Digital Services" },
  { value: "100%", label: "Free Registration" },
];

const whyJoin = [
  { icon: "💻", title: "Build Digital Products", desc: "Develop software that powers businesses across Africa." },
  { icon: "📚", title: "Grow Your Career", desc: "Training, mentorship and continuous learning." },
  { icon: "🤝", title: "Network", desc: "Connect with recruiters and future teammates." },
  { icon: "🚀", title: "Future Opportunities", desc: "Be first when new vacancies become available." },
];

const categories = [
  "Software Engineering", "Frontend", "Backend", "Full Stack", "Mobile Development",
  "Cloud & DevOps", "Cybersecurity", "AI Engineering", "UI/UX Design", "Graphic Design",
  "Digital Marketing", "Project Management", "Sales", "Finance", "Human Resources",
];

const faqs = [
  { q: "Can I register without vacancies?", a: "Yes." },
  { q: "Can I update my profile?", a: "Yes." },
  { q: "Can I upload a portfolio?", a: "Yes." },
  { q: "Is registration free?", a: "Yes." },
  { q: "Will you email me?", a: "Yes." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-100">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-6 py-4 text-left">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-purple-600">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-6 pb-4 text-sm text-slate-600">{a}</p>}
    </div>
  );
}

export default function Careers() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleNewsletterSubmit(e) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-24 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          WELCOME TO OUR TALENT COMMUNITY
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Build Your Future With VEWZA Digital</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Join our growing community of software developers, designers, marketers, engineers and digital professionals. Create your profile today and be among the first to hear about future opportunities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/careers/apply" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold shadow-lg hover:opacity-90 transition">Create Profile →</a>
          <a href="/careers/signin" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">Sign In</a>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Already have an account? <a href="/careers/apply" className="text-purple-300 underline">Login to update your profile.</a>
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-purple-600">Growing Talent Community</h2>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Why Join VEWZA Digital</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
              <div className="text-3xl">{w.icon}</div>
              <h3 className="mt-4 font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold">Career Categories</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <span key={c} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="rounded-2xl bg-slate-50 p-10 ring-1 ring-slate-100">
          <h2 className="text-2xl font-bold">No Open Positions</h2>
          <p className="mt-4 text-slate-600">We are currently building our team.</p>
          <p className="mt-4 text-slate-600">Create your profile today and we'll notify you as soon as new opportunities become available.</p>
          <a href="/careers/apply" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition">Join Talent Community →</a>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold">FAQ</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p className="mt-3 text-slate-600">Receive notifications when we begin hiring.</p>
        {subscribed ? (
          <p className="mt-6 font-medium text-purple-700">Thanks — you're on the list.</p>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <input type="email" required value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="you@example.com" className="rounded-full border border-slate-200 px-5 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:w-72" />
            <button type="submit" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition">Subscribe</button>
          </form>
        )}
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to Join VEWZA Digital?</h2>
        <p className="mt-3 text-purple-100">Create your professional profile today and become part of our Talent Community.</p>
        <a href="/careers/apply" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition">Create Profile →</a>
      </section>
    </div>
  );
}
