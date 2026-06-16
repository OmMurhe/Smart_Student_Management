
import { IoIosArrowForward } from "react-icons/io";
import { ResponsiveContainer, AreaChart, Area} from "recharts";
import { HiMiniUsers } from "react-icons/hi2";
import { RiUserAddFill,RiDeleteBinLine } from "react-icons/ri";
import { FaUserXmark, FaUserCheck } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { CiSearch, CiFilter } from "react-icons/ci";
import Teacher2 from '../../image/teacher2.png'
import { GoDotFill, GoPencil } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLeftArrowAlt,BiRightArrowAlt  } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
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

  const [students, setStudents] = useState([]);

useEffect(() => {
  fetchStudents();
}, []);

const fetchStudents = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/students"
    );

    setStudents(response.data);

  } catch (error) {
    console.log("Error:", error);
  }
};
  return (
    <>
      <div className='p-5 flex items-center justify-between mt-24'>
        <div className=''>
          <h1 className='flex gap-3 font-bold text-2xl'>Students</h1>
          <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
            <p className=''>Dashbord</p>
            <span className='mt-1'><IoIosArrowForward /></span>
            <p>Students</p>
          </div>
        </div>
        <button className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white'>+ Add New Students</button>
      </div>

      <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
        <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
          <div className='flex gap-3 '>
            <div className='h-12 w-12 flex justify-center items-center bg-[#6366F1]  rounded-full text-white '><HiMiniUsers size={24} /></div>
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
            <div className='h-12 w-12 flex justify-center items-center bg-[#3B82F6]  rounded-full text-white '><RiUserAddFill size={24} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>New Students</p>
              <p className='font-bold text-2xl text-black' >320</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />8.4</span> from last month</p>
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
            <div className='h-12 w-12 flex justify-center items-center bg-[#10B981]  rounded-full text-white '><FaUserCheck size={28} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Active Students</p>
              <p className='font-bold text-2xl text-black' >11.2K</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />15.2% </span> from last month</p>
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
            <div className='h-12 w-12 flex justify-center items-center bg-[#F59E0B]  rounded-full text-white '><FaUserXmark size={28} /></div>
            <div className='flex flex-col gap-3'>
              <p className=''>Inactive students</p>
              <p className='font-bold text-2xl text-black' >1.3K</p>
              <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />4.3%</span> from last month</p>
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

      <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl py-5 m-5 px-5 ' >
        <div className='flex justify-between'>
          <div className='flex'>
            <span className='relative left-5 top-3 text-[#897b7b]'><CiSearch size={20} /></span>
            <input
              type='search'
              placeholder='Search Students...'
              className='border-2 border-[#e4dfdf] rounded-xl pl-16 w-72  h-10 relative right-5' />
          </div>
          <div className='flex gap-5'>
            <select className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
              <option value=''>All Courses</option>
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
              <th className='text-left'>Email</th>
              <th className='text-left'>Course</th>
              <th className='text-left'>status</th>
              <th className='text-left'>Payments Status</th>
              <th className='text-left'>Joined On</th>
              <th className='py-4 px-5 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
              {students.map((student) => (
            <tr className='border-b  border-[#d6ccbb]'>
              <td className='flex items-center gap-3 my-3'> <img src={Teacher2} alt="Teacher2" className='h-10 w-10 object-cover object-top  rounded-full ' />
                <p className='font-bold'>{student.name}</p>
              </td>
              <td>{student.email}</td>
              <td>Web Develope</td>
              <td><span className='inline-flex items-center gap-1 text-[#10B981] px-3 py-1 bg-[#8ad2ba] rounded-xl'><GoDotFill />Active</span></td>
              <td><p className='inline-flex items-center text-[#10B981] px-3 py-1 rounded-xl bg-[#8ad2ba]'>Paid</p></td>
              <td>22 May 2025</td>
              <td>
                <div className='flex gap-3 '>
                  <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><MdOutlineRemoveRedEye size={20}/></span>
                  <span className='border-2 p-1 rounded-lg border-[#e4dfdf] text-[#1d20db]'><GoPencil size={20} /></span>
                  <span  className='border-2 p-1 rounded-lg border-[#e4dfdf] text-red-600'><RiDeleteBinLine size={20} /></span>
                </div></td>
            </tr>

              
              ))}
             </tbody>
        </table>

        <div className='flex justify-between mt-5'>
          <p>Showing 1 to 10 of 50 entries</p>
          <div className=' flex gap-3'>
          <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'><BiLeftArrowAlt/></button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>1</button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>2</button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>3</button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>4</button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white'>5</button>
           <button className='px-3 py-1 border-2 border-[#e4dfdf] rounded-lg hover:bg-[#1d20db] hover:text-white '> <BiRightArrowAlt /></button>
           </div>
        </div>
      </div>
     



    </>
  )
}

export default Students
