import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineMail, } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMale } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate();
    return (
        <>
        <div style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}>
<div className='min-h-screen relative flex justify-center' >
            <div className='w-[70%] bg-[#1e1e2e]  mx-auto -8 text-white rounded-3xl flex absolute top-8 '>
                <div className='pl-12  w-full p-5'>
                    <h1 className='font-bold text-2xl pt-4'>Smart Student</h1>
                    <h1 className='pt-4 text-xl font-bold'>Create  account</h1>
                    <p className='pt-1 text-[#d4c9b6]'>Satrt your journey with us today</p>
                    <div className='pt-6 flex gap-6'>
                        <div className='relative'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-[#7c3aed] transform text-lg'><FaRegUser /></span>
                            <input
                                type='text'
                                placeholder='First Name'
                                className='border-2 border-White rounded-xl p-2 pl-12' />
                        </div>

                        <div className='relative'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-[#7c3aed] text-lg'><FaRegUser /></span>
                            <input
                                type='text'
                                placeholder='Last Name'
                                className='border-2 border-White rounded-xl p-2 pl-12' />
                        </div>
                    </div>

                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-12 -translate-y-1/2 text-[#7c3aed] '><HiOutlineMail /></span>
                        <input
                            type='text'
                            placeholder='Email'
                            className='border-2 border-White rounded-xl p-2 pl-12 mt-6 w-128' />
                    </div>

                    <div className='pt-6 flex gap-6'>
                        <div className='relative'>
                            <span className='absolute left-4  text-lg top-1/2 -translate-y-1/2 text-[#7c3aed] transform'><LuPhone /></span>
                            <input
                                type='number'
                                placeholder='Mobile Number'
                                className='border-2 border-White rounded-xl p-2 pl-12' />
                        </div>

                        <div className='relative'>
                            <span className='absolute left-4 text-lg top-1/2 transform -translate-y-1/2 text-[#7c3aed]'>
                                <RiLockPasswordFill />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                className='border-2 border-White rounded-xl p-2 pl-12' />
                            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-[#7c3aed] text-lg '
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}</span>

                        </div>

                    </div>
                    <div className='pt-6 flex gap-6'>
                        <div className='relative'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-[#7c3aed] transform  text-lg'><FaMale /></span>
                            <select className='border-2 border-White rounded-xl p-2 pl-12 w-60 text-[#94a3b8] p'>
                                <option value=''>Select Option</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>

                        <div className='relative'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-[#7c3aed] text-lg'><MdOutlineDateRange /></span>
                            <input
                                type='date'
                                placeholder='Last Name'
                                className='border-2 border-White rounded-xl p-2 pl-12 w-60 text-[#94a3b8] ' />
                        </div>
                    </div>
                    <div className='mt-6 relative'>
                        <span className='absolute left-4 top-5 text-xl -translate-y-1/2 text-[#7c3aed] transform '><MdOutlineLocationOn /></span>
                        <textarea
                            placeholder='Address'
                            rows='3'
                            className='border-2 border-White rounded-xl p-2 pl-12 w-128'
                        />
                    </div>
                    <button className='w-128 p-4 mt-8 bg-[#7c3aed] text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
                        Sign In →
                    </button>
                    <p className='mt-4 text-[#63605B] mx-auto ml-20'>Already have an account?<a className='text-[#7c3aed]' onClick={()=>navigate('/')}>Log in </a></p>

                </div>
                <div className='bg-[#7c3aed]  w-1/2 relative'>
                    <h1 className='text-2xl font-semibold mt-20 ml-16'>Why join us?</h1>
                    <div className=' ml-16'>
                        <div className='flex gap-2 mt-5'>
                            <GoArrowRight className='text-white text-xl mt-1 shrink-0' />
                            <span className='text-white text-base'>Manages Students, Courses & Batches easily</span>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <GoArrowRight className='text-white text-xl mt-1 shrink-0' />
                            <span className='text-white text-base'>Trace progress in real time</span>
                        </div>

                        <div className='flex gap-2 mt-5'>
                            <GoArrowRight className='text-white text-xl mt-1 shrink-0' />
                            <span className='text-white text-base'>secure  and intuitive platfrom</span>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <GoArrowRight className='text-white text-xl mt-1 shrink-0' />
                            <span className='text-white text-base'>24/7 support available</span>
                        </div>
                        <div className='absolute bottom-10 text-[#94a3b8]'>
                            <p className=''>© 2026 OmMurhe</p>
                               <p> Privacy Policy</p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
            </div>



        </>
    )
}

export default Signup
