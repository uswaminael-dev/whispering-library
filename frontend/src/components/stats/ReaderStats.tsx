const stats = [
  {
    number:"10,000+",
    label:"Books"
  },
  {
    number:"5,000+",
    label:"Readers"
  },
  {
    number:"50,000+",
    label:"AI Conversations"
  }
];


export default function ReaderStats(){

return(

<section className="px-6 py-24">


<h2 className="text-center text-5xl font-semibold">
Reader Community
</h2>


<div className="
mx-auto
mt-12
grid
max-w-5xl
gap-8
md:grid-cols-3
">


{
stats.map((item)=>(
<div
key={item.label}
className="
rounded-3xl
border
border-[#C9A66B]/20
bg-white/5
p-8
text-center
"
>

<h3 className="text-4xl text-[#C9A66B]">
{item.number}
</h3>

<p className="mt-3 text-neutral-300">
{item.label}
</p>

</div>
))
}


</div>


</section>

)

}