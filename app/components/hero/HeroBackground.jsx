export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(rgba(7,18,43,0.25), rgba(7,18,43,0.45)), url('/hero/hero-globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-[#32C5FF] opacity-60" style={{ animation: "float 6s ease-in-out infinite" }} />
      <div className="absolute left-[25%] top-[60%] h-1 w-1 rounded-full bg-[#9F4DFF] opacity-50" style={{ animation: "float 8s ease-in-out infinite 1s" }} />
      <div className="absolute left-[85%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#32C5FF] opacity-50" style={{ animation: "float 7s ease-in-out infinite 0.5s" }} />
    </div>
  );
}
