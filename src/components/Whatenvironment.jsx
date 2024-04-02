import React from 'react'
import { plans } from './plan2'
const Whatenvironment = () => {
  return (
  
    <div className='bg-[#EFF7F2] w-full mb-10 '>
        <div className=' py-24  pl-36  '>
            <h2 className='text-custom-color font-bold text-5xl leading-[120%] tracking-normal text-left'>What we do for the environment</h2>
        <div className='mt-16 mb-6 '>
  <div className="grid grid-cols-3 gap-y-16 gap-x-8 w-full h-[70%] items-center justify-between ">
              {plans.map((item, index) => (
                <div key={index} className="flex w-[85%] items-start gap-8">
                  <img src={item.icon} alt={item.title} className="mt-1" />
                  <span className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-[#1D2130] w-">
                      {item.title}
                    </h2>
                    <p className="text-base font-normal text-[#525560] w-[350px]">
                      {item.text}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        </div>


 
  )
}

export default Whatenvironment