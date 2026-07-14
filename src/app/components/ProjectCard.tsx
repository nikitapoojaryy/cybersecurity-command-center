"use client";


import {motion} from "framer-motion";


interface ProjectProps{

project:any;

}



export default function ProjectCard({

project

}:ProjectProps){


return(


<motion.div


whileHover={{

y:-8

}}


className="

bg-white/5

border

border-white/10

rounded-3xl

p-8

backdrop-blur-xl

"



>


<div className="

text-blue-400

text-sm

uppercase

tracking-widest

">


{project.category}


</div>



<h3 className="

text-2xl

font-bold

mt-4

">


{project.title}


</h3>





<div className="mt-8 space-y-6">



<div>


<h4 className="font-semibold">

Business Problem

</h4>


<p className="text-gray-400 mt-2">

{project.problem}

</p>


</div>





<div>


<h4 className="font-semibold">

Security Objective

</h4>


<p className="text-gray-400 mt-2">

{project.objective}

</p>


</div>






<div>


<h4 className="font-semibold">

Framework

</h4>


<span className="

inline-block

mt-2

px-4

py-2

rounded-full

bg-blue-500/10

border

border-blue-400/20

text-blue-300

">


{project.framework}


</span>


</div>







<div>


<h4 className="font-semibold">

Methodology

</h4>


<ul className="mt-3 space-y-2 text-gray-400">


{

project.methodology.map((item:string)=>(


<li key={item}>

✓ {item}

</li>


))


}


</ul>


</div>







<div>


<h4 className="font-semibold">

Evidence Repository

</h4>



<div className="flex flex-wrap gap-2 mt-3">


{


project.evidence.map((item:string)=>(


<span

key={item}

className="

text-sm

px-3

py-2

rounded-lg

bg-white/5

border

border-white/10

"


>

{item}


</span>


))


}



</div>


</div>





<div>


<h4 className="font-semibold">

Business Impact

</h4>


<p className="text-gray-400 mt-2">

{project.impact}

</p>


</div>



</div>





<button

className="

mt-8

w-full

py-3

rounded-xl

bg-blue-500

hover:bg-blue-600

transition

font-semibold

"


>


View Case Study


</button>





</motion.div>



)


}