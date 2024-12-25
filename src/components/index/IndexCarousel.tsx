"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import { FaBath, FaTurkishLiraSign, FaLocationDot } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";

const IMAGES  = [
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/11/spacejoy-4xRP0Ajk9ys-unsplash.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/office-working-space-scaled.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-05.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2022/06/office-working-space-scaled.jpg",
    "https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/exterior-05.jpg",
];  

function customPaging(i) {
    return <div className="w-2 h-2 rounded-full bg-[#bce5f9e6] hover:bg-background"></div>;
}
  
function appendDots(dots) {
    return (
        <div style={{position: "relative", justifyItems: "center", top: 0}}>
            <ul className="px-5 py-1 shadow-sm rounded-2xl" style={{ margin: "1px", borderWidth: "1px", borderColor: "#eee" }}> {dots} </ul>
        </div>
    );
}

const IndexCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        customPaging: customPaging,
        appendDots: appendDots,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <div className="slider-container w-[70%] min-h-[500px] m-auto py-3">
      <Slider {...settings}>
        {
            IMAGES.map((item, key) => {
                return(
                    <div className="w-[300px] min-h-[400px] mb-5 rounded-xl relative" key={key}>
                        <div className="w-full h-[250px] relative">
                            <Link href="/">
                                <Image src={item} fill alt={item} className="rounded-xl" /> 
                            </Link>
                        </div>
                        <div className="my-5">
                            <font className="text-lg font-semibold">Villa on Hollywood Boulevard</font>
                            <font className="flex flex-row text-xs font-medium text-gray-400 gap-1 items-center mt-2"><FaLocationDot className="" color="#1DB2FF" size={18} />2. Anafartalar, ŞEHZADELER/MANİSA</font>
                            <div className="w-full h-auto flex flex-row max-lg:flex-col justify-between my-4 min-lg:items-center">
                                <div className="h-full flex flex-col gap-2 justify-center">
                                    <div className="flex flex-row">
                                        <font className="flex flex-row text-sm gap-1"><MdMeetingRoom className="mt-[-2px]" color="#1DB2FF" size={22} />4</font>
                                        <font className="flex flex-row text-sm ml-4 gap-1"><FaBath className="" color="#1DB2FF" size={18} />1</font>
                                        <font className="flex flex-row text-sm ml-4 gap-1"><LuGitCompareArrows className="" color="#1DB2FF" size={19} />145</font>
                                    </div>
                                </div>
                                <div className="min-w-[20%] h-full flex flex-col gap-5 justify-center max-lg:mt-5">
                                    <font className="flex flex-row text-lg font-semibold gap-1 items-center">1.250.500<FaTurkishLiraSign className="mt-[-2px]" color="#1DB2FF" size={16} /></font>
                                </div>
                            </div>
                            <font className="w-full text-xs text-gray-400 font-light">Eklenme Tarihi: 15 Aralık 2024</font>
                        </div>
                    </div>
                )
            })
        }
      </Slider>        
    </div>
  )
}

export default IndexCarousel;