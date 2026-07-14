"use client"

import {motion} from "framer-motion"


const frameworks=[

{
name:"ISO 27001",
level:"85%"
},

{
name:"NIST CSF",
level:"80%"
},

{
name:"CIS Controls",
level:"70%"
}

]


export default function SecurityDashboard(){


return(

<motion.div

initial={{opacity:0,scale:.95}}

animate={{opacity:1,scale:1}}

transition={{duration:.7}}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
backdrop-blur-xl
shadow-2xl
"

>


<h2 className="
text-xl
font-semibold
">

Security Command Center

</h2>



<div className="
mt-8
">


<p className="
text-gray-400
text-sm
">

Security Posture

</p>


<div className="
mt-3
h-3
bg-gray-800
rounded-full
overflow-hidden
">


<div className="
h-full
w-[87%]
bg-blue-500
"/>


</div>


</div>



<div className="
mt-10
space-y-5
">


{
frameworks.map((item)=>(


<div key={item.name}>


<div className="
flex
justify-between
text-sm
">

<span>

{item.name}

</span>


<span>

{item.level}

</span>


</div>



<div className="
mt-2
h-2
bg-gray-800
rounded-full
">


<div

style={{
width:item.level
}}

className="
h-full
bg-cyan-400
rounded-full
"

/>


</div>



</div>


))
}


</div>


</motion.div>


)

}