import React from 'react'
import { projects } from '../constants/projects'

const Portfolio = (props) => {
  return (
    <section className={`${props.mode?'bg-gray-900':''} flex flex-col justify-evenly items-center max-w-full`} name='portfolio'>
      <div className='flex flex-col justify-evenly items-center mt-5'>
        <h2 className={`${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[40px] font-medium`}>Portfolio</h2>
        <p className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[18px] text-center w-[300px] md:w-[350px] mt-4`}>Some of the projects that I have worked on using the above mentioned tech stack</p>
      </div>
      <div className='flex flex-col justify-evenly items-center lg:grid lg:grid-cols-2 gap-[30px] md:gap-[60px] mt-5'>
        {projects.map((element)=>{
          return <div key={element.id} className={`flex flex-col items-center h-[380px] max-[450px]:w-[300px] w-[350px] lg:w-[350px] mt-5 rounded-lg hover:cursor-pointer hover:scale-105 duration-500 shadow-lg ${props.mode?'shadow-teal-500':'shadow-[#ACAAB0] border-2 border-teal-500'}`}>
            <img src={element.img} alt='project'></img>
            <h4 className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-medium m-[22px]`}>{element.title}</h4>
            <div className='flex justify-evenly items-center w-full border-t-2 h-full'>
              <div className='w-full flex justify-center border-r-2 h-full items-center'><a href={element.demo} target='_blank' rel="noreferrer" className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-normal`}>Demo</a></div>
              <div className='w-full flex justify-center h-full items-center'><a href={element.code} target='_blank' rel="noreferrer" className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-normal`}>Code</a></div>
            </div>
          </div>
        })}

      </div>
      
    </section>
  )
}

export default Portfolio
