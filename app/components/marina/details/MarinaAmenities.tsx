import { marinaAmenities } from "@/lib/marina-ui/marina-amenities";
import { Marina, MarinaFeature } from "@/types/marina";
import { Icon } from "@iconify/react";

type MarinaAmenitiesProps = {
  marina: Marina;
};

const MarinaAmenities = ({ marina }: MarinaAmenitiesProps) => {
  const features: MarinaFeature[] = [
    ...new Set<MarinaFeature>([
      ...marina.amenities,
      ...marina.facilities,
    ]),
  ];

  return (
    <section
      className="
      rounded-3xl
      bg-linear-to-br
      from-darknavy/90
      to-blue-900
      p-6
      shadow-xl
      border
      border-white/10
      text-white
      mt-12
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h3
          className="
          text-xs
          uppercase
          tracking-[0.25em]
          font-cormorant-garamont
          text-white/70
          "
        >
          Marina Hizmetleri & Olanaklar
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {features.map((feature) => {
  const amenity = marinaAmenities[feature];

  if (!amenity) return null;

  return (
    <div
      key={feature}
      className="
        group
        rounded-2xl
        bg-white/10
        border
        border-white/10
        p-4
        flex
        items-center
        gap-3
        transition-all
        duration-300
        hover:bg-white/15
        hover:-translate-y-1
      "
    >
      <Icon
        icon={amenity.icon}
        width={24}
        className="
          text-cyan-300
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span className="font-medium text-white">
        {amenity.label}
      </span>
    </div>
  );
})}
      </div>
    </section>
  );
};

export default MarinaAmenities;