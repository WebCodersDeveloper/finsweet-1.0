import { useEffect, useRef } from "react";
import logo from "../assets/galochka.png";
import ScrollReveal from "scrollreveal";
const Contact = () => {
   const newsRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(newsRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
       ScrollReveal().reveal(circleRef.current, {
      origin: 'bottom',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  })
  return (
    <>
      <div className="w-full bg-[#EBF0F9]">
        <div ref={newsRef} className=" mt-24 mb-20  flex items-start justify-between w-[90%] m-auto">
          <div className=" ">
            <span className="flex items-center  gap-x-2">
              <span className=" w-[72px] h-px bg-gray-700 "></span>
              <span className="text-xl font-semibold leading-6 uppercase text-custom-color">
                Contact us
              </span>
            </span>
            <h1 className="ml-20 text-custom-color mt-5 font-bold text-6xl leading-[120%] tracking-normal text-left w-[500px]">
              We`d love to hear from you
            </h1>
            <p className="text-gray-600 ml-20 mt-5 font-normal w-[500px] text-base leading-relaxed tracking-normal text-left">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
          <div className="flex flex-col gap-y-10 w-[48%]">
            <span className="flex flex-col ">
              <p className=" font-roboto text-3xl font-bold leading-relaxed tracking-normal text-left">
                Let`s talk!{" "}
              </p>{" "}
              <span className="flex gap-x-7">
                {" "}
                <span>+1 23 456 789</span> <span>hello@finsweet.com</span>
              </span>
            </span>
            <span className="flex flex-col">
              <p className="font-roboto text-3xl font-bold leading-relaxed tracking-normal text-left">
                Headoffice
              </p>
              <span className="text-[#525560]">
                8 Brewery Drive, Hudson, NH 03051 USA
              </span>
            </span>
            <span className="flex flex-col">
              <p className="font-roboto text-3xl font-bold leading-relaxed tracking-normal text-left">
                Branch Office
              </p>
              <span className="text-[#525560]">
                178 Marconi St., Venice, 34293 Italy
              </span>
            </span>
            <span>
              <img src={logo} alt="logo" />
            </span>
          </div>
        </div>
      </div>
      <div ref={circleRef} className="w-[60%] my-20">
        <div className="w-[100%] grid grid-cols-2 items-center justify-between gap-y-6 mb-4">
          <span className="">
            <label htmlFor="">First Name</label>
            <br /> <br />
            <input
              type="text"
              placeholder="John"
              className="border-b-2 border-gray-300 w-[370px] h-10 outline-none"
            />
          </span>
          <span>
            <label htmlFor="">Last Name</label>
            <br /> <br />
            <input
              type="text"
              placeholder="Doe"
              className="border-b-2 border-gray-300 w-[370px] h-10 outline-none"
            />
          </span>
          <span>
            <label htmlFor="">Email id</label>
            <br /> <br />
            <input
              type="email"
              placeholder="@..."
              className="border-b-2 border-gray-300 w-[370px] h-10 outline-none"
            />
          </span>
          <span>
            <label htmlFor="">Subjects</label>
            <br /> <br />
            <input
              type="text"
              placeholder="Subjects"
              className="border-b-2 border-gray-300 w-[370px] h-10 outline-none"
            />
          </span>
        </div>
        <span>
          <label className="" htmlFor="">
            Meesage
          </label>
          <br /> <br />
          <textarea name="" id="" cols="30" rows="10" className="border-2 border-gray-300 w-[90%] h-[130px] outline-none resize-none" placeholder="Meesage"></textarea>
        </span>
        <button className=" m-auto mt-7 ml-[310px] rounded-md backdrop-filter backdrop-blur-lg bg-green-500 w-[160px] h-[50px] text-white ">
          Send Message
        </button>
      </div>
    </>
  );
};

export default Contact;
