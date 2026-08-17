import Image from "next/image";


type MarinaGalleryThumbProps = {
  image: string;
  alt: string;
  onClick: () => void;
  remainingPhotos?: number;
};


const MarinaGalleryThumb = ({
  image,
  alt,
  onClick,
  remainingPhotos,
}: MarinaGalleryThumbProps) => {


  return (
    <div
      onClick={onClick}
      className="
      relative
      cursor-pointer
      overflow-hidden
      rounded-xl
      group
      "
    >

      <Image
        src={image}
        alt={alt}
        fill
        sizes="
(max-width:768px) 50vw,
25vw
"
        className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
        "
      />


      {/* overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/0
        group-hover:bg-black/30
        transition
        "
      />


      {remainingPhotos && remainingPhotos > 0 && (

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          "
        >

          <div
            className="
            rounded-full
            bg-black/50
            px-5
            py-3
            text-white
            backdrop-blur-sm
            "
          >

            +{remainingPhotos} Fotoğraf

          </div>

        </div>

      )}


    </div>
  );
};


export default MarinaGalleryThumb;