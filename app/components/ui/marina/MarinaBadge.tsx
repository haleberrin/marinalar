import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dark?: boolean;
}

export default function MarinaBadge({
  children,
  dark,
}: Props) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-sm transition",
        dark
          ? "bg-white/10 text-white"
          : "bg-linear-to-r from-darknavy to-blue-900 text-white"
      )}
    >
      {children}
    </span>
  );
}