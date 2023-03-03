import React from 'react'
import { skills } from '../constants/skillsList'

const Skills = (props) => {
  return (
    <section className={`${props.mode?'bg-gray-900':''} flex flex-col items-center justify-around max-w-full lg:h-[1300px]`}>
      <div className='flex flex-col justify-evenly items-center mt-5'>
        <h2 className={`${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[40px] font-medium`}>Skills</h2>
        <p className={`${props.mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[18px] text-center font-normal mt-4`}>Tech stack that I follow and have experience working with</p>

      </div>
        <div className='flex flex-col justify-evenly items-center lg:grid lg:grid-cols-3 gap-[30px] md:gap-[60px]'>
          {skills.map((element)=>{
            return <div key={element.id} className={`flex flex-col items-center justify-around h-[300px] max-[450px]:w-[300px] w-[350px] lg:w-[270px] xl:w-[350px] mt-5 rounded-lg hover:cursor-pointer hover:scale-105 duration-500 shadow-lg ${props.mode?'shadow-teal-500':'shadow-[#ACAAB0] border-2 border-teal-500'}`}>
              <img src={element.image} alt='skill' className='w-[200px] lg:w-[150px] xl:w-[200px]'></img>
              <h2 className={`${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[20px] font-bold`}>{element.title.toUpperCase()}</h2>
            </div>
          })}
        </div>
      
    </section>
  )
}

export default Skills
