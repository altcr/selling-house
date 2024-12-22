"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import font from "next/font";
import { RiMenuFoldFill, RiMenuFold2Fill } from "react-icons/ri";
import type { DrawerProps } from 'antd';
import { Drawer, Divider } from 'antd';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa6";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="flex flex-1 bg-white p-5 h-[80px] justify-between items-center">
        <Link href={"/"}>
            <font>LOGO</font>
        </Link>
        <div className="flex max-lg:hidden gap-5 justify-center items-center">
            <Link href={"/"}>
                <font className="font-semibold text-sm px-7 py-3 hover:text-background rounded-full hover:bg-[#bce5f9e6] transition ease-in-out duration-300">HOME</font>
            </Link>
            <Link className="font-semibold text-sm" href={"/"}>
                <font className="font-semibold text-sm px-7 py-3 hover:text-background rounded-full hover:bg-[#bce5f9e6] transition ease-in-out duration-300">PROJECTS</font>
            </Link>
            <Link className="font-semibold text-sm" href={"/"}>
                <font className="font-semibold text-sm px-7 py-3 hover:text-background rounded-full hover:bg-[#bce5f9e6] transition ease-in-out duration-300">CONTACT</font>
            </Link>
        </div>
        <div className="flex max-lg:hidden gap-5 justify-center items-center">
            <Link href={"/"}>
                <FaFacebook className="max-lg:hidden" color="#1DB2FF" size={20} />
            </Link>
            <Link href={"/"}>
                <FaInstagram className="max-lg:hidden" color="#1DB2FF" size={20} />
            </Link>
            <Link href={"/"}>
                <FaTwitter className="max-lg:hidden" color="#1DB2FF" size={20} />
            </Link>
            <Divider type="vertical" style={{backgroundColor: "#f0f0f0", height: "20px", width: "2px"}} />
            <FaPhone className="max-lg:hidden" color="#1DB2FF" size={18} />
            <font>90 (544) 591 72 11</font>
        </div>
        <RiMenuFoldFill onClick={() => showDrawer()} className="hidden max-lg:block" color="#1DB2FF" size={27} />
        <Drawer
            title="Menü"
            placement={placement}
            onClose={onClose}
            open={open}
            key={placement}
            width={"70%"}
            closeIcon={<RiMenuFold2Fill size={30} color="black" />}
            footer={
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                        <Link href={"/"}>
                            <FaFacebook className="min-lg:hidden" color="#1DB2FF" size={20} />
                        </Link>
                        <Link href={"/"}>
                            <FaInstagram className="min-lg:hidden" color="#1DB2FF" size={20} />
                        </Link>
                        <Link href={"/"}>
                            <FaTwitter className="min-lg:hidden" color="#1DB2FF" size={20} />
                        </Link>
                    </div>
                    <Divider type="vertical" style={{backgroundColor: "#f0f0f0", height: "20px", width: "2px"}} />
                    <FaPhone className="max-lg:hidden" color="#1DB2FF" size={18} />
                    <font>90 (544) 591 72 11</font>
                </div>
            }
            styles={{
                body: {
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 50,
                    paddingTop: "20%"
                },
                header: {
                    display: "flex", 
                    textAlign: "right"
                }
            }}
            >
            <Link href={"/"}>HOME</Link>
            <Link href={"/"}>PROJECTS</Link>
            <Link href={"/"}>CONTACT</Link>
        </Drawer>
    </nav>
  )
}

export default Navbar