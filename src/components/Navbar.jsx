import Logo from '../assets/Logo.svg'
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white w-[90%] h-16 flex items-center justify-between">
        <Link to='/'><img src={Logo} alt="" /></Link>
        <ul className='flex gap-10 h-full items-center'>
            <li>
                <Link to='/' className='font-roboto text-base text-[#525560] focus-within:text-black focus-within:font-medium'>Home</Link>
            </li>
            <li>
                <Link to='/aboutus' className='font-roboto text-base text-[#525560] focus-within:text-black focus-within:font-medium'>About Us</Link>
            </li>
            <li>
                <Link to='/whatWedo' className='font-roboto text-base text-[#525560] focus-within:text-black focus-within:font-medium'>What We Do</Link>
            </li>
            <li>
                <Link to='/media' className='font-roboto text-base text-[#525560] focus-within:text-black focus-within:font-medium'>Media</Link>
            </li>
            <li>
                <Link to='/contact' className='font-roboto text-base text-[#525560] focus-within:text-black focus-within:font-medium'>Contact</Link>
            </li>
            <li className='bg-[#1D2130] flex items-center justify-center rounded-md  w-[115px] h-[43px] focus-within:bg-none'>
                <Link to='/donate' className='font-roboto rounded-md text-base text-white focus-within:font-medium'>Donate</Link>
            </li>
        </ul>
    </div>
  )
}
