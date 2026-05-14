import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
import { FaLongArrowAltLeft } from "react-icons/fa";

const WebDevelopement = () => {
  return (
    <>
    <div className='bg-[#4a34d8] h-screen p-5'>
      
      <div className='bg-[#5D45FD]  rounded-2xl p-5 pl-10 text-white'>
         <button className=' p-2 mt-5 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 px-8'><span><FaLongArrowAltLeft  /></span>
          Back to Courses
        </button>
        <div className='h-10 w-10 flex justify-center items-center bg-[#7462FF] rounded-lg mt-5 '><HiCodeBracket className=' font-bold text-3xl' /></div>
        <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#7462FF] font-bold text-sm '>Bestseller</div>
        <h1 className=' font-bold mt-4 text-lg '>Web Development</h1>
        <p className=' mt-1'>Learn HTML, CSS, JavaScript, React, and modern frontend development tools to build responsive, fast, and professional websites from scratch. This course includes real-world projects, UI design practice, API integration, and deployment techniques to prepare you for frontend developer roles.</p>
        <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
        <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
       
      </div>
      </div>
    </>
  )
}

export default WebDevelopement

