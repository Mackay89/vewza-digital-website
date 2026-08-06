import HeroBackground from "./HeroBackground";
import HeroLogo from "./HeroLogo";
import HeroContent from "./HeroContent";
import CTAButtons from "./CTAButtons";

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 80px)", paddingTop: "80px" }}
    >
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>
      <div className="relative z-10 mx-auto w-full" style={{ maxWidth: "1280px", padding: "0 32px" }}>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between lg:gap-20">
          <div className="w-full" style={{ maxWidth: "620px" }}>
            <HeroContent />
            <CTAButtons />
          </div>
          <div className="hidden w-full items-center justify-center lg:flex" style={{ maxWidth: "560px" }}>
            <HeroLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
