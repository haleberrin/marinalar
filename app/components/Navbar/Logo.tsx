import Link from "next/link"



const Logo = ({className=""}) => {
  return (
    <>
      {/* <Link href="/" className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan! ${className} `}>
        DenizBizim<span className="text-primary">Marinalar</span>
      </Link> */}
       <Link href="/" className={`text-3xl font-bold font-bricolage  text-white/70 ${className}`}>
        DenizBizim<span className="text-primary font-bricolage">Marinalar</span>
      </Link>
    </>
  )
}

export default Logo
