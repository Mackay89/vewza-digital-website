import Image from "next/image";

export default function HeroLogo() {
  return (
    <div className="relative flex justify-center" style={{ animation: "fadeInScale 0.8s ease-out 0.5s both" }}>
      <div className="absolute h-72 w-72 rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(159,77,255,0.4), transparent 70%)", filter: "blur(50px)" }} />
      <Image src="/master-logo-transparent.png" alt="VEWZA Digital" width={612} height={408} priority className="relative h-auto w-full" style={{ maxWidth: "560px", filter: "drop-shadow(0 0 20px #32C5FF) drop-shadow(0 0 45px #9F4DFF) drop-shadow(0 0 90px rgba(159,77,255,0.4))", animation: "float 5s ease-in-out infinite" }} />
	  </div>
  );
}
