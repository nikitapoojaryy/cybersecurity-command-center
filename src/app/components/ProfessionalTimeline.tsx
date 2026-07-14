import {timeline} from "@/app/data/timeline";


export default function ProfessionalTimeline(){


return(

<section className="
mt-24
">


<h2 className="
text-3xl
font-bold
">

Professional Journey

</h2>



<div className="
mt-10
border-l
border-blue-500/30
pl-8
space-y-10
">


{

timeline.map((item)=>(


<div key={item.year}>


<div className="
text-blue-400
font-bold
">

{item.year}

</div>


<h3 className="
text-xl
font-semibold
mt-2
">

{item.title}

</h3>



<p className="
text-gray-400
mt-3
max-w-xl
">

{item.description}

</p>


</div>


))

}



</div>


</section>


)

}