import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from './Modal';

const Gallery = () => {
    // buttons for switching gallery content
    const [selectedBtn, setSelectedBtn] = useState('1');
    const handleSelectedBtn = (button) => setSelectedBtn(button);
    // modal for click img
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    const handleImgClick = (imgUrl) => {
        setIsModalOpen(!isModalOpen);
        setSelectedImg(imgUrl)
    };
    // closeing modal
    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImg('')
    }
    


    return (
        <div className='w-full h-full gallery-bg-img flex flex-col justify-center items-center py-12'>
            {/* title */}
            <h1 className='font-[300] tracking-wider mb-12 text-4xl lg:text-[4rem] uppercase  text-white'>My Photos</h1>
            {/* buttons */}
            <div className='w-full h-full flex gap-2 lg:gap-12 items-center justify-center text-sm lg:text-2xl'>
                <button onClick={() => handleSelectedBtn('1')} className='flex items-center justify-center transition duration-300 hover:text-white hover:bg-black hover:scale-110 hover:drop-shadow active:scale-95 active:drop-shadow-2xl bg-white drop-shadow-lg w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] px-8 lg:px-8'>ONE</button>
                <button onClick={() => handleSelectedBtn('2')} className='flex items-center justify-center transition duration-300 hover:text-white hover:bg-black hover:scale-110 hover:drop-shadow active:scale-95 active:drop-shadow-2xl bg-white drop-shadow-lg w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] px-8 lg:px-8'>TWO</button>
                <button onClick={() => handleSelectedBtn('3')} className='flex items-center justify-center transition duration-300 hover:text-white hover:bg-black hover:scale-110 hover:drop-shadow active:scale-95 active:drop-shadow-2xl bg-white drop-shadow-lg w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] px-8 lg:px-8'>THREE</button>
                <button onClick={() => handleSelectedBtn('4')} className='flex items-center justify-center transition duration-300 hover:text-white hover:bg-black hover:scale-110 hover:drop-shadow active:scale-95 active:drop-shadow-2xl bg-white drop-shadow-lg w-[2.5rem] h-[2.5rem] lg:w-[5rem] lg:h-[5rem] px-8 lg:px-8'>FOUR</button>
            </div>
            {/* Rendering modal if isModalOpen is true */}
            {isModalOpen && <Modal selectedImg={selectedImg} closeModal={closeModal} />}
            {/* container */}
            <div className='w-full h-[50rem] mt-3 text-4xl font-bold'>
                {selectedBtn === '1' &&
                    <div className='flex justify-center items-center w-full h-full p-4'>
                        {/* img container 1 */}
                        <div className='w-[50%] md:w-[75%] h-full max-h-[75%] hide-scrollbar overflow-y-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-16 lg:gap-8 fade-in'>
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80")}} className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678257355149-6eda1755b1a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678811118543-14d19cb00508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")}} className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678811118543-14d19cb00508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678806525080-a3ef276e954d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678806525080-a3ef276e954d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678792340593-f8692e76e46d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678792340593-f8692e76e46d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678829687532-015405317abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678829687532-015405317abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678802676747-308470207d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678802676747-308470207d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678715065731-9dd74366ce2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678715065731-9dd74366ce2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        </div>
                    </div>
                }
                {selectedBtn === '2' &&
                    <div className='flex justify-center items-center w-full h-full p-4'>
                        {/* img container 2 */}
                        <div className='w-[50%] md:w-[75%] h-full max-h-[75%] hide-scrollbar overflow-y-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-16 lg:gap-8 fade-in'>
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678811118426-7a445633d350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678811118426-7a445633d350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678817546297-8b897343b8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678817546297-8b897343b8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678285901330-bb80e5432cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678285901330-bb80e5432cd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678728934705-53a381237cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678819442233-ba9ab963ef6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678819442233-ba9ab963ef6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678816438629-18c69ebdd19a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678816438629-18c69ebdd19a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678823065600-db15d6fc88f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678823065600-db15d6fc88f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678810716276-86b1d9f692b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678810716276-86b1d9f692b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                    </div>
                }
                {selectedBtn === '3' &&
                    <div className='flex justify-center items-center w-full h-full p-4'>
                        {/* img container 3 */}
                        <div className='w-[50%] md:w-[75%] h-full max-h-[75%] hide-scrollbar overflow-y-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-16 lg:gap-8 fade-in'>
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678814738228-add199069990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678814738228-add199069990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678781190808-dfcedc0c5ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678781190808-dfcedc0c5ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678791600882-e190d6b765f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678791600882-e190d6b765f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678729982804-0bcb5000c589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678729982804-0bcb5000c589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678753713253-f41371730985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678753713253-f41371730985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678732859707-ee9316faf3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678732859707-ee9316faf3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678774267507-2e40d59f43c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678774267507-2e40d59f43c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1580&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678797025678-8f73b51a441a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678797025678-8f73b51a441a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                        </div>
                    </div>
                }
                {selectedBtn === '4' &&
                    <div className='flex justify-center items-center w-full h-full p-4'>
                        {/* img container 4 */}
                        <div className='w-[50%] md:w-[75%] h-full max-h-[75%] hide-scrollbar overflow-y-auto grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-16 lg:gap-8 fade-in'>
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678730505377-7b21cabb6485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678730505377-7b21cabb6485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678768316189-605727fae515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678768316189-605727fae515?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678791589088-f26ed2590a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678791589088-f26ed2590a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678748669120-02f0de8c3e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678748669120-02f0de8c3e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678753713332-90e2eb8d9adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678753713332-90e2eb8d9adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678756228910-f0f7b316d7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678756228910-f0f7b316d7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678762200388-51e11225d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678762200388-51e11225d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80" />
                            <img onClick={() => {handleImgClick("https://images.unsplash.com/photo-1678736476504-79128ed74266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")}}  className='w-full h-full black-and-white object-cover cursor-pointer hover:scale-110 ease duration-300' src="https://images.unsplash.com/photo-1678736476504-79128ed74266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Gallery