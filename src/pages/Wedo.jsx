import React from 'react'
import What1 from '../components/What1'
import Whatenvironment from '../components/Whatenvironment'
import Cards3 from '../components/Cards3'
import {ourNews}  from '../components/news'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";

const Wedo = () => {
  return (
    <>
    <What1/>
    <Whatenvironment/>
    <Cards3/>
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
      <div className="w-full h-[550px] flex items-center justify-center">
          <div className="w-[85%] h-[70%] flex flex-col justify-between">
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

export default Wedo