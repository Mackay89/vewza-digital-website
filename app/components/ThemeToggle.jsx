"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className="flex h-9 w-9 items-center justify-center rounded-full text-lg transition"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border-color)" }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
