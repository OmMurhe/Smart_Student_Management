import React from 'react'
import FooterBg from '../../image/footerBg.png'
import Logo from '../../image/logo.png'
import { FaGraduationCap, FaBookOpen, FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter, FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { RiShieldCheckLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { HiOutlineMail, } from "react-icons/hi";
import { PiHeadsetBold } from "react-icons/pi";
import { LuRefreshCw } from "react-icons/lu";

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full h-full bg-cover bg-center flex z-5 flex-col mt-10  "
                style={{ backgroundImage: `url(${FooterBg})` }}>
                <div className='p-8 text-white flex gap-20'>
                    <div className='w-80'>
                        <img src={Logo} alt='Logo' className='h-16' />
                        <p>Join thousands of learners and get access to expert
                            courses to start,switch, or speed up your career.</p>


                        <div className='flex gap-5  items-center mt-5'>
                            <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FaGraduationCap className=' font-bold text-3xl text-white' /></div>
                            <div className=''>
                                <p className='font-bold '>100+</p>
                                <p>Expert Instructors</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 mt-5'>
                            <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FaBookOpen className=' font-bold text-3xl text-white' /></div>
                            <div className=''>
                                <p className='font-bold '>20+</p>
                                <p>Premium Course</p>
                            </div>
                        </div>

                        <div className='flex items-center mt-5'>
                            <div className='h-10 w-10 flex justify-center items-center bg-indigo-600 rounded-lg '><FiUsers className=' font-bold text-3xl text-white' /></div>
                            <div className='ml-5'>
                                <p className='font-bold '>500+</p>
                                <p>Happy Student</p>
                            </div>
                        </div>
                        <div className='mt-5  flex gap-3'>
                            <div className='h-12 w-12 bg-indigo-600  rounded-full flex justify-center items-center'><FaFacebookF size={20} /></div>
                            <div className='h-12 w-12 bg-indigo-600  rounded-full flex justify-center items-center'><FaLinkedinIn size={20} /></div>
                            <div className='h-12 w-12 bg-indigo-600  rounded-full flex justify-center items-center'><BsInstagram size={20} /></div>
                            <div className='h-12 w-12 bg-indigo-600  rounded-full flex justify-center items-center'><FaYoutube size={24} /></div>
                            <div className='h-12 w-12 bg-indigo-600  rounded-full flex justify-center items-center'><FaTwitter size={24} /></div>
                            <div className='text-white'>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-yellow-400 text-xl mt-5'>Quick Links</h1>
                        <ul className='text-white flex flex-col gap-6 mt-5'>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/')}><IoIosArrowForward className='mt-1 ' />Home </li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/course')} ><IoIosArrowForward className='mt-1 ' />courses</li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/about')}><IoIosArrowForward className='mt-1 ' />Abous Us</li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/successStories')}><IoIosArrowForward className='mt-1 ' />Success Stories</li>
                            <li className='flex gap-2  hover:text-yellow-400' onClick={() => navigate('/contact')}><IoIosArrowForward className='mt-1 ' />Contact Us</li>
                            <li className='flex gap-2  hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Blog </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-yellow-400 text-xl mt-5'>Top Course</h1>
                        <ul className='text-white flex flex-col gap-6 mt-5'>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/course/appDevelopement')}><IoIosArrowForward className='mt-1 ' />App Developement</li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/course/cloudComputing')} ><IoIosArrowForward className='mt-1 ' />Cloud Computing</li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/course/cyberSecurity')}><IoIosArrowForward className='mt-1 ' />Cyber Security</li>
                            <li className='flex gap-2 hover:text-yellow-400' onClick={() => navigate('/course/dataScience')}><IoIosArrowForward className='mt-1 ' />Data Science</li>
                            <li className='flex gap-2  hover:text-yellow-400' onClick={() => navigate('/course/digitalMarketing')}><IoIosArrowForward className='mt-1 ' />Digital Marketing</li>
                            <li className='flex gap-2  hover:text-yellow-400' onClick={() => navigate('/course/uiUxDesign')}><IoIosArrowForward className='mt-1 ' />UI/UX Design</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-yellow-400 text-xl mt-5'>Support</h1>
                        <ul className='text-white flex flex-col gap-6 mt-5'>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Help Conter</li>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Placement Assistance</li>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Career Guidance</li>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Terms & Conditions</li>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Privacy Policy</li>
                            <li className='flex gap-2 hover:text-yellow-400'><IoIosArrowForward className='mt-1 ' />Refund Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-yellow-400 text-xl mt-5'>Stay Updated</h1>
                        <p className='mt-5'>Subscribe to get the latest updates<br /> on new courses and offers.</p>
                        <div className='relative'>
                            <span className='absolute left-4 mt-5  text-xl  pt-12 -translate-y-1/2 text-white '><HiOutlineMail /></span>
                            <input
                                type='text'
                                placeholder='Email'
                                className='border-1 border-White rounded-xl p-2 pl-12 mt-6 bg-[#4c35d6]' />
                        </div>
                        <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold text-black'>Subscribe Now →</button>

                        <div className='flex items-center mt-5 border-1 border-dashed px-5 py-5'>
                            <div className='h-16 w-16 flex justify-center items-center bg-indigo-600 rounded-lg '><PiHeadsetBold className=' font-bold text-3xl text-white' /></div>
                            <div className='ml-5'>
                                <p className='font-bold '>Need Help?</p>
                                <p className='text-sm'>Our Support team is here for you.</p>
                                <p className='text-yellow-400'>+91 1234567890</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='border-[#4e3ea7] mt-5'></hr>
                <div className='py-8 flex justify-around'>
                    <div className='text-white   flex gap-5'><RiShieldCheckLine size={28} />LifeTime Access</div>
                    <div className='text-white  flex gap-5'><LuRefreshCw size={28} />30-Days Money BAck</div>
                    <div className='text-white   flex gap-5'><FaAward size={28} />Certificate Of Complition</div>
                    <div className='text-white  flex gap-5'><PiHeadsetBold size={28} />24/7 Support</div>
                </div >
                 <hr className='border-[#4e3ea7]'></hr>
                 <p className='text-white text-center p-5' >© 2024 IT. OMMURHE. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
