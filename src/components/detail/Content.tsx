import React from 'react';
import Image from 'next/image';
import { FaBath, FaTurkishLiraSign } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";
import { PiGarageBold } from "react-icons/pi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import {DETAIL_LIST} from '@/src/DATA';

const Content = () => {
  return (
    <div className="w-[70%] max-xl:w-[90%] h-auto p-5 flex mx-auto flex-wrap mb-14">
        <div className="flex basis-2/3 max-lg:basis-full h-auto flex-col">
            <font className="text-[#1a1a1a] text-[24px] max-md:text-[20px] font-bold mb-7">Overview</font>
            <div className="w-full h-auto flex flex-wrap gap-4 mb-14">
                <div className="w-[120px] max-md:w-[100px] max-md:h-[70px] bg-[#e7f6fd] h-[90px] rounded-md flex p-4 flex-col justify-center items-center gap-3 hover:bg-white hover:shadow-[0_0_7px_-2px_rgba(0,0,0,0.19)] transition duration-300">
                    <font className="font-medium text-[12px] text-[#8a8a8a]">Bedrooms</font>
                    <font className="flex flex-row items-center text-[13px] text-gray-500 font-medium"><MdMeetingRoom className="mt-[-2px] mr-1" color="#1DB2FF" size={27} /> 3</font>
                </div>
                <div className="w-[120px] max-md:w-[100px] max-md:h-[70px] bg-[#e7f6fd] h-[90px] rounded-md flex p-4 flex-col justify-center items-center gap-3 hover:bg-white hover:shadow-[0_0_7px_-2px_rgba(0,0,0,0.19)] transition duration-300">
                    <font className="font-medium text-[12px] text-[#8a8a8a]">Bathrooms</font>
                    <font className="flex flex-row items-center text-[13px] text-gray-500 font-medium"><FaBath className="mt-[-2px] mr-1" color="#1DB2FF" size={23} /> 1</font>
                </div>
                <div className="w-[120px] max-md:w-[100px] max-md:h-[70px] bg-[#e7f6fd] h-[90px] rounded-md flex p-4 flex-col justify-center items-center gap-3 hover:bg-white hover:shadow-[0_0_7px_-2px_rgba(0,0,0,0.19)] transition duration-300">
                    <font className="font-medium text-[12px] text-[#8a8a8a]">Garage</font>
                    <font className="flex flex-row items-center text-[13px] text-gray-500 font-medium"><PiGarageBold className="mt-[-2px] mr-1" color="#1DB2FF" size={27} /> 1</font>
                </div>
                <div className="w-[120px] max-md:w-[100px] max-md:h-[70px] bg-[#e7f6fd] h-[90px] rounded-md flex p-4 flex-col justify-center items-center gap-3 hover:bg-white hover:shadow-[0_0_7px_-2px_rgba(0,0,0,0.19)] transition duration-300">
                    <font className="font-medium text-[12px] text-[#8a8a8a]">Built Year</font>
                    <font className="flex flex-row items-center text-[13px] text-gray-500 font-medium"><IoCalendarNumberOutline className="mt-[-2px] mr-1" color="#1DB2FF" size={25} /> 2024</font>
                </div>
                <div className="w-[120px] max-md:w-[100px] max-md:h-[70px] bg-[#e7f6fd] h-[90px] rounded-md flex p-4 flex-col justify-center items-center gap-3 hover:bg-white hover:shadow-[0_0_7px_-2px_rgba(0,0,0,0.19)] transition duration-300">
                    <font className="font-medium text-[12px] text-[#8a8a8a]">Area</font>
                    <font className="flex flex-row items-center text-[13px] text-gray-500 font-medium"><LuGitCompareArrows className="mt-[-2px] mr-1" color="#1DB2FF" size={27} /> 130</font>
                </div>
            </div>
            <font className="text-[#1a1a1a] text-[24px] max-md:text-[20px] font-bold mb-7">Description</font>
            <font className="text-[#808080] text-[17px] max-md:text-[15px] font-light mb-14 text-justify">Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace and fabulous art deco details. Formal dining room. Remodeled kitchen with granite countertops, white cabinetry and stainless appliances. Lovely master bedroom has updated bath, beautiful view of the pool. Guest bedrooms have walk-in, cedar closets. Delightful backyard; majestic oaks surround the free form pool and expansive patio, wet bar and grill.</font>
            <font className="text-[#1a1a1a] text-[24px] max-md:text-[20px] font-bold mb-7">Features</font>
            <div className="w-full">
                {
                    DETAIL_LIST.map((item, key) => {
                        return(
                            <ul key={key} className="w-full h-auto p-3 rounded-md flex justify-between even:bg-gray-100">
                                <li className="text-[#1a1a1a] text-[17px] max-md:text-[13px] font-normal">{item.title}</li>
                                <li className="text-[#808080] text-[17px] max-md:text-[13px] font-light">{item.value}</li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
        <div className="flex basis-1/3 max-lg:hidden p-4 bg-red-300 h-auto">
            <div className="flex w-full h-auto">
                <div className="flex basis-1/3 h-[120px] rounded-full overflow-hidden">
                    <Image alt='Agent' src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/05/Melissa-William-210x210.jpg"} width={120} height={120} className="rounded-full hover:scale-110 duration-300" />
                </div>
                <div className="flex basis-2/3">
                    <font>Melissa William</font>
                    <font>Agent</font>
                </div>
            </div>
            <div className=""></div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default Content;