import React, { useRef, useState } from 'react'
import { BsCheckCircleFill,BsArrowUp } from "react-icons/bs"
import { Link } from 'react-scroll'

const Contact = (props) => {
    const form=useRef(null)
    const[name,setname]=useState('')
    const[email,setmail]=useState('')
    const[message,setmessage]=useState('')
    const[alert,setalert]=useState(false)

    function change_name(e){
      setname(e.target.value)
    }
    function change_email(e){
      setmail(e.target.value)
    }
    function change_message(e){
      setmessage(e.target.value)
    }
    function sendData(e){
      e.preventDefault();
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
    <section className={`${props.mode?'bg-gray-900':''} flex items-end justify-center max-w-full h-[600px]`}>
        <div className='flex flex-col items-center justify-evenly mt-10 mb-6'>
            <h2 className={`${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[40px] font-medium`}>Contact Me</h2>
            <form className='flex flex-col items-center justify-evenly h-[400px] gap-[40px] mt-5' ref={form} onSubmit={sendData}>
                <div className='flex items-center justify-around gap-5'>
                <input name='username' type='text' placeholder='Enter your full name here' id='name' className={`w-[300px] lg:w-[400px] focus:outline-none ${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  h-[50px] bg-transparent border-2 rounded-lg px-2`} value={name} onChange={change_name} required></input>
                </div>
                <div className='flex items-center justify-around gap-5'>
                <input name='useremail' type='email' placeholder='Enter your email id here' id='email' className={`w-[300px] lg:w-[400px] focus:outline-none ${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  h-[50px] bg-transparent border-2 rounded-lg px-2`} value={email} onChange={change_email} required></input>
                </div>
                <div className='flex items-center justify-around gap-5'>
                <textarea name='message' type='text' placeholder='Type in your message here' id='msg' className={`w-[300px] lg:w-[400px] focus:outline-none ${props.mode?'text-[#FFFFFF]':'text-[#000000]'} text-[16px]  bg-transparent border-2 rounded-lg px-2`} rows={4} value={message} onChange={change_message} required></textarea>
                </div>
                <button type='submit' className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[165px] h-[43px] font-medium'>Submit</button>
            </form>

        </div>
        {alert && <div className={`flex flex-col items-center absolute z-10 max-[450px]:w-[320px] w-[370px] h-[200px] rounded-lg bg-[#FFFFFF] ${props.mode?'':'border-2 shadow-lg'} mb-[146px]`}>
          <div className='flex items-center mt-[60px]'>
            <BsCheckCircleFill size={30}/>
            <h4 className='text-[16px] text-[#000000] font-normal ml-2 max-[450px]:text-center max-[450px]:w-[180px]'>Your Message has been sent successfully!</h4>
          </div>
          <button className='flex items-center justify-center bg-teal-500 rounded-lg max-[450px]:w-[120px] w-[135px] h-[33px] font-medium mt-[20px]' onClick={()=>{setalert((prev)=>!prev)
          setname('')
          setmail('')
          setmessage('')}}>Ok</button>
          </div>}
            <Link to='navbar' smooth duration={1000} className={`flex items-center justify-center max-[450px]:w-[50px] max-[450px]:h-[50px] w-[80px] h-[80px] bg-teal-500 rounded-full hover:cursor-pointer absolute right-5 lg:right-[100px] mb-10 ${props.mode?'':'shadow-xl'}`}>
            <BsArrowUp size={30}/>
            </Link>
    </section>
  </>
  )
}

export default Contact
