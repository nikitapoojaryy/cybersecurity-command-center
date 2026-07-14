export default function Contact(){


return(

<main className="
max-w-5xl
mx-auto
px-8
pt-32
">


<h1 className="
text-5xl
font-bold
">

Let's Connect

</h1>



<p className="
text-gray-400
text-lg
mt-6
">

Interested in cybersecurity opportunities,
security projects, or professional discussions.

</p>





<div className="
grid
md:grid-cols-3
gap-6
mt-12
">



<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
">

LinkedIn

</div>



<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
">

GitHub

</div>



<div className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
">

Email

</div>



</div>





<form className="
mt-12
space-y-5
">


<input

placeholder="Name"

className="
w-full
bg-white/5
border
border-white/10
rounded-xl
p-4
"

/>



<input

placeholder="Email"

className="
w-full
bg-white/5
border
border-white/10
rounded-xl
p-4
"

/>



<textarea

placeholder="Message"

className="
w-full
h-40
bg-white/5
border
border-white/10
rounded-xl
p-4
"

/>



<button

className="
bg-blue-500
px-8
py-4
rounded-xl
font-semibold
"

>

Send Message

</button>



</form>


</main>

)

}