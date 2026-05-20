import React from 'react'
import Success from '../../image/success.png'
import { FiUsers } from "react-icons/fi";
import { FaRegIdCard,FaRocket} from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Student1 from '../../image/student1.png'
import Student2 from '../../image/student2.png'
import Student3 from '../../image/student3.png'
import Student4 from '../../image/student4.png'
import Student5 from '../../image/student5.png'
import Student6 from '../../image/student6.png'
import Tcs from '../../image/tcs.png'
import Infoysys from '../../image/infosys.png'
import Wipro from '../../image/wipro.png'
import Accenture from '../../image/accenture.png'
import Amazon from '../../image/amazon.png'
import Google from '../../image/google.png'
import { useNavigate } from 'react-router-dom';




const SuccessStrories = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="w-full h-[330px] bg-cover bg-center flex z-5 "
        style={{ backgroundImage: `url(${Success})` }}>
        <div className='pt-12 pl-24 text-white w-1/2'>
          <div className='w-30 p-2 bg-[#0B0B8F]  rounded-2xl text-base text-amber-400'>Our Achievers</div>
          <h1 className='text-5xl text-white font-bold mt-5'>Success<span className=' text-yellow-400'> Stories</span></h1>
          <p className='mt-3 text-lg text-white'>Real stories from real student who learned,grew,<br />and achieved their dreams with us.</p>

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
              <div className=" w-[1px] h-10 bg-[#63605B] mt-1 ml-auto"></div>
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
        <div className='w-1/2 flex justify-center items-end mb-6'>
          <div className='text-white w-86 h-36 pl-10 py-5 bg-gradient-to-br from-[#4c35d6] to-[#2a1691]  rounded-xl '>"From learning a new skills to<br /> leading my dream job - this journey<br /> has been life-changing".
            <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
        </div>
      </div>

      {/*card 1*/}
      <div className='mx-20 mt-5'>
        <p className='text-2xl font-bold'>Our Student<span className='text-yellow-400'> Got Placed In</span></p>
        <div className='mt-5 flex gap-5'>
        <div className='w-112 rounded-2xl  h-72 shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex'>
          <img src={Student1} alt="Student1" className='w-1/2'/>
          <div className='px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Om Murhe</p>
         <p className='font-semibold'>Java Fulll Stack Developer</p>
         <img src={Tcs} alt='Tcs' className='h-10 bg-yellow-200 mt-5'/>
         <p className='mt-5'>"The course content and mentorship helped me crack my dream job."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
          </div>

 {/*card 2*/}
           <div className='w-112 rounded-2xl  shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex h-72'>
          <img src={Student2} alt="Student2" className='w-1/2'/>
          <div className=' px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Gaurav Khade</p>
         <p className='font-semibold'>Web Developer</p>
         <img src={Infoysys} alt='Infoysys' className='h-10 mt-5'/>
         <p className='mt-5'>"Great learning experience and amazing support from the mentors."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
          </div>

 {/*card 3*/}
           <div className='w-112 rounded-2xl  shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex h-72'>
          <img src={Student3} alt="Student3" className='w-1/2'/>
          <div className='px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Manoj Rathod</p>
         <p className='font-semibold'>Frentend Developer</p>
         <img src={Wipro} alt='Wipro' className='bg-yellow-400 h-10  mt-5'/>
         <p className='mt-5'>"The projects and real-time training boosted my confidence."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
          </div>
        </div>

        {/*card 4*/}
        <div className='flex gap-4 mt-5'>
           <div className='w-112 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex h-72'>
          <img src={Student4} alt="Student4" className='w-1/2'/>
          <div className=' px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Ganesh Bhise</p>
         <p className='font-semibold'>Digital Marketer</p>
         <img src={Accenture} alt='Accenture' className='h-10 mt-5'/>
         <p className='mt-5'>"I loved the hands-on projects and practical approach."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
          </div>

 {/*card 5*/}
 
           <div className='w-112 rounded-2xl  shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex h-72'>
          <img src={Student5} alt="Student5" className='w-1/2'/>
          <div className='px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Adity Wankhade</p>
         <p className='font-semibold'>Frentend Developer</p>
         <img src={Amazon} alt='Amazon' className=' h-10  mt-5'/>
         <p className='mt-5'>"This platform gave me the right skills and career guidance."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
</div>
{/*card 6*/}
<div className='w-112 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.20)] flex h-72'>
          <img src={Student6} alt="Student6" className='w-1/2'/>
          <div className=' px-8 py-4 flex flex-col '>
         <p className='bg-indigo-600  text-white font-bold text-sm rounded-r-2xl px-2 w-28'>I Got Placed</p>
         <p className='font-semibold text-lg'>Neha Wagh</p>
         <p className='font-semibold'>Software Engineer</p>
         <img src={Google} alt='Google' className='h-10 mt-5'/>
         <p className='mt-5'>"From basics to advanced everything was well structured."</p>
          <div className='flex gap-2 mt-2'>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
              <span> <FaStar className=' text-yellow-400 text-lg' /></span>
            </div>
          </div>
          </div>
          </div>

          <div className='bg-gradient-to-r from-[#0b0a6b] to-[#190e94] flex p-5 rounded-2xl mt-5 relative'>
              <div className='bg-[#190e94] p-2 rounded-full text-white h-16 w-16 flex justify-center items-center '><FaRocket size={32} /></div>
              <div className='ml-5 text-white'>
              <p className='font-bold'>Be the Next Success story</p>
              <p>Start your learning journey today and achieve your dreams with us.</p>
              </div>
               <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4 font-bold absolute right-10' onClick={()=>navigate ('/course')}>Explore Course →</button>
          </div>
      </div>

    </>
  )
}

export default SuccessStrories;
