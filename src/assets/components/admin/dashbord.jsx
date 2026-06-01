'use client';
import Sidebar from './sidebar'
import Navbar from './navbar'
import { FaHandsClapping } from "react-icons/fa6";
import { FaRupeeSign, FaArrowUp } from "react-icons/fa";
import { HiUsers, HiCodeBracket } from "react-icons/hi2";
import { CalendarDays } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { GiOpenBook } from "react-icons/gi";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import Teacher2 from '../../image/teacher2.png'
import Teacher1 from '../../image/teacher1.png'
import Teacher3 from '../../image/teacher3.png'
import Teacher4 from '../../image/teacher4.png'
import { LuDatabase } from "react-icons/lu";
import { LuShieldCheck } from "react-icons/lu";
import { LuPalette } from "react-icons/lu";


const Dashbord = () => {
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
  const [dateObj, setDateObj] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateObj(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const [activeYear, setActiveYear] = useState("thisYear");

  const chartData =
    activeYear === "thisYear"
      ? thisYearData
      : lastYearData;


  const getFormattedDate = () => {
    const day = dateObj.getDate();
    const month = dateObj.toLocaleDateString('en-US', { month: 'long' });
    const year = dateObj.getFullYear();
    const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });


    return `${day} ${month} ${year}, ${weekday}`;
  };
  const currentDate = getFormattedDate();
  return (
    <>
     
        <div className='p-5 flex items-center justify-between mt-24'>
          <div className=''>
            <h1 className='flex gap-3 font-bold text-2xl'>Welcome back,Admin!<FaHandsClapping className='text-yellow-500 mt-1' /></h1>
            <p className='text-[#63605B]'>Here's what's happening with your platform today.</p>
          </div>
         <p className='px-5 py-2 border-2 border-[#dad8d3] text-[#63605B] text-sm rounded-xl font-semibold flex gap-2'> <span><CalendarDays size={20} /></span>{currentDate}</p>
      </div>
        <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
          <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
            <div className='flex gap-3 '>
              <div className='h-12 w-12 flex justify-center items-center bg-[#6366F1]  rounded-full text-white '><HiUsers size={24} /></div>
              <div className='flex flex-col gap-3'>
                <p className=''>Total Students</p>
                <p className='font-bold text-2xl text-black' >12.5K</p>
                <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.5% </span> from last month</p>
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
              <div className='h-12 w-12 flex justify-center items-center bg-[#3B82F6]  rounded-full text-white '><GiOpenBook size={24} /></div>
              <div className='flex flex-col gap-3'>
                <p className=''>Total Courses</p>
                <p className='font-bold text-2xl text-black' >120</p>
                <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />8.3 </span> from last month</p>
              </div>
            </div>
            <div className="w-full h-[50px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <Area
                    type="monotone"
                    dataKey="students"
                    stroke="#3B82F6"
                    fill="#93C5FD"
                    fillOpacity={0.35}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
            <div className='flex gap-3'>
              <div className='h-12 w-12 flex justify-center items-center bg-[#10B981]  rounded-full text-white '><FaRupeeSign size={28} /></div>
              <div className='flex flex-col gap-3'>
                <p className=''>Total Revenue</p>
                <p className='font-bold text-2xl text-black' >2.45L</p>
                <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />18.7% </span> from last month</p>
              </div>
            </div>
            <div className="w-full h-[50px] ">
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
              <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B]  rounded-full text-white '><HiUsers size={28} /></div>
              <div className='flex flex-col gap-3'>
                <p className=''>Total Enrollments</p>
                <p className='font-bold text-2xl text-black' >8.45K</p>
                <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />14.2% </span> from last month</p>
              </div>
            </div>
            <div className="w-full h-[50px]">
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
        <div className='flex p-5 gap-5'>
          <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/2 px-6 py-5' >
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold text-gray-800"> Resents Students</h1>
              <button className="border border-[#63605B] px-4 py-2 rounded-lg text-sm font-medium text-[#6366F1]">View All</button>
            </div>

            <table className='w-full'>
              <thead className=''>
                <tr className='text-left w-full px-5'>
                  <th>Students</th>
                  <th>Course</th>
                  <th>Enrolled On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className='border-b  border-[#d6ccbb]'>
                  <td className='pb-2'>
                    <div className='mt-5 flex gap-4 items-center  '>
                      <img src={Teacher1} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                      <div className=''>
                        <p className='font-bold'>Om Murhe</p>
                        <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className='font-semibold'>App Developemnt</td>
                  <td className='font-semibold'>2 May 2025</td>
                  <td><p className='p-2 text-[#10B981] bg-[#86EFAC] rounded-2xl font-semibold'>Active</p></td>
                </tr>

                <tr className='border-b  border-[#d6ccbb] '>
                  <td className='pb-2'>
                    <div className='mt-5 flex gap-3  items-center'>
                      <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                      <div className=''>
                        <p className='font-bold'>Neha Wagh</p>
                        <p className='text-sm text-[#63605B]'>nehaWagh@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className='font-semibold'>UI/UX  Developemnt</td>
                  <td className='font-semibold'>8 May 2025</td>
                  <td><p className='p-2 text-[#10B981] bg-[#86EFAC] rounded-2xl font-semibold'>Active</p></td>
                </tr>


                <tr className='border-b  border-[#d6ccbb] '>
                  <td className='pb-2'>
                    <div className='mt-5 flex gap-3  items-center '>
                      <img src={Teacher3} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                      <div className=''>
                        <p className='font-bold'>Shubham Kuware</p>
                        <p className='text-sm text-[#63605B]'>shubhamkuware@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className='font-semibold'>Digitak Marketing</td>
                  <td className='font-semibold'>15 may 2025</td>
                  <td><p className='p-2 text-[#10B981] bg-[#86EFAC] rounded-2xl font-semibold'>Active</p></td>
                </tr>


                <tr>
                  <td>
                    <div className='mt-5 flex gap-3  items-center '>
                      <img src={Teacher4} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                      <div className=''>
                        <p className='font-bold'>Gopal Chopade</p>
                        <p className='text-sm text-[#63605B]'>gopalchopade@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td className='font-semibold'>Web Developement</td>
                  <td className='font-semibold'>26 jun 2025</td>
                  <td><p className='p-2 text-[#10B981] bg-[#86EFAC] rounded-2xl font-semibold'>Active</p></td>
                </tr>


              </tbody>
            </table>
          </div>
          <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/2 px-8 py-5' >
            <div className="flex justify-between items-center mb-6 ">
              <h1 className="text-xl font-bold text-gray-800"> Resents Enrollments </h1>
              <button className="border border-[#63605B] px-4 py-2 rounded-lg text-sm font-medium text-[#6366F1]">View All</button>
            </div>
            <div className='flex justify-between items-center border-b  border-[#d6ccbb] pb-3'>
              <div className='flex gap-5  items-center mt-5'>
                <div className='h-12 w-12 flex justify-center items-center bg-[#3B82F6] rounded-xl'><HiCodeBracket className=' font-bold text-3xl text-white' /></div>
                <div className=''>
                  <p className='font-semibold'>Web Developement</p>
                  <p className='text-[#63605B]'>120 Student Enrolled</p>
                </div>
              </div>
              <p className='text-[#63605B]'>10 min ago</p>
            </div>

            <div className='flex justify-between items-center border-b  border-[#d6ccbb] pb-3'>
              <div className='flex gap-5  items-center mt-5'>
                <div className='h-12 w-12 flex justify-center items-center bg-[#6366F1] rounded-xl'><LuDatabase className=' font-bold text-3xl text-white' /></div>
                <div className=''>
                  <p className='font-semibold'>Cloud Computing</p>
                  <p className='text-[#63605B]'>85 Student Enrolled</p>
                </div>
              </div>
              <p className='text-[#63605B]'>25 min ago</p>
            </div>

            <div className='flex justify-between items-center border-b-1  border-[#d6ccbb] pb-3'>
              <div className='flex gap-5  items-center mt-5'>
                <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B] rounded-xl'><LuShieldCheck className=' font-bold text-3xl text-white' /></div>
                <div className=''>
                  <p className='font-semibold'>Cyber Security</p>
                  <p className='text-[#63605B]'>64 Student Enrolled</p>
                </div>
              </div>
              <p className='text-[#63605B]'>1 hr ago</p>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex gap-5  items-center mt-5'>
                <div className='h-12 w-12 flex justify-center items-center bg-[#10B981] rounded-xl'><LuPalette className=' font-bold text-3xl text-white' /></div>
                <div className=''>
                  <p className='font-semibold'>UI/UX Design</p>
                  <p className='text-[#63605B]'>48 Student Enrolled</p>
                </div>
              </div>
              <p className='text-[#63605B]'>2 hr ago</p>
            </div>
          </div>
        </div>
    

    </>
  )
}

export default Dashbord
