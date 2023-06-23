import React from 'react'
import { TfiClose } from "react-icons/tfi";
const Modal = ({ selectedImg, closeModal }) => {


    return (
        <div className="fixed z-50 top-0 left-0 duration-300 transition-all ease-in-out flex items-center justify-center w-screen h-screen bg-black bg-opacity-80">
            <div className="w-full h-full flex items-center justify-center max-w-3xl max-h-[25rem] md:max-h-[50rem]">
                <img className="w-full h-full object-contain fade-in" src={selectedImg} alt="Selected Image" />
                <TfiClose onClick={closeModal} className='fixed w-10 h-10 top-5 right-5 fill-white cursor-pointer'/>
            </div>
        </div>
    );
};


export default Modal