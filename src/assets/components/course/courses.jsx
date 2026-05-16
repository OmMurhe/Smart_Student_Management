import React from 'react'
import Girl from '../../image/girl.png'
import { FaGraduationCap,FaArrowRight } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuBookText,LuSmartphone,LuPalette,LuMegaphone,LuShieldCheck,LuBrainCircuit,LuDatabase } from "react-icons/lu";
import { Navigate, useNavigate } from 'react-router-dom';

const Course = () => {
 const navigate = useNavigate()
  return (
    <>
      <div className='bg-gradient-to-r from-[#2d1db8] to-[#6c3cff] w-full h-90 flex '>
        <div className='pt-16 pl-24 w-1/2 '>
          <p className='text-yellow-400 text-xl font-semibold'>OUR COURSE</p>
          <h1 className='text-4xl text-white font-bold mt-5 leading-tight'>Explore Our</h1>
          <h1 className='text-4xl text-yellow-400 font-bold mt-1'>Popular Courses</h1>
          <p className='mt-3 text-lg text-white'>Choose from our wide range of professionsl course<br></br> designed boost your skills and career.</p>
          <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4'>Explore Course →</button>
        </div>
        <div className=' w-1/2 flex ml-20 items-end relative '>
          <div className='h-[320px] w-[320px] rounded-full bg-amber-400  absolute left-5'>  </div>
          <img src={Girl} alt='Girl' className='h-[370px] z-10 absolute -left-32  ' />
          <div className='h-48 w-48 rounded-2xl bg-white z-10 absolute right-32 bottom-16 '>
            <div className='flex '>
              <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10  ml-4 mt-5 justify-center items-center '><FaGraduationCap size={24} /></div>
              <div className='mt-5 ml-5'>
                <span className='font-bold text-xl'>100+</span>
                <p className='text-sm mt-'>Expert Instucter</p>
              </div>
            </div>
            <hr className='w-[80%] mx-auto border-blue-200 mt-8'></hr>

            <div className='flex '>
              <div className='bg-[#F06878] p-2 rounded-full text-white h-10 w-10  ml-4 mt-5 justify-center items-center '><LuBookText size={24} /></div>
              <div className='mt-5 ml-5'>
                <span className='font-bold text-xl'>20+</span>
                <p className='text-sm mt-'>Permium Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center text-purple-800 font-bold mt-5'>TOP CATEGORIES </p>
      <h1 className='text-4xl text-center font-bold'>Browes Top Course</h1>

      {/* Course Cards */}
      {/*Card 1*/}

      <div className='flex ml-12 mt-10 gap-12'>
        <div className='bg-[#5D45FD] w-80  rounded-2xl p-5 text-white'>

          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#7462FF] rounded-lg '><HiCodeBracket className=' font-bold text-3xl' /></div>
            <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/webDevelopement')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#7462FF] font-bold text-sm '>Bestseller</div>
          <h1 className=' font-bold mt-4 text-lg '>Web Development</h1>
          <p className=' mt-1'>HTML,CSS,JS & React - build  websites <br /> from scratch.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>
        {/*Card 2*/}
        <div className='bg-[#20A36F] w-80  rounded-2xl p-5 text-white'>

          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#3CBF8B] rounded-lg '><LuSmartphone className=' font-bold text-3xl' /></div>
            <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/appDevelopement')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#3CBF8B] font-bold text-sm '>Populer</div>
          <h1 className=' font-bold mt-4 text-lg '>App Developement</h1>
          <p className=' mt-1'>Build Android & ios apps using Flutter & React Native.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>
        <div className='bg-[#E66126] w-80  rounded-2xl p-5 text-white'>

          {/*Card 3*/}
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#F27D4A] rounded-lg '><BiBarChartAlt2 className=' font-bold text-3xl' /></div>
             <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/dataScience')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#F27D4A] font-bold text-sm '>Top Rated</div>
          <h1 className=' font-bold mt-4 text-lg '>Data Science</h1>
          <p className=' mt-1'>MAster Ml,Al & data analysis with Python projects.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>
        <div className='bg-[#C24C9A] w-80  rounded-2xl p-5 text-white'>

          {/*Card 4*/}
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#D66EB1] rounded-lg '><LuPalette className=' font-bold text-3xl' /></div>
             <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/uiUxDesign')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#D66EB1] font-bold text-sm '>Threading</div>
          <h1 className=' font-bold mt-4 text-lg '>UI/UX Design</h1>
          <p className=' mt-1'>Design beautiful interfaces using Figma & design Thinking.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>

      </div>

      {/*2nd lin ecards */}
      {/*card 5 */}

      <div className='flex ml-12 mt-10 gap-12'>
        <div className='bg-[#D9A629] w-80  rounded-2xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#EBC053] rounded-lg '><LuMegaphone className=' font-bold text-3xl' /></div>
           <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/digitalMarketing')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#EBC053] font-bold text-sm '>New</div>
          <h1 className=' font-bold mt-4 text-lg '>Digital Marketing</h1>
          <p className=' mt-1'>Learn SEO,SMM & Google ads to grow brands online.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>
        {/*Card 6*/}
        <div className='bg-[#2E8BC7] w-80  rounded-2xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#4AA3D9] rounded-lg '><LuShieldCheck className=' font-bold text-3xl' /></div>
             <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/cyberSecurity')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#4AA3D9] font-bold text-sm '>Hot</div>
          <h1 className=' font-bold mt-4 text-lg '>Cyber Security</h1>
          <p className=' mt-1'>Ethical hacking,networking & security fundamentals.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>

        {/*Card 7*/}
        <div className='bg-[#0D4E81] w-80  rounded-2xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#1A5F96] rounded-lg '><LuBrainCircuit className=' font-bold text-3xl' /></div>
            <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/artificialIntelligence')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#1A5F96] font-bold text-sm '>New Launch</div>
          <h1 className=' font-bold mt-4 text-lg '>Artificial Intelligence</h1>
          <p className=' mt-1'>ChatGPT,Prompt Engineering & AL tools-bulid AI-poeered apps.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>

        {/*Card 8*/}
        <div className='bg-[#6A1B9A] w-80  rounded-2xl p-5 text-white'>
          <div className='flex justify-between items-center'>
            <div className='h-10 w-10 flex justify-center items-center bg-[#7E31B1] rounded-lg '><LuDatabase className=' font-bold text-3xl' /></div>
             <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/cloudComputing')}>View Details</span>
          </div>
          <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#7E31B1] font-bold text-sm '>Hot</div>
          <h1 className=' font-bold mt-4 text-lg '>Cloud Computing</h1>
          <p className=' mt-1'>AWS,Azure & GCP - deploy,manage & scale apps on the cloud.</p>
          <hr className='px-5 mx-auto border-blue-200 mt-5'></hr>
          <p className=' text-sm mt-2 font-bold'>Start: 17 January 2026</p>
          <button className='w-full p-2 mt-8 border-white border-1 text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
            Enrole Now <span><FaArrowRight className='mt-1' /></span>
          </button>
        </div>

      </div>
    </>
  )
}

export default Course
