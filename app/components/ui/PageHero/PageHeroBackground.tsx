import Image from "next/image";

interface PageHeroBackgroundProps {
  image: string;
}

export default function PageHeroBackground({
  image,
}: PageHeroBackgroundProps) {
  return (
    <>
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Noise */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none
        mix-blend-soft-light bg-[url('/noise.png')]"
      />

      {/* Dark */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/20 via-black/45 to-black/75" />

      {/* Cyan */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(60,240,255,0.10),transparent_60%)]" />

      {/* Blue */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom,rgba(77,124,255,0.12),transparent_60%)]" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-linear-to-t from-black/80 to-transparent" />
    </>
  );
}