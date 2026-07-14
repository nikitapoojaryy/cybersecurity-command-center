import {certifications} from "@/app/data/certifications";
import CertificationCard from "./CertificationCard";


export default function CertificationRoadmap(){


return(

<section className="
max-w-7xl
mx-auto
px-8
py-24
">


<h2 className="
text-4xl
font-bold
">

Cybersecurity Certification Journey

</h2>



<div className="
grid
md:grid-cols-3
gap-6
mt-12
">


{

certifications.map((cert)=>(


<CertificationCard

key={cert.name}

cert={cert}

/>


))


}


</div>


</section>

)

}