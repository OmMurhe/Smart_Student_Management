
import { useState } from "react";
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
import { FiDownload } from "react-icons/fi";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuBookText, LuSmartphone, LuPalette, LuMegaphone, LuShieldCheck, LuBrainCircuit, LuDatabase } from "react-icons/lu";
import { RiSendPlaneLine } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";





const Message = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);
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
    return (
        <>
            <div className='p-5 flex items-center justify-between mt-24'>
                <div className=''>
                    <h1 className='flex gap-3 font-bold text-2xl'>Messages</h1>
                    <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
                        <p className=''>Dashbord</p>
                        <span className='mt-1'><IoIosArrowForward /></span>
                        <p>Messages</p>
                    </div>
                </div>
                <button className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white flex gap-3'><FiDownload size={20} />Export Messages</button>
            </div>

            <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
                    <div className='flex gap-3 '>
                        <div className='h-12 w-12 flex justify-center items-center bg-[#1d20db]  rounded-full text-white '><LuMessageCircleMore size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total Messages </p>
                            <p className='font-bold text-2xl text-black' >245</p>
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
                        <div className='h-12 w-12 flex justify-center items-center   bg-[#6366F1]  rounded-full text-white '><IoMdMail size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Unread Messages</p>
                            <p className='font-bold text-2xl text-black' >38</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.4%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <Area
                                    type="monotone"
                                    dataKey="students"
                                    stroke="#6366F1"
                                    fill="#6366F1"
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
                            <p className=''>Resolved Messages</p>
                            <p className='font-bold text-2xl text-black' >180</p>
                            <p className='text-sm flex gap-1'><span className='text-red-600 flex gap-1'><FaArrowDown className='mt-1' />20.8%</span> from last month</p>
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
                        <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B]   rounded-full text-white '><LuClock3 size={28} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Pending Messages</p>
                            <p className='font-bold text-2xl text-black' >27</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />5.5%</span> from last month</p>
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
            <div className=" flex">
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl py-5 m-5 px-5 w-[70%]' >
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <span className='relative left-5 top-3 text-[#897b7b]'><CiSearch size={20} /></span>
                            <input
                                type='search'
                                placeholder='Search courses...'
                                className='border-2 border-[#e4dfdf] rounded-xl pl-16 w-72  h-10 relative right-5' />
                        </div>
                        <div className='flex gap-5'>

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
                                <th className='text-left p-3'>Course</th>
                                <th className='text-left p-3'>Subject</th>
                                <th className='text-left p-3'>Date</th>
                                <th className='text-left p-3'>status</th>
                                <th className='py-4 text-left px-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3'>Web Developement</td>
                                <td className="text-[#63605B] px-3">Course Fees Inquiry</td>
                                <td className="text-[#63605B] px-3">22 May 2025,10:30AM</td>
                                <td><p className='inline-flex items-center mx-3    text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Replied</p></td>
                                <td><p className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
                            </tr>

                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3'>Web Developement</td>
                                <td className="text-[#63605B] px-3">Course Fees Inquiry</td>
                                <td className="text-[#63605B] px-3">22 May 2025,10:30AM</td>
                                <td><p className='inline-flex items-center mx-3    text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Replied</p></td>
                                <td>
                                    <p
                                        onClick={() =>
                                            setSelectedMessage({
                                                name: "Om Murhe",
                                                email: "ommurhe@gmail.com",
                                                course: "Web Development",
                                                subject: "Course Fees Inquiry",
                                                message:
                                                    "I want to know complete fee structure and placement support.I am not able to paid this much og amount",
                                                date: "22 May 2025, 10:30 AM",
                                            })

                                        }

                                        className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db] cursor-pointer'
                                    >
                                        <MdOutlineRemoveRedEye size={20} />
                                    </p>

                                </td>
                            </tr>

                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3'>Web Developement</td>
                                <td className="text-[#63605B] px-3">Course Fees Inquiry</td>
                                <td className="text-[#63605B] px-3">22 May 2025,10:30AM</td>
                                <td><p className='inline-flex items-center mx-3    text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Replied</p></td>
                                <td><p className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
                            </tr>

                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3'>Web Developement</td>
                                <td className="text-[#63605B] px-3">Course Fees Inquiry</td>
                                <td className="text-[#63605B] px-3">22 May 2025,10:30AM</td>
                                <td><p className='inline-flex items-center mx-3    text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Replied</p></td>
                                <td><p className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
                            </tr>

                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-3'>Web Developement</td>
                                <td className="text-[#63605B] px-3">Course Fees Inquiry</td>
                                <td className="text-[#63605B] px-3">22 May 2025,10:30AM</td>
                                <td><p className='inline-flex items-center mx-3    text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Replied</p></td>
                                <td><p className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></p> </td>
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


                {selectedMessage && (
                    <div className="shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl py-5 my-5 px-5 w-[30%]">
                        <button
                            onClick={() => setSelectedMessage(null)}
                            className="float-right"
                        >
                            ✕
                        </button>

                        <h2 className="font-bold text-xl">
                            Message Details
                        </h2>
                        <div className="flex mt-5 gap-3">

                            <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                            <div>
                                <b> {selectedMessage.name}</b>
                                <p className="text-[#63605B]">{selectedMessage.email}</p>
                            </div>
                        </div>
                        <p className="text-[#63605B] flex mt-5">Course: <p className="text-black font-bold">{selectedMessage.course}</p></p>

                        <p className="text-[#63605B] mt-5">Subject</p><p className="font-semibold">{selectedMessage.subject}</p>

                        <p className="text-[#63605B] mt-5 relative">Message </p>
                        <div className="mt-2 p-3 pb-7 bg-gray-100 rounded">

                            {selectedMessage.message}
                            <p className="absolute right-8 text-sm text-[#63605B]  ">22 May 2025,10:30AM</p>
                        </div>

                        <p className="font-semibold mt-3">Reply</p>
                        <textarea
                            placeholder='Type Your Reply...'
                            rows='3'
                            className='border-2 border-[#e4dfdf] mt-3 rounded-xl p-2 pl-5 w-80 '
                        />
                         <div className='flex gap-5'>
                        <button className='px-4 border-2 border-[#10B981] text-[#10B981]  h-10 rounded-xl mt-3 '>Explore as Resolved</button>
                        <button className='px-3 py-2 rounded-xl font-bold text-white border-2 bg-[#1d20db] mt-3 flex gap-2'><RiSendPlaneLine className="mt-1"/>Send Reply</button>
                    </div>
                    </div>
                )}

            </div>




        </>
    )
}

export default Message