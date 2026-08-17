import MarinaCard from "./MarinaCard";

interface Props {
  title: string;
  value: string | number;
}

export default function MarinaStatCard({
  title,
  value,
}: Props) {
  return (
    <MarinaCard
      dark
      className="p-5"
    >
      <p className="text-lg opacity-80">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>
    </MarinaCard>
  );
}