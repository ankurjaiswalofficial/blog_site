import React from 'react'
import IconButton from './IconButton'

function Tag({tagName}) {
  return (
    <IconButton text={tagName} textSize='text-sm' textClass='p-1' className='bg-gray-200 rounded-xl max-w-[5rem] text-ellipsis' href={`/tags/${String(tagName).toLowerCase().replace(" ", "_")}`} />
  )
}

export default Tag
