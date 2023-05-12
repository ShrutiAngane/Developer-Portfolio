import React from 'react'
import { skills } from '../constants/skillsList'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal/Fade';

const Skills = () => {
  const theme=useSelector((state)=>state.theme.value)
  return (
    <section className={`${theme?'bg-gray-900':''} flex flex-col items-center justify-evenly max-w-full lg:h-[1300px]`}>
      <div className='flex flex-col justify-evenly items-center mt-5 animate-fade'>
        <Fade top><h2 className={`${theme?'text-[#FFFFFF]':'text-[#000000]'} text-[23px] font-medium font-bree`}>Skills</h2></Fade>
        <Fade top><p className={`${theme?'text-[#FFFFFF]':'text-[#706C6C]'} text-[1.1rem] text-center font-normal mt-4 font-bree`}>Tech stack that I follow and have experience working with</p></Fade>

      </div>
      <Fade bottom>
        <div className='flex flex-col justify-evenly items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[60px] animate-fade'>
          {skills.map((element)=>{
            return <div key={element.id} className={`flex flex-col items-center justify-around h-[250px] w-[300px] lg:w-[270px] xl:w-[300px] mt-5 rounded-lg hover:cursor-pointer hover:scale-105 duration-500 ${theme?'customshadow-dark':' customshadow-light border-2 border-teal-500'}`}>
              <img src={element.image} alt='skill' className='w-[150px]'></img>
              <h2 className={`${theme?'text-[#FFFFFF]':'text-[#000000]'} text-[18px] font-bold font-bree tracking-wide`}>{element.title.toUpperCase()}</h2>
            </div>
          })}
        </div>
        </Fade>
      
    </section>
  )
}

export default Skills
