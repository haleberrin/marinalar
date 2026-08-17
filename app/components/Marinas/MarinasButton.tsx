import { Icon } from '@iconify/react'
import Link from 'next/link'


const MarinasButton = () => {
  return (
    <div className="flex justify-center mt-8">
    <Link
      href="/marinas"
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
     Tüm Marinaları Keşfedin
      {/* <span>→</span> */}
      <Icon icon="guidance:up-right-arrow" width={24} height={24} className='text-white' />
    </Link>
          </div>
  )
}

export default MarinasButton
