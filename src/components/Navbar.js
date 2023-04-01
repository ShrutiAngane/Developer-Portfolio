import React from 'react'
import { BsFillBrightnessHighFill,BsFillMoonStarsFill,BsCloudArrowDownFill } from "react-icons/bs";
import pdf from '../assets/ShrutiAngane-Resume.pdf'

const Navbar = (props) => {
  return (
    <header className={`${props.mode?'bg-gray-900':''} flex max-w-full`} name='navbar'>
        <nav className='flex justify-between items-center m-5 w-full'>
            <h1 className={`${props.mode?'text-[#FFFFFF]':'text-[#867E7E]'} max-[450px]:text-[16px] text-[20px] lg:text-[23px] font-normal font-lobster`}>Developed By Shruti</h1>
            <div className='flex'>
                <div className='flex items-center' onClick={props.theme}>
                {props.mode?<BsFillBrightnessHighFill className='mode-dark'/>:<BsFillMoonStarsFill className='mode-light'/>}
                </div>
                <button className={`bg-teal-500 rounded-lg max-[450px]:w-[80px] w-[100px] h-[37px] lg:w-[165px] lg:h-[43px] text-[14px] md:text-[18px] font-medium ${props.mode?'text-black':'text-[#FFFFFF]'} font-bree`}>
                  <a href={pdf} download className='flex justify-center gap-1 items-center'>Resume <BsCloudArrowDownFill size={20}/></a></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
