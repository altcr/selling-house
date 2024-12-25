import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { FaBath, FaTurkishLiraSign, FaLocationDot } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";

const IMAGES  = [
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/office-working-space-scaled.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-05.jpg"
]   

const Slider = () => {
  return (
    <div className="w-full h-[auto]">
        <Carousel arrows={false} dots={false} autoplay={true} draggable={true}>
            {
                IMAGES.map((item, key) => {
                    return(
                        <div className="w-full h-[800px] max-lg:h-[300px] relative z-[1]" key={key}>
                            <Image src={item} fill alt={item} />
                        </div>
                    )
                })
            }
        </Carousel>
        <div className="w-[60%] max-lg:w-[90%] max-lg:h-[100px] mx-auto h-[130px] bg-white mt-[-65px] max-lg:mt-[-50px] mb-10 z-[2] relative rounded-3xl shadow-md flex flex-row justify-between">
            <div className="h-full flex flex-col justify-center pl-4 gap-4">
                <font className="text-2xl max-lg:text-sm font-semibold">Villa on Hollywood Boulevard</font>
                <font className="flex flex-row text-sm max-lg:text-xs font-medium text-gray-400 gap-1 items-center"><FaLocationDot className="" color="#1DB2FF" size={20} />2. Anafartalar, ŞEHZADELER/MANİSA</font>
            </div>
            <div className="h-full flex flex-col gap-5 justify-center max-lg:hidden">
                <div className="flex flex-row">
                    <font className="text-gray-400 font-semibold text-sm">Oda</font>
                    <font className="text-gray-400 font-semibold text-sm ml-8">Banyo</font>
                    <font className="text-gray-400 font-semibold text-sm ml-7">Alan(M2)</font>
                    
                </div>
                <div className="flex flex-row">
                    <font className="flex flex-row text-sm gap-1"><MdMeetingRoom className="mt-[-2px]" color="#1DB2FF" size={25} />4</font>
                    <font className="flex flex-row text-sm ml-8 gap-1"><FaBath className="" color="#1DB2FF" size={20} />1</font>
                    <font className="flex flex-row text-sm ml-8 gap-1"><LuGitCompareArrows className="" color="#1DB2FF" size={22} />145</font>
                </div>
            </div>
            <div className="min-w-[13%] h-full flex flex-col gap-4 justify-center">
                <font className="text-background max-lg:text-sm">Satılık</font>
                <font className="flex flex-row text-2xl max-lg:text-[20px] font-semibold gap-1 items-center max-lg:mr-3">1.250.500<FaTurkishLiraSign className="mt-[-4px]" color="#1DB2FF" size={20} /></font>
            </div>
        </div>
    </div>
  )
}

export default Slider