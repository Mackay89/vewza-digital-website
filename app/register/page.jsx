"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const accountTypes = [
  { value: "candidate", label: "I'm looking for work", desc: "Talent Community" },
  { value: "client", label: "I'm a client", desc: "Project Portal" },
  { value: "partner", label: "I'm a partner", desc: "Partnership Portal" },
];

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: "", role: "" });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.role) return setError("Please select an account type.");
    if (form.password !== form.confirmPassword) return setError("Passwords don't match.");
    if (form.password.length < 8) return setError("Password must be at least 8 characters.");
    if (!agreed) return setError("Please agree to the Terms of Service and Privacy Policy.");

    setLoading(true);
    const supabase = createClient();

    const { error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
          role: form.role,
        },
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
    } else {
      router.push("/register/check-email");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Create an Account</h1>
        <p className="mt-1 text-sm text-slate-500">Join VEWZA Digital's community.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Account Type</label>
            <div className="grid grid-cols-1 gap-2">
              {accountTypes.map((t) => (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => setForm({ ...form, role: t.value })}
                  className={`rounded-lg border px-4 py-3 text-left transition ${
                    form.role === t.value ? "border-purple-500 bg-purple-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-900">{t.label}</p>
                  <p className="text-xs text-slate-500">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">First Name</label>
              <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Last Name</label>
              <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input type="password" name="password" required value={form.password} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
              <input type="password" name="confirmPassword" required value={form.confirmPassword} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500" />
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1" />
            I agree to the Terms of Service and Privacy Policy
          </label>

          {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}

          <button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-60">
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-slate-500">
            Already have an account? <a href="/signin" className="text-purple-600 underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
