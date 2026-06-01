import React from 'react'
import Logo from '../../image/logo.png'
import { LayoutDashboard,Box,Users ,FileCheck,CreditCard,Mail,Star,ChartNoAxesColumnIncreasing,Settings,LogOut  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate()
  return (
   <>
   <div className='bg-[#0b0a6b] text-white  h-screen px-5 '> 
    <img src={Logo} alt="Logo" className='w-40 '/>
    <ul className=' flex justify-center flex-col '>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/dashbord')} > <LayoutDashboard size={18} className='mt-1'/>Dashboard</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/courses')} > <Box  size={18} className='mt-1'/>Courses</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/students')} > <Users  size={18} className='mt-1'/>Students</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/enrollment')} > <FileCheck size={18} className='mt-1'/>Enrollments</li>
       <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/payment')} > <CreditCard  size={18} className='mt-1'/>Payments</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/message')} > <Mail  size={18} className='mt-1'/>Messages</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/successstories')} > <Star  size={18} className='mt-1'/>success Stories</li>
      <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/analytic')} > <ChartNoAxesColumnIncreasing size={18} className='mt-1'/>Analytics</li>
       <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/admin/setting')} > <Settings   size={18} className='mt-1'/>Setting</li>
        <li className='flex gap-3  w-40 hover:bg-indigo-600 p-3 rounded-2xl'onClick={()=>navigate('/login')} > <LogOut  size={18} className='mt-1'/>Logout</li>
    </ul>
    <div className='bg-[#1310b4] p-3 rounded-2xl'>
      <h1>Upgrade Your Teaching Skills</h1>
      <p className='text-sm mt-1'>Access advanced courses and grow your career.</p>
       <button className='px-4 py-2 bg-yellow-400 rounded-xl mt-4'>Explore Course →</button>
    </div>
   </div>
   </>
  )
}

export default Sidebar
