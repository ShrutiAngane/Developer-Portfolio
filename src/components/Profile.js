import React from 'react'
import {BsArrowRight,BsGithub,BsLinkedin,BsEnvelope} from "react-icons/bs";
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';


const Profile = () => {
    const theme=useSelector((state)=>state.theme.value)
  return (
    <section className={`${theme?'bg-gray-900':''} flex flex-col items-center justify-around max-w-full h-[783px]`}>
        <div className='flex flex-col items-center'>
            <h1 className='text-[40px] lg:text-[50px] text-teal-700 font-extrabold mt-5 font-bree '>Shruti Angane</h1>
            <h4 className={`font-medium text-[23px] ${theme?'text-[#FFFFFF]':'text-[#000000] mt-[10px] font-bree'}`}>Front-End Developer</h4>
        </div>
        <p className={`${theme?'text-[#FFFFFF]':'text-[#706C6C]'} text-[1rem] font-normal text-center max-[450px]:w-[300px] w-[400px] lg:w-[600px]`}>Hello ! I am a self-taught programmer and a front-end enthusiast web developer based in Mumbai.I love coding and bringing out ideas and designs to life through it. Currently I am focused in building responsive and scalable front-end products.</p>
        <div className='md:hidden flex items-center justify-center gap-5 w-full h-fit'>
            <a href='https://github.com/ShrutiAngane' target='_blank' rel="noreferrer"><BsGithub size={30} className={`${theme?'socials':''}`}/></a>
            <a href='https://www.linkedin.com/in/shruti-angane-866959182/' target='_blank' rel="noreferrer"><BsLinkedin size={30} className={`${theme?'socials':''}`}/></a>
            <a href='mailto:shrutiangane628@gmail.com' target='_blank' rel="noreferrer"><BsEnvelope size={30} className={`${theme?'socials':''}`}/></a>
            </div>
        <Link to='portfolio' smooth duration={1000} className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[150px] h-[37px] text-[14px] lg:text-[18px] lg:w-[165px] lg:h-[43px] font-medium font-bree hover:cursor-pointer'>
            Portfolio 
            <div className='w-[15px] h-[15px] ml-1 hover:rotate-90 duration-300'>
                <BsArrowRight/>
            </div>
        </Link>
        <div className='hidden md:flex flex-col absolute -left-[70px]'>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='https://github.com/ShrutiAngane' target='_blank' rel="noreferrer" className='font-bree'>Github</a><BsGithub size={40} className='socials'/></div>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='https://www.linkedin.com/in/shruti-angane-866959182/' target='_blank' rel="noreferrer" className='font-bree'>LinkedIn</a><BsLinkedin size={40} className='socials'/></div>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='mailto:shrutiangane628@gmail.com' target='_blank' rel="noreferrer" className='font-bree'>Gmail</a><BsEnvelope size={40} className='socials'/></div>
        </div>
        <div className='max-[450px]:w-[256px] max-[450px]:h-[256px] w-[356px] h-[356px] rounded-full bg-gradient-to-b from-teal-500'>
            <div className='bg-no-repeat bg-cover max-[450px]:w-[220px] max-[450px]:h-[220px] w-[300px] h-[300px] ml-[-11px]' style={{backgroundImage:"url('avatar-new.png')"}}></div>
        </div>

    </section>
  )
}

export default Profile
