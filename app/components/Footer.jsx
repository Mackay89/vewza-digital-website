import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vewza-digital/" },
  { label: "TikTok", href: "https://www.tiktok.com/@vewza" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#05070F" }} className="px-6 py-16 text-[#CBD5E1]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <Image src="/master-logo-transparent.png" alt="VEWZA Digital" width={612} height={408} className="w-[150px] h-auto" />
          <p className="mt-4 text-sm text-[#94A3B8]">Building Brands. Driving Growth. Creating Digital Success.</p>
          <p className="mt-4 text-sm text-[#94A3B8]">info@vewza.co.za<br />www.vewza.co.za<br />Gauteng, South Africa</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#94A3B8]">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#60A5FA] hover:text-[#A855F7] transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#94A3B8]">Follow Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#60A5FA] hover:text-[#A855F7] transition-colors">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-[#94A3B8]">
        © {new Date().getFullYear()} VEWZA Digital — A Division of VEWZA. All rights reserved.
      </div>
    </footer>
  );
}
