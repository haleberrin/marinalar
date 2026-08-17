import { Marina } from "@/types/marina";
import MarinaStatCard from "../../ui/marina/MarinaStatCard";
import MarinaSection from "../../ui/marina/MarinaSection";
import SectionTitle from "../../ui/marina/SectionTitle";


interface MarinaCapacityProps {
  marina: Marina;
}

export default function MarinaCapacity({
  marina,
}: MarinaCapacityProps) {
  if (!marina.capacity) return null;

  const {
    seaBerth,
    landBerth,
    maxBoatLength,
    depth,
  } = marina.capacity;

  return (
    <MarinaSection>
      <SectionTitle>Teknik Kapasite</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MarinaStatCard
          title="Deniz Kapasitesi"
          value={seaBerth}
        />

        <MarinaStatCard
          title="Kara Kapasitesi"
          value={landBerth}
        />

        <MarinaStatCard
          title="Maksimum Tekne Boyu"
          value={`${maxBoatLength} m`}
        />

        <MarinaStatCard
          title="Derinlik"
          value={depth}
        />
      </div>
    </MarinaSection>
  );
}