 import ProfessionalTimeline from "@/app/components/ProfessionalTimeline";
import PhilosophyCard from "@/app/components/PhilosophyCard";


export default function About(){


return(

<main className="
max-w-7xl
mx-auto
px-8
pt-32
">


<section>


<p className="
text-blue-400
uppercase
tracking-widest
text-sm
">

About Me

</p>



<h1 className="
text-5xl
font-bold
mt-5
">


Building Cybersecurity Capability
Through Risk-Based Thinking


</h1>



<p className="
text-gray-400
text-lg
mt-8
max-w-3xl
leading-relaxed
">


I am a cybersecurity professional focused on
Governance, Risk & Compliance (GRC),
security frameworks, documentation, and
practical risk reduction strategies.


</p>


</section>





<PhilosophyCard />



<ProfessionalTimeline />



</main>

)

}