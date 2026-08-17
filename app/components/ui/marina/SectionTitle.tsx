import { ReactNode } from "react";


interface Props {

  children: ReactNode;

  light?: boolean;

}


export default function SectionTitle({

children,

light=false,

}:Props){


return (

<p
className={`
text-xs
uppercase
tracking-[0.25em]
font-cormorant-garamont
mb-6

${
light
?
"text-white/70"
:
"text-darknavy/60"
}

`}
>

{children}

</p>

);


}