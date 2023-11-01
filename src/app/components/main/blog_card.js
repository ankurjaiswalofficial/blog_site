import React from 'react'

export default function BlogCard(props) {
  return (
    <div className="container flex flex-col justify-center items-center gap-6 border-b-2 py-6 border-slate-100">
        <h4 className="text-sm text-cerisered-600 font-semibold uppercase text-center">{props.card_type}</h4>
        <h1 className="sm:text-4xl text-2xl font-semibold text-black text-center capitalize sm:w-11/12 w-full">
            {props.header}
        </h1>
        <div className="flex flex-col justify-center items-center w-full h-fit gap-3">
        <button className="w-full h-auto flex justify-center items-center relative mx-auto overflow-hidden rounded-xl">
            <img src={props.image.src} alt={props.image.alt} className='max-w-full transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110 rounded-xl' />
        </button>
        <div className="w-full flex flex-row flex-nowrap justify-center items-center gap-4">
            <h3 className="text-sm font-semibold text-slate-600 italic">By <span className='text-sm text-black uppercase italic font-extrabold'>{props.author}</span></h3>
            <h3 className="text-sm font-semibold text-slate-600 italic">On <span className='text-sm text-black uppercase italic font-extrabold'>{props.datetime}</span></h3>
        </div>
        </div>
        <p className="w-11/12 text-center font-medium sm:text-xl text-lg">
            {props.description}
        </p>
        <a href={props.href} className="text-cerisered-600 uppercase text-sm font-semibold underline underline-offset-8">Continue Reading</a>
    </div>
  )
}
