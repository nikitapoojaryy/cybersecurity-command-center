const values=[


{
title:"Security First Thinking",

text:
"Approaching security decisions through risk identification, control effectiveness, and continuous improvement."

},


{
title:"Business Risk Awareness",

text:
"Understanding that cybersecurity exists to protect business operations, customers, and organizational trust."

},


{
title:"Evidence Driven Approach",

text:
"Building security capability through documentation, assessments, reports, and measurable outcomes."

}


]



export default function PhilosophyCard(){


return(

<section className="
grid
md:grid-cols-3
gap-6
mt-20
">


{

values.map((item)=>(


<div

key={item.title}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-7
"


>


<h3 className="
text-xl
font-bold
">

{item.title}

</h3>



<p className="
text-gray-400
mt-4
leading-relaxed
">

{item.text}

</p>


</div>


))

}


</section>

)

}