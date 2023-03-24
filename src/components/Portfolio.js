import React from 'react'
import { projects } from '../constants/projects'

const Portfolio = (props) => {
  return (
    <section className={`${props.mode?'bg-gray-900':''} flex flex-col justify-evenly items-center max-w-full`} name='portfolio'>
      <div className='flex flex-col justify-evenly items-center mt-12 lg:mt-5'>
        <h2 className={`${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[23px] font-medium font-bree`}>Portfolio</h2>
        <p className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[1.1rem] text-center w-[300px] md:w-[350px] mt-4 font-bree`}>Some of the projects that I have worked on using the above mentioned tech stack</p>
      </div>
      <div className='flex flex-col justify-evenly items-center md:grid md:grid-cols-2 gap-[30px] md:gap-[60px] mt-5'>
        {projects.map((element)=>{
          return <div key={element.id} className={`flex flex-col items-center h-[320px] w-[300px] mt-5 rounded-lg hover:cursor-pointer hover:scale-105 duration-500 ${props.mode?'customshadow-dark':'customshadow-light border-2 border-teal-500'}`}>
            <img src={element.img} alt='project'></img>
            <h4 className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-medium m-[22px] font-bree`}>{element.title}</h4>
            <div className='flex justify-evenly items-center w-full border-t-2 h-full'>
              <div className='w-full flex justify-center border-r-2 h-full items-center'><a href={element.demo} target='_blank' rel="noreferrer" className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-normal font-bree`}>Demo</a></div>
              <div className='w-full flex justify-center h-full items-center'><a href={element.code} target='_blank' rel="noreferrer" className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] font-normal font-bree`}>Code</a></div>
            </div>
          </div>
        })}

      </div>
      
    </section>
  )
}

export default Portfolio
