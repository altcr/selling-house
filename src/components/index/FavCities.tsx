"use client"
import React, {useState} from 'react';
import { MdArrowRight } from "react-icons/md";
import Link from 'next/link';

const FavCities = () => {
    const [isHovered, setIsHovered] = useState(null)
    const handleMouseOver = (value) => {
        setIsHovered(value);
    }

    return (
        <div className="flex flex-1 overflow-hidden p-4 justify-center items-center mt-10">
            <div className="w-[70%] p-3 flex flex-col">
                <font className="font-semibold text-3xl">FAVOURITE LOCATIONS</font>
                <font className="font-normal text-sm  mt-3 text-slate-400">Discover the most popular places at different locations.</font>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 flex-wrap mt-5 py-5 gap-7 max-lg:flex-col">
                    <div className="min-h-[400px] max-lg:min-h-[300px] rounded-xl flex justify-center items-end relative max-lg:mb-10" onMouseOver={() => handleMouseOver(1)} onMouseLeave={() => setIsHovered(null)} style={{backgroundImage: `url('https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/blog-image-3-1-600x720.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <div className={`${isHovered == "1" ? "flex" : "hidden" } w-full h-full hover:bg-[#00000063] transition ease-in-out duration-300 absolute t-0 l-0 z-0 rounded-2xl justify-center items-center`}>
                            <Link href={"/"}>
                                <button className="bg-white w-[130px] h-[40px] max-lg:w-[110px] flex flex-row justify-center items-center text-sm max-lg:text-xs font-medium rounded-3xl">See All <MdArrowRight size={23} /></button>
                            </Link>
                        </div>
                        <div className="w-[50%] h-[90px] max-lg:h-[60px] max-lg:mb-[-30px] bg-white rounded-2xl mb-[-45px] pb-2 shadow-md flex-col justify-between items-center z-10 flex">
                            <font className="px-6 py-[6px] max-lg:px-5 max-lg:py-[4px] bg-background text-white rounded-3xl text-sm max-lg:text-xs font-semibold mt-[-15px]">Manisa</font>
                            <font className="text-3xl max-lg:text-xl font-semibold">5</font>
                            <font className="text-sm max-lg:text-xs font-light text-gray-400">Announcement</font>
                        </div>
                    </div>
                    <div className="min-h-[400px] max-lg:min-h-[300px] rounded-xl flex justify-center items-end relative max-lg:mb-10" onMouseOver={() => handleMouseOver(2)} onMouseLeave={() => setIsHovered(null)} style={{backgroundImage: `url('https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/Untitled-3-600x1080.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <div className={`${isHovered == "2" ? "flex" : "hidden" } w-full h-full hover:bg-[#00000063] transition ease-in-out duration-300 absolute t-0 l-0 z-0 rounded-2xl justify-center items-center`}>
                            <Link href={"/"}>
                                <button className="bg-white w-[130px] h-[40px] max-lg:w-[110px] flex flex-row justify-center items-center text-sm max-lg:text-xs font-medium rounded-3xl">See All <MdArrowRight size={23} /></button>
                            </Link>
                        </div>
                        <div className="w-[50%] h-[90px] max-lg:h-[60px] max-lg:mb-[-30px] bg-white rounded-2xl mb-[-45px] pb-2 shadow-md flex-col justify-between items-center z-10 flex">
                            <font className="px-6 py-[6px] max-lg:px-5 max-lg:py-[4px] bg-background text-white rounded-3xl text-sm max-lg:text-xs font-semibold mt-[-15px]">Kayseri</font>
                            <font className="text-3xl max-lg:text-xl font-semibold">17</font>
                            <font className="text-sm max-lg:text-xs font-light text-gray-400">Announcement</font>
                        </div>
                    </div>
                    <div className="min-h-[400px] max-lg:min-h-[300px] rounded-xl flex justify-center items-end relative max-lg:mb-10" onMouseOver={() => handleMouseOver(3)} onMouseLeave={() => setIsHovered(null)} style={{backgroundImage: `url('https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/chicago-final-600x720.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <div className={`${isHovered == "3" ? "flex" : "hidden" } w-full h-full hover:bg-[#00000063] transition ease-in-out duration-300 absolute t-0 l-0 z-0 rounded-2xl justify-center items-center`}>
                            <Link href={"/"}>
                                <button className="bg-white w-[130px] h-[40px] max-lg:w-[110px] flex flex-row justify-center items-center text-sm max-lg:text-xs font-medium rounded-3xl">See All <MdArrowRight size={23} /></button>
                            </Link>
                        </div>
                        <div className="w-[50%] h-[90px] max-lg:h-[60px] max-lg:mb-[-30px] bg-white rounded-2xl mb-[-45px] pb-2 shadow-md flex-col justify-between items-center z-10 flex">
                            <font className="px-6 py-[6px] max-lg:px-5 max-lg:py-[4px] bg-background text-white rounded-3xl text-sm max-lg:text-xs font-semibold mt-[-15px]">Sivas</font>
                            <font className="text-3xl max-lg:text-xl font-semibold">12</font>
                            <font className="text-sm max-lg:text-xs font-light text-gray-400">Announcement</font>
                        </div>
                    </div>
                    <div className="min-h-[400px] max-lg:min-h-[300px] rounded-xl flex justify-center items-end relative max-lg:mb-10" onMouseOver={() => handleMouseOver(4)} onMouseLeave={() => setIsHovered(null)} style={{backgroundImage: `url('https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-RqO6kwm4tZY-unsplash-1-600x1080.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <div className={`${isHovered == "4" ? "flex" : "hidden" } w-full h-full hover:bg-[#00000063] transition ease-in-out duration-300 absolute t-0 l-0 z-0 rounded-2xl justify-center items-center`}>
                            <Link href={"/"}>
                                <button className="bg-white w-[130px] h-[40px] max-lg:w-[110px] flex flex-row justify-center items-center text-sm max-lg:text-xs font-medium rounded-3xl">See All <MdArrowRight size={23} /></button>
                            </Link>
                        </div>
                        <div className="w-[50%] h-[90px] max-lg:h-[60px] max-lg:mb-[-30px] bg-white rounded-2xl mb-[-45px] pb-2 shadow-md flex-col justify-between items-center z-10 flex">
                            <font className="px-6 py-[6px] max-lg:px-5 max-lg:py-[4px] bg-background text-white rounded-3xl text-sm max-lg:text-xs font-semibold mt-[-15px]">İzmir</font>
                            <font className="text-3xl max-lg:text-xl font-semibold">25</font>
                            <font className="text-sm max-lg:text-xs font-light text-gray-400">Announcement</font>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavCities;