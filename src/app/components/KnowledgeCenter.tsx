import {articles} from "@/app/data/articles";
import ArticleCard from "./ArticleCard";


export default function KnowledgeCenter(){


return(

<section className="
max-w-7xl
mx-auto
px-8
py-24
">


<p className="
text-blue-400
uppercase
tracking-widest
text-sm
">

Knowledge Center

</p>



<h2 className="
text-4xl
font-bold
mt-4
">

Cybersecurity Research & Insights

</h2>



<p className="
text-gray-400
mt-5
max-w-2xl
">

Security articles demonstrating framework knowledge,
risk thinking, and professional communication.

</p>




<div className="
grid
md:grid-cols-2
gap-8
mt-14
">


{

articles.map((article)=>(


<ArticleCard

key={article.title}

article={article}

/>


))

}


</div>


</section>

)

}