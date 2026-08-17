"use client"
import MarinasHeader from './MarinasHeader';
import MarinasSlider from './MarinasSlider';
import MarinasButton from './MarinasButton';



const Marinas = () => {
  return (
    
    <section className='px-[8%] lg:px-[12%] py-16 relative bg-[#EEF5F9]  '>
        <MarinasHeader />
        <MarinasSlider />
        <MarinasButton />
      </section>
    
  )
}

export default Marinas
