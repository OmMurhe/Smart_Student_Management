
import { IoIosArrowForward } from "react-icons/io";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { HiMiniUsers } from "react-icons/hi2";
import { RiUserAddFill } from "react-icons/ri";
import { FaUserXmark, FaUserCheck, FaArrowDown } from "react-icons/fa6";
import { FaArrowUp, FaFileAlt, FaRupeeSign } from "react-icons/fa";
import { CiSearch, CiFilter } from "react-icons/ci";
import Teacher2 from '../../image/teacher2.png'
import { GoDotFill, GoPencil } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine, RiGraduationCapFill } from "react-icons/ri";
import { BiLeftArrowAlt, BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";
import { BiBarChartAlt2 } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import React, { useState, useEffect } from 'react';

import { LuBookText, LuSmartphone, LuPalette, LuMegaphone, LuShieldCheck, LuBrainCircuit, LuDatabase } from "react-icons/lu";





const Payment = () => {
  const data = [
    { students: 20 },
    { students: 35 },
    { students: 25 },
    { students: 40 },
    { students: 30 },
    { students: 45 },
    { students: 28 },
    { students: 38 },
  ];
  const revenueData = [
    { day: "1 May", revenue: 20000 },
    { day: "6 May", revenue: 45000 },
    { day: "11 May", revenue: 40000 },
    { day: "16 May", revenue: 68000 },
    { day: "21 May", revenue: 78540 },
    { day: "26 May", revenue: 60000 },
    { day: "31 May", revenue: 72000 },
  ];
  const thisYearData = [
    { month: "Jan", students: 4500 },
    { month: "Feb", students: 5200 },
    { month: "Mar", students: 6000 },
    { month: "Apr", students: 6700 },
    { month: "May", students: 8500 },
    { month: "Jul", students: 7200 },
    { month: "Aug", students: 8000 },
    { month: "Sep", students: 8600 },
    { month: "Oct", students: 8700 },
    { month: "Nov", students: 8800 },
    { month: "Dec", students: 10000 },
  ];

  const lastYearData = [
    { month: "Jan", students: 2500 },
    { month: "Feb", students: 3200 },
    { month: "Mar", students: 4000 },
    { month: "Apr", students: 4700 },
    { month: "May", students: 5500 },
    { month: "Jul", students: 6200 },
    { month: "Aug", students: 6800 },
    { month: "Sep", students: 7000 },
    { month: "Oct", students: 7600 },
    { month: "Nov", students: 8000 },
    { month: "Dec", students: 8500 },
  ];
  const [activeYear, setActiveYear] = useState("thisYear");

  const chartData =
    activeYear === "thisYear"
      ? thisYearData
      : lastYearData;


  return (
    <>
      <div className='p-5 flex items-center justify-between mt-24'>
        <div className=''>
          <h1 className='flex gap-3 font-bold text-2xl'>Payments</h1>
          <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
            <p className=''>Dashbord</p>
            <span className='mt-1'><IoIosArrowForward /></span>
            <p>Payments</p>
          </div>
        </div>
        <button className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white flex gap-3'><FiDownload size={20} />Export Report</button>
      </div>

      <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
          <div className='flex gap-3 '>
            <div className='h-12 w-12 flex justify-center items-center bg-[#6366F1]  rounded-full text-white '><HiMiniUsers size={24} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Total Revenue</p>
              <p className='font-bold text-2xl text-black flex' ><FaRupeeSign className='mt-1' />2.45L</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />18.7%</span> from last month</p>
            </div>
          </div>
          <div className="w-full h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#6366F1"
                  fill="#C4B5FD"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
          <div className='flex gap-3'>
            <div className='h-12 w-12 flex justify-center items-center bg-[#1d20db]  rounded-full text-white '><MdPayment size={24} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Total Payments</p>
              <p className='font-bold text-2xl text-black' >845</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.5%</span> from last month</p>
            </div>
          </div>
          <div className="w-full h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#10B981"
                  fill="#86EFAC"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
          <div className='flex gap-3'>
            <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B]  rounded-full text-white '><LuClock3 size={28} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Pending Payments</p>
              <p className='font-bold text-2xl text-black' >25</p>
              <p className='text-sm flex gap-1'><span className='text-red-600 flex gap-1'><FaArrowDown className='mt-1' />4.8%</span> from last month</p>
            </div>
          </div>
          <div className="w-full h-[50px] ">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#F59E0B"
                  fill="#FCD34D"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
          <div className='flex gap-3'>
            <div className='h-12 w-12 flex justify-center items-center bg-[#10B981]  rounded-full text-white '><FaCheck size={28} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Succecful Payments</p>
              <p className='font-bold text-2xl text-black' >820</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />15.3%</span> from last month</p>
            </div>
          </div>
          <div className="w-full h-[50px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="students"
                  stroke="#1d20db"
                  fill="#1d20db"
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className='flex p-5 gap-5'>
        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/2 px-8 py-5' >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-gray-800"> Revenue Overview</h1>
            <button className="border px-4 py-2 rounded-lg text-sm font-medium"> This Month</button>
          </div>
          <div className="w-full h-[320px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}

                />
                <YAxis
                  tickFormatter={(value) => `₹${value / 1000}K`}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8B5CF6"
                  fill="#C4B5FD"
                  strokeWidth={1}
                  className='pt-5'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/2 px-8 py-5' >
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-800"> Student Growth</h1>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveYear("thisYear")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeYear === "thisYear" ? "bg-[#6366F1] text-white" : "border text-gray-600"}`}>  This Year </button>
              <button onClick={() => setActiveYear("lastYear")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeYear === "lastYear" ? "bg-[#6366F1] text-white" : "border text-gray-600"} `}
              >  Last Year </button>
            </div>
          </div>


          <div className="w-full h-[350px] text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `${value / 1000}K`}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip />
                <Bar
                  dataKey="students"
                  fill="#8B5CF6"
                  radius={[6, 6, 0, 0]}
                  barSize={35}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl py-5 m-5 px-5 ' >
        <div className='flex justify-between'>
          <div className='flex'>
            <span className='relative left-5 top-3 text-[#897b7b]'><CiSearch size={20} /></span>
            <input
              type='search'
              placeholder='Search Payments...'
              className='border-2 border-[#e4dfdf] rounded-xl pl-16 w-72  h-10 relative right-5' />
          </div>
          <div className='flex gap-5'>
            <select className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
              <option value=''>All Course</option>
              <option value='Web Development'>Web Development</option>
              <option value='App Developement'>App Developement</option>
              <option value='Data Science'>Data Science</option>
              <option value='UI/UX Design'>UI/UX Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
              <option value='Cyber Security'>Cyber Security</option>
              <option value='Artificial Intelligence'>Artificial Intelligence</option>
              <option value='Cloud Computing'>Cloud Computing</option>
            </select>
            <select className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
              <option>All Status</option>
              <option>Active</option>
              <option>InActive</option>
            </select>
            <p className='flex border-2  rounded-xl  px-3 py-1'><span><CiFilter size={20} className='mt-1' /></span>Filter</p>
          </div>
        </div>

        <table className='w-full mt-5 '>
          <thead className='bg-[#ddd4d4] '>
            <tr className='my-5'>
              <th className='p-4 text-left'>students</th>
              <th className='text-left'>Course</th>
              <th className='text-left'>Amount</th>
              <th className='text-left'>Payments Id</th>
              <th className='text-left'>Date</th>
              <th className='text-left'>status</th>
              <th className='py-4 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='pb-2'>
                <div className='mt-5 flex gap-4 items-center  '>
                  <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                  <div className=''>
                    <p className='font-bold'>Om Murhe</p>
                    <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Web Developement</td>
              <td>28,999</td>
              <td className="text-[#63605B]">Pay_12345</td>
              <td className="text-[#63605B]">22 May 2025,10:30AM</td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td><p className='inline-flex border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
            </tr>
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='pb-2'>
                <div className='mt-5 flex gap-4 items-center  '>
                  <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                  <div className=''>
                    <p className='font-bold'>Om Murhe</p>
                    <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Web Developement</td>
              <td>28,999</td>
              <td className="text-[#63605B]">Pay_12345</td>
              <td className="text-[#63605B]">22 May 2025,10:30AM</td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td><p className='inline-flex border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
            </tr>
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='pb-2'>
                <div className='mt-5 flex gap-4 items-center  '>
                  <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                  <div className=''>
                    <p className='font-bold'>Om Murhe</p>
                    <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Web Developement</td>
              <td>28,999</td>
              <td className="text-[#63605B]">Pay_12345</td>
              <td className="text-[#63605B]">22 May 2025,10:30AM</td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td><p className='inline-flex border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
            </tr>
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='pb-2'>
                <div className='mt-5 flex gap-4 items-center  '>
                  <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                  <div className=''>
                    <p className='font-bold'>Om Murhe</p>
                    <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Web Developement</td>
              <td>28,999</td>
              <td className="text-[#63605B]">Pay_12345</td>
              <td className="text-[#63605B]">22 May 2025,10:30AM</td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td><p className='inline-flex border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
            </tr>
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='pb-2'>
                <div className='mt-5 flex gap-4 items-center  '>
                  <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                  <div className=''>
                    <p className='font-bold'>Om Murhe</p>
                    <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>Web Developement</td>
              <td>28,999</td>
              <td className="text-[#63605B]">Pay_12345</td>
              <td className="text-[#63605B]">22 May 2025,10:30AM</td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td><p className='inline-flex border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
            </tr>
          </tbody>
        </table>

        <div className='flex justify-between mt-5'>
          <p>Showing 1 to 10 of 50 entries</p>
          <div className=' flex gap-3'>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'><BiLeftArrowAlt /></button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>1</button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>2</button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>3</button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>4</button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>5</button>
            <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'> <BiRightArrowAlt /></button>
          </div>
        </div>
      </div>




    </>
  )
}

export default Payment
