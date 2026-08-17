"use client"

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* VIDEO BACKGROUND */}
     <HeroBackground />
      {/* CONTENT */}
    <HeroContent />

     

    </section>
  );
}

