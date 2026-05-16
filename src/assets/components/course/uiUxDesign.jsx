import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { HiCodeBracket } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { BsBarChartFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import Laptop from '../../image/laptop.png'
import { BiBarChartAlt2 } from "react-icons/bi";
import {LuPalette} from  "react-icons/lu";

const UiUxDesign = () => {
  return (
   <>
    <div className='bg-gradient-to-r from-[#2d1db8] to-[#6c3cff] w-full h-90 flex flex-row'>
         <div className=' flex flex-col w-[55%]'>
           <div className='flex text-white text-sm gap-4 ml-24 font-semibold mt-5 '>
             <span className='mt-1'><FaHouse /></span>
             <a>Home</a>
             <span className='mt-1'><IoIosArrowForward /></span>
             <a>Course</a>
             <span className='mt-1'><IoIosArrowForward /></span>
             <span>UI/UX Design</span>
           </div>
           <div className='flex'>
             <div className='h-14 w-14 flex justify-center items-center bg-[#5337E7] rounded-lg ml-24 mt-5 '><LuPalette className=' font-bold text-3xl text-yellow-500' /></div>
             <div className='ml-5 flex flex-col gap-3'>
               <div className='w-20 border-1 border-amber-400 h-6 flex justify-center items-center mt-5 rounded-lg bg-[#7462FF] font-bold text-xs text-yellow-400 '>Threading</div>
               <h1 className='text-white font-bold   text-3xl'>UI/UX Design</h1>
               <p className=' mt-1 text-white'>Design beautiful interfaces and seamless user experiences.<br/> Master Figma, Adobe XD, and Design Thinking from scratch.</p>
               <div className=' flex flex-row gap-5'>
                 <span className='flex gap-2 text-white'><FaRegStar className='text-yellow-400 mt-1' /><p>4.8</p></span>
                 <div className="h-5 w-[1px] bg-white/30 mt-1"></div>
                 <span className='flex gap-2 text-white'><FiUsers className=' mt-1' /><p>5.2K Students</p></span>
                 <div className="h-5 w-[1px] bg-white/30 mt-1"></div>
                 <span className='flex gap-2 text-white'><LuClock3 className=' mt-1' /><p>6 Weeks</p></span>
                 <div className="h-5 w-[1px] bg-white/30 mt-1"></div>
                 <span className='flex gap-2 text-white'><BsBarChartFill className=' mt-1' /><p>Creative Mindset</p></span>
               </div>
               <button className='px-2 py-2  w-40 bg-yellow-400 rounded-xl mt-4'>Enroll Now →</button>
             </div>
           </div>
           
         </div>
         <div className=' w-1/2 flex ml-20 items-end relative  z-0'>
                   <div className='h-[320px] w-[320px] rounded-full bg-amber-400  absolute left-53'>  </div>
                   <img src={Laptop} alt='Girl' className='h-[370px] z-10 absolute right-24 top-2 ' />
                   </div>
         
         </div>
   
         <div className='w-full flex mt-5 px-24 py-5  gap-5 z-10 '>
           <div className='w-2/3 shadow-[0_4px_20px_rgba(0,0,0,0.20)] p-6 rounded-2xl '>
             <p className='font-bold text-lg '>About This Course</p>
             <p className='mt-3'> This UI/UX Design course is designed for beginners and creative professionals who want to master modern user interface and user experience design. You will learn how to create visually attractive, user-friendly, and responsive designs for websites and mobile applications.</p>
   
             <div className='flex mt-7'>
               <div className='bg-[#2d1db8] p-2 rounded-full text-white h-10 w-10  mt- justify-center items-center '><RiComputerLine size={24} /></div>
               <div className='ml-5 text-sm '>
                 <p className='text-[#2d1db8] font-bold '>Creative Labs</p>
                 <p className='mt-1'>Live design sessions</p>
               </div>
   
               <div className='bg-[#2d1db8] p-2 rounded-full text-white h-10 w-10 ml-10 justify-center items-center'><HiCodeBracket size={24} /></div>
               <div className='ml-5 text-sm'>
                 <p className='text-[#2d1db8] font-bold'>User Centric</p>
                 <p className='mt-1'>Research & Testing</p>
               </div>
   
               <div className='bg-[#2d1db8] p-2 rounded-full text-white h-10 w-10 ml-10 justify-center items-center'><PiCertificateBold size={24} /></div>
               <div className='ml-5 text-sm'>
                 <p className='text-[#2d1db8] font-bold'>Certificate</p>
                 <p className='mt-1'>Course complition  certificate</p>
               </div>
             </div>
   
             <hr className='px-5  mx-auto border-[#dbd6cb] mt-7 '></hr>
             <p className='font-bold text-lg mt-5'>What You'll Learn</p>
   
             <div className='flex gap-16'>
               <div className='flex flex-col gap-5 mt-3'>
                 <div className='flex gap-5'>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p>UI/UX design fundamentals</p>
                 </div>
                 <div className='flex gap-5'>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p>Wireframing and prototyping</p>
                 </div>
                 <div className='flex gap-5'>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p>User research techniques</p>
                 </div>
                 <div className='flex gap-5'>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p>Color theory and typography</p>
                 </div>
                  <div className='flex gap-5'>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p>Responsive web design</p>
                 </div>
               </div>
   
               <div>
                 <div className='flex flex-col gap-5 mt-3'>
                   <div className='flex gap-5'>
                     <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                     <p>Mobile app interface design</p>
                   </div>
                   <div className='flex gap-5'>
                     <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                     <p>Design systems and components</p>
                   </div>
                   <div className='flex gap-5'>
                     <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                     <p>User flow and journey mapping</p>
                   </div>
                   <div className='flex gap-5'>
                     <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                     <p>Interactive prototype creation</p>
                   </div>
                   <div className='flex gap-5'>
                     <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                     <p>Real-world design projects</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
   
           <div className='h-full w-1/3 rounded-2xl p-6  shadow-[0_4px_20px_rgba(0,0,0,0.20)]'>
             <p className='font-bold text-lg '>Course Details</p>
             <div className='flex gap-3 flex-col'>
               <div className='flex w-full justify-between items-center mt-3'>
                 <div className='flex items-center gap-2'>
                   <span><MdOutlineDateRange /></span>
                   <p>Start Date</p>
                 </div>
                 <p className=''>6 March 2026</p>
               </div>
   
               <div className='flex w-full justify-between items-center '>
                 <div className='flex items-center gap-2'>
                   <span><LuClock3 /></span>
                   <p>Duration</p>
                 </div>
                 <p className=''>10 Weeks</p>
               </div>
   
               <div className='flex w-full justify-between items-center'>
                 <div className='flex items-center gap-2'>
                   <span><BsBarChartFill /></span>
                   <p>Level</p>
                 </div>
                 <p className=''>Beginner to Advanced</p>
               </div>
   
               <div className='flex w-full justify-between items-center'>
                 <div className='flex items-center gap-2'>
                   <span><FiUsers /></span>
                   <p>Students</p>
                 </div>
                 <p className=''>5.2K + Enrolled</p>
               </div>
   
               <div className='flex w-full justify-between items-center'>
                 <div className='flex items-center gap-2'>
                   <span><PiCertificateBold /></span>
                   <p>Certificate</p>
                 </div>
                 <p className=''>Yes</p>
               </div>
   
               <div className='flex w-full justify-between items-center'>
                 <div className='flex items-center gap-2'>
                   <span><MdLanguage /></span>
                   <p>Language</p>
                 </div>
                 <p className=''>English</p>
               </div>
   
                <div className='flex w-full justify-between items-center'>
                 <div className='flex items-center gap-2'>
                   <span><RiComputerLine /></span>
                   <p>Access</p>
                 </div>
                 <p className=''>Lifetime</p>
               </div>
   
                <hr className='px-5 w-full mx-auto border-[#dbd6cb] mt-3 '></hr>
   
                <div className='bg-[#d9d7e6] rounded-xl p-3'>
                 <p className='font-bold text-base text-[#3B22B8]'>Course Fee</p>
                 <div className='flex '>
                  <span className='font-bold text-xl mt-2'><FaRupeeSign /></span>
                  <p className='font-bold text-2xl text-[#1E1E2F] '>40,999</p>
                   <span className='ml-5 mt-4 text-xs text-[#7A7A8A]'><FaRupeeSign /></span>
                   <p className='text-xs mt-3 text-[#7A7A8A] line-through'>43.999</p>
                   <div className='px-2 py-1 ml-5 bg-white rounded-xl'><p className='text-[#3B22B8]'>37%OFF</p></div>
                 </div>
                <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2 bg-[#3B22B8]'>
                            Enrole Now→
                          </button>
                           <div className='flex gap-2 mt-3 justify-center items-center '>
                   <div className='bg-[#2d1db8] mt-1  rounded-full text-white h-5 w-5 flex justify-center items-center text-xs'><FaCheck /></div>
                   <p className='text-sm text-[#7A7A8A]'>30-Day Money Back Guarantee</p>
                 </div>
                </div>
   
   
   
             </div>
   
           </div>
         </div>
   </>
  )
}

export default UiUxDesign ;
