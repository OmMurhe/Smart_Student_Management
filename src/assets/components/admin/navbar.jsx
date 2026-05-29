import React from 'react'
import { Search,Bell,Moon,UserRoundSearch,ChevronDown  } from 'lucide-react';
import Admin from '../../image/teacher1.png'

const Navbar = () => {
  return (
   <>
   <div className='flex justify-between p-5  shadow-[0_4px_20px_rgba(0,0,0,0.20)]'>
    <div className='flex'>
    <span className='relative left-10 top-3 text-[#897b7b]'><Search size={20}/></span>
 <input 
  type='search'
  placeholder='Search anything...'
  className='border-2 border-[#e6dada] rounded-xl pl-16 w-72  h-10'/>
  <span className='relative top-3 right-8 text-[#897b7b]'><UserRoundSearch size={20}/></span>
  </div>

  <div className='flex items-center gap-10'>
  <span><Bell /></span>
  <span><Moon /></span>
   <img src={Admin} alt="Feedback3" className='h-12 w-12 object-cover object-top  rounded-full' />
   <div>
   <p className='font-bold '>Om Murhe</p>
   <p>Super Admin</p>
  </div> 
  <spam><ChevronDown/></spam>
  </div>
  </div>


   </>
  )
}

export default Navbar;
