import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../images/Animation.json'; 


const Loading = () => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-[#090909e9] flex justify-center align-middle '>
    <div style={{ width: '300px', height: '300px' }}>
    <Lottie
      options={{
        animationData: animationData,
        loop: true,
        autoplay: true
      }}
    />
  </div>
  </div>
  )
}

export default Loading