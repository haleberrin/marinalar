import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCards, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { MarinaData } from './marinaData';
import Link from 'next/link';

const MarinasSlider = () => {
  return (
    <Swiper
    loop={true}
    modules={[Navigation, Autoplay]}
    navigation={{
        nextEl: ".swiper-project-next",
        prevEl: ".swiper-project-prev",
    }}
    autoplay={{
        delay: 1500
    }}
    spaceBetween={24}
    slidesPerView={1}
    breakpoints={{
        640:{slidesPerView: 1},
        768:{slidesPerView: 2},
        1024:{slidesPerView: 3},
    }}
    className='relative'
>
    {MarinaData.map((property)=>(
        <SwiperSlide key={property.id}>
            <Link href={`properties/${property.id}`}>
            <div
                className="
                    relative
                    h-112.5
                    rounded
                    overflow-hidden
                    group
                    border
                    border-white/10
                    hover:border-white/20
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                    transition-all duration-500
                "
            ><Image
            src={property.image}
            alt={property.title}
            fill
            priority={property.id === 1}
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
                    {/* Overlay Gradient */}
                    <div className='absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-darknavy/70 to-transparent opacity-0
                    group-hover:opacity-100 transition-opacity duration-700 z-0' />
                    {/* Title&Price */}
                    <div className=' justify-between items-center w-full absolute bottom-0 left-0 z-10 px-4 py-3 opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-700'>
                        <h4 className='text-white text-2xl font-bricolage font-bold'>
                            {property.title}
                        </h4>
                        <div className='flex'>
                        <p className='text-white text-xl font-bricolage'>
                            {property.sehir} .
                        </p>
                        <p className='text-white text-xl font-bricolage'>
                            {property.bolge}
                        </p>
                        </div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
    ))}
</Swiper>
  )
}

export default MarinasSlider
