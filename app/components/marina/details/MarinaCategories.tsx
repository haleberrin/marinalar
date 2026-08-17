import { Marina } from "@/types/marina";


interface Props {
  marina: Marina;
}


export default function MarinaCategories({
  marina,
}: Props) {


  if (!marina.categories?.length) {
    return null;
  }


  return (

    <section className="mt-12">


      <h2
        className="
        text-2xl
        font-cormorant-garamont
        text-darknavy
        font-bold
        mb-6
        "
      >
        Marina Kategorisi
      </h2>



      <div
        className="
        flex
        flex-wrap
        gap-3
        "
      >

        {
          marina.categories.map((category)=>(
            
            <span
              key={category}
              className="
              rounded-full
              bg-linear-to-br
              from-darknavy/80
              to-blue-900
              shadow-lg
              text-white
              backdrop-blur
              px-4
              py-2
              text-sm
              "
            >

              {category.replace("_"," ")}

            </span>

          ))
        }


      </div>


    </section>

  );
}