import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-2 py-8 bg-[#343a40]'>
            <img className='w-28 h-28 rounded-[55px] object-cover bg-center black-and-white' src="https://images.unsplash.com/photo-1616871464674-b7b453bc3fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <h3 className='text-white font-thin tracking-wider uppercase'>My Name</h3>
            <div className='flex items-center justify-center gap-4 shadow-lg rounded-md'>
                <FaFacebookF className='icon-footer w-[2.5rem] h-[2.5rem] rounded-sm p-2 py-[5px] fill-white' />
                <FaTwitter className='icon-footer w-[2.5rem] h-[2.5rem] rounded-sm px-2 fill-white' />
                <FaInstagram className='icon-footer w-[2.5rem] h-[2.5rem] rounded-sm px-2  fill-white' />
                <FaPinterest className='icon-footer w-[2.5rem] h-[2.5rem] rounded-sm px-2 fill-white' />
            </div>
        </div>
    )
}

export default Footer