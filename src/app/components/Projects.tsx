import {projects} from "@/app/data/projects";

import ProjectCard from "./ProjectCard";


export default function Projects(){


return(


<section className="

max-w-7xl

mx-auto

px-8

py-24

">


<div>


<p className="

text-blue-400

uppercase

tracking-widest

text-sm

">


Evidence Repository


</p>



<h2 className="

text-4xl

font-bold

mt-4

">


Cybersecurity Projects & Security Research


</h2>



<p className="

text-gray-400

mt-5

max-w-2xl

">


Practical cybersecurity projects demonstrating
risk assessment, security governance,
framework implementation, and documentation.


</p>


</div>





<div className="

grid

md:grid-cols-2

gap-8

mt-14

">


{

projects.map((project)=>(


<ProjectCard

key={project.id}

project={project}


/>


))


}


</div>





</section>


)


}