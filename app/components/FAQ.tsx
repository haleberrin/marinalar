"use client"

import Image from "next/image"
import faqBanner from "../../public/images/HeroSlider3.jpg"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    id: "01",
    question: "Türkiye’deki marinaları bu sitede nasıl bulabilirim?",
    answer: "Sitemizde Türkiye genelindeki tüm marinalar şehir, bölge ve konum bazlı olarak listelenmektedir..."
  },
  {
    id: "02",
    question: "Yapay zeka rota ve tatil planı nasıl oluşturuyor?",
    answer: "Yapay zeka, seçtiğiniz başlangıç noktası..."
  },
  {
    id: "03",
    question: "Deniz ve hava durumu bilgileri ne kadar güncel?",
    answer: "Platform, anlık deniz ve hava durumu verilerini..."
  },
  {
        id:"04",
        question:"Marinalardaki etkinlikleri nasıl takip edebilirim?",
        answer:"Her marina ve bölge için düzenlenen etkinlikler (festivaller, yarışlar, sosyal etkinlikler vb.) özel bir etkinlik sayfasında listelenir. Kullanıcılar konumlarına göre yakın etkinlikleri kolayca görüntüleyebilir."
      },
      {
        id:"05",
        question:" Bu platform kimler için uygundur?",
        answer:"Platform; yat sahipleri, kaptanlar, tekne kiralayanlar ve deniz tatili planlayan herkes için uygundur. Ayrıca denizcilik öğrenmek isteyen kullanıcılar için rehber içerikler ve sözlük bölümü de sunulmaktadır."
      },
      {
        id:"06",
        question:" Marinalar hakkında verilen bilgiler ne kadar güvenilir?",
        answer:"Tüm marina verileri resmi kaynaklar, kullanıcı geri bildirimleri ve sürekli güncellenen veri tabanları üzerinden doğrulanır. Amaç, en doğru ve güncel bilgiyi kullanıcıya tek bir platformda sunmaktır."
      },
]

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="px-[8%] lg:px-[12%] py-30 bg-[#F8FAFC]">

      {/* TITLE */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 pt-8">
          <span className="rounded-full border px-6 font-cormorant-garamont uppercase font-bold">
            Çok Sorulanlar
          </span>
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="font-cormorant-garamont text-4xl md:text-7xl">
            Marinalar ve Deniz Seyri Hakkında{" "}
            <span className="text-primary">En Çok</span> Sorulan Sorular
          </h1>
        </div>
      </div>

      {/* FAQ LIST */}
      <div className="flex flex-col lg:flex-row gap-10 py-12">

        <div className="w-full lg:w-2/3 space-y-4">

          {faqData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.id}
                className="border-b border-darknavy-80 pb-4"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-3xl font-cormorant-garamont text-primary">
                      {item.id}
                    </span>

                    <span className="text-xl md:text-2xl font-inter font-semibold text-darknavy">
                      {item.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-primary"
                  >
                    <ChevronDown size={28} />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-darknavy/80 px-7 pb-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}
        </div>

        {/* SIDE IMAGE */}
        <div className="w-full lg:w-1/3">
          <Image
            src={faqBanner}
            alt="faq"
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          <h2 className="mt-6 text-3xl font-cormorant-garamont">
            En çok sorulan sorular ve cevapları
          </h2>
        </div>

      </div>
    </div>
  )
}
