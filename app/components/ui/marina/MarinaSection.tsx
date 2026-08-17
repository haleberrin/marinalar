import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MarinaSection({
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "mt-12",
        className
      )}
    >
      {children}
    </section>
  );
}