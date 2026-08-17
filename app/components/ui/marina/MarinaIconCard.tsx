import { LucideIcon } from "lucide-react";
import MarinaCard from "./MarinaCard";

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function MarinaIconCard({
  icon: Icon,
  title,
  subtitle,
  dark,
}: Props) {
  return (
    <MarinaCard
      dark={dark}
      className="p-4"
    >
      <div className="flex items-center gap-4">

        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
        >
          <Icon size={20} />
        </div>

        <div>
          <p className="font-semibold">
            {title}
          </p>

          {subtitle && (
            <p className="text-sm opacity-70">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </MarinaCard>
  );
}