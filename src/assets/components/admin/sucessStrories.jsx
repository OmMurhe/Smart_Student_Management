
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





const SucessStrories = () => {
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
    return (
        <>
            <div className='p-5 flex items-center justify-between mt-24'>
                <div className=''>
                    <h1 className='flex gap-3 font-bold text-2xl'>Success Stories</h1>
                    <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
                        <p className=''>Dashbord</p>
                        <span className='mt-1'><IoIosArrowForward /></span>
                        <p>Success Stories</p>
                    </div>
                </div>
                <button className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white flex gap-3'><FiDownload size={20} />Add New Stroy</button>
            </div>

            <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
                    <div className='flex gap-3 '>
                        <div className='h-12 w-12 flex justify-center items-center bg-[#1d20db]  rounded-full text-white '><GrCertificate size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total stories </p>
                            <p className='font-bold text-2xl text-black' >48</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.5%</span> from last month</p>
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
                            <p className=''>Student Placed</p>
                            <p className='font-bold text-2xl text-black' >120</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />15.3%</span> from last month</p>
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
                            <p className=''>Top Companies</p>
                            <p className='font-bold text-2xl text-black' >35</p>
                            <p className='text-sm flex gap-1'><span className='text-red-600 flex gap-1'><FaArrowDown className='mt-1' />8.6%</span> from last month</p>
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
                        <div className='h-12 w-12 flex justify-center items-center  bg-[#6366F1]  rounded-full text-white '><LuChartNoAxesCombined size={28} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Average Package</p>
                            <p className='font-bold text-2xl text-black' >6.8 LPA</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />10.2%</span> from last month</p>
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
            <div className=" flex">
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl py-5 m-5 px-5 w-full' >
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <span className='relative left-4 top-3 text-[#897b7b]'><CiSearch size={20} /></span>
                            <input
                                type='search'
                                placeholder='Search students name/company'
                                className='border-2 border-[#e4dfdf] rounded-xl pl-10 w-72  h-10 relative right-5' />
                        </div>
                        <div className='flex gap-5'>

                            <select className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
                                <option>All Status</option>
                                <option>Active</option>
                                <option>InActive</option>
                            </select>
                            <select className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
                                <option value=''>All Companies</option>
                                <option value='Web Development'>Infosys</option>
                                <option value='App Developement'>Capgemini</option>
                                <option value='Data Science'>Cognizant</option>
                                <option value='UI/UX Design'>Accenture</option>
                                <option value='Digital Marketing'>Wipro</option>
                                <option value='Cyber Security'>TCS</option>
                                <option value='Artificial Intelligence'>Tata</option>
                                <option value='Cloud Computing'>Tach Mahindra</option>
                            </select>
                            <p className='flex border-2  rounded-xl  px-3 py-1'><span><CiFilter size={20} className='mt-1' /></span>Filter</p>
                        </div>
                    </div>

                    <table className='w-full mt-5 '>
                        <thead className='bg-[#ddd4d4] '>
                            <tr className='my-5'>
                                <th className='p-4 text-left'>#</th>
                                <th className='text-left'>students</th>
                                <th className='text-left'>Company</th>
                                <th className='text-left'>Role</th>
                                <th className='text-left'>Package</th>
                                <th className='text-left'>Addon On</th>
                                <th className='text-left'>Status</th>
                                <th className='text-left px-6'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className='border-b  border-[#d6ccbb]'>
                                <td className="px-3">1</td>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">Wipro</td>
                                <td>Java Develeoper</td>
                                <td className="text-[#1d20db]">6 LPA</td>
                                <td>22 May 2025</td>
                                 <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
                                <td>
                                    <div className='flex gap-3 '>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                                    </div></td>
                            </tr>

                             <tr className='border-b  border-[#d6ccbb]'>
                                <td className="px-3">1</td>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">Wipro</td>
                                <td>Java Develeoper</td>
                                <td className="text-[#1d20db]">6 LPA</td>
                                <td>22 May 2025</td>
                                 <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
                                <td>
                                    <div className='flex gap-3 '>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                                    </div></td>
                            </tr>

                             <tr className='border-b  border-[#d6ccbb]'>
                                <td className="px-3">1</td>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">Wipro</td>
                                <td>Java Develeoper</td>
                                <td className="text-[#1d20db]">6 LPA</td>
                                <td>22 May 2025</td>
                                 <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
                                <td>
                                    <div className='flex gap-3 '>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                                    </div></td>
                            </tr>

                             <tr className='border-b  border-[#d6ccbb]'>
                                <td className="px-3">1</td>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">Wipro</td>
                                <td>Java Develeoper</td>
                                <td className="text-[#1d20db]">6 LPA</td>
                                <td>22 May 2025</td>
                                 <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
                                <td>
                                    <div className='flex gap-3 '>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                                    </div></td>
                            </tr>

                             <tr className='border-b  border-[#d6ccbb]'>
                                <td className="px-3">1</td>
                                <td className='pb-2 '>
                                    <div className='mt-5 flex gap-4 items-center  '>
                                        <img src={Teacher2} alt="Teacher2" className='h-12 w-12 object-cover object-top  rounded-full' />
                                        <div className=''>
                                            <p className='font-bold'>Om Murhe</p>
                                            <p className='text-sm text-[#63605B]'>ommurhe@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold">Wipro</td>
                                <td>Java Develeoper</td>
                                <td className="text-[#1d20db]">6 LPA</td>
                                <td>22 May 2025</td>
                                 <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
                                <td>
                                    <div className='flex gap-3 '>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                                        <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                                    </div></td>
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
            </div>




        </>
    )
}

export default SucessStrories