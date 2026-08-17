"use client"
import tourbg from "../../public/images/services/tour1-bg.jpg"
import ctg1 from "../../public/images/services/marinalar.jpg"
import ctg2 from "../../public/images/services/AI_planer.jpg"
import ctg3 from "../../public/images/services/deniz_trafigi.jpg"
import ctg4 from "../../public/images/services/hava_durumu.jpg"
import ctg5 from "../../public/images/services/sozluk.jpg"
import ctg6 from "../../public/images/services/event.jpg"
import ctg7 from "../../public/images/services/blog.jpg"


import { Icon } from "@iconify/react"
import { StaticImageData } from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
// import Mainbtn from '../../Buttons/Mainbtn'

type Category = {
    id:number
    title:string
    pera?:string
    image?:StaticImageData
    href?:string
    isButton?:boolean
  }

const categories: Category[] = [
    {
        id:1,
        title:"Marinalar",
        pera:" Türkiye'deki marinaların konumlarını, hizmetlerini, kapasite bilgilerini ve kullanıcı yorumlarını keşfedin.",
        image: ctg1,
        href:"/marinas"
    },
    {
        id:2,
        title:"Yapay Zeka Rota Asistanı",
        pera:"Seyahat tarzınızı seçin, yapay zeka size en uygun marina ve koy rotasını oluştursun.",
        image: ctg2,
        href:"/ai-planner"
    },
    {
        id:3,
        title:"Canlı Deniz Trafiği",
        pera:" Gemileri, yatları ve deniz hareketliliğini gerçek zamanlı olarak takip edin.",
        image: ctg3,
        href:"/live-marine"
    },
    {
        id:4,
        title:"Hava Durumu",
        pera:" Rüzgar, dalga ve hava tahminlerini tek ekranda görüntüleyin.",
        image: ctg4,
        href:"/weather"
    },
    {
        id:5,
        title:"Denizcilik Sözlüğü",
        pera:" Denizcilik terimlerini kolayca öğrenin ve deniz kültürünü keşfedin.",
        image: ctg5,
        href:"/glossary"
    },
    {
        id:6,
        title:"Etkinlikler",
        pera:" Deniz ve marina bölgelerinde gerçekleşen tüm etkinlikleri tek bir yerde keşfet. Yaz sezonu festivallerinden yat yarışlarına, konserlerden yerel liman etkinliklerine kadar her şeyi takip edebilirsin. Bulunduğun bölgeye göre sana özel önerilerle hiçbir etkinliği kaçırmazsın.",
        image: ctg6,
        href:"/events"
    },
    {
        id:7,
        title:"Blog",
        pera:" Denizcilik dünyasından güncel bilgiler, rehberler ve ilham verici içerikler. Rota planlama ipuçları, marina incelemeleri, tekne yaşamı, hava ve deniz koşulları analizleri gibi içeriklerle hem yeni başlayanlar hem de deneyimli denizciler için kapsamlı bir bilgi kaynağı.",
        image: ctg7,
        href:"/blogs"
    },
    // {
    //     id:8,
    //     title:"Hepsini Gor",
    //    isButton: true,
    // },
]

function Services() {

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='services tour-ctg-container bg-no-repeat bg-center bg-cover px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] flex flex-col xl:flex-row gap-12 relative bg-[#F8FAFC]'
      style={{ backgroundImage: `url(${tourbg.src})` }}
      >
        <div className="ctg-content w-full xl:w-[40%] flex flex-col justify-center">
        <Link href={categories[activeIndex]?.href || "/"}>
            <h3 className="text-white/80 font-cormorant-garamont text-4xl font-medium pb-2">
                {categories[activeIndex].title}
            </h3>
            <p className="text-lg lg:max-w-sm text-white/80 font-inter mb-5">
                {categories[activeIndex].pera}
            </p>
            </Link>
            {/* <Mainbtn text={"Daha Fazla"} className="w-fit bg-orange-500! text-white/60! hover:text-white!" to={activeIndex.href} /> */}
        </div>

        <div className="ctg-wrap w-full xl:w-[60%] relative mb-14">
            <button className="ctg-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-orange-500 text-white cursor-pointer flex items-center justify-center shadow">
                <Icon icon="ep:arrow-left-bold" width="24" height="24" />
            </button>
            <button className="ctg-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-orange-500 text-white cursor-pointer flex items-center justify-center shadow">
                <Icon icon="ep:arrow-right-bold" width="24" height="24" />
            </button>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                navigation={{
                    prevEl: ".ctg-prev",
                    nextEl: ".ctg-next",
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {/* {categories.map((cat)=>(
                    <SwiperSlide key={cat.id} className="h-105">
                        {cat.isButton ? (
                            <div className="flex justify-center items-center h-full">
                                <Mainbtn text="Hepsini Gor" className="text-sm" />
                            </div>
                        ) : (
                            <div>
                                {cat.image && (
                                    <div className={`ctg-item bg-white p-5 rounded-2xl w-full transition-transform duration-500 ${activeIndex === categories.indexOf(cat) ? "scale-100 rotate-0" : "scale-75 rotate-6" }`}>
                                    <div className="relative w-full h-65 rounded-xl overflow-hidden">
                                        <Image src={cat.image} alt={cat.title} className="object-cover" />
                                    </div>
                                    <span className="text-center pt-2 block text-2xl lg:text-3xl font-medium text-secondary1 font-afacad">{cat.title}</span>
                                </div>
                                )}
                            </div>
                        )}
                    </SwiperSlide>
                ))} */}

{categories.map((cat) => (
  <SwiperSlide key={cat.id} className="h-105">
    
    {cat.isButton ? (
      <div className="flex justify-center items-center h-full">
        {/* <Mainbtn text="Hepsini Gor" className="text-sm" /> */}
      </div>
    ) : (
      <div
        className={`ctg-item bg-white p-5 rounded-2xl w-full h-full transition-transform duration-500
        ${activeIndex === categories.indexOf(cat)
          ? "scale-100 rotate-0"
          : "scale-90 rotate-3 opacity-80"
        }`}
      >

        {/* IMAGE WRAPPER (FIX: sabit yükseklik) */}
        <Link href={cat.href || "/"} className="block">
        <div className="relative w-full h-65 rounded-xl overflow-hidden cursor-pointer group">
          <Image
            src={cat.image!}
            alt={cat.title}
            sizes="(max-width: 768px) 100vw,
       (max-width: 1024px) 50vw,
       33vw"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        </Link>

        {/* TITLE */}
        <span className="text-center pt-4 block font-cormorant-garamont text-2xl lg:text-3xl font-medium text-darknavy/80 ">
          {cat.title}
        </span>

      </div>
    )}

  </SwiperSlide>
))}
            </Swiper>
        </div>
        <div className="relative lg:absolute xl:right-40 bottom-8 font-inter text-white/70 flex flex-col  font-kaushan! text-xl sm:text-2xl xl:text-start text-end xl:text-5xl z-1">
            Denizlerde İhtiyacınız Olan
            <h2 className="uppercase font-afacad! font-cormorant-garamont font-extrabold text-4xl lg:text-6xl xl:text-8xl text-orange-500">Her Şey</h2>
        </div>
      </div>
    </>
  )
}

export default Services

