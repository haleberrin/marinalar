import titleShape from "../../public/images/BookingSteps/Title-Shape.png"
import StepsIcon1 from "../../public/images/BookingSteps/Steps-Icon1.png"
import StepsIcon2 from "../../public/images/BookingSteps/Steps-Icon2.png"
import StepsIcon3 from "../../public/images/BookingSteps/Steps-Icon3.png"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

const stepsData = [
  {
    id:1,
    number:"01",
    title: "Çıkış Marinanı Seç",
    description:"Çıkış marinanı seç, rota buradan başlasın",
    icon:StepsIcon1
  },
  {
    id:2,
    number:"02",
    title: "Seyahat Tarzını Belirle",
    description:"Sakin koylar mı, hareketli geceler mi?",
    icon:StepsIcon2
  },
  {
    id:3,
    number:"03",
    title: "AI Rotanı Oluştursun",
    description:"Gün gün plan, koylar ve alternatifler hazır",
    icon:StepsIcon3,
    highlight:true
  }
]

const BookingSteps = () => {
  return (
    <>
      <div className='px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-[#F8FAFC]'>
        <div className='title flex flex-col justify-center items-center text-center relative pb-10'>
            <h1 className='text-darknavy text-4xl md:text-6xl font-cormorant-garamont font-bold'>
                Rotanı ve Marinalarını <span className='text-primary'>Yapay Zeka </span> ile Kolayca Planla
            </h1>
            <p className='text-secondary1 my-2 text-lg font-inter'>
            Yapay zeka destekli rota planlama ile marinaları, koyları ve etkinlikleri tek bir seyahatte birleştir.
            </p>
            <Image src={titleShape} alt="titleShape" className="w-[35%] object-contain absolute -bottom-12" />
        </div>

        <div className="pb-20">
             <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-10 gap-10 lg:gap-12">
                {stepsData.map(({id, icon, title, description})=>(
                    <div key={id} className='w-full relative mb-10 '>
                        <div className={`flex flex-col ${id===3 ? "border-primary/30 bg-primary/5 ring-1 ring-primary/20" : "bg-white/70"} items-center cursor-pointer relative group  backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300`}>
                            {/* Circle with image and number */}
                            <div className='w-42.5 h-42.5 rounded-full shadow-lg flex items-center justify-center relative hover:translate-y-1.5 transition-transform duration-300'>
                                <Image 
                                    src={icon}
                                    alt={`Process ste ${id}`}
                                    className='w-17.5 h-17.5 transition-transform duration-500 ease-out group-hover:-rotate-y-360'
                                />
                                <span className='absolute -top-3 right-10 bg-darknavy text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold select-none'>
                                    {id}.
                                </span>
                            </div>
                            {/* Title */}
                            <h2 className='font-bricolage text-xl mt-6 mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-darknavy after:w-0 group-hover:after:w-full after:transition-width after:duration-300 font-cormorant-garamont text-darknavy '>
                                {title}
                            </h2>
                            {/* Description */}
                            <p className="text-center text-base max-w-[70%] mx-auto font-inter text-darknavy">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center mt-8">
  <Link
    href="/ai-planer"
    className="
      inline-flex items-center gap-2
      px-8 py-4
      rounded-full
      bg-primary
      text-white
      font-semibold
      hover:scale-105
      transition-all duration-300
      shadow-lg
    "
  >
    Bana Özel Rota Oluştur
    {/* <span>→</span> */}
    <Icon icon="guidance:up-right-arrow" width={24} height={24} className='text-white' />
  </Link>
        </div>
      </div>
    </>
  )
}

export default BookingSteps
