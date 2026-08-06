"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function CompanyUpdates() {
  const supabase = createClient();
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("company_updates")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(3);
      if (data) setUpdates(data);
    }
    load();
  }, []);

  if (updates.length === 0) return null;

  function shareUpdate(title) {
    if (navigator.share) {
      navigator.share({ title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  }

  return (
    <section style={{ background: "#0E1630" }} className="px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#A855F7]">Latest News</span>
        <h2 className="mt-2 text-3xl font-bold text-white">Company Updates</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((u) => (
            <div key={u.id} className="rounded-2xl p-6 text-left" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.06)" }}>
              {u.image_url && <img src={u.image_url} alt={u.title} className="mb-4 h-36 w-full rounded-lg object-cover" />}
              <h3 className="font-semibold text-white">{u.title}</h3>
              <p className="mt-2 text-sm text-[#94A3B8]">{u.content}</p>
              <button onClick={() => shareUpdate(u.title)} className="mt-4 text-sm font-medium text-[#60A5FA]">Share →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
