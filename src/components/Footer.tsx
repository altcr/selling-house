import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import LOGO from "@/public/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden h-auto bg-[#e7f6fd] pb-10">
      <div className="w-[70%] h-auto grid xl:grid-cols-2 max-md:grid-cols-1 mx-auto py-8">
        <div className="flex max-md:justify-center">
          <Link href={"/"}>
              <Image src={LOGO} width={150} height={50} alt='Logo' />
          </Link>
        </div>
        <div className="flex flex-row justify-end items-center gap-7 max-md:justify-center max-md:mt-3">
          <Link href={"/"}>
              <FaFacebook color="#1DB2FF" size={20} />
          </Link>
          <Link href={"/"}>
              <FaInstagram color="#1DB2FF" size={20} />
          </Link>
          <Link href={"/"}>
              <FaTwitter color="#1DB2FF" size={20} />
          </Link>
        </div>
      </div>
      <div className="w-[70%] h-auto grid xl:grid-cols-2 max-md:grid-cols-1 mx-auto">
        <div className="flex max-md:justify-center max-md:px-3 text-justify">
          <font className="text-[#7A7A7A] font-medium text-lg max-lg:text-sm">Experience the epitome of flexibility and empower your real estate ventures with our feature-rich theme.</font>
        </div>
        <div className="flex flex-row justify-end items-center gap-7 max-md:justify-center max-md:mt-3">
          <button className="w-[40%] h-[50px] max-lg:h-[40px] max-lg:mt-3 bg-white text-background text-lg max-lg:text-sm font-semibold hover:bg-background hover:border-white hover:text-white hover:border-[2px] rounded-full flex flex-row gap-2 justify-center items-center">Contact Us <IoIosSend /></button>
        </div>
      </div>
      <div className="w-[70%] min-h-[120px] mx-auto rounded-full max-md:rounded-3xl max-md:py-7 md:px-5 bg-[#bce5f9e6] mt-14 flex max-md:flex-col justify-center items-center gap-6">
        <font>Need Help?</font>
        <button className="w-[200px] h-[45px] max-lg:h-[40px] bg-white text-md text-background font-medium hover:bg-background hover:text-white rounded-full flex flex-row gap-2 justify-center items-center transition ease-in-out duration-300"><FaPhone /> +90 555 55 55</button>
        <button className="w-[200px] h-[45px] max-lg:h-[40px] bg-white text-md text-background font-medium hover:bg-background hover:text-white rounded-full flex flex-row gap-2 justify-center items-center transition ease-in-out duration-300"><FaWhatsapp /> +90 555 55 55</button>
        <button className="w-[200px] h-[45px] max-lg:h-[40px] bg-white text-md text-background font-medium hover:bg-background hover:text-white rounded-full flex flex-row gap-2 justify-center items-center transition ease-in-out duration-300"><FaEnvelope /> info@site.com</button>
      </div>
      <div className="w-[70%] mx-auto mt-12 flex justify-between max-md:flex-col max-md:items-center max-md:gap-2">
        <font className="text-[#7A7A7A] font-medium text-sm">© 2024. All rights reserved.</font>
        <font className="text-[#7A7A7A] font-medium text-sm">Designed by <Link target='_blank' href={"https://alitecer.com"}>alitecer.com</Link></font>
      </div>
    </footer>
  )
}

export default Footer;