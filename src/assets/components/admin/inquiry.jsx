import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp, FaCheck } from "react-icons/fa";
import { CiSearch, CiFilter } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { RiSendPlaneLine } from "react-icons/ri";
import { LuMessageCircleMore, LuClock3 } from "react-icons/lu";
import { useEffect, useState } from "react";
import axios from "axios";

const Inquiry = () => {
    const [replyMessage, setReplyMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => { setCurrentPage(1); }, [searchTerm, statusFilter]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const filteredData = data.filter((item) => {
        const matchesStatus =
            statusFilter === "ALL" ||
            item.status === statusFilter;

        const matchesSearch =
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.interestedCourse?.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesStatus && matchesSearch;
    });
    const indexOfLastRecord =
        currentPage * recordsPerPage;

    const indexOfFirstRecord =
        indexOfLastRecord - recordsPerPage;

    const currentRecords =
        filteredData.slice(
            indexOfFirstRecord,
            indexOfLastRecord
        );

    const totalPages = Math.ceil(
        filteredData.length / recordsPerPage
    );

    useEffect(() => {
        loadInquiries();
    }, []);

    const loadInquiries = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/inquiries"
            );

            setData(response.data);

        } catch (error) {
            console.log(error);
        }
    };
    const groupedData = {};

    data.forEach((item) => {
        const date = item.createdAt.split("T")[0];

        if (!groupedData[date]) {
            groupedData[date] = {
                date,
                total: 0,
                unread: 0,
                pending: 0,
                replied: 0,
            };
        }

        groupedData[date].total++;

        if (item.status === "UNREAD")
            groupedData[date].unread++;

        if (item.status === "PENDING")
            groupedData[date].pending++;

        if (item.status === "REPLIED")
            groupedData[date].replied++;
    });

    const chartData = Object.values(groupedData).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );
    const unreadCount =
        data.filter(i => i.status === "UNREAD").length;

    const pendingCount =
        data.filter(i => i.status === "PENDING").length;

    const repliedCount =
        data.filter(i => i.status === "REPLIED").length;


    const exportInquiries = () => {

        const excelData = data.map((item) => ({
            Name: item.name,
            Email: item.email,
            Mobile: item.mobile,
            Course: item.interestedCourse,
            Message: item.message,
            Status: item.status,
            Date: item.createdAt
        }));

        const worksheet =
            XLSX.utils.json_to_sheet(excelData);

        worksheet["!cols"] = [
            { wch: 28 },
            { wch: 30 },
            { wch: 15 },
            { wch: 25 },
            { wch: 50 },
            { wch: 15 },
            { wch: 25 },
        ];


        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Inquiries"
        );

        const excelBuffer =
            XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });

        const fileData = new Blob(
            [excelBuffer],
            {
                type:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            }
        );

        saveAs(
            fileData,
            `Inquiries_${new Date()
                .toISOString()
                .split("T")[0]}.xlsx`
        );
    };
    const sendReply = async () => {
        console.log(selectedMessage);
        console.log(selectedMessage?.id);
        console.log({
            message: replyMessage
        });


        try {

            await axios.post(
                `http://localhost:8080/inquiry/reply/${selectedMessage.id}`,
                {
                    message: replyMessage
                }
            );

            alert("Reply Sent Successfully");

            setReplyMessage("");

            setSelectedMessage(null);

            loadInquiries();

        } catch (error) {
            console.log(error);
            console.log("Status:", error.response?.status);
            console.log("Data:", error.response?.data);

        }
    };

    const updateStatusToPending = async (id) => {
        try {
            await axios.put(
                `http://localhost:8080/inquiry/${id}`
            );

            loadInquiries();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='p-5 flex items-center justify-between mt-24'>
                <div className=''>
                    <h1 className='flex gap-3 font-bold text-2xl'>Inquiry</h1>
                    <div className='flex text-[#63605B] gap-2 mt-1 font-semibold'>
                        <p className=''>Dashbord</p>
                        <span className='mt-1'><IoIosArrowForward /></span>
                        <p>Inquiry</p>
                    </div>
                </div>
                <button onClick={exportInquiries} className='px-5 py-2  text-sm rounded-xl font-semibold bg-[#1d20db] text-white flex gap-3'><FiDownload size={20} />Export Inquiry</button>
            </div>

            <div className='mx-5 mt-3 flex gap-8  text-[#63605B]'>
                <div className='shadow-[0_4px_20px_rgba(0,0,0,0.20)]  rounded-xl w-1/4 px-8 py-5' >
                    <div className='flex gap-3 '>
                        <div className='h-12 w-12 flex justify-center items-center bg-[#1d20db]  rounded-full text-white '><LuMessageCircleMore size={24} /></div>
                        <div className='flex flex-col gap-3'>
                            <p className=''>Total Inquiry </p>
                            <p className='font-bold text-2xl text-black' >{data.length}</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />18.5%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="total"
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
                            <p className=''>Unread Inquiry</p>
                            <p className='font-bold text-2xl text-black' >{unreadCount}</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />12.4%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="unread"
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
                            <p className=''>Replied Inquiry</p>
                            <p className='font-bold text-2xl text-black' >{repliedCount}</p>
                            <p className='text-sm flex gap-1'><span className='text-red-600 flex gap-1'><FaArrowDown className='mt-1' />20.8%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px] ">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="replied"
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
                            <p className=''>Pending Inquiry</p>
                            <p className='font-bold text-2xl text-black' >{pendingCount}</p>
                            <p className='text-sm flex gap-1'><span className='text-[#10B981] flex gap-1'><FaArrowUp className='mt-1' />5.5%</span> from last month</p>
                        </div>
                    </div>
                    <div className="w-full h-[50px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="pending"
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
                                placeholder='Search Inquiry...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='border-2 border-[#e4dfdf] rounded-xl pl-16 w-72  h-10 relative right-5' />
                        </div>
                        <div className='flex gap-5'>

                            <select value={statusFilter}
                                onChange={(e) =>
                                    setStatusFilter(e.target.value)
                                } className='border-2 border-[#e4dfdf] rounded-xl px-3 py-1'>
                                <option value="ALL">All Status</option>
                                <option value="UNREAD">Unread</option>
                                <option value="PENDING">Pending</option>
                                <option value="REPLIED">Replied</option>
                            </select>
                            <p className='flex border-2  rounded-xl  px-3 py-1'><span><CiFilter size={20} className='mt-1' /></span>Filter</p>
                        </div>
                    </div>
                    <table className='w-full mt-5 '>
                        <thead className='bg-[#ddd4d4] '>
                            <tr className='my-5'>
                                <th className='p-4 text-left'>ID</th>
                                <th className='p-4 text-left'>Students</th>
                                <th className='text-left p-3'>Course</th>
                                <th className='text-left p-3'>Contact</th>
                                <th className='text-left p-3'>Date</th>
                                <th className='text-left p-3'>Status</th>
                                <th className='py-4 text-left px-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {currentRecords.map((item) => (
                                <tr className='border-b  border-[#d6ccbb]' key={item.id}>
                                    <td className='px-3'>{item.id}</td>
                                    <td className='pb-2 pl-2 '>
                                        <p className='font-bold mt-5'>{item.name}</p>
                                        <p className='text-sm text-[#63605B]'>{item.email}</p>
                                    </td>
                                    <td className='px-3'>{item.interestedCourse}</td>
                                    <td className="text-[#63605B] px-3">{item.mobile}</td>
                                    <td className="text-[#63605B] px-3">{item.createdAt}</td>
                                    <td>
                                        <p
                                            className={`inline-flex items-center mx-3 px-3 py-1 rounded-xl font-semibold
                                                  ${item.status === "UNREAD"
                                                    ? "bg-[#cfcfe6] text-[#6366F1]"
                                                    : item.status === "PENDING"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-green-100 text-green-600"
                                                }`}
                                        >
                                            {item.status}
                                        </p>
                                    </td>
                                    <td>
                                        <p onClick={() => {
                                            setSelectedMessage(item);
                                            if (item.status === "UNREAD") {
                                                updateStatusToPending(item.id);
                                            }
                                        }}

                                            className='inline-flex border-2 p-1 mx-3 rounded-lg border-[#e4dfdf] text-[#1d20db] cursor-pointer'
                                        >
                                            <MdOutlineRemoveRedEye size={20} />
                                        </p>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    <div className='flex justify-between mt-5'>
                        <p>
                            Showing {indexOfFirstRecord + 1} to{" "}
                            {Math.min(
                                indexOfLastRecord,
                                filteredData.length
                            )} of {filteredData.length} entries
                        </p>
                        <div className="flex gap-3">
                            <button
                                disabled={currentPage === 1}
                                onClick={() =>
                                    setCurrentPage(currentPage - 1)
                                }
                                className="px-3 py-1 border-2 border-[#e4dfdf] rounded-lg"
                            >
                                <BiLeftArrowAlt />
                            </button>


                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentPage(index + 1)
                                    }
                                    className={`px-3 py-1 border-2 rounded-lg ${currentPage === index + 1
                                        ? "bg-[#1d20db] text-white"
                                        : "border-[#e4dfdf]"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage(currentPage + 1)
                                }
                                className="px-3 py-1 border-2 border-[#e4dfdf] rounded-lg"
                            >
                                <BiRightArrowAlt />
                            </button>
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
                        <p className="mt-3 font-bold"> {selectedMessage.name}</p>
                        <p className="text-[#63605B]">{selectedMessage.email}</p>
                        <p className="text-[#63605B] flex mt-5">Course: <b className="text-black">{selectedMessage.interestedCourse}</b></p>
                        <p className="text-[#63605B] mt-5 relative">Message </p>
                        <div className="mt-2 p-3 pb-7 bg-gray-100 rounded">
                            {selectedMessage.message}
                            <p className="absolute right-8 text-sm text-[#63605B]  ">{selectedMessage.createdAt}</p>
                        </div>

                        <p className="font-semibold mt-3">Reply</p>
                        <textarea
                            value={replyMessage}
                            onChange={(e) =>
                                setReplyMessage(e.target.value)
                            }
                            placeholder='Type Your Reply...'
                            rows='3'
                            className='border-2 border-[#e4dfdf] mt-3 rounded-xl p-2 pl-5 w-80 '
                        />
                       
                            <button onClick={sendReply} className='px-5 mx-auto py-2 rounded-xl font-bold text-white border-2 bg-[#1d20db] mt-3 flex gap-2'><RiSendPlaneLine className="mt-1" />Send Reply</button>
                       
                    </div>
                )}

            </div>




        </>
    )
}

export default Inquiry;