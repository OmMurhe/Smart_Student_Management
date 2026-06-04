import React from 'react'
import Logo from '../../image/logo.png'
import { NavLink } from 'react-router-dom'

const header = ({ openInquiry }) => {
  return (
    <>
      <div className='h-18 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] w-full flex  items-center'>
        <img src={Logo} alt='Logo' className='h-17 pl-12' />
        <ul className='flex gap-8 font-bold text-white ml-[36%]'>
          <NavLink
            to="/">
            <li className='relative group cursor-pointer hover:text-[#0f172a]'><a>Home</a> <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full rounded-full'></span></li>
          </NavLink>

          <NavLink
            to="/course">
            <li className='relative group cursor-pointer hover:text-[#0f172a]'><a>Course</a> <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full rounded-full'></span></li>
          </NavLink>

          <NavLink
            to="/about">
            <li className='relative group cursor-pointer hover:text-[#0f172a]'><a>About</a> <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full rounded-full'></span></li>
          </NavLink>

          <NavLink
            to="/contact">
            <li className='relative group cursor-pointer hover:text-[#0f172a]'><a>Contect</a> <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full rounded-full'></span></li>
          </NavLink>
          <NavLink
            to="/successStories">
            <li className='relative group cursor-pointer hover:text-[#0f172a]'><a>Success Stories</a> <span className='absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-300 transition-all duration-100 group-hover:w-full rounded-full'></span>
            </li>
          </NavLink>
        </ul>
         <button className='bg-[#0f172a] px-4 text-white py-2 rounded-4xl ml-8 font-bold hover:text-[#8b5cf6]'  onClick={openInquiry}>Inquiry</button>
        <NavLink
          to="/login">
          <button className='bg-[#0f172a] px-4 text-white py-2 rounded-4xl ml-8 font-bold hover:text-[#8b5cf6]'>Login</button>
        </NavLink>
      </div>
    </>
  )
}

export default header
