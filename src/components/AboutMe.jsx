import React from 'react'

const AboutMe = () => {
    return (
        <div className='w-full h-full  flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-center items-center'>
            {/* img */}
            <img className='rounded-sm w-[20rem] lg:w-[30rem] max-h-[40rem] h-[30rem] lg:h-full object-cover bg-top black-and-white' src="https://images.unsplash.com/photo-1616871464674-b7b453bc3fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="/" />
            {/* text */}
            <div className='w-full md:w-1/2 h-full flex flex-col  items-center justify-center'>
                {/* title */}
                <h2 className='text-[2rem] lg:text-[4rem] font-bold uppercase -tracking-tighter mb-[5rem]'>About Me</h2>
                {/* subtext */}
                <div className='w-[75%]'>
                    <p className='text-base md:text-2xl font-light mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat aut assumenda tenetur magnam eius, nostrum minima dignissimos sed placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur perspiciatis nam, molestiae quia rerum repellat vel? Consequatur debitis natus vero, quisquam ea fugit sunt atque ipsam saepe, voluptatum quibusdam!</p>
                    <p className='text-base md:text-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere autem eos debitis.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe