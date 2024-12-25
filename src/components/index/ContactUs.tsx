import React from 'react';
import Image from 'next/image';
import CONTACTSVG from "@/public/contact-us.svg";
import { IoIosSend } from "react-icons/io";

const ContactUs = () => {
  return (
    <div className="w-full min-h-[400px] py-20 mt-28 bg-background relative">
        <div className="w-[3%] max-lg:w-[11%] h-[40px] bg-[#76D0FF] absolute left-32 max-lg:left-12 mt-[-100px] rounded-md"></div>
        <div className="w-[70%] px-3 max-lg:px-1 h-full mx-auto">
            <div className="flex flex-wrap max-lg:flex-col h-full max-lg:pb-12 justify-between border-b-[1px] border-b-[#ebeaea69]">
                <div className="flex w-[60%] max-lg:w-full flex-col pb-16 max-lg:pb-10 gap-4">
                    <font className="text-white font-semibold text-4xl max-lg:text-2xl text-justify">Finding a perfect property have never been this easy earlier</font>
                    <font className="text-gray-200 font-medium text-lg max-lg:text-md text-justify">You can find perfectly suited properties for your all needs with ease.</font>
                </div>
                <div className="flex w-[30%] max-lg:w-full self-center max-lg:justify-center">
                    <button className="w-[60%] max-lg:w-[50%] h-[50px] bg-white text-background text-lg max-lg:text-sm font-semibold hover:bg-background hover:border-white hover:text-white hover:border-[2px] rounded-full flex flex-row gap-2 justify-center items-center">Contact Us <IoIosSend /></button>
                </div>
            </div>
        </div>
        <div className="w-[70%] px-3 max-lg:px-1 h-auto mt-16 mx-auto flex flex-row max-lg:flex-col gap-10">
            <div className="flex w-[45%] max-lg:w-[80%] flex-col">
                <font className="text-gray-100 font-medium text-xl max-lg:text-md">Email</font>
                <font className="text-white font-semibold text-3xl max-lg:text-2xl">info@site.com</font>
            </div>
            <div className="flex w-[40%] max-lg:w-[80%] flex-col">
                <font className="text-gray-100 font-medium text-xl max-lg:text-md">Phone Number</font>
                <font className="text-white font-semibold text-3xl max-lg:text-2xl">+90 555 55 55</font>
            </div>
        </div>    
        <Image src={CONTACTSVG} width={350} height={150} alt='contact-us' className="contact-bg" style={{position: "absolute", right: 0, bottom: -15}} />
    </div>
  )
}

export default ContactUs;