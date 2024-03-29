import React,{useContext} from 'react'
import {BsGithub,BsLinkedin,BsEnvelope} from "react-icons/bs";
import { ThemeContext } from '../App';

const Footer = () => {
  const {mode}=useContext(ThemeContext)
  return (
    <section className={`${mode?'bg-[#0B0F18]':'bg-teal-800'} max-w-full h-[200px] flex justify-center items-center`}>
        <div className='flex flex-col items-center justify-evenly lg:w-1/3 h-[200px]'>
            <div className='flex flex-col items-center justify-evenly w-full'>
                <h4 className={`text-[#FFFFFF] text-[25px] font-semibold font-bree`}>Stay Connected</h4>
                <p className={`text-[#FFFFFF] text-[16px] font-bree`}>Mumbai,India</p>
                <p className={`text-[#FFFFFF] text-[16px] font-bree`}>(+91) 9930564923</p>
            </div>
            <div className='flex items-center justify-center gap-5 w-full h-fit'>
            <a href='https://github.com/ShrutiAngane' target='_blank' rel="noreferrer"><BsGithub size={30} className='socials'/></a>
            <a href='https://www.linkedin.com/in/shruti-angane-866959182/' target='_blank' rel="noreferrer"><BsLinkedin size={30} className='socials'/></a>
            <a href='mailto:shrutiangane628@gmail.com' target='_blank' rel="noreferrer"><BsEnvelope size={30} className='socials'/></a>
            </div>
        </div>
      
    </section>
  )
}

export default Footer
