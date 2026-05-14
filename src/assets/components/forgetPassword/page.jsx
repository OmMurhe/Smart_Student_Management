import React from 'react'
import { MdLockOutline } from "react-icons/md";
import { HiOutlineMail, } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Forget = () => {
    const navigate=useNavigate();
    return (
        <>

            <div className='w-screen h-screen flex justify-center items-center' style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                <div className='w-[40%]  bg-white p-10 rounded-4xl'>
                    <div className='w-15 h-15 rounded-full bg-[#ede9fe] flex justify-center items-center relative'>
                        <span className='text-3xl text-[#7c3aed] absolute  top-1/2 -translate-y-1/2'> <MdLockOutline /></span>
                    </div>
                    <h1 className='text-2xl font-bold mt-5 text-[#1e1e2e]'>Forget Passward?</h1>
                    <p className='pt-1 text-[#94a3b8]'>Enter your email address and we'll send you an OTP to reset your password.</p>

                    <div className='relative'>
                        <span className='absolute left-4 mt-[26px]  text-xl  pt-12 -translate-y-1/2 text-[#7c3aed] '><HiOutlineMail /></span>
                        <input
                            type='text'
                            placeholder='Email'
                            className='border-2 border-white rounded-xl p-3 pl-12 mt-6 w-128 bg-[#1e1e2e]  text-white' />
                    </div>

                    <button className='w-128 p-4 mt-4 bg-[#7c3aed] text-white text-base font-bold rounded-xl flex items-center justify-center gap-2'>
                        Sign OTP →
                    </button>
                     <p className='mt-4 text-[#94a3b8] ml-32'>Already have an account?<a className='text-[#7c3aed]' onClick={()=>navigate('/')}>Log in </a></p>
                </div>
            </div>


        </>
    )
}

export default Forget
