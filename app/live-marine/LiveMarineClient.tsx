

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    MapPin,
    Gauge,
    Compass,
    Ship,
  } from "lucide-react";

export default function LiveMarineClient() {
  return (
    <section className="px-[8%] py-24 lg:px-[12%]">
      <div className="mx-auto max-w-7xl">

      <div className="
  mb-20
  grid
  gap-6
  md:grid-cols-3
">

  <div className="
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-8
    shadow-sm
  ">

    <p className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-primary
    ">
      Canlı Takip
    </p>

    <h3 className="
      mt-4
      font-cormorant-garamont
      text-3xl
      font-bold
      text-darknavy
    ">
      Denizleri Anlık İzle
    </h3>

    <p className="
      mt-3
      leading-7
      text-darknavy/70
    ">
      Gemilerin konumlarını, yönlerini ve hareketlerini canlı olarak takip edin.
    </p>

  </div>


  <div className="
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-8
    shadow-sm
  ">

    <p className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-primary
    ">
      AIS Teknolojisi
    </p>

    <h3 className="
      mt-4
      font-cormorant-garamont
      text-3xl
      font-bold
      text-darknavy
    ">
      Gemileri Tanı
    </h3>

    <p className="
      mt-3
      leading-7
      text-darknavy/70
    ">
      AIS sistemi sayesinde gemilerin kimlik, konum ve seyir bilgilerini takip edin.
    </p>

  </div>


  <div className="
    rounded-3xl
    border
    border-slate-200
    bg-white
    p-8
    shadow-sm
  ">

    <p className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-primary
    ">
      Deniz Haritası
    </p>

    <h3 className="
      mt-4
      font-cormorant-garamont
      text-3xl
      font-bold
      text-darknavy
    ">
      Rotanı Keşfet
    </h3>

    <p className="
      mt-3
      leading-7
      text-darknavy/70
    ">
      Kıyıları, limanları ve deniz rotalarını detaylı haritalar üzerinden inceleyin.
    </p>

  </div>

</div>

        {/* NAVIONICS */}

        <div className="mb-24">

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Deniz Haritası
            </p>

            <h2 className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            ">
              Türkiye Kıyılarını Keşfedin
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-darknavy/70
            ">
              Deniz rotalarını, kıyıları ve seyir bölgelerini detaylı deniz
              haritaları üzerinden inceleyin.
            </p>
          </div>

          <div className="
            relative
            aspect-video
            overflow-hidden
            rounded-3xl
            shadow-xl
          ">

            <Image
              src="/images/services/deniz-haritasi.jpeg"
              alt="Navionics deniz haritası"
              fill
              className="object-cover"
            />

            <div className="
              absolute
              inset-0
              flex
              items-end
              bg-linear-to-t
              from-darknavy/80
              via-darknavy/20
              to-transparent
              p-8
            ">

              <Link
                href="https://webapp.navionics.com/?lang=en#boating"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Navionics Haritasını Aç
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>


        {/* MARINE TRAFFIC */}

        <div>

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Canlı Takip
            </p>

            <h2 className="
              mt-3
              font-cormorant-garamont
              text-5xl
              font-bold
              text-darknavy
            ">
              Canlı Gemi Trafiği
            </h2>

            <p className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-darknavy/70
            ">
              Denizlerdeki gemi hareketlerini ve AIS tabanlı deniz trafiğini
              canlı olarak takip edin.
            </p>
          </div>

          <div className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-slate-100
            shadow-xl
          ">

            <div className="aspect-video w-full">

              <iframe
                title="Canlı gemi trafiği"
                src="https://www.marinetraffic.com/en/ais/embed/zoom:5/centery:37.4460/centerx:24.9467/maptype:1/shownames:true/mmsi:0/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

        </div>

        {/* AIS BİLGİ BÖLÜMÜ */}

<div className="
  mt-24
  grid
  gap-10
  lg:grid-cols-2
  lg:items-center
">

  <div>

    <p className="
      text-sm
      uppercase
      tracking-[0.3em]
      text-primary
    ">
      Denizcilik Teknolojisi
    </p>

    <h2 className="
      mt-3
      font-cormorant-garamont
      text-5xl
      font-bold
      text-darknavy
    ">
      AIS Nedir?
    </h2>

    <p className="
      mt-6
      text-lg
      leading-8
      text-darknavy/70
    ">
      AIS (Automatic Identification System), gemilerin birbirleriyle
      ve kıyı istasyonlarıyla konum, hız, yön ve kimlik bilgilerini
      paylaşmasını sağlayan otomatik bir denizcilik iletişim sistemidir.
    </p>

    <p className="
      mt-4
      leading-8
      text-darknavy/70
    ">
      Bu sistem sayesinde deniz trafiği daha güvenli bir şekilde
      izlenebilir ve gemilerin hareketleri gerçek zamanlı olarak
      takip edilebilir.
    </p>

  </div>


  <div className="
    rounded-3xl
    bg-darknavy
    p-8
    text-white
    shadow-xl
  ">

    <p className="
      text-sm
      uppercase
      tracking-[0.25em]
      text-primary
    ">
      AIS Verileri
    </p>

    <div className="
  mt-8
  grid
  gap-6
  sm:grid-cols-2
">

  <div className="flex gap-4">

    <div className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-white/10
      text-primary
    ">
      <MapPin size={20} />
    </div>

    <div>
      <p className="text-sm text-white/50">
        Konum
      </p>

      <p className="mt-1 text-lg font-semibold">
        Geminin bulunduğu konum
      </p>
    </div>

  </div>


  <div className="flex gap-4">

    <div className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-white/10
      text-primary
    ">
      <Gauge size={20} />
    </div>

    <div>
      <p className="text-sm text-white/50">
        Hız
      </p>

      <p className="mt-1 text-lg font-semibold">
        Seyir hızı
      </p>
    </div>

  </div>


  <div className="flex gap-4">

    <div className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-white/10
      text-primary
    ">
      <Compass size={20} />
    </div>

    <div>
      <p className="text-sm text-white/50">
        Yön
      </p>

      <p className="mt-1 text-lg font-semibold">
        Seyir yönü
      </p>
    </div>

  </div>


  <div className="flex gap-4">

    <div className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      rounded-xl
      bg-white/10
      text-primary
    ">
      <Ship size={20} />
    </div>

    <div>
      <p className="text-sm text-white/50">
        Kimlik
      </p>

      <p className="mt-1 text-lg font-semibold">
        Gemi bilgileri
      </p>
    </div>

  </div>

</div>

  </div>

</div>

      </div>
    </section>
  );
}