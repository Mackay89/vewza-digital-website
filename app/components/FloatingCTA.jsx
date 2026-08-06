"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a href="/contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:opacity-90 sm:px-6 sm:py-3.5" style={{ background: "linear-gradient(90deg, #2563EB, #A855F7)" }}>Get a Free Consultation →</a>
  );
}
