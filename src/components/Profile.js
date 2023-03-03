import React from 'react'
import {BsArrowRight,BsGithub,BsLinkedin,BsEnvelope} from "react-icons/bs";
import { Link } from 'react-scroll';


const Profile = (props) => {
  return (
    <section className={`${props.mode?'bg-gray-900':''} flex flex-col items-center justify-around max-w-full h-[783px]`}>
        <h1 className='max-[450px]:text-[45px] text-[60px] text-teal-700 font-extrabold mt-5'>Shruti Angane</h1>
        <h4 className={`font-medium text-[25px] ${props.mode?'text-[#FFFFFF]':'text-[#000000]'}`}>Front-End Developer</h4>
        <p className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[18px] font-normal text-center max-[450px]:w-[300px] w-[400px] lg:w-[600px]`}>Hello ! I am a self-taught programmer and a front-end enthusiast web developer based in Mumbai.I love coding and bringing out ideas and designs to life through it. Currently I am focused in building responsive and scalable front-end products.</p>
        <Link to='portfolio' smooth duration={1000} className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[165px] h-[43px] font-medium hover:cursor-pointer'>
            Portfolio 
            <div className='w-[15px] h-[15px] ml-1 hover:rotate-90 duration-300'>
                <BsArrowRight/>
            </div>
        </Link>
        <div className='flex flex-col absolute -left-[70px]'>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] font-semibold duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='https://github.com/ShrutiAngane' target='_blank' rel="noreferrer">Github</a><BsGithub size={40} className='socials'/></div>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] font-semibold duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='https://www.linkedin.com/in/shruti-angane-866959182/' target='_blank' rel="noreferrer">LinkedIn</a><BsLinkedin size={40} className='socials'/></div>
            <div className='w-[130px] h-[50px] bg-teal-700 text-[#FFFFFF] font-semibold duration-500 mt-1 flex items-center justify-around rounded-r-md hover:cursor-pointer relative left-0 hover:left-[70px]'><a href='mailto:shrutiangane628@gmail.com' target='_blank' rel="noreferrer">Gmail</a><BsEnvelope size={40} className='socials'/></div>
        </div>
        <div className='max-[450px]:w-[256px] max-[450px]:h-[256px] w-[356px] h-[356px] rounded-full bg-gradient-to-b from-teal-500'>
            <div className='bg-no-repeat bg-cover max-[450px]:w-[220px] max-[450px]:h-[220px] w-[300px] h-[300px] ml-[-11px]' style={{backgroundImage:"url('avatar-new.png')"}}></div>
        </div>

    </section>
  )
}

export default Profile
