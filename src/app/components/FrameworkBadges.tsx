"use client"

import {motion} from "framer-motion"


const badges=[

"ISO 27001",
"NIST CSF",
"CIS Controls",
"SOC 2",
"GDPR",
"DPDPA"

]


export default function FrameworkBadges(){


return(

<section className="
max-w-7xl
mx-auto
px-8
py-20
">


<h2 className="
text-3xl
font-bold
">

Security Framework Knowledge

</h2>



<div className="
grid
grid-cols-2
md:grid-cols-6
gap-5
mt-10
">


{
badges.map((badge)=>(


<motion.div

whileHover={{
y:-5
}}

key={badge}

className="
border
border-white/10
bg-white/5
rounded-xl
p-5
text-center
"

>

{badge}

</motion.div>


))
}


</div>


</section>


)

}