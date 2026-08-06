export default function HeroMockup() {
  return (
    <div className="relative" style={{ animation: "fadeInScale 0.8s ease-out 0.4s both" }}>
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #9F4DFF, transparent 70%)", filter: "blur(50px)" }} />

      <div className="relative rounded-2xl p-2 shadow-2xl" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.08)" }}>
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        <div className="rounded-xl p-5" style={{ background: "#07122B" }}>
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="h-6 w-6 rounded-full" style={{ background: "linear-gradient(90deg, #32C5FF, #9F4DFF)" }} />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-lg p-3" style={{ background: "rgba(50,197,255,0.1)" }}>
              <p className="text-xs text-[#94A3B8]">Traffic</p>
              <p className="mt-1 text-lg font-bold text-white">54.2K</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: "rgba(159,77,255,0.1)" }}>
              <p className="text-xs text-[#94A3B8]">Leads</p>
              <p className="mt-1 text-lg font-bold text-white">1.8K</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: "rgba(50,197,255,0.1)" }}>
              <p className="text-xs text-[#94A3B8]">Growth</p>
              <p className="mt-1 text-lg font-bold text-[#32C5FF]">+24%</p>
            </div>
          </div>

          <div className="mt-5 flex h-24 items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i % 2 === 0 ? "linear-gradient(180deg, #32C5FF, transparent)" : "linear-gradient(180deg, #9F4DFF, transparent)" }} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -left-8 top-10 hidden rounded-xl px-4 py-3 shadow-xl sm:block" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.08)", animation: "float 6s ease-in-out infinite" }}>
        <p className="text-xs font-semibold text-[#32C5FF]">SEO ↑</p>
        <p className="text-lg font-bold text-white">+300%</p>
      </div>

      <div className="absolute -right-6 bottom-8 hidden rounded-xl px-4 py-3 shadow-xl sm:block" style={{ background: "#111C33", border: "1px solid rgba(255,255,255,.08)", animation: "float 7s ease-in-out infinite 1s" }}>
        <p className="text-xs text-[#94A3B8]">🤖 AI Automation</p>
        <p className="text-sm font-semibold text-white">Active</p>
      </div>
    </div>
  );
}
