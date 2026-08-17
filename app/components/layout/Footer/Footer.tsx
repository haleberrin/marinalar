import FooterCTA from "./FooterCTA";
import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-darknavy text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-150 w-150 rounded-full bg-primary/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-sky-500/10 blur-[180px]" />

        <div
  className="
    absolute
    left-1/2
    top-1/2
    h-175
    w-175
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-cyan-400/5
    blur-[220px]
  "
/>

      </div>

      <div className="relative">

        <FooterCTA />

        <FooterColumns />

        <FooterBottom />

        <p className="mt-5 text-center text-xs tracking-[0.35em] text-white/20 uppercase">
    Explore • Sail • Discover • Experience
</p>

      </div>

    </footer>
  );
}