import React from 'react'

export default function ImageTypoStack(props) {
  return (
    <div className="relative w-full h-fit flex flex-row flex-nowrap justify-start items-start gap-3">
        <figure className="w-1/4 h-auto">
            <img src={props.image.src} alt={props.image.alt} className='w-auto max-w-24 max-h-24 h-auto aspect-square'/>
        </figure>
        <div className="w-3/4 text-start">
            <h2 className="text-md font-bold">
                {props.text}
            </h2>
        </div>
        <a href={props.href} className="absolute w-full h-full top-0 left-0"></a>
    </div>
  )
}
