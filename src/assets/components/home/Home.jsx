import React from 'react'
import Girl from '../../image/girl.png'
import { FaGraduationCap, FaUserTie,FaBookOpen ,FaAward} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuBookText,LuSmartphone,LuPalette,} from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { PiUsersThreeFill } from "react-icons/pi";
import HomeImage from '../../image/home.png'
import Aliya from '../../image/aliya.png'
import Nora from '../../image/nora.png'
import Kiyara from '../../image/kiyara.png'
import Dipika from '../../image/dipika.png'


const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-[500px] bg-cover bg-center flex z-5"
                style={{ backgroundImage: `url(${HomeImage})` }}>
                <div className='pt-12 pl-24 w-1/2 '>
                    <div className='text-white p-2 bg-[#0B0B8F] w-54 rounded-2xl text-base'><span className='text-amber-400'>#1 </span>Online Learning Platfrom</div>
                    <h1 className='text-5xl text-white font-bold mt-5 leading-tight'>Learn.Grow.</h1>
                    <h1 className='text-5xl text-yellow-400 font-bold mt-1'>Achieve Your Dreams </h1>
                    <p className='mt-3 text-lg text-white'>Join thousands of learners and get access to expert <br />courses to start,switch, or speed up your career.</p>
                    <div className='flex gap-5'>
                        <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold'>Explore Course →</button>
                        <button className='px-4 py-2 rounded-xl mt-4 font-bold text-white border-2'>View All Course →</button>
                    </div>
                    <div className='mt-5  flex'>
                        <div className='h-16 w-16 bg-yellow-400 rounded-full'><img src={Aliya} alt='Miya' className='h-full w-full rounded-full'/></div>
                        <div className='h-16 w-16 bg-yellow-400 rounded-full relative right-4'><img src={Nora} alt='Miya' className='h-full w-full rounded-full'/></div>
                        <div className='h-16 w-16 bg-yellow-400 rounded-full relative right-8'><img src={Dipika} alt='Miya' className='h-full w-full rounded-full'/></div>
                        <div className='h-16 w-16 bg-yellow-400 rounded-full relative right-12'><img src={Kiyara} alt='Miya' className='h-full w-full rounded-full'/></div>
                        <div className='text-white'>
                        <p className=' font-bold text-lg'>10K+ Student Enrolled</p>
                        <p className=''>Start learning with experts today!</p>
                        </div>
                    </div>
                </div>
                <div className=' w-1/2 flex ml-20 items-end relative '>
                    <div className='h-[360px] w-[360px] rounded-full bg-amber-400  absolute left-20 bottom-16'></div>
                    <img src={Girl} alt='Girl' className='h-[480px] z-10 absolute -left-32  ' />
                    <div className='h-72 w-52 rounded-2xl bg-white z-10 absolute right-20 bottom-20 '>
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

                         <hr className='w-[80%] mx-auto border-blue-200 mt-8'></hr>

                        <div className='flex '>
                            <div className='bg-[#12A65A] p-2 rounded-full text-white h-10 w-10  ml-4 mt-5 justify-center items-center '><PiUsersThreeFill  size={24} /></div>
                            <div className='mt-5 ml-5'>
                                <span className='font-bold text-xl'>10K+</span>
                                <p className='text-sm mt-'>Happy Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className='w-[90%] mx-auto '>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] p-8 rounded-2xl relative bottom-12 bg-white z-10 '>
                <div className='flex gap-5'>
                    <div className='flex gap-5 w-1/4 items-center'>  
                        <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FaUserTie className=' font-bold text-3xl text-white' /></div>
                        <div className='flex-1'>
                            <p className='font-bold '>Expert Instructer</p>
                            <p>Learn from industry <br/> professionals</p>
                        </div>
                         <div className=" w-[1px] h-16 bg-[#63605B] mt-1 ml-auto"></div>
                        </div>

                         <div className='flex w-1/4 items-center'>  
                        <div className='h-10 w-10 flex justify-center items-center bg-rose-500 rounded-lg '><FaBookOpen className=' font-bold text-3xl text-white' /></div>
                        <div className='ml-5'>
                            <p className='font-bold '>Quality Content</p>
                            <p>Well-structer and<br/> up-to-date course</p>
                        </div>
                         <div className=" w-[1px] h-16 bg-[#63605B] mt-1 ml-auto"></div>
                        </div>

                         <div className='flex w-1/4 items-center'>  
                        <div className='h-10 w-10 flex justify-center items-center bg-emerald-500 rounded-lg '><RiComputerLine className=' font-bold text-3xl text-white' /></div>
                        <div className='ml-5'>
                            <p className='font-bold '>Flexible Learning</p>
                            <p>Learn anytime,<br/>anywhere</p>
                        </div>
                         <div className=" w-[1px] h-16 bg-[#63605B] mt-1  ml-auto"></div>
                        </div>

                         <div className='flex items-center'>  
                        <div className='h-10 w-10 flex justify-center items-center bg-orange-500 rounded-lg '><FaAward className=' font-bold text-3xl text-white' /></div>
                        <div className='ml-5'>
                            <p className='font-bold '>Certificate</p>
                            <p>Earn certificates and boots your career</p>
                        </div>
                        </div>
                    </div>
                    </div>
                         <p className='text-purple-800 font-bold '>TOP CATEGORIES </p>
                          <div className='flex justify-between items-center'>
                         <h1 className='text-3xl  font-bold'>Explore Our Popular Course</h1>
                         <span className='text-purple-800 font-bold  ml-auto'onClick={()=>navigate('/course')}>View All Course →</span>
                         </div>

                          <div className='flex ml-12 mt-5 gap-12'>
                                 <div className='bg-[#5D45FD] w-80  rounded-2xl p-5 text-white'>
                         
                                   <div className='flex justify-between items-center'>
                                     <div className='h-10 w-10 flex justify-center items-center bg-[#7462FF] rounded-lg '><HiCodeBracket className=' font-bold text-3xl' /></div>
                                     <span className='text-sm font-bold hover:underline 'onClick={()=>navigate('/course/webDevelopement')}>View Details</span>
                                   </div>
                                   <div className='px-3 py-1 inline-block  mt-5 rounded-full bg-[#7462FF] font-bold text-sm '>Bestseller</div>
                                   <h1 className=' font-bold mt-4 text-lg '>Web Development</h1>
                                   <p className=' mt-1'>HTML,CSS,JS & React - build  websites from scratch.</p>
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
                          
                    </div>
        </>
    )
}

export default Home
