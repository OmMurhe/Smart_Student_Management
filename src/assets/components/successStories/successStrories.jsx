import React from 'react'
import Success from '../../image/success.png'
import { FiUsers } from "react-icons/fi";
import { FaRegIdCard } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";



const SuccessStrories = () => {
  return (
   <>
      <div className="w-full h-[330px] bg-cover bg-center flex z-5"
        style={{ backgroundImage: `url(${Success})` }}>
        <div className='pt-12 pl-24 text-white '>
          <div className='w-30 p-2 bg-[#0B0B8F]  rounded-2xl text-base text-amber-400'>Our Achievers</div>
          <h1 className='text-5xl text-white font-bold mt-5'>Success<span className=' text-yellow-400'> Stories</span></h1>
          <p className='mt-3 text-lg text-white'>Real stories from real student who learned,grew,<br/>and achieved their dreams with us.</p>

          <div className='flex gap-5 mt-5'>
            <div className='flex gap-5  items-center'>
              <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FiUsers className=' font-bold text-3xl text-white' /></div>
              <div className=''>
                <p className='font-bold '>10k+</p>
                <p>Student Trained</p>
              </div>
              <div className=" w-[1px] h-10 bg-[#63605B] mt-1 ml-auto"></div>
            </div>

            <div className='flex items-center gap-5'>
              <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FaRegIdCard className=' font-bold text-3xl text-white' /></div>
              <div className=''>
                <p className='font-bold '>8K+</p>
                <p>Successfully Placed</p>
              </div>
              <div className=" w-[1px] h-16 bg-[#63605B] mt-1 ml-auto"></div>
            </div>

            <div className='flex items-center'>
              <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><RiHotelLine className=' font-bold text-3xl text-white' /></div>
              <div className='ml-5'>
                <p className='font-bold '>500+</p>
                <p>Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white w-72 h-28 p-10 px-5 bg-gradient-to-br from-[#4c35d6] to-[#2a1691] '>"From learning a new skills to leading my dream job - this journey has been life-changing".</div>
        </div>

      </>
      )
}

      export default SuccessStrories;
