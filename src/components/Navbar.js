import React from 'react'
import { BsFillBrightnessHighFill,BsFillMoonStarsFill } from "react-icons/bs";
import pdf from '../assets/CSS Selector Cheat Sheet - Dark.pdf'

const Navbar = (props) => {
  return (
    <header className={`${props.mode?'bg-gray-900':''} flex max-w-full`} name='navbar'>
        <nav className='flex justify-between items-center m-5 w-full'>
            <h1 className={`${props.mode?'text-[#FFFFFF]':'text-[#867E7E]'} max-[450px]:text-[16px] text-[25px] font-normal font-lobster`}>Developed By Shruti</h1>
            <div className='flex'>
                <div className='flex items-center' onClick={props.theme}>
                {props.mode?<BsFillBrightnessHighFill className='mode-dark'/>:<BsFillMoonStarsFill className='mode-light'/>}
                </div>
                <button className={`bg-teal-500 rounded-lg max-[450px]:w-[80px] w-[165px] h-[43px] font-medium ${props.mode?'text-black':'text-[#FFFFFF]'}`}><a href={pdf} download>Resume</a></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
