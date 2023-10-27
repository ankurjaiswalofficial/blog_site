import React from 'react'

export default function UpdateCard() {
  return (
    <div className="w-full h-auto flex flex-row flex-wrap sm:flex-nowrap gap-5 justify-evenly items-center">
      <div className="relative w-auto h-auto sm:max-w-[28rem] rounded-lg">
        <img src="/img/flower1.jpeg" alt="Flower 1" className='rounded-lg aspect-video' />
        <a className="absolute w-full h-full top-0 left-0 flex justify-center items-center rounded-lg" href='#flower1'>
          <h4 className="text-md font-medium capitalize px-8 py-4 bg-white w-fit h-fit rounded-lg">My Story</h4>
        </a>
      </div>
      <div className="relative w-auto h-auto sm:max-w-[28rem] rounded-lg">
        <img src="/img/flower2.jpeg" alt="Flower 1" className='rounded-lg aspect-video' />
        <a className="absolute w-full h-full top-0 left-0 flex justify-center items-center rounded-lg" href='#flower1'>
          <h4 className="text-md font-medium capitalize px-8 py-4 bg-white w-fit h-fit rounded-lg">Flower   Spots</h4>
        </a>
      </div>
      <div className="relative w-auto h-auto sm:max-w-[28rem] rounded-lg">
        <img src="/img/flower3.jpeg" alt="Flower 1" className='rounded-lg aspect-video' />
        <a className="absolute w-full h-full top-0 left-0 flex justify-center items-center rounded-lg" href='#flower1'>
          <h4 className="text-md font-medium capitalize px-8 py-4 bg-white w-fit h-fit rounded-lg">My Magazine</h4>
        </a>
      </div>
    </div>
  )
}

