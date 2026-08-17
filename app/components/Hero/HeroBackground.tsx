export default function HeroBackground(){
    return(
    <>
     <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-soft-light pointer-events-none
             bg-[url('/noise.png')]"
      />

      {/* LAYER 1: DARK GRADIENT */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/30 via-black/50 to-black/85" />

      {/* LAYER 2: CYAN AMBIENT GLOW (marine vibe) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(60,240,255,0.10),transparent_60%)]" />

      {/* LAYER 3: BLUE DEPTH */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_bottom,rgba(77,124,255,0.12),transparent_60%)]" />
 {/* BOTTOM FADE (Xinterior trick) */}
      {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent z-10" /> */}
    </>)
}