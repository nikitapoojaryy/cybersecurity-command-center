const experience=[


{
title:
"Cybersecurity Portfolio Development",

description:
"Created security assessments, policies, framework mappings, and risk documentation."

},


{
title:
"GRC Security Research",

description:
"Studied ISO 27001, NIST CSF, CIS Controls, and cybersecurity governance practices."

},


{
title:
"Security Foundation",

description:
"Developed knowledge in networking, operating systems, vulnerabilities, and security principles."

}


]


export default function ExperienceTimeline(){


return(

<div className="
mt-20
space-y-8
">


{

experience.map((item)=>(


<div

key={item.title}

className="
border-l
border-blue-500
pl-6
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
mt-3
">

{item.description}

</p>


</div>


))


}


</div>

)

}