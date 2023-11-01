import React from 'react'

export default function ImageTypoStack(props) {
  return (
    <div className="relative w-full h-fit flex flex-row flex-nowrap justify-center items-center gap-3">
        <figure className="w-2/4 h-full flex justify-center items-center">
            <img src={props.image.src} alt={props.image.alt} className='w-auto h-auto rounded-md'/>
        </figure>
        <div className="w-3/4 text-start">
            <h2 className="text-sm font-semibold">
                {props.text}
            </h2>
        </div>
        <a href={props.href} className="absolute w-full h-full top-0 left-0"></a>
    </div>
  )
}
