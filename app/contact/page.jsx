"use client";

import { useState } from "react";

const services = [
  "Branding", "Website Development", "Mobile App Development", "Digital Marketing",
  "SEO & Analytics", "Content Creation", "Business Automation / AI Chatbots", "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  website: "",
});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          CONTACT
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Let's Build Your Digital Future</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us about your business and we'll get back to you with a plan tailored to your goals.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="mt-3 text-slate-600">
            Whether you're starting from scratch or scaling an existing brand, our team is ready to help.
          </p>

          <div className="mt-8 space-y-4 text-slate-700">
            <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
              <p className="text-sm font-semibold text-slate-400">Email</p>
              <p className="mt-1">info@vewza.co.za</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
              <p className="text-sm font-semibold text-slate-400">Website</p>
              <p className="mt-1">www.vewza.co.za</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-5 ring-1 ring-slate-100">
              <p className="text-sm font-semibold text-slate-400">Head Office</p>
              <p className="mt-1">Gauteng, South Africa</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <p className="text-2xl font-bold text-purple-700">Thank you!</p>
              <p className="mt-2 text-slate-600">We've received your request and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
	    <input
  type="text"
  name="website"
  value={form.website}
  onChange={handleChange}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
  className="hidden"
 />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="+27 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Service Required</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Request Consultation"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
