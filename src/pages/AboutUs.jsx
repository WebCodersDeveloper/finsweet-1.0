import React from 'react'
import people from '../components/img/people.png'
import Logo1 from "../assets/Logo1.svg";
import Logo2 from "../assets/Logo2.svg";
import Logo3 from "../assets/Logo3.svg";
import Logo4 from "../assets/Logo4.svg";
import Logo5 from "../assets/Logo5.svg";
import Logo6 from "../assets/Logo6.svg";
import peoplee from '../components/img/peoplee.png';
import {Awards} from '../components/awards'
import { Person } from '../components/awards';
import {ourNews} from '../components/news'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
  <div className=' mt-24 mb-20  flex  justify-between w-[90%]'>
<div className=' '>
    <span className='flex items-center  gap-x-2'><span className=' w-[72px] h-px bg-gray-700 '></span><span className='text-xl font-semibold leading-6 uppercase text-custom-color'>Know about us</span></span>
<h2 className='ml-20 text-custom-color mt-5 font-bold text-5xl leading-[120%] tracking-normal text-left w-[600px]'>We are a nonprofit team working worldwide</h2>

</div>
<div className='mt-14' >
    <p className=' font-roboto text-lg font-bold leading-6 tracking-normal text-left w-[500px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
<p className='text-gray-600  mt-5 font-normal max-w-[560px] text-base leading-relaxed w-[500px] tracking-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
</div>
    </div>
    
   <img className='relative top-0 max-auto' src={people} alt="people" />
   <div className='bg-[#EFF7F2] w-full '>
   <div className='w-[90%] flex justify-evenly items-center my-20 mx-auto '>
<div className='flex flex-col justify-center'>
  <span className=' font-roboto text-base font-bold leading-4 tracking-wider uppercase text-left '>our mission</span>
  <h3 className=' font-roboto text-2xl mt-4 font-bold leading-6 tracking-normal w-[500px]'>We make the world we save our own environment</h3>
  <p className='text-gray-600  mt-4 font-normal max-w-[560px] text-base leading-relaxed w-[500px] tracking-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
</div>
<div className='flex flex-col justify-center'>
  <span className=' font-roboto text-base font-bold leading-4 tracking-wider uppercase text-left'>our mission</span>
  <h3 className=' font-roboto text-2xl mt-4 font-bold leading-6 tracking-normal  w-[500px]'>Plant more trees to make world air pollution free</h3>
  <p className='text-gray-600  mt-4 font-normal max-w-[560px] text-base leading-relaxed w-[500px] tracking-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
</div>
   </div>
    <div className=" w-[95%] h-[15%] flex items-center justify-around mb-16">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
          <img src={Logo6} alt="" />
        </div>
   </div>
   <div className='w-[90%] my-24 '>
    <h3 className='text-4xl font-bold leading-normal tracking-normal text-center'>Awards & Recognitions</h3>
   <div className="flex   items-center mx-auto mt-10 justify-evenly ">
    {Awards.map((item, index) => (
              
                 <div key={index}   className='flex flex-col items-center w-[20%] gap-y-3'>
                  <img src={item.img} alt='photo'  />
                     <span className="flex flex-col gap-2 w-[60%] items-center">
                    <span className="text-2xl font-bold text-[#1D2130]  ">
                      {item.title}
                    </span>
                    <p className=" font-bold text-lg ">
                      {item.text}
                    </p>
                    <p className=' text-[#525560] text-sm'>{item.city}</p>
                    </span>
                </div>
               
              ))}
              </div>
   </div>
   <div className='w-[90%] flex py-16 pl-20 bg-black rounded-xl justify-between items-center mb-20'>
<div className='flex flex-col gap-y-3 '>
  <span className='text-white font-roboto text-lg font-bold leading-19 tracking-wider text-left uppercase'>OUR JOURNEY </span>
  <h2 className='text-white font-roboto text-5xl font-bold leading-normal tracking-normal text-left'>How we raised 34M</h2>
  <p className='text-white font-roboto text-base font-normal leading-relaxed tracking-normal text-left w-[488px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
<div className='flex mt-2 gap-x-7'>
  <span className='flex flex-col items-center  '><span className='text-white font-roboto text-3xl font-medium leading-relaxed tracking-normal text-left'>34M+</span> <p className='text-white font-roboto text-xs font-medium leading-relaxed tracking-normal text-left opacity-60'>Donation Received</p></span>
   <span className='flex flex-col items-center'><span className='text-white font-roboto text-3xl font-medium leading-relaxed tracking-normal text-left'>400+</span> <p className='text-white font-roboto text-xs font-medium leading-relaxed tracking-normal text-left opacity-60'>Volunters</p></span>
    <span className='flex flex-col items-center'><span className='text-white font-roboto text-3xl font-medium leading-relaxed tracking-normal text-left'>40K+</span> <p className='text-white font-roboto text-xs font-medium leading-relaxed tracking-normal text-left opacity-60'>Trees planted</p></span>
</div>
</div>
<div>
  <img src={peoplee} alt="people" />
</div>
</div>

<div className='w-[90%] '>
  <h2 className='font-roboto text-4xl font-bold leading-normal tracking-normal text-center'>Meet our team</h2>
  <p className='text-gray-700 font-roboto text-base font-normal leading-relaxed tracking-normal text-center opacity-60 m-auto w-[520px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
 <div className="grid grid-cols-4  items-center  mt-10 mb-6 justify-between gap-y-12 ">
    {Person.map((item, index) => (
              
                 <div key={index}   className='flex flex-col items-center w-[100%] gap-y-3 '>
                  <img src={item.img} alt='photo'  />
                     <span className="flex flex-col gap-2 w-[100%] items-center">
                    <span className="text-lg font-semibold text-[#1D2130]  ">
                      {item.title}
                    </span>
                    <p className=" font-roboto text-sm font-medium leading-relaxed tracking-normal">
                      {item.text}
                    </p>
                   <img src={item.logo} alt="h" />
                    </span>
                </div>
               
              ))}
              </div>

</div>

  <div className="w-full h-[500px] py-4 flex items-center justify-center">
        <div  className="w-[85%] h-[80%] overflow-hidden bg-donate bg-standart rounded-xl">
          <div className="w-full h-full bg-[#0000007b] flex flex-col items-center justify-center gap-16">
            <h2 className="text-white w-[631px] text-center font-bold text-5xl">
              You can contribute to make the environment greener!
            </h2>
            <span className="flex gap-6">
              <button className="w-[200px] h-[51px] rounded transition-all bg-[#70C174] hover:bg-[#33a639] text-white text-base font-medium">
                Join as a volunteer
              </button>
              <button className="w-[116px] h-[51px] rounded transition-all bg-[#fff] hover:bg-[#33a639] text-black hover:text-white text-base font-medium">
                <Link to="/donate">Donate</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[550px] flex items-center justify-center">
        <div className="w-[85%] h-[90%] flex flex-col justify-between">
          <h2 className="text-[#1D2130] font-medium text-[40px] relative left-line">
            Read Our News
          </h2>
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
      <div className="w-full h-[500px] flex items-center justify-center">
          <div  className="w-[85%] h-[95%] flex flex-col justify-evenly">
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

export default AboutUs