import { IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
        <div className="bg-heroBg bg-standart w-full h-[735px] flex flex-col items-center justify-center ">
            <div className="w-[90%] h-[90%] gap-16 flex flex-col justify-center">
                <h1 className="w-[640px] text-white text-6xl font-medium leading-tight">Save the environment today for a better tomorrow</h1>
                <div className="flex gap-16">
                    <button className="w-36 h-12 bg-white rounded text-base font-medium text-black"><Link to='/whatWedo'>What we do</Link></button>
                    <button className="w-36 h-12 text-white rounded text-base font-medium flex items-center justify-center gap-2"><IoPlayCircle className="text-4xl"/>Play Video</button>
                </div>
            </div>
            <div className="flex justify-between text-white w-[85%]  items-center h-[5%]">
              <p>23,800 trees planted</p>
              <span className="bg-white w-[861px] h-[1px] opacity-70"></span>
              <p>5840 donations collected</p>
            </div>
        </div>
    </div>
  )
}