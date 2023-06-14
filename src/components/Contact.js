import React, { useRef, useState,useContext } from 'react'
import { BsCheckCircleFill,BsArrowUp } from "react-icons/bs"
import { Link } from 'react-scroll'
import {useForm} from 'react-hook-form'
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../App';

const Contact = () => {
    const {mode}=useContext(ThemeContext)
    const form=useRef(null)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const[alert,setalert]=useState(false)
    function onSubmit(){
      // e.preventDefault();
      const formData=new FormData(form.current)
      const url='https://api.emailjs.com/api/v1.0/email/send-form'
      formData.append('service_id', 'service_xqgt7b8');
      formData.append('template_id', 'template_djn8x2c');
      formData.append('user_id', 'OB3BSZW2muSV22NJT');
      formData.append('accessToken', 'ywqHcEM2O3cqS5DtdNkqZ');
      const options={method:'POST',
                    body:formData}

      fetch(url,options).then((response)=>{
        setalert((prev)=>!prev)
        
      }).catch((error)=>{
        alert(error)
      })
      form.current.reset()
      }
  return (
    <>
    <section className={`${mode?'bg-gray-900':''} flex items-end justify-center max-w-full h-[600px] animate-fade`}>
        <div className='flex flex-col items-center justify-evenly mt-10 mb-6'>
            <Fade top><h2 className={`${mode?'text-[#FFFFFF]':'text-[#000000]'} text-[1.1rem] font-medium font-bree`}>Lets talk work!</h2></Fade>
            <Fade top><p className={`${mode?'text-[#FFFFFF]':'text-[#706C6C]'} text-[16px] md:text-[18px] text-center w-[300px] md:w-[350px] mt-4 font-bree`}>Reach out to me using the below form</p></Fade>
            <Fade bottom>
            <div>
            <form className='flex flex-col items-center justify-evenly h-[400px] mt-5' ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                <input name='username' type='text' placeholder='Enter your full name here' id='name' className={`w-[250px] lg:w-[400px] focus:outline-none ${mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  h-[50px] bg-transparent border-2 rounded-lg px-2 font-bree`} {...register("username",{required:'This field cannot be empty'})}></input>
                <p className='text-[red] text-[1rem]'>{errors.username?.message}</p>
                </div>
                <div className='flex flex-col'>
                <input name='useremail' type='email' placeholder='Enter your email id here' id='email' className={`w-[250px] lg:w-[400px] focus:outline-none ${mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  h-[50px] bg-transparent border-2 rounded-lg px-2 font-bree`} {...register("useremail",{required:'This field cannot be empty',pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },})}></input>
                <p className='text-[red] text-[1rem]'>{errors.useremail?.message}</p>
                </div>
                <div className='flex flex-col'>
                <textarea name='message' type='text' placeholder='Type in your message here' id='msg' className={`w-[250px] lg:w-[400px] focus:outline-none ${mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  bg-transparent border-2 rounded-lg px-2 font-bree`} rows={4}  {...register("message",{required:'This field cannot be empty'})}></textarea>
                <p className='text-[red] text-[1rem]'>{errors.message?.message}</p>
                </div>
                <button type='submit' className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[150px] h-[37px] lg:w-[165px] lg:h-[43px] md:text-[14px] text-[18px] font-medium font-bree'>Submit</button>
            </form>
            </div>
            </Fade>
        </div>
        {alert && <div className={`flex flex-col items-center animate-ascend absolute z-10 max-[450px]:w-[320px] w-[370px] h-[200px] rounded-lg bg-[#FFFFFF] ${mode?'':'border-2 shadow-lg'} mb-[146px]`}>
          <div className='flex items-center mt-[60px]'>
            <BsCheckCircleFill size={30}/>
            <h4 className='text-[16px] text-[#000000] font-normal ml-2 max-[450px]:text-center max-[450px]:w-[180px] font-bree'>Your Message has been sent successfully!</h4>
          </div>
          <button className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[135px] h-[33px] font-medium mt-[20px] font-bree' onClick={()=>{setalert((prev)=>!prev)}}>Ok</button>
          </div>}
            <Link to='navbar' smooth duration={1000} className={`flex items-center justify-center max-[450px]:w-[50px] max-[450px]:h-[50px] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] animate-bounce bg-teal-500 rounded-full hover:cursor-pointer absolute right-5 lg:right-[100px] mb-10 ${mode?'':'shadow-xl'}`}>
            <BsArrowUp size={30}/>
            </Link>
    </section>
  </>
  )
}

export default Contact
