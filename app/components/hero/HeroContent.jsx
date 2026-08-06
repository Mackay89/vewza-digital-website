export default function HeroContent() {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl" style={{ animation: "fadeInUp 0.6s ease-out 0.15s both" }}>
        Building Brands.{" "}
        <span style={{ background: "linear-gradient(90deg, #32C5FF, #6BA8FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Driving Growth.</span>{" "}
        <span style={{ background: "linear-gradient(90deg, #9F4DFF, #C084FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Creating Digital Success.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-lg text-[#CBD5E1] lg:mx-0" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
        We help businesses, startups, and creators grow through branding, digital marketing, websites, mobile apps, and AI-powered digital solutions.
      </p>
    </div>
  );
}
