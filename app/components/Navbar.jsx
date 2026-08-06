"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          zIndex: 9999,
          background: "rgba(10,17,40,0.9)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "1400px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", height: "56px" }}>
            <Image src="/master-logo-transparent.png" alt="VEWZA Digital" width={612} height={408} priority style={{ height: "56px", width: "auto", objectFit: "contain" }} />
          </Link>

          <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "28px" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} style={{ fontSize: "14px", fontWeight: 500, color: isActive ? "#4DA3FF" : "#ffffff", borderBottom: isActive ? "2px solid #4DA3FF" : "none", paddingBottom: "4px" }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="hidden md:inline-flex" style={{ alignItems: "center", gap: "8px", borderRadius: "9999px", padding: "10px 20px", fontSize: "14px", fontWeight: 600, color: "#fff", background: "linear-gradient(90deg, #2563EB, #A855F7)" }}>
            Get a Free Consultation →
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ position: "relative", zIndex: 10001, fontSize: "28px", color: "#fff", background: "none", border: "none" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "#07122B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "24px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "22px", fontWeight: 600, color: pathname === link.href ? "#4DA3FF" : "#ffffff" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "8px", borderRadius: "9999px", padding: "12px 24px", fontSize: "16px", fontWeight: 600, color: "#fff", background: "linear-gradient(90deg, #2563EB, #A855F7)" }}
          >
            Get a Free Consultation →
          </Link>
        </div>
      )}
    </>
  );
}
