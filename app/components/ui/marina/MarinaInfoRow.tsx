import {
  LucideIcon
} from "lucide-react";


interface Props {

icon: LucideIcon;

label:string;

value:string;

}


export default function MarinaInfoRow({

icon:Icon,

label,

value,

}:Props){


return (

<div
className="
flex
items-center
gap-4
rounded-2xl
bg-white/10
p-4
"
>


<div
className="
shrink-0
w-11
h-11
rounded-xl
bg-white/10
flex
items-center
justify-center
"
>

<Icon size={22}/>

</div>



<div
className="
min-w-0
flex-1
"
>

<p
className="
text-xs
text-white/50
"
>
{label}
</p>


<p
className="
text-sm
font-semibold
truncate
mt-1
"
title={value}
>
{value}
</p>


</div>



</div>

)

}