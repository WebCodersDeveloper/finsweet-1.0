import React from 'react'
import woman from '../components/img/woman.png'
import dog from '../components/img/dog.png'
import twoman from '../components/img/twoman.png'
import { ourNews } from "../components/news";
import { FaArrowRightLong } from "react-icons/fa6";
const Media = () => {
  return (
    <>
  <div className="w-full h-[800px] flex flex-col items-center bg-[#EFF7F2] ">
        <div className="w-[90%] h-[70%] flex items-center">
          <div className="h-[60%] w-[50%] gap-y-6 flex flex-col items-start justify-around pl-14 ml-11">
            <h3 className="text-base font-bold before  relative uppercase">
              Top our News
            </h3>
            <h2 className="text-5xl font-bold w-[530px]">
            Our goal is to make water available for everyone
            </h2>
            <p className="text-base text-[#525560] w-[510px]">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <button className="hover:bg-[#49ad4e] bg-[#70C174] text-white w-[146px] h-[51px] rounded text-base font-medium">
              Read more
            </button>
          </div>
          <div className="w-[50%] h-[500px] flex items-center justify-center mt-56 ">
<div className='bg-white  flex flex-col gap-5 p-6'>
  <div className='flex items-center gap-x-6'>
<div>
  <img src={woman} alt="woman" />
</div>
<div className=' flex flex-col gap-y-1'>
  <p className='w-[290px] text-black dark:text-white font-roboto font-bold text-lg leading-6 tracking-normal text-left'>Don`t destroy greenery and don`t spoil scenery.</p>
  <p className='w-[290px] text-gray-600 font-roboto text-base font-normal leading-relaxed tracking-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
</div>
  </div>
  <div className='flex items-center gap-x-6'>
<div>
  <img src={dog} alt="dog" />
</div>
<div className=' flex flex-col gap-y-1'>
  <p className='w-[290px] text-black dark:text-white font-roboto font-bold text-lg leading-6 tracking-normal text-left'>Why saving wildlife is extremely important.</p>
  <p className='w-[290px] text-gray-600 font-roboto text-base font-normal leading-relaxed tracking-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
</div>
  </div>
   <div className='flex items-center gap-x-6'>
<div>
  <img src={twoman} alt="twoman" />
</div>
<div className=' flex flex-col gap-y-1'>
  <p className='w-[290px] text-black dark:text-white font-roboto font-bold text-lg leading-6 tracking-normal text-left'>Caring for the present is caring for the future</p>
  <p className='w-[290px] text-gray-600 font-roboto text-base font-normal leading-relaxed tracking-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
</div>
  </div>
</div>
          </div>
          </div>
          </div>
           <div className="w-full h-[550px] flex items-center justify-center">
        <div className="w-[85%] h-[90%] flex flex-col justify-between mt-32">
          <h2 className="text-[#1D2130] font-bold text-5xl text-center">
           
            Read Our Recent News
          </h2>
           <p className='text-gray-600 font-roboto text-base font-normal leading-8 w-[450px] mx-auto mt-3 mb-10 text-center'>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
          <div className="flex w-full h-[350px] justify-between">
            {ourNews.map((item, index) => (
              <div key={index} className="w-[302px] h-[95%] flex flex-col justify-between rounded-lg p-1">
                <img src={item.img} alt="" />
                <h3 className="w-[290px] font-bold text-xl">{item.title}</h3>
                <p className="w-[290px] text-base font-light text-[#525560]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[550px] flex items-center justify-center">
          <div className="w-[85%] h-[70%] flex flex-col justify-around">
            <h2 className="text-[#1D2130] font-medium text-[40px] relative left-line">
              Our Events
            </h2>
            <div className="flex w-full justify-between">
              <div className="bg-[#BEF3C0] w-[628px] h-[191px] rounded-lg flex items-center justify-center">
                <div className="flex w-[90%] h-[60%] justify-between items-start">
                  <h3 className="w-[55px] h-[55px] font-medium text-5xl text-[#1D2130] relative sep">23</h3>
                  <span>
                    <p className="font-medium text-base w-[123px] text-[#1D2130] uppercase relative text-line">Next Events</p>
                    <h3 className="text-[28px] font-bold w-[381px]">Say no to plastic usage and save the planet</h3>
                  </span>
                  <span className="mt-[5%] w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center"><FaArrowRightLong className="text-xl"/></span>
                </div>
              </div>
              <div className="bg-[#BEF3C0] w-[628px] h-[191px] rounded-lg flex items-center justify-center">
                <div className="flex w-[90%] h-[60%] justify-between items-start">
                  <h3 className="w-[55px] h-[55px] font-medium text-5xl text-[#1D2130] relative sep">25</h3>
                  <span>
                    <p className="font-medium text-base w-[123px] text-[#1D2130] uppercase relative text-line">Next Events</p>
                    <h3 className="text-[28px] font-bold w-[381px]">Weekly cleaning program</h3>
                  </span>
                  <span className="mt-[5%] w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center"><FaArrowRightLong className="text-xl"/></span>
                </div>
              </div>
            </div>
          </div>
          </div>
          </>
  )
}

export default Media