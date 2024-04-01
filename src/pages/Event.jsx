import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import eventBanner from "../assets/eventBanner.svg"
import { FaArrowRightLong } from "react-icons/fa6";

export default function Event() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-[#EFF7F2] w-full h-[400px] flex flex-col items-center justify-center">
        <h1 className="w-[768px] font-bold text-6xl">Say no to using plastic and save Earth</h1>
        <div className="flex w-[700px] justify-between mt-16">
          <span className="flex items-center gap-3">
            <IoLocationOutline className="text-[#70C174] text-2xl"/>
            <b className="font-medium text-base text-[#1D2130] ">8 Brewery Drive, Hudson, NH 03051, USA</b>
          </span>
          <span className="flex items-center gap-3">
            <CiCalendar className="text-[#70C174] text-2xl"/>
            <b className="font-medium text-base text-[#1D2130] ">September 3, 2021 8:30 AM</b>
          </span>
        </div>
      </div>
      <div className="w-[60%] h-[1225px] py-20 flex flex-col justify-around">
        <h3 className="text-5xl text-[#1D2130] font-bold">
          About
        </h3>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
        </p>
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
          Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. <br />
          Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.
        </p>
        <img src={eventBanner} alt="" />
        <p className="text-[#525560] font-normal text-base w-[832px] leading-[25.6px]">
        Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
        </p>
      </div>
      <div className="w-[60%] h-[650px] flex items-center justify-center">
          <div className="w-full h-[80%] flex flex-col justify-between">
            <h2 className="text-[#1D2130] font-medium text-[40px]">
              Our Events
            </h2>
            <div className="flex flex-col w-full h-[80%] justify-between">
              <div className="bg-[#BEF3C0] w-full h-[191px] rounded-lg flex items-center justify-center">
                <div className="flex w-[90%] h-[60%] justify-between items-start">
                  <h3 className="w-[55px] h-[55px] font-medium text-5xl text-[#1D2130] relative sep">23</h3>
                  <span>
                    <p className="font-medium text-base w-[123px] text-[#1D2130] uppercase relative text-line">Next Events</p>
                    <h3 className="text-[28px] font-bold w-[381px]">Say no to plastic usage and save the planet</h3>
                  </span>
                  <span className="mt-[5%] w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center"><FaArrowRightLong className="text-xl"/></span>
                </div>
              </div>
              <div className="bg-[#BEF3C0] w-full h-[191px] rounded-lg flex items-center justify-center">
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
    </div>
  )
}
