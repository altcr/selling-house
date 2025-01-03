"use client"
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from 'react-icons/rx';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";


const SliderItem = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1250px] h-auto w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[680px] max-md:h-[300px] rounded-2xl bg-center bg-cover duration-300'></div>
      {/* Left Arrow */}
      <button onClick={prevSlide} className='block max-md:hidden absolute top-[46%] -translate-x-0 hover:bg-background transition ease-in-out duration-300 translate-y-[-46%] left-[-8%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <IoIosArrowBack size={26} />
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className='block max-md:hidden absolute top-[46%] -translate-x-0 hover:bg-background transition ease-in-out duration-300 translate-y-[-46%] right-[-8%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <IoIosArrowForward size={26} />
      </button>
      <div className='flex h-auto gap-6 justify-center mt-8 flex-wrap'>
        {slides.map((slide, slideIndex) => (
            <Image key={slideIndex} src={slide.url} className={`${slideIndex === currentIndex && "outline outline-[5px] outline-[#e7f6fd]"} rounded-lg cursor-pointer max-md:w-[100px]`} width={160} height={80} style={{height: "80px"}} alt={slide.url} onClick={() => goToSlide(slideIndex)} />
        ))}
      </div>
    </div>
  );
    
}

export default SliderItem;
