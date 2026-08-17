import { Marina } from "@/types/marina";



import { highlightConfig } from "@/lib/marina-ui/marina-config";
import MarinaSection from "../../ui/marina/MarinaSection";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";
import MarinaIconCard from "../../ui/marina/MarinaIconCard";


interface Props {
  marina: Marina;
}


export default function MarinaFeatures({
  marina,
}: Props) {


  const activeFeatures = highlightConfig.filter(
    (item) =>
      marina[item.key as keyof Marina]
  );


  if (!activeFeatures.length) {
    return null;
  }


  return (

    <MarinaSection>

      <MarinaCard
        dark
        className="p-8"
      >

        <SectionTitle light>
          Marina Özellikleri
        </SectionTitle>


        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-4
          "
        >

          {
            activeFeatures.map((item)=>(
              
              <MarinaIconCard
                key={item.key}
                dark
                icon={item.icon}
                title={item.label}
                subtitle="Aktif"
              />

            ))
          }

        </div>


      </MarinaCard>

    </MarinaSection>

  );
}