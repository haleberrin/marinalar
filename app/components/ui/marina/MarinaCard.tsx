import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}


export default function MarinaCard({
  children,
  dark = false,
  className = "",
}: Props) {


  return (

    <section
      className={`
      rounded-3xl
      shadow-xl
      border
      border-white/10

      ${
        dark
        ?
        `
        bg-linear-to-br
        from-darknavy/90
        to-blue-900
        text-white
        `
        :
        `
        bg-white
        text-darknavy
        `
      }

      ${className}
      `}
    >

      {children}

    </section>

  );

}