import React from 'react'
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineMail, } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMale } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { LiaTelegramPlane } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const InquiryFrom = () => {
    const [showInquiryPopup, setShowInquiryPopup] = useState(false);

    useEffect(() => {
  const timer = setTimeout(() => {
    setShowInquiryPopup(true);
  }, 5000);

  return () => clearTimeout(timer);
}, []);
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[40%] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] '>
                    <div className='bg-gradient-to-r rounded-t-2xl from-[#2d1db8] to-[#6c3cff] flex justify-center gap-3 py-5 text-white relative'>
                        <span className='fond-bold '><BiMessageRoundedDetail size={64} /></span>
                        <div>
                            <h1 className='font-bold text-2xl'>Get Free Counseling</h1>
                            <p className='text-sm'>Fill out the from and our expert will <br />contact you soon!</p>
                        </div>
                        <span className=' justify-end'><RxCross2 size={24} /></span>
                    </div>
                    <div className='px-8 py-4'>
                        <h1 className='font-bold'>Name</h1>
                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><FaRegUser /></span>
                        <input
                            type='text'
                            placeholder='Enter your full name'
                            className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full' />
                    </div>

                      <h1 className='font-bold mt-4'>Email</h1>
                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-3 -translate-y-1/2 text-gray-500'><MdOutlineEmail /></span>
                        <input
                            type='text'
                            placeholder='Enter your Email'
                            className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-1 w-full' />
                    </div>

                    <h1 className='font-bold mt-4'>Mobile</h1>
                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><LuPhone /></span>
                        <input
                            type='text'
                            placeholder='Enter your Email'
                            className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full' />
                    </div>

                     <h1 className='font-bold mt-4'>Interested Course</h1>
                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><FaGraduationCap /></span>
                        <select className='border-2 border-gray-300 rounded-xl p-2 pl-12  mt-2  w-full'>
                            <option>Select a course</option>
                             <option value='Web Development'>Web Development</option>
                            <option value='App Developement'>App Developement</option>
                            <option value='Data Science'>Data Science</option>
                            <option value='UI/UX Design'>UI/UX Design</option>
                            <option value='Digital Marketing'>Digital Marketing</option>
                            <option value='Cyber Security'>Cyber Security</option>
                            <option value='Artificial Intelligence'>Artificial Intelligence</option>
                            <option value='Cloud Computing'>Cloud Computing</option>
                        </select>
                    </div>

                     <h1 className='font-bold mt-4'>Message</h1>
                    <div className='relative'>
                        <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><BiMessageDetail /></span>
                         <textarea
                            placeholder='Type your message here...'
                            rows='3'
                            className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full'
                        />
                    </div>
                    <button className=' py-3 bg-gradient-to-r rounded-t-2xl from-[#2d1db8] to-[#6c3cff] rounded-xl mt-3 font-bold text-white flex justify-center gap-2 w-full'>Submit Inquiry<span className='mt-'><LiaTelegramPlane size={24} /></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InquiryFrom
