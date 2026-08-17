

const HeroContent = () => {
  return (
    
        <div className="relative z-20 h-full flex items-end">
        
        <div className="w-full max-w-7xl mx-auto px-6 pb-24 md:pb-28">

          {/* SMALL LABEL */}
          <p className="text-white/60 tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            Türkiye Marina Network
          </p>

          {/* MAIN TITLE */}
          <h1 className="text-[#F8FAFC] font-light leading-[0.9] tracking-[-0.04em]
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-cormorant-garamont">

Türkiye'nin Marinalarını Keşfet ve   
            <br />
            <span className="text-primary font-semibold">
            Rotanı            
            </span>
             Planla

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-white/70 max-w-xl text-base md:text-lg leading-relaxed font-inter">
            Türkiye’deki marinaları keşfet, canlı deniz trafiğini takip et,
            hava durumunu analiz et ve <span className="text-primary">Yapay Zeka  </span> ile sana özel rota oluştur.
          </p>

          {/* CTA ROW */}
          <div className="mt-10 flex items-center gap-6">

            <button className="px-7 py-4 backdrop-blur-xl font-inter font-bold
border border-white/10
shadow-[0_0_40px_rgba(14,165,233,0.25)] bg-[#E67E22] text-white rounded-full  cursor-pointer
                               hover:scale-[1.03] transition">
              Rota Oluştur
            </button>

            <button className="text-white/80 hover:text-white transition cursor-pointer font-inter font-bold ">
              Marinaları Keşfet →
            </button>

          </div>

        </div>
      </div>
 
  )
}

export default HeroContent
