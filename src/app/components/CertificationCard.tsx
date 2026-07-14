export default function CertificationCard({

cert

}:any){


return(

<div

className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"


>


<h3 className="
font-bold
text-xl
">

{cert.name}

</h3>


<p className="
text-gray-400
mt-2
">

{cert.provider}

</p>



<div className="
mt-5
inline-block
px-4
py-2
rounded-full
bg-blue-500/10
text-blue-300
text-sm
">

{cert.status}

</div>


</div>

)

}