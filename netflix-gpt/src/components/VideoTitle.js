import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-8xl font-bold text-white'>{title}</h1>
        <p className='py-6 text-lg w-1/4 text-white' >{overview}</p>
        <div>
            <button className='bg-white hover:bg-opacity-80 text-black py-3 px-8 rounded-md'>▶️ Play</button>
            <button className='ml-2 bg-gray-500 hover:bg-opacity-80 text-white py-3 px-8 rounded-md'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle