import React, { useState, useRef } from 'react'
import { MdPhone, MdMail } from "react-icons/md";


const Contact = () => {

    // logic for Copying email and phone number
    const [emailCopied, setEmailCopied] = useState(false)
    const [phoneCopied, setPhoneCopied] = useState(false)

    const handleEmailCopy = () => {
        const emailText = 'user123@gmail.com';
        navigator.clipboard.writeText(emailText);
        setEmailCopied(true)
        setTimeout(() => {
            setEmailCopied(false);
        }, 1000);
    }
    const handlePhoneCopy = () => {
        const phoneText = '(123)-456-7890';
        navigator.clipboard.writeText(phoneText);
        setPhoneCopied(true)
        setTimeout(() => {
            setPhoneCopied(false);
        }, 1000);
    }

    // form logic
    const form = useRef();

    // not used in demo version
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='w-full h-full mb-[15.1rem] lg:mb-0 grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center '>
            {/* text-left */}
            <div className='flex flex-col items-center justify-center h-[43rem]'>
                {/* title */}
                <h2 className='font-[300] uppercase tracking-wider text-[2rem] lg:text-[4rem] mb-24 '>Contact Me</h2>
                {/* phone & email */}
                <div className='flex flex-col gap-10 text-[1rem] lg:text-2xl font-thin mb-6'>
                    {/* email container */}
                    <div className='relative'>
                        <p onClick={handleEmailCopy} className='flex items-center hover:underline cursor-pointer'><MdMail className='mr-1' /> user123@gmail.com</p>
                        {emailCopied && <p className='absolute fade-in-out top-[-30px] left-[100px] italic tracking-wider text-[#495057]'>Copied</p>}
                    </div>
                    {/* phone container */}
                    <div className='relative'>
                        <p onClick={handlePhoneCopy} className='flex items-center hover:underline cursor-pointer'><MdPhone className='mr-1' /> (123)-456-7890</p>
                        {phoneCopied && <p className='absolute fade-in-out top-[-30px] left-[100px] italic tracking-wider text-[#495057]'>Copied</p>}
                    </div>
                </div>
                {/* form */}
                <form ref={form} onSubmit={sendEmail} className='w-full h-full'>
                    <div className='w-full flex flex-col gap-4 mb-6'>
                        {/* name */}
                        <div className='w-full flex flex-col justify-center gap-1'>
                            <label className='font-[400]' htmlFor="Name">Name</label>
                            <input name='user_name' required className='text-[#495057] border border-[#343a40] py-[.2rem] pl-1' type="text" placeholder='Your name here...' />
                        </div>
                        {/* email */}
                        <div className='flex flex-col justify-center'>
                            <label className='font-[400]' htmlFor="Email">Email</label>
                            <input name='user_email' required className='text-[#495057] border border-[#343a40] py-[.2rem] pl-1' type="email" placeholder='Your email here...' />
                        </div>
                        {/* message */}
                        <div>
                            <label className='font-[400]' htmlFor="Message">Message</label>
                            <textarea name="user_message" required className='text-[#495057] border border-[#343a40] w-full h-20 py-[.2rem] pl-1' placeholder='Your message here...'></textarea>
                        </div>
                    </div>
                    <button className='bg-[#343a40] text-[#f8f9fa]  w-[6rem] h-[2.6rem] hover:scale-110 transition-all ease-in-out duration-200'>SUBMIT</button>
                </form>
            </div>
            {/* img */}
            <img className='rounded-sm lg:w-[30rem] max-h-[20rem] w-[100%] lg:min-h-[40rem] object-cover black-and-white' src="https://images.unsplash.com/photo-1580929385774-75359d333b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="/" />
        </div>
    )
}

export default Contact