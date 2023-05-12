import React from 'react'
import { BsFillBrightnessHighFill,BsFillMoonStarsFill,BsCloudArrowDownFill } from "react-icons/bs";
import pdf from '../assets/ShrutiAngane-Resume.pdf'
import { useSelector,useDispatch } from 'react-redux';
import { changeTheme } from '../redux/features/themeSlice';
import Fade from 'react-reveal/Fade';

const Navbar = () => {
  const theme=useSelector((state)=>state.theme.value)
  const dispatch=useDispatch()
  return (
    <header className={`${theme?'bg-gray-900':''} flex max-w-full`} name='navbar'>
        <nav className='flex justify-between items-center m-5 w-full'>
          <Fade left>
          <h1 className={`${theme?'text-[#FFFFFF]':'text-[#867E7E]'} max-[450px]:text-[16px] text-[20px] lg:text-[23px] font-normal font-lobster`}>Developed By Shruti</h1>
          </Fade>
          <Fade right>
            <div className='flex'>
                <div className='flex items-center' onClick={()=>dispatch(changeTheme())}>
                {theme?<BsFillBrightnessHighFill className='mode-dark'/>:<BsFillMoonStarsFill className='mode-light'/>}
                </div>
                <button className={`bg-teal-500 rounded-lg max-[450px]:w-[80px] w-[100px] h-[37px] md:w-[165px] md:h-[43px] text-[14px] md:text-[18px] font-medium text-black font-bree`}>
                  <a href={pdf} download className='flex justify-center gap-1 items-center'>Resume <BsCloudArrowDownFill size={20}/></a></button>
            </div>
            </Fade>
        </nav>
    </header>
  )
}

export default Navbar
