import { Marina } from "@/types/marina";



import { recommendedConfig } from "@/lib/marina-ui/marina-config";
import MarinaSection from "../../ui/marina/MarinaSection";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";
import MarinaIconCard from "../../ui/marina/MarinaIconCard";


interface Props {
  marina: Marina;
}


export default function MarinaRecommendations({
  marina,
}: Props) {


  if (!marina.recommendedFor) {
    return null;
  }


  const recommendations = recommendedConfig.filter(
    (item) =>
      marina.recommendedFor?.[
        item.key as keyof typeof marina.recommendedFor
      ]
  );


  if (!recommendations.length) {
    return null;
  }


  return (

    <MarinaSection>

      <MarinaCard
        className="p-8"
      >

        <SectionTitle>
          Kimler İçin Uygun?
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
            recommendations.map((item)=>(

              <MarinaIconCard
                key={item.key}
                dark
                icon={item.icon}
                title={item.label}
              />

            ))
          }

        </div>


      </MarinaCard>

    </MarinaSection>

  );
}