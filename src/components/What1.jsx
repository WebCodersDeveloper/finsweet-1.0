import React, { useEffect, useRef } from 'react'
import wedo1 from './img/wedo1.png'
import ScrollReveal from "scrollreveal";

const What1 = () => {
   const titlRef = useRef(null);
 useEffect(() => {
    ScrollReveal().reveal(titlRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  })
      return (
    <div ref={titlRef} className=' mt-24 mb-20  flex items-start justify-between w-[90%]'>
<div className=' '>
    <span className='flex items-center  gap-x-2'><span className=' w-[72px] h-px bg-gray-700 '></span><span className='text-xl font-semibold leading-6 uppercase text-custom-color'>What we do</span></span>
<h1 className='ml-20 text-custom-color mt-5 font-bold text-6xl leading-[120%] tracking-normal text-left w-[500px]'>We are working worldwide</h1>
<p className='text-gray-600 ml-20 mt-5 font-normal max-w-[560px] text-base leading-relaxed tracking-normal text-left'>In today's interconnected world, the phrase "We are working worldwide" encapsulates the essence of global collaboration and the seamless integration of efforts across borders. It signifies a commitment to transcending geographical limitations.</p>
</div>
<div>
    <img src={wedo1} alt="image" />
</div>
    </div>
  )
}

export default What1