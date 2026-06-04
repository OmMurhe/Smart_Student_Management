
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
import { FiDownload } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { RiSendPlaneLine } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { LuNewspaper } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { RiHotelLine } from "react-icons/ri";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { GiOpenBook } from "react-icons/gi";
import { LuUsers } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { ResponsiveContainer, LineChart, AreaChart, Line, PieChart, Pie, Cell, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

const Analytice = () => {
    const [selectedMessage, setSelectedMessage] = useState();
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

    const studentGrowth = [
        { month: "Dec", students: 350 },
        { month: "Jan", students: 520 },
        { month: "Feb", students: 720 },
        { month: "Mar", students: 930 },
        { month: "Apr", students: 1050 },
        { month: "May", students: 1250 },

    ];
    const revenueData = [
        { month: "Dec", revenue: 500000 },
        { month: "Jan", revenue: 650000 },
        { month: "Feb", revenue: 820000 },
        { month: "Mar", revenue: 1020000 },
        { month: "Apr", revenue: 930000 },
        { month: "May", revenue: 1245000 },
    ];
    const courses = [
        { name: "Web Development", percent: 26 },
        { name: "Data Science", percent: 21 },
        { name: "UI/UX Design", percent: 17 },
        { name: "Artificial Intelligence", percent: 13 },
        { name: "Digital Marketing", percent: 10 },
    ];
    const enrollmentStatus = [
        { name: "Active", value: 1280 },
        { name: "Completed", value: 850 },
        { name: "Pending", value: 200 },
        { name: "Cancelled", value: 120 },
    ];
    const COLORS = [
        "#22C55E",
        "#2563EB",
        "#F59E0B",
        "#EF4444",
    ];
    const completionData = [
        {
            name: "Completion",
            value: 72,
        },
        {
            name: "Remaining",
            value: 28,
        },
    ];
    return (
        <>
            <div className='p-5 flex items-center justify-between mt-24'>
                <div className=''>
                    <h1 className='flex gap-3 font-bold text-2xl'>Analytics Overview</h1>
                    <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
                        <p className=''>Dashbord</p>
                        <span className='mt-1'><IoIosArrowForward /></span>
                        <p>Analytics</p>
                    </div>
                </div>
                <button className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white flex gap-3'><FiDownload size={20} />Add New Stroy</button>
            </div>

            <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
                    <div className='flex gap-3 '>
                        <div className='h-12 w-12 flex justify-center items-center bg-[#1d20db]  rounded-full text-white '><GrCertificate size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total Students </p>
                            <p className='font-bold text-2xl text-black' >1,250</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />18.5%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <Area
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#1d20db"
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
                        <div className='h-12 w-12 flex justify-center items-center    bg-[#10B981] rounded-full text-white '><HiMiniUsers size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total Enrollments</p>
                            <p className='font-bold text-2xl text-black' >2,450</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />22.4%</span> from last month</p>
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
                        <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B] rounded-full text-white '><RiHotelLine size={28} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total Revenue</p>
                            <p className='font-bold text-2xl text-black flex' ><FaRupeeSign className='mt-1' />12,45,000</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />8.6%</span> from last month</p>
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
                        <div className='h-12 w-12 flex justify-center items-center  bg-[#6366F1]  rounded-full text-white '><GiOpenBook size={28} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Complete Course</p>
                            <p className='font-bold text-2xl text-black' >850</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.8%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <Area
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#6366F1"
                                    fill="#6566c5"
                                    fillOpacity={0.35}
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="mx-5 my-5 grid grid-cols-3 gap-5 ">

               
                <div className="bg-white rounded-xl shadow p-5">
                    <div className="flex justify-between mb-5">
                        <h2 className="font-bold text-black flex gap-3"><span><LuUsers size={24} className="m text-[#4F46E5]" /></span>Students Growth</h2>

                        <select className="border rounded-lg px-2 py-1 text-sm">
                            <option>Monthly</option>
                        </select>
                    </div>

                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={studentGrowth}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="students"
                                stroke="#4F46E5"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Revenue Overview */}
                <div className="bg-white rounded-xl shadow p-5">
                    <div className="flex justify-between mb-5">
                        <h2 className="font-bold text-black flex gap-3"> <span><IoMdCard size={24} className="m text-[#4F46E5]" /></span> Students Growth</h2>
                             <select className="border rounded-lg px-2 py-1 text-sm">
                            <option>Monthly</option>
                        </select>
                    </div>

                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="revenue"
                                fill="#4F46E5"
                                radius={[8, 8, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Top Courses */}
                <div className="bg-white rounded-xl shadow p-5">
                    <div className="flex justify-between mb-5"> <h2 className="font-bold text-black"> Top Courses </h2>
                       <button className="text-[#4F46E5] font-semibold">
                            View All
                        </button>
                    </div>

                    {courses.map((course, index) => (
                        <div key={index} className="mb-5">
                            <div className="flex justify-between text-black">
                                <p>{course.name}</p>
                                <p>{course.percent}%</p>
                            </div>

                            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                <div
                                    className="h-2 bg-[#4F46E5] rounded-full"
                                    style={{
                                        width: `${course.percent}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enrollment Status */}
                <div className="bg-white rounded-xl shadow p-5">
                    <h2 className="font-bold text-black mb-5">
                        Enrollment By Status
                    </h2>
                    <div className="flex">
                        <ResponsiveContainer width="60%" height={250}>
                            <PieChart>
                                <Pie
                                    data={enrollmentStatus}
                                    innerRadius={60}
                                    outerRadius={90}
                                    dataKey="value"
                                >
                                    {enrollmentStatus.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="flex gap-5 flex-col mt-15">
                            <p className="text-sm">
                                🟢 Active - 1280
                            </p>

                            <p className="text-sm">
                                🔵 Completed - 850
                            </p>

                            <p className="text-sm">
                                🟡 Pending - 200
                            </p>

                            <p className="text-sm">
                                🔴 Cancelled - 120
                            </p>
                        </div>
                    </div>
                </div>

                {/* Completion Rate */}
                <div className="bg-white rounded-xl shadow p-5 relative">

                    <h2 className="font-bold text-black mb-5">
                        Course Completion Rate
                    </h2>
<div className="flex">
                    <ResponsiveContainer width="60%" height={220}>
                        <PieChart>
                            <Pie
                                data={completionData}
                                innerRadius={70}
                                outerRadius={90}
                                dataKey="value"
                            >
                                <Cell fill="#4F46E5" />
                                <Cell fill="#E5E7EB" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute top-[150px] left-20 ">
                        <h1 className="text-4xl font-bold text-black">
                            72%
                        </h1>
                    </div>

                    <div className="text-center mt-10 ">
                        <p className="text-gray-500 text-sm">
                            Overall Completion Rate
                        </p>
                        <h1 className="text-4xl font-bold text-black">
                            72%
                        </h1>

                        <p className="text-[#10B981]">
                            ↑ 14% from last month
                        </p>
                    </div>

                </div>
                </div>

                {/* Placement Statistics */}
                <div className="bg-white rounded-xl shadow p-5">

                    <h2 className="font-bold text-black mb-5">
                        Placement Statistics
                    </h2>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="border rounded-xl p-4">
                            <div>
                            <p className="text-sm text-gray-500">
                                Total Placed Students
                            </p>

                            <h2 className="text-3xl font-bold">
                                320
                            </h2>
                            </div>
                        </div>

                        <div className="border rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Placement Rate
                            </p>

                            <h2 className="text-3xl font-bold">
                                68%
                            </h2>
                        </div>

                        <div className="border rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Highest Package
                            </p>

                            <h2 className="text-3xl font-bold">
                                ₹24 LPA
                            </h2>
                        </div>

                        <div className="border rounded-xl p-4">
                            <p className="text-sm text-gray-500">
                                Average Package
                            </p>

                            <h2 className="text-3xl font-bold">
                                ₹6.5 LPA
                            </h2>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Analytice