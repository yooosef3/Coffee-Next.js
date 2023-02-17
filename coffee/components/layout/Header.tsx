import { CgMenuRight } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Menu from "../header/Menu";
import React from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import coffee from '../../public/images/coffee-logo.webp'

const Header = () => {
    return (
        <header>
        <div className="p-5 lg:p-10 flex flex-col md:flex-row-reverse md:justify-between gap-4">
            <div className="flex justify-between md:justify-end border-b md:border-b-0 md:gap-4 border-gray-600 pb-4 md:w-[60%] lg:w-[55%] 2xl:w-[52%]">
                <RiSearch2Line className="cursor-pointer text-2xl hover:text-gray-400 duration-200"/>
                <Link href='/' className="cursor-pointer md:order-first md:ml-auto">
                    <Image alt="logo" className=" w-28 " src={coffee} height={300} width={400}/>
                </Link>
                <TfiMenu className="cursor-pointer text-2xl xl:hidden hover:text-gray-400 duration-200"/>
            </div>
            <div className="flex justify-between md:justify-start md:w-[10%] md:gap-4">
                <CgMenuRight className="cursor-pointer text-2xl md:hidden hover:text-gray-400 duration-200"/>
                <FiShoppingCart className="cursor-pointer text-2xl hover:text-gray-400 duration-200"/>
                <HiUser className="cursor-pointer text-2xl hover:text-gray-400 duration-200"/>
            </div>
        </div>
        <Menu />
        </header>
    );
};

export default Header;