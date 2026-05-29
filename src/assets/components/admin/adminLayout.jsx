import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'

const AdminLayout = ({children}) => {
  return (
    <>
      <div className='flex bg-[#F8FAFC]' >
        <div className='fixed left-0 top-0 h-screen w-[240px] z-50'>
          <Sidebar />
        </div>
        <div className='ml-[240px] w-full'>
          <div className='fixed top-0 left-[240px] right-0 h-[80px] bg-white z-40 '>
            <Navbar />
          </div>
            <div>
          {children}
        </div>
          </div>
          </div>
    </>
  )
}

export default AdminLayout
