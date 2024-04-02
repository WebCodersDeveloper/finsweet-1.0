import React from 'react'

const Cards3 = () => {
  return( 
  <>
     <div className="flex items-center justify-center w-full mt-24 h-[550px] bg-white">
        <div className="w-[90%] h-[90%] flex flex-col items-center justify-center gap-20">
          <div className="w-full flex flex-col gap-4 pl-10">
            <h3 className="text-base font-bold mx-auto relative uppercase">
              Projects we have done
            </h3>
            <h3 className="text-5xl font-bold w-[720px] leading-snug mx-auto text-center">
              We are Creating sustainable society, for everyone and forever.
            </h3>
          </div>
          <div className="flex w-full justify-around items-center">
            <div className="bg-tree bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl ">
              <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
                <h3 className="text-white text-[28px] font-bold w-[315px]">
                  Mission 40K: Tree plantation
                </h3>
                <p className="text-white font-normal text-base w-[315px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
                  See more
                </button>
              </div>
            </div>
            <div className="bg-city bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl">
              <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
                <h3 className="text-white text-[28px] font-bold w-[315px]">
                  Weekly cleanliness program in city
                </h3>
                <p className="text-white font-normal text-base w-[315px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
                  See more
                </button>
              </div>
            </div>
            <div className="bg-wildlife bg-standart bg-no-repeat w-[415px] h-[415px] overflow-hidden rounded-xl">
              <div className="w-full h-full bg-[#00000075] flex flex-col gap-4 px-[15%] pt-[15%]">
                <h3 className="text-white text-[28px] font-bold w-[315px]">
                  Wildlife safety program 2021
                </h3>
                <p className="text-white font-normal text-base w-[315px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button className="w-[132px] hover:bg-transparent hover:text-white h-[51px] rounded bg-white border-2 border-white transition-all mt-[15%]">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="w-full h-[600px] py-4 flex items-center justify-center">
        <div className="w-[87%] h-[60%] overflow-hidden bg-donate bg-standart rounded-xl">
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

export default Cards3