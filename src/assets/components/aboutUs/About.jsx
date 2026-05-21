
import React from 'react'
import Students from '../../image/students.png'
import { FaGraduationCap, FaUserTie, FaBookOpen, FaAward, FaStar, FaHeart, FaHandPointRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaArrowRight, } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuBookText, LuSmartphone, LuPalette, } from "react-icons/lu";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaRegIdCard, FaRocket } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { RiComputerLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { PiUsersThreeFill } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import AboutBg from '../../image/aboutBg.png'
import Metting from '../../image/metting.png'
import Feedback1 from '../../image/feedback1.png'
import Feedback2 from '../../image/feedback2.png'


import Teacher1 from '../../image/teacher1.png'
import Teacher2 from '../../image/teacher2.png'
import Teacher3 from '../../image/teacher3.png'
import Teacher4 from '../../image/teacher4.png'
import Teacher5 from '../../image/teacher5.png'


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
                    <p className='mt-3 text-lg text-white'>At IT. OMMURE, we believe education is more than just learning — it's the key to transforming lives. Our mission is to make quality education accessible, practical and career-focused for everyone.</p>
                    <div className='flex gap-5'>
                        <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold' onClick={() => navigate('/course')}>Explore Course →</button>
                    </div>
                </div>
                <div className=' w-1/2 flex ml-20 items-end relative '>
                    <img src={Students} alt='Students' className='h-[400px]' />
                </div>
            </div>
            <div className='flex' >
                <div className='px-20 pt-10'>
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
                <img src={Metting} alt="Metting" className='w-1/2 px-20  my-10 rounded-xl h-80 ' />
                <div className='mt-10'>
                    <p className='font-bold text-purple-600 text-xl'>Our Story</p><br />
                    <p className='font-bold text-3xl'>How It All <span className='text-purple-600'>Started</span></p>
                    <p className='mt-3'>LT. OMMURE began with a simple vision — to empower learners <br />with the skills they need to succeed in today's competitive world.</p>
                    <p className='mt-3'> What started as a small group of passionate educators has now <br />grown into a trusted platform that has trained thousands of <br />students and helped them build successful careers.</p>
                    <p className='mt-3'> We continue to innovate, expand and evolve — but our mission<br /> remains the same:<span className='font-bold'> Your Success is Our Purpose.</span></p>
                </div>
            </div>

            <div className='text-white  inline-block  p-6 bg-gradient-to-br from-[#4c35d6] to-[#2a1691]  rounded-xl relative left-8 bottom-44 '>
                <div className='flex gap-5 mt-5'>
                    <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-full '><GiDiamondTrophy size={40} className=' font-bold  text-yellow-400' /></div>
                    <div>
                        <p className='font-bold text-2xl'>Our Journey</p>
                        <p >"From a small inRelative to a<br /> trusted learning paltfrom<br /> becomes the thousand<br /> of careers.</p>

                    </div>
                </div>
            </div>

            <div className='bg-[#fef2f2] py-5'>
                <p className='font-bold text-purple-600 text-xl text-center'>Why Choose Us</p>
                <p className='font-bold text-3xl text-center mt-3'>The IT.OMMURHE<span className='text-purple-600'> Advantage</span></p>
                <div>
                    <div className='px-10 flex gap-6 mt-6'>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-6 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><FaGraduationCap size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Industry-Relevant  curriculum</p>
                            <p className='mt-1'>Learn skills that are in high demand and stay ahead in your career.</p>
                        </div>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-8 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><FaHandPointRight size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Hands-On Learning</p>
                            <p className='mt-1'>Work on real projects and assignments to gain practical skills.</p>
                        </div>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-8 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><FiUsers size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Expert <br />Mentors</p>
                            <p className='mt-1'>Learn from industry experts with years of real-world experience.</p>
                        </div>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-8 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><RiHotelLine size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Placement Assistance</p>
                            <p className='mt-1'>Dedicated support for resume, interview and job placement.</p>
                        </div>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-8 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><RiComputerLine size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Lifetime <br /> Access</p>
                            <p className='mt-1'>Access course content anytime, anywhere for life.</p>
                        </div>
                        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] rounded-2xl w-1/6 py-5 px-8 flex flex-col justify-center items-center text-center'>
                            <div className='bg-purple-600 p-2 rounded-full text-white h-10 w-10 justify-center items-center '><PiUsersThreeFill size={24} /></div>
                            <p className='font-bold text-lg mt-1'>Community Support</p>
                            <p className='mt-1'>Join a community of learners & alumni who grow together.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#0B0B8F] to-[#2D1DB8]  text-white px-16 py-5'>
                <p className='font-bold text-3xl mt-3'>Meet Our<span className='text-yellow-400'> Instructer</span></p>
                <p>Learn from the best industry experts and practitioners.</p>
                <div className='flex gap-5 my-5'>
                    <div className='bg-[#2D1DB8] w-1/5 rounded-xl'>
                        <img src={Teacher1} alt="Teacher1" className='h-72 w-full object-cover object-top  rounded-xl' />
                        <p className='ml-3 font-bold mt-3'>Om Murhe</p>
                        <p className='ml-3'>Full Stack Developer</p>
                        <p className='py-2 px-3 flex gap-3 text-yellow-400'> <FaStar className='  text-lg mt-1' />5+ Yers Experience</p>
                    </div>

                    <div className='bg-[#2D1DB8] w-1/5 rounded-xl'>
                        <img src={Teacher2} alt="Teacher1" className='h-72 w-full object-cover object-top rounded-xl' />
                        <p className='ml-3 font-bold mt-3'>Neha Wagh</p>
                        <p className='ml-3'>UI/UX Desigener</p>
                        <p className='py-2 px-3 flex gap-3 text-yellow-400'> <FaStar className='  text-lg mt-1' />2+ Yers Experience</p>
                    </div>

                    <div className='bg-[#2D1DB8] w-1/5 rounded-xl'>
                        <img src={Teacher3} alt="Teacher1" className='h-72 w-full object-cover object-top rounded-xl' />
                        <p className='ml-3 font-bold mt-3'>Shubham Kuware</p>
                        <p className='ml-3'>Data Science Expert</p>
                        <p className='py-2 px-3 flex gap-3 text-yellow-400'> <FaStar className='  text-lg mt-1' />6+ Yers Experience</p>
                    </div>

                    <div className='bg-[#2D1DB8] w-1/5 rounded-xl'>
                        <img src={Teacher4} alt="Teacher1" className='h-72 w-full object-cover object-top rounded-xl' />
                        <p className='ml-3 font-bold mt-3'>Gopal Chopade</p>
                        <p className='ml-3'>Senior Software Engineer</p>
                        <p className='py-2 px-3 flex gap-3 text-yellow-400'> <FaStar className='  text-lg mt-1' />12+ Yers Experience</p>
                    </div>

                    <div className='bg-[#2D1DB8] w-1/5 rounded-xl'>
                        <img src={Teacher5} alt="Teacher1" className='h-72 w-full object-cover object-top rounded-xl' />
                        <p className='ml-3 font-bold mt-3'>Aadity Wankhade</p>
                        <p className='ml-3'>Full Stack Developer</p>
                        <p className='py-2 px-3 flex gap-3 text-yellow-400'> <FaStar className='  text-lg mt-1' />8+ Yers Experience</p>
                    </div>
                </div>
            </div>
            <p className='font-bold text-3xl text-center mt-5'>What Our <span className='text-purple-600'>Student</span> Say</p>

            <div className='flex gap-10 mt-5 mx-20 '>
                <div className='w-112 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex flex-col px-15 py-10'>
                    <p>"IT. OMMURE changed my career path completely. The training and placement support I received were exceptional."</p>
                    <div className='mt-5 flex gap-3 items-center'>
                        <img src={Feedback1} alt="Feedback1" className='h-24 w-24 object-cover object-top  rounded-full' />
                        <div className=''>
                            <p className='font-bold'>Om Murhe</p>
                            <p>UI/UX Designer, Accenture</p>
                        </div>
                    </div>
                </div>

                <div className='w-112 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex flex-col px-15 py-10'>
                    <p>"The mentors are amazing and the curriculum is top-notch. I got placed in my dream company."</p>
                    <div className='mt-5 flex gap-3 items-center'>
                        <img src={Feedback2} alt="Feedback3" className='h-24 w-24 object-cover object-top  rounded-full' />
                        <div className=''>
                            <p className='font-bold'>Gaurav Kahde</p>
                            <p>Full Stack Developer,TCS</p>
                        </div>
                    </div>
                </div>

                <div className='w-112 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex flex-col px-15 py-10'>
                    <p>"Hands-on projects and real-world learning helped me build confidence and land a great job."</p>
                    <div className='mt-5 flex gap-3 items-center'>
                        <img src={Teacher2} alt="Teacher2" className='h-24 w-24 object-cover object-top  rounded-full' />
                        <div className=''>
                            <p className='font-bold'>Manoj Rathod</p>
                            <p>Data Analyst, Amazon</p>
                        </div>
                    </div>
                </div>
            </div>

             <div className='bg-gradient-to-r from-[#0b0a6b] to-[#190e94] flex items-center p-5 rounded-2xl mt-10 relative mx-20 px-20'>
                          <div className='bg-[#190e94] p-2 rounded-full text-white h-20 w-20 flex justify-center items-center '><FaGraduationCap size={40} /></div>
                          <div className='ml-8 text-white'>
                          <p className='font-bold text-2xl'>Ready to Start Your Lear<span className='text-yellow-400'>ning Journey?</span></p>
                          <p className='mt-2'>Join thousands of learners and take the first step<br/> towards your dream career today.</p>
                          </div>
                           <button className='px-4 py-2 bg-yellow-400 rounded-xl font-bold absolute right-10' onClick={()=>navigate ('/course')}>Explore Course →</button>
                      </div>
                  
            









        </>
    )
}

export default About
