import { Icon } from '@iconify/react'


const MarinasHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
    <div className="lg:w-2/3 mb-8 lg:mb-0">
        <h1 className='text-5xl text-darknavy/85 font-bricole font-bold font-cormorant-garamont'>
            Zirvedeki <span className='text-primary text-8xl'>Marinalar</span> 
        </h1>
    </div>
    <div className='lg:w-1/3'>
        <h3 className='text-2xl font-jost font-semibold mb-3 text-primary font-cormorant-garamont'>
            En cok ziyaret edilen Marinalar!
        </h3>
        <p className='mb-4 text-darknavy/90 font-inter'>
            En cok tercih edilen ve misafirlerin kullandigi bolgeleri ve  Marinalari  kesfedin ve rotanizi planlayin.
        </p>
        <a href="/" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" >
           <button className='btn py-3 px-0 text-lg  flex items-center cursor-pointer font-inter font-bold'>
                <span className='text-primary'>Marinaları Keşfet </span>
               <Icon icon="guidance:up-right-arrow" width={24} height={24} className='text-primary' />
           </button>
        </a>
    </div>
</div>
  )
}

export default MarinasHeader
