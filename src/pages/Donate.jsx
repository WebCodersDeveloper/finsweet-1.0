import React from 'react'
import donate from '../components/img/donate.png'
import ScrollReveal from "scrollreveal";
const Donate = () => {
  return (
    <>
<div className='w-full  bg-[#EFF7F2]'>
<div className=' mt-24 mb-20  flex items-start justify-between w-[90%] ml-24'>
<div className=' '>
    <span className='flex items-center  gap-x-2'><span className=' w-[72px] h-px bg-gray-700 '></span><span className='text-xl font-semibold leading-6 uppercase text-custom-color'>Donate</span></span>
<h1 className='ml-20 text-custom-color mt-5 font-bold text-6xl leading-[120%] tracking-normal text-left w-[500px]'>Making a donation for Nature.</h1>
<p className='text-gray-600 ml-20 mt-5 font-normal max-w-[560px] text-base leading-relaxed tracking-normal text-left'>When you donate, you`re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
 <button className="hover:bg-[#49ad4e] ml-20 mt-5 bg-[#70C174] text-white w-[146px] h-[51px] rounded text-base font-medium">
              Donate now
            </button>
</div>
<div>
    <img src={donate} alt="image" />
</div>
</div>
    </div>
    <div className="flex w-[90%] gap-x-24 my-20  ">
  <div className="w-[50%]">
    <h2 className=" font-roboto text-4xl font-bold leading-10 tracking-normal text-left w-[70%]">How you can contribute to protect Earth</h2> <br />
    <p className="text-gray-600 font-roboto text-base font-normal leading-8 tracking-normal text-left w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  </div>
  <div className="w-[40%]">
    <h2 className=" text-black font-roboto text-base font-medium leading-8 tracking-normal text-left">Overview</h2> <br /> 
    <p className="text-gray-600 font-roboto text-base w-[100%] font-normal leading-8 tracking-normal text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br /> <br />

Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  </div>
</div>
<div className='flex w-[90%] justify-between mt-16  '>
<h2 className='text-4xl w-[21%] font-bold leading-10 tracking-normal text-left'>How we use your donation</h2>
<p className='text-gray-600 font-roboto text-base  font-normal leading-8 tracking-normal w-[24%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
<p className='text-gray-600 font-roboto text-base font-normal leading-8 tracking-normal w-[28%] '>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
</div>
<div className="w-full h-[600px] py-4 flex items-center justify-center">
        <div className="w-[90%] h-[60%] overflow-hidden bg-donate bg-standart rounded-xl">
          <div className="w-full h-full bg-[#0000007b] flex flex-col items-center justify-center gap-16">
            <h2 className="text-white w-[631px] text-center font-bold text-5xl">
              You can contribute to make the environment greener!
            </h2>
            <span className="flex gap-6">
              <button className="w-[200px] h-[51px] rounded transition-all bg-[#70C174] hover:bg-[#33a639] text-white text-base font-medium">
                Join as a volunteer
              </button>
              <button className="w-[116px] h-[51px] rounded transition-all bg-[#fff] hover:bg-[#33a639] text-black hover:text-white text-base font-medium">
                Donate
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate