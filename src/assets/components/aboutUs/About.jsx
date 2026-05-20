
import React from 'react'
import Students from '../../image/students.png'
import { FaGraduationCap, FaUserTie, FaBookOpen, FaAward, FaStar, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaArrowRight, } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuBookText, LuSmartphone, LuPalette, } from "react-icons/lu";
import { FaRegIdCard, FaRocket } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { PiUsersThreeFill } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import AboutBg from '../../image/aboutBg.png'
import Metting from '../../image/metting.png'


const About = () => {
    return (
        <>
            <div className="w-full h-[480px] bg-cover flex"
                style={{ backgroundImage: `url(${AboutBg})` }}>

                <div className='pl-24 w-1/2'>
                    <div className='flex text-white text-sm gap-4 font-semibold mt-5 '>
                        <a>Home</a>
                        <span className='mt-1'><IoIosArrowForward /></span>
                        <a>Course</a>
                    </div>
                    <div className='text-white flex justify-center items-center py-2 bg-[#0B0B8F] w-28 rounded-2xl text-base mt-5'>About Us</div>
                    <h1 className='text-5xl text-white font-bold mt-5 leading-tight'>Empowering Learners,</h1>
                    <h1 className='text-5xl text-yellow-400 font-bold mt-1'>Building Futures</h1>
                    <p className='mt-3 text-lg text-white'>At LT. OMMURE, we believe education is more than just learning — it's the key to transforming lives. Our mission is to make quality education accessible, practical and career-focused for everyone.</p>
                    <div className='flex gap-5'>
                        <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold' onClick={() => navigate('/course')}>Explore Course →</button>
                    </div>
                </div>
                <div className=' w-1/2 flex ml-20 items-end relative '>
                    <img src={Students} alt='Students' className='h-[400px]' />
                </div>
            </div>
            <div className='flex' >
                <div className='p-10'>
                    <p className='font-bold text-purple-600 text-xl'>Our Mission</p>
                    <p className='font-bold text-3xl mt-3'>To bridge the gap between<br /> learning and<span className='text-purple-600'> real-world success.</span></p>
                    <p className='mt-3'>we strive to deliver industry-relavant training,hands-on <br />experience,and placement assistance to help learners<br /> achieve their dream careers. </p>
                </div>
                <div className=" w-[1px] h-48 bg-[#63605B] mt-10 "></div>

                <div className='p-10'>
                    <p className='font-bold text-purple-600 text-xl'>Our Values</p>
                    <div className='flex gap-5  items-center mt-5'>
                        <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-full '><HiUsers className=' font-bold text-3xl text-white' /></div>
                        <div className=''>
                            <p className='font-bold text-xl'>Student Frist</p>
                            <p>We put our student at the<br /> center of everything we do.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 mt-5'>
                        <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-full '><SlEnergy className=' font-bold text-3xl text-white' /></div>
                        <div className=''>
                            <p className='font-bold text-xl '>Practical Approach</p>
                            <p>We focus an practical learning <br />that builds real-words skills.</p>
                        </div>
                    </div>
                </div>
                <div className='mt-16 ml-20'>
                    <div className='flex gap-5  items-center mt-5'>
                        <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-full '><FaAward className=' font-bold text-3xl text-white' /></div>
                        <div className=''>
                            <p className='font-bold text-xl '>Quality Education</p>
                            <p>We ensure the highest quality <br />in our content and teaching</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 mt-5'>
                        <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-full '><FaHeart className=' font-bold text-3xl text-white' /></div>
                        <div className=''>
                            <p className='font-bold text-xl '>Integrity</p>
                            <p>we are honest,transparent,<br />and committed to our promise.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-30 bg-gradient-to-r from-[#0B0B8F] via-[#2D1DB8] to-[#6C3CFF] flex gap-10 mt-5 text-white justify-center items-center'>

                <div className='flex gap-5  items-center '>
                    <div className='h-14 w-14 flex justify-center items-center bg-indigo-600 rounded-lg '><FaGraduationCap size={32} className=' font-bold text-3xl text-white' /></div>
                    <div className=''>
                        <p className='font-bold text-yellow-400 text-3xl '>10k+</p>
                        <p>Student Trained</p>
                    </div>
                    <div className=" w-[1px] h-14 mt-1 bg-[#63605B] ml-10"></div>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='h-14 w-14 flex justify-center items-center bg-indigo-600 rounded-lg '><FaRegIdCard size={32} className=' font-bold text-3xl text-white' /></div>
                    <div className=''>
                        <p className='font-bold text-yellow-400 text-3xl'>8K+</p>
                        <p>Successfully Placed</p>
                    </div>
                    <div className=" w-[1px] h-14 bg-[#63605B] mt-1 ml-10"></div>
                </div>

                <div className='flex items-center'>
                    <div className='h-14 w-14 flex justify-center items-center bg-indigo-600 rounded-lg '><RiHotelLine className=' font-bold text-3xl text-white' /></div>
                    <div className='ml-5'>
                        <p className='font-bold text-yellow-400 text-3xl'>500+</p>
                        <p>Hiring Partners</p>
                    </div>
                     <div className=" w-[1px] h-14 bg-[#63605B] mt-1 ml-10"></div>
                </div>
                
                 <div className='flex items-center'>
                    <div className='h-14 w-14 flex justify-center items-center bg-indigo-600 rounded-lg '><FiUsers className=' font-bold text-3xl text-white' /></div>
                    <div className='ml-5'>
                        <p className='font-bold text-yellow-400 text-3xl'>120+</p>
                        <p>Expert Instructerx</p>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <img src={Metting} alt="Metting" className='w-1/2 mx-20  my-10 rounded-xl h-96 ' />
                <div className='mt-10'>
                    <p className='font-bold text-purple-600 text-xl'>Our Story</p><br/>
                    <p className='font-bold text-3xl'>How It All <span className='text-purple-600'>Started</span></p>
                    <p className='mt-3'>LT. OMMURE began with a simple vision — to empower learners <br/>with the skills they need to succeed in today's competitive world.</p>
                     <p className='mt-3'> What started as a small group of passionate educators has now <br/>grown into a trusted platform that has trained thousands of <br/>students and helped them build successful careers.</p>
                     <p className='mt-3'> We continue to innovate, expand and evolve — but our mission<br/> remains the same:<span className='font-bold'> Your Success is Our Purpose.</span></p>
                </div>
            </div>

            
            


        </>
    )
}

export default About
