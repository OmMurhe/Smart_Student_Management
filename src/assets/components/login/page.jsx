import React, { useState } from 'react'
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  return (
    <>
      <div className='w-full flex'>
       
<div className='w-1/2 h-screen relative flex flex-col justify-center p-10 overflow-hidden bg-[#7c3aed]'>
  
  
  
  <div className='absolute -top-20 -right-20 w-72 h-72 bg-[#9776d0] rounded-full opacity-80'></div>
  
 
  <div className='absolute -bottom-16 -left-16 w-56 h-56 bg-[#8853e2] rounded-full opacity-80'></div>
  
 
  <div className='absolute -bottom-10 left-32 w-40 h-40 bg-[#8853e2] rounded-full opacity-60'></div>

 
  <h1 className='text-white font-extrabold text-5xl z-10'>Smart Student</h1>
<h2 className='text-blue-200 font-bold text-2xl mt-2 z-10'>Management System</h2>
<p className='text-blue-100 text-xl mt-4 z-10 leading-relaxed'>
  Effortlessly manage students, courses, and batches — all in one place. 
  Track progress, streamline enrollment, and empower your institution 
  with a smarter way to learn.
</p>
 

</div>
        <div className='mt-36 ml-40'>
          <h1 className='font-extrabold text-4xl'>Sign in</h1>
          <p className='text-[#63605B] text-xl pt-2'>Welcome back! Please enter your details.</p>

          <div className='relative mt-8'>
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-950'>
              <FaUser />
            </span>
            <input
              type='text'
              placeholder='Enter Your Username'
              className='border-2 pl-12 p-3 w-112.5 border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-base'
            />
          </div>

          <div className='relative mt-8'>
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-950'>
              <RiLockPasswordFill />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter Your Password'
              className='border-2 pl-12 pr-12 p-3 w-112.5 border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-base'
            />
            <span
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-950 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className='text-sky-600 mt-4 text-end font-bold text-base' onClick={()=>navigate('/forgetPassward')}>Forget Password?</p>
         <button className='w-112.5 p-4 mt-8 bg-[#1a1f36] text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
  Sign In →
</button>
<p className='mt-8 text-[#63605B] mx-auto ml-20'>Don't have an account?<a className='text-sky-600' onClick={()=>navigate('/signup')}>Create Account</a></p>
        </div>
      </div>
    </>
  )
}

export default Login;