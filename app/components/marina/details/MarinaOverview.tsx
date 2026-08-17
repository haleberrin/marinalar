import { Marina } from "@/types/marina";
import { Sparkles } from "lucide-react";


type MarinaOverviewProps = {
  marina: Marina;
};


const MarinaOverview = ({
  marina
}: MarinaOverviewProps) => {


return (

<section className="space-y-10">


<div>

<p
className="
text-xs
uppercase
tracking-[0.3em]
text-primary
font-semibold
mb-3
"
>
Marina Hakkında
</p>


<h2
className="
text-4xl
font-cormorant-garamont
font-bold
text-darknavy
"
>
{marina.name}
</h2>


</div>



<div
className="
rounded-3xl
bg-linear-to-br
from-darknavy
to-blue-900
p-8
text-white
shadow-xl
"
>

<p
className="
text-xl
leading-relaxed
font-inter
"
>
{marina.summary}
</p>


</div>



<div className="space-y-5">

{
marina.description.map((paragraph,index)=>(

<p
key={index}
className="
text-lg
leading-relaxed
text-darknavy
font-inter
"
>
{paragraph}
</p>

))
}


</div>


</section>

)

}


export default MarinaOverview;