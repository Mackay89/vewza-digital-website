"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });
  const [cvFile, setCvFile] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!cvFile) {
      setError("Please attach your CV.");
      return;
    }
    if (cvFile.size > 5 * 1024 * 1024) {
      setError("CV file must be under 5MB.");
      return;
    }

    setSubmitting(true);

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));
    data.append("cv", cvFile);

    try {
      const res = await fetch("/api/careers/apply", { method: "POST", body: data });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#0d0a2b] via-[#160f45] to-[#2a1263] px-6 py-20 text-center text-white">
        <span className="inline-block rounded-full bg-purple-500/20 px-4 py-1 text-xs font-semibold tracking-wide text-purple-200">
          JOIN OUR TALENT COMMUNITY
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Submit Your CV</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Tell us a bit about yourself and attach your CV. We'll reach out when a matching opportunity opens up.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-2xl font-bold text-purple-700">Thank you!</p>
              <p className="mt-2 text-slate-600">
                Your CV has been received. We'll be in touch if a suitable opportunity comes up.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Full name</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="+27 ..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Area of interest</label>
                  <input type="text" name="role" value={form.role} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="e.g. Web Development" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">CV (PDF, max 5MB)</label>
                <input type="file" accept=".pdf,.doc,.docx" required onChange={(e) => setCvFile(e.target.files[0])} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">A little about you</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" placeholder="Your career journey, skills, and goals..." />
              </div>

              {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

              <button type="submit" disabled={submitting} className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
