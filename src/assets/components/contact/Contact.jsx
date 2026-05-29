import { useState } from 'react';
import ContactBg from '../../image/contactBg.png'
import ContactLogo from '../../image/contactLogo.png'
import { FaPhoneAlt} from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";

const Contact = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);
  return (
    <>
      <div className="w-full h-[400px] bg-cover flex"
        style={{ backgroundImage: `url(${ContactBg})` }}>

        <div className='pl-24 w-1/2'>
          <div className='flex text-white text-sm gap-4 font-semibold mt-5 '>
            <a>Home</a>
            <span className='mt-1'><IoIosArrowForward /></span>
            <a>Contact</a>
          </div>
          <div className='text-white flex justify-center items-center py-2 bg-[#0B0B8F] w-28 rounded-2xl text-base mt-5'>Contact Us</div>
          <h1 className='text-5xl text-white font-bold mt-5 leading-tight'>Get In Touch</h1>
          <h1 className='text-4xl text-yellow-400 font-bold mt-1'>We'd love to hear from you.</h1>
          <p className='mt-3 text-lg text-white'>Have questions about courses,admissions,or<br />career guidance?Contact out team anytime.<br />We are help you succeed.</p>
          <div className='flex gap-5'>
            <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold' onClick={() => navigate('/course')}>Contact Now →</button>
            <button className='px-4 py-2 rounded-xl mt-4 font-bold text-white border-2' onClick={() => navigate('/course')}>View Course →</button>
          </div>
        </div>
        <div className=' w-1/2 flex ml-20 items-end relative '>
          <img src={ContactLogo} alt='ContactLogo' className='h-[400px]' />
        </div>
      </div>

      <div className=' mx-20 mt-8 flex gap-8'>
        <div className='flex gap-5  shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 pl-5 py-5' >
          <div className='h-12 w-12 flex justify-center items-center bg-[#0B0B8F]  rounded-full text-white '><FiMapPin size={24} /></div>
          <div>
            <p className='font-bold text-xl'>Address</p>
            <p className='text-base mt-3' >It.OMMURHE Education,<br />Matoshri Colony Pune,<br />Maharashtra 411001,India.</p>
          </div>
        </div>

        <div className='flex gap-5  shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 pl-5 py-5' >
          <div className='h-12 w-12 flex justify-center items-center bg-[#0B0B8F]  rounded-full text-white '><FaPhoneAlt size={24} /></div>
          <div>
            <p className='font-bold text-xl'>Phone</p>
            <p className='text-base mt-3' >+91 98765 12345</p>
            <p className='text-base' >+91 54321 56789</p>
          </div>
        </div>

        <div className='flex gap-5  shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 pl-5 py-5' >
          <div className='h-12 w-12 flex justify-center items-center bg-[#0B0B8F]  rounded-full text-white '><MdOutlineAttachEmail size={28} /></div>
          <div>
            <p className='font-bold text-xl'>Email</p>
            <p className='text-base mt-3' >ommurhe@gmail.com</p>
            <p className='text-base' >gopu@gmail.com</p>
          </div>
        </div>

        <div className='flex gap-5  shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 pl-5 py-5' >
          <div className='h-12 w-12 flex justify-center items-center bg-[#0B0B8F]  rounded-full text-white '><FiMapPin size={28} /></div>
          <div>
            <p className='font-bold text-xl'>Working Hours</p>
            <p className='text-base mt-3' >Monday - Saturday</p>
            <p className='text-base' >9:00 Am-7:00 PM</p>
            <p className='text-base ' >Sunday:Closed</p>
          </div>
        </div>
      </div>

      <div className='mx-20 gap-8 mt-8 flex'>
        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)] w-1/2  p-8 rounded-2xl'>
          <p className='font-bold text-3xl'>Send US a Message</p>
          <div className=" w-12 h-1 bg-[#0B0B8F] mt-1 "></div>
          <div className='flex gap-6 mt-8'>
            <input
              type='text'
              placeholder='First Name'
              className='border-2 border-White rounded-xl p-2 w-1/2' />

            <input
              type='email'
              placeholder='Email Address'
              className='border-2 border-White rounded-xl p-2 w-1/2' />
          </div>

          <div className='flex gap-6 mt-8'>
            <input
              type='number'
              placeholder='Phone Number'
              className='border-2 border-White rounded-xl p-2 w-1/2' />

            <input
              type='text'
              placeholder='Subject'
              className='border-2 border-White rounded-xl p-2 w-1/2' />
          </div>
          <textarea
            placeholder='Address'
            rows='3'
            className='border-2 border-White rounded-xl p-2 mt-8 w-full'
          />
          <button className='px-8 py-4 bg-[#0B0B8F] rounded-xl mt-4 font-bold text-white flex gap-2' onClick={() => navigate('/course')}><span className='mt-'><LiaTelegramPlane size={24} /></span>Send Message</button>
        </div>
        <div className='w-1/2 rounded-2xl'><iframe className='w-full h-full  rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.7411689379715!2d73.80874807496204!3d18.485072782601623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9ec7efff6d%3A0xa6b851f01122aad2!2sD-Mart%2C%20Karve%20Nagar!5e1!3m2!1sen!2sin!4v1779391535349!5m2!1sen!2sin"></iframe>
        </div>
      </div>
      <div className='mx-20'>
        <p className='text-[#0B0B8F] bg-[#c4c4dc] px-5 py-1 inline-block rounded-2xl mt-8 font-bold'>FAQ</p>
        <p className='font-bold text-3xl mt-3'>Frequently Asked Questions</p>
        <div className=" w-12 h-1 bg-[#0B0B8F] mt-1 "></div>
        <div className='mt-5 flex gap-5'>
          <div className='w-1/2 flex flex-col gap-3'>
            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer1(!showAnswer1)}>How can enroll in a course ?<span className='mt-1 text-[#0B0B8F]'>{showAnswer1 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer1 && (<p className='mt-2'>Simply click on the "Explore Courses" button, select your desired course, and click "Enroll Now" to complete the registration process.</p>)}
            </div>

            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer2(!showAnswer2)}>What payment methods do you accept?<span className='mt-1 text-[#0B0B8F]'>{showAnswer2 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer2 && (<p className='mt-2'>We accept all major payment modes including UPI (Google Pay, PhonePe), Credit/Debit Cards, Net Banking, and easy EMI options.</p>)}
            </div>

            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer3(!showAnswer3)}>Will I get a certificate after completing the course?<span className='mt-1 text-[#0B0B8F]'>{showAnswer3 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer3 && (<p className='mt-2'>Yes, absolutely! You will receive an industry-recognized, verifiable completion certificate once you clear your final project and assignments.</p>)}
            </div>
          </div>

          <div className='w-1/2 flex flex-col gap-3'>
            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer4(!showAnswer4)}>Do you provide placement assistance?<span className='mt-1 text-[#0B0B8F]'>{showAnswer4 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer4 && (<p className='mt-2'>es, we do. We provide dedicated placement support, which includes resume building, mock interviews, and direct placement drives with our hiring partners.</p>)}
            </div>

            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer5(!showAnswer5)}>Can I access the courses on mobile?<span className='mt-1 text-[#0B0B8F]'>{showAnswer5 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer5 && (<p className='mt-2'>Yes. Our platform is fully responsive. You can seamlessly access all course videos, materials, and dashboard features on any mobile or tablet browser.</p>)}
            </div>

            <div className='bg-[#c4c4dc] py-3 px-5 rounded-2xl'>
              <p className='flex justify-between' onClick={() => setShowAnswer6(!showAnswer6)}>What if I face any issues during the course?<span className='mt-1 text-[#0B0B8F]'>{showAnswer6 ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}</span></p>
              {showAnswer6 && (<p className='mt-2'>You will get 24/7 community support and dedicated mentor doubt-solving sessions to clear any technical or platform-related issues instantly.</p>)}
            </div>
          </div>
        </div>
      </div>

      
                   <div className='bg-gradient-to-r from-[#0b0a6b] to-[#190e94] flex items-center p-5 rounded-2xl mt-10 relative mx-20 px-20'>
                                <div className='bg-[#190e94] p-2 rounded-full text-yellow-400 h-20 w-20 flex justify-center items-center '><RiMessage2Line  size={40} /></div>
                                <div className='ml-8 text-white'>
                                <p className='font-bold text-2xl'>Still have Question ?</p>
                                <p className='mt-2 text-yellow-400 font-bold text-2xl'>Our team is here to help you!</p>
                                </div>
                                 <button className='px-4 py-2 border-1 border-white text-white rounded-xl font-bold absolute right-10' onClick={()=>navigate ('/course')}>Talk to Our Advisor  →</button>
                            </div>
    </>
  )
}

export default Contact
