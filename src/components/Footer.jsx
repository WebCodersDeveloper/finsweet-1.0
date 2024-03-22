import LogoWhite from "../assets/LogoWhite.svg"

export default function Footer() {
  return (
    <div className="w-full h-[380px] bg-[#0B0706] flex items-center justify-center">
        <div className="w-[90%] h-[80%] flex items-start justify-between">
            <img src={LogoWhite} alt="Not found" className="w-[180px]" />
            <div className="w-[520px] h-full flex justify-between">
                <ul className="flex flex-col gap-5">
                    <li className="text-white font-bold text-2xl">Our team</li>
                    <li className="opacity-[70%] text-white font-light text-lg mt-3">About us</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Team</li>
                    <li className="opacity-[70%] text-white font-light text-lg">What we do</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Contact</li>
                </ul>
                <ul className="flex flex-col gap-5">
                    <li className="text-white font-bold text-2xl">More</li>
                    <li className="opacity-[70%] text-white font-light text-lg mt-3">Projects</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Events</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Donate</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Blog</li>
                </ul>
                <ul className="flex flex-col gap-5">
                    <li className="text-white font-bold text-2xl">Connect</li>
                    <li className="opacity-[70%] text-white font-light text-lg mt-3">Facebook</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Instagram</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Twitter</li>
                    <li className="opacity-[70%] text-white font-light text-lg">Linkdin </li>
                </ul>
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="text-white font-bold w-[440px] text-[40px]">Subscribe to get latest updates</h2>
                <span>
                    <input type="email" placeholder="Your email" className="w-[405px] h-16 rounded border-2 border-[#EBF0F94D] bg-transparent pl-6 outline-none text-white" />
                    <button className="bg-[#FFFFFF] h-16 w-32 rounded">Subscribe</button>
                </span>
            </div>
        </div>
    </div>
  )
}
