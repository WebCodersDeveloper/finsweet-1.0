import { FaArrowRightLong } from "react-icons/fa6";
import { IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo  from "../assets/LogoWhite.svg"
import Logo1 from "../assets/Logo1.svg";
import Logo2 from "../assets/Logo2.svg";
import Logo3 from "../assets/Logo3.svg";
import Logo4 from "../assets/Logo4.svg";
import Logo5 from "../assets/Logo5.svg";
import Logo6 from "../assets/Logo6.svg";
import Image from "../assets/Image.svg";
import { plans } from "../components/plan";
import PieChartWithPaddingAngle from "../components/PieChartWithPaddingAngle ";
import { ourNews } from "../components/news";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-heroBg bg-standart w-full h-[735px] flex flex-col items-center justify-center ">
        <div className="w-[90%] h-[90%] gap-16 flex flex-col justify-center">
          <h1 className="w-[640px] text-white text-6xl font-medium leading-tight">
            Save the environment today for a better tomorrow
          </h1>
          <div className="flex gap-16">
            <button className="w-36 h-12 bg-white rounded text-base font-medium text-black">
              <Link to="/whatWedo">What we do</Link>
            </button>
            <button className="w-36 h-12 text-white rounded text-base font-medium flex items-center justify-center gap-2">
              <IoPlayCircle className="text-4xl" />
              Play Video
            </button>
          </div>
        </div>
        <div className="flex justify-between text-white w-[85%]  items-center h-[5%]">
          <p>23,800 trees planted</p>
          <span className="bg-white w-[861px] h-[1px] opacity-70"></span>
          <p>5840 donations collected</p>
        </div>
      </div>
      <div className="w-full h-[800px] flex flex-col items-center">
        <div className="w-[90%] h-[85%] flex items-center">
          <div className="h-[70%] w-[60%] flex flex-col items-start justify-around pl-14">
            <h3 className="text-base font-bold before relative uppercase">
              Know About us
            </h3>
            <h2 className="text-5xl font-bold w-[607px]">
              We help nature smile and survive everywhere
            </h2>
            <p className="text-base text-[#525560] w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p className="text-base text-[#525560] w-[600px]">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            <button className="hover:bg-[#49ad4e] bg-[#70C174] text-white w-[146px] h-[51px] rounded text-base font-medium">
              Learn more
            </button>
          </div>
          <div className="w-[40%] h-full flex items-center justify-center">
            <iframe
              width="480"
              height="578"
              src="https://www.youtube.com/embed/w-IXajuNAP8?si=RmBrArA5DD-a4xLI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="relative text w-[95%] h-[15%] flex items-center justify-around">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
          <img src={Logo6} alt="" />
        </div>
      </div>
      <div className="w-full h-[950px] bg-[#EFF7F2] flex items-center justify-center">
        <div className="w-[90%] h-full flex items-center">
          <div className="w-[50%] h-[90%] flex flex-col justify-around pl-10">
            <h3 className="text-base font-bold title-line relative uppercase">
              what we do
            </h3>
            <h2 className="text-5xl font-bold w-[607px]">
              We care for earth, care for the coming birth
            </h2>
            <p className="text-base text-[#525560] w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex flex-col w-full h-[70%] items-center justify-around plans relative">
              {plans.map((item, index) => (
                <div key={index} className="flex w-[85%] items-start gap-8">
                  <img src={item.icon} alt={item.title} className="mt-1" />
                  <span className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-[#1D2130] w-">
                      {item.title}
                    </h2>
                    <p className="text-base font-normal text-[#525560] w-[384px]">
                      {item.text}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] h-full flex items-center justify-center">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[850px] bg-white">
        <div className="w-[90%] h-[90%] flex flex-col items-center justify-center gap-20">
          <div className="w-full flex flex-col gap-4 pl-10">
            <h3 className="text-base font-bold title-second-line relative uppercase">
              Projects we have done
            </h3>
            <h2 className="text-5xl font-bold w-[607px] leading-snug">
              We are Creating sustainable society, for everyone and forever.
            </h2>
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
      <div className="w-full h-[570px] bg-[#0B0706] flex items-center">
        <div className="w-[615px] h-[285px] ml-[8%] flex flex-col justify-around">
          <h2 className="font-bold text-5xl w-[611px] text-white">
            How we spend your donations and where it goes
          </h2>
          <p className="w-[606px] font-normal text-base text-white opacity-60">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-3">
              <b className="bg-[#BEF3C0] w-[16px] h-[16px] rounded "></b>
              <p className="text-base font-medium text-white">
                40% planting trees
              </p>
            </span>
            <span className="flex items-center gap-3">
              <b className="bg-[#AC94F1] w-[16px] h-[16px] rounded "></b>
              <p className="text-base font-medium text-white">
                35% cleanliness program
              </p>
            </span>
            <span className="flex items-center gap-3">
              <b className="bg-[#FFF0CA] w-[16px] h-[16px] rounded "></b>
              <p className="text-base font-medium text-white">
                10% helping people
              </p>
            </span>
            <span className="flex items-center gap-3">
              <b className="bg-[#F9CF64] w-[16px] h-[16px] rounded "></b>
              <p className="text-base font-medium text-white">
                10% animal safety
              </p>
            </span>
            <span className="flex items-center gap-3">
              <b className="bg-[#F38FBF] w-[16px] h-[16px] rounded "></b>
              <p className="text-base font-medium text-white">
                5% feeding the poor
              </p>
            </span>
          </div>
        </div>
        <div className="w-[500px] h-full flex items-center justify-center relative ml-[15%]">
          <div className="absolute">
            <PieChartWithPaddingAngle />
          </div>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="w-full h-[800px] py-4 flex items-center justify-center">
        <div className="w-[85%] h-[50%] overflow-hidden bg-donate bg-standart rounded-xl">
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
    </div>
  );
}
