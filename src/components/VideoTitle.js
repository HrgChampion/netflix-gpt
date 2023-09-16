import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-[20%] px-24 absolute text-white '>
        <h1 className='text-5xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/2 font-bold'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black w-40 text-xl p-4  rounded-lg hover:bg-opacity-80'>► Play</button>
            <button className='mx-4 bg-gray-500 text-white w-40 text-xl p-4  bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle