import React from 'react'

export default function BlogCard() {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center gap-3 border-b-2 py-6 border-slate-100">
        <h4 className="text-sm text-cerisered-600 font-bold uppercase text-center">Life Style</h4>
        <h1 className="text-2xl font-bold text-black text-center capitalize">
            Katy Perry's Hairstyles colors through the years
        </h1>
        <button className="w-full mx-1 h-auto flex justify-center items-center">
            <img src="/img/flower2.jpeg" alt="Flower 2 Image" className='w-auto h-auto aspect-square rounded-xl' />
        </button>
        <div className="w-full flex flex-row flex-nowrap justify-center items-center gap-4">
            <h3 className="text-xs font-extrabold text-slate-600 italic">By <span className='text-xs text-black uppercase italic'>Ankur Jaiswal</span></h3>
            <h3 className="text-xs font-extrabold text-slate-600 italic">On <span className='text-xs text-black uppercase italic'>AUG 16, 2023</span></h3>
        </div>
        <p className="w-full text-center font-bold text-sm">
            She started her blog exactly six monthys before I launched Camel &amp; Chocolate, and...
        </p>
        <a href="#startReading" className="text-cerisered-600 uppercase text-sm font-bold underline underline-offset-4">Continue Reading</a>
    </div>
  )
}
