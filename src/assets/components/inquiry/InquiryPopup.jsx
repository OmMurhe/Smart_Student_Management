
    import { BiMessageRoundedDetail } from "react-icons/bi";
    import { FaRegUser } from "react-icons/fa";
    import { MdOutlineEmail } from "react-icons/md";
    import { LuPhone } from "react-icons/lu";
    import { FaGraduationCap } from "react-icons/fa";
    import { BiMessageDetail } from "react-icons/bi";
    import { LiaTelegramPlane } from "react-icons/lia";
    import React, { useState } from "react";
    import axios from "axios";


    const InquiryPopup = ({ onClose }) => {
        const [errors, setErrors] = useState({});
     
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            mobile: "",
            interestedCourse: "",
            message: "",
        });

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = async () => {
            try {
                await axios.post(
                    "http://localhost:8080/inquiry",
                    formData
                );

                alert("Inquiry Submitted Successfully");

                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    interestedCourse: "",
                    message: "",
                });

                onClose();

            } catch (error) {
    console.log("API Error:", error.response.data);

    setErrors(error.response.data);

    console.log("After setErrors");
}
        };
        return (

            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm  z-[50] flex justify-center items-center h-screen">

                <div className="bg-white w-[550px] max-w-[95%] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative">



                        <div className=''>
                            <div className='bg-gradient-to-r rounded-t-2xl from-[#2d1db8] to-[#6c3cff] flex justify-center gap-3 py-5 text-white relative'>
                                <span className='fond-bold '><BiMessageRoundedDetail size={64} /></span>
                                <div>
                                    <h1 className='font-bold text-2xl'>Get Free Counseling</h1>
                                    <p className='text-sm'>Fill out the from and our expert will <br />contact you soon!</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 h-8 w-8 rounded-full"
                                >
                                    ✕
                                </button>

                            </div>
                            <div className='px-8 py-4'>
                                <h1 className='font-bold'>Name</h1>
                                <div className='relative'>
                                    <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><FaRegUser /></span>
                                    <input
                                        type='text'
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Enter your full name'
                                        className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full' />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>



                                <h1 className='font-bold mt-4'>Email</h1>
                                <div className='relative'>
                                    <span className='absolute left-4 mt-5  text-xl  pt-3 -translate-y-1/2 text-gray-500'><MdOutlineEmail /></span>
                                    <input
                                        type='email'
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your Email'
                                        className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-1 w-full' />
                                 
                                 {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <h1 className='font-bold mt-4'>Mobile</h1>
                                <div className='relative'>
                                    <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><LuPhone /></span>
                                    <input
                                        type='text'
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder='Enter your mobile number'
                                        className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full' />
                                    {errors.mobile && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>

                                <h1 className='font-bold mt-4'>Interested Course</h1>
                                <div className='relative'>
                                    <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><FaGraduationCap /></span>
                                    <select
                                        name="interestedCourse"
                                        value={formData.interestedCourse}
                                        onChange={handleChange}
                                        className='border-2 border-gray-300 rounded-xl p-2 pl-12  mt-2  w-full'>
                                        <option value="">Select a course</option>
                                        <option value='Web Development'>Web Development</option>
                                        <option value='App Developement'>App Developement</option>
                                        <option value='Data Science'>Data Science</option>
                                        <option value='UI/UX Design'>UI/UX Design</option>
                                        <option value='Digital Marketing'>Digital Marketing</option>
                                        <option value='Cyber Security'>Cyber Security</option>
                                        <option value='Artificial Intelligence'>Artificial Intelligence</option>
                                        <option value='Cloud Computing'>Cloud Computing</option>
                                    </select>
                                    {errors.interestedCourse && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.interestedCourse}
                                        </p>
                                    )}
                                </div>

                                <h1 className='font-bold mt-4'>Message</h1>
                                <div className='relative'>
                                    <span className='absolute left-4 mt-5  text-xl  pt-5 -translate-y-1/2 text-gray-500'><BiMessageDetail /></span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Type your message here...'
                                        rows='3'
                                        className='border-2 border-gray-300 rounded-xl p-2 pl-12 mt-2  w-full'

                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                                <button className=' py-3 bg-gradient-to-r rounded-t-2xl from-[#2d1db8] to-[#6c3cff] rounded-xl mt-3 font-bold text-white flex justify-center gap-2 w-full' type="button" onClick={handleSubmit}>Submit Inquiry<span className='mt-'><LiaTelegramPlane size={24} /></span></button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    };

    export default InquiryPopup;