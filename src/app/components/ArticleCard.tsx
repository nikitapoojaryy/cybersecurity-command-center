"use client";

import {motion} from "framer-motion";


export default function ArticleCard({

article

}:any){


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
p-7
"

>


<p className="
text-blue-400
text-sm
uppercase
tracking-widest
">

{article.category}

</p>



<h3 className="
text-xl
font-bold
mt-4
">

{article.title}

</h3>



<p className="
text-gray-400
mt-4
leading-relaxed
">

{article.description}

</p>



<div className="
flex
justify-between
mt-8
text-sm
text-gray-400
">


<span>

Level:

{article.level}

</span>



<button
className="
text-blue-400
"
>

Read →

</button>


</div>


</motion.div>


)

}