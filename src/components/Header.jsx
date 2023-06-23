import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-bg-img w-full min-h-screen text-white bg-fixed relative '>
            <div className='absolute w-full bottom-20 left-10 md:left-20 lg:left-20'>
                {/* text container */}
                <div className='flex flex-col items-start sm:gap-3 lg:gap-10'>
                    {/* title-container */}
                    <div className='font-bold sm:text-[3rem] lg:text-[5rem] w-[22rem] flex flex-col sm:leading-[1.1] lg:gap-14'>
                        {/* title */}
                        <h1 className=''>I'M A</h1>
                        <Typed strings={['PHOTOGRAPHER', "JOURNALIST", "WRITER"]} typeSpeed={40} backSpeed={50} loop />
                    </div>
                    <p className='font-light text-[2rem] tracking-wider'>MY NAME</p>
                    {/* icons */}
                    <div className='flex items-center justify-center gap-4'>
                        <FaFacebookF className='icon w-[2rem] h-[2rem] rounded-sm p-2 bg-white fill-black cursor-pointer'/>
                        <FaTwitter className='icon w-[2rem] h-[2rem] rounded-sm px-2 bg-white fill-black cursor-pointer'/>
                        <FaInstagram className='icon w-[2rem] h-[2rem] rounded-sm p-2 bg-white fill-black cursor-pointer'/>
                        <FaPinterest className='icon w-[2rem] h-[2rem] rounded-sm p-2 bg-white fill-black cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header