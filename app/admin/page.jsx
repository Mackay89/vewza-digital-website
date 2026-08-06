"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Admin dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
          >
            Log out
          </button>
        </div>

        <p className="mt-2 text-slate-500">
          Welcome back. This area is only reachable with the admin password.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a href="/admin/portfolio" className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
            <h2 className="font-semibold">Portfolio</h2>
            <p className="mt-2 text-sm text-slate-500">Add or edit portfolio projects.</p>
          </a>
          <a href="/admin/updates" className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
  <h2 className="font-semibold">Company Updates</h2>
  <p className="mt-2 text-sm text-slate-500">Publish news and announcements.</p>
</a>
	  <a href="/admin/contact-settings" className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 hover:shadow-md transition opacity-70">
	  <h2 className="font-semibold">Contact Settings</h2>
	<p className="mt-2 text-sm text-slate-500">Coming soon.</p>
	</a>
	<div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 opacity-60">
	  <h2 className="font-semibold">Contact Settings</h2>
	  <p className="mt-2 text-sm text-slate-500">Coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
