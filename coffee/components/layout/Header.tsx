import React, {useState} from 'react';

import { BsXLg } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import Image from "next/image";
import LeftMenu from '../header/LeftMenu';
import Link from "next/link";
import Menu from "../header/Menu";
import MenuCart from "../header/MenuCart";
import { RiSearch2Line } from "react-icons/ri";
import RightMenu from '../header/RightMenu';
import { TfiMenu } from "react-icons/tfi";
import coffee from '../../public/images/coffee-logo.webp'

const Header = () => {
    const [toggle , setToggle] = useState(false);
    const [open , setOpen] = useState(false);
    const [right, setRight] = useState(false);
    const [left, setLeft] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [searched, setSearched] = useState('');
    return (
        <header>
        <div className="p-5 lg:p-10 flex flex-col md:flex-row-reverse md:justify-between gap-4">
            <div className="flex justify-between md:justify-end border-b md:border-b-0 md:gap-4 border-gray-600 pb-4 md:w-[60%] lg:w-[55%] 2xl:w-[52%]">
                {
                    openSearch ? 
                    <BsXLg onClick={() => setOpenSearch(false)} className='cursor-pointer text-2xl hover:text-red-600 duration-200'/>
                    :
                    <RiSearch2Line onClick={() => setOpenSearch(true)} className="cursor-pointer text-2xl hover:text-green-400 duration-200"/>
                }
                <Link href='/' className="cursor-pointer md:order-first md:ml-auto">
                    <Image alt="logo" className=" w-28 " src={coffee} height={300} width={400}/>
                </Link>
                <div>
                    <TfiMenu className="cursor-pointer text-2xl xl:hidden hover:text-green-400 duration-200" onClick={()=> setLeft(!left)}/>
                    <LeftMenu left={left} setLeft={setLeft}/>
                </div>
            </div>
            <div className="flex justify-between items-center md:justify-start md:w-[10%] md:gap-4">
                <div>
                    <CgMenuRight onClick={() => setRight(!right)} className="cursor-pointer text-2xl hover:text-green-400 duration-200"/>
                    <RightMenu right={right} setRight={setRight}/>
                </div>
                <div>
                    <div className="relative" onClick={() => setToggle(!toggle)}>
                        <FiShoppingCart className="cursor-pointer text-2xl hover:text-green-400 duration-200"/>
                        <span className="absolute font-extrabold text-green-600 -top-3 -right-2">0</span>
                    </div>
                    <MenuCart toggle={toggle}/>
                </div>
                <div>
                    <HiUser onClick={()=> setOpen(!open)} className="cursor-pointer text-2xl hover:text-green-400 duration-200"/>
                    <ul className={`absolute ${open ? 'flex flex-col' : 'hidden'} left-0 md:left-auto  p-4 gap-2 bg-white rounded-lg `}>
                        <li>
                            <Link href='/' className='text-gray-400 hover:text-green-500 font-bold duration-200'>ورود</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-400 hover:text-green-500 font-bold duration-200'>ثبت نام</Link>
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
        <Menu />
        {
            openSearch && 
            <div className='relative w-[90%] mx-auto md:w-[300px] md:mr-auto md:ml-14'>
                <input placeholder='جستجوی محصول' className='w-full h-full text-lg outline-none p-2 rounded-md border  border-gray-500 focus:border-blue-500' type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/>
                <Link href='/'>
                    <RiSearch2Line className='absolute left-2 top-[14px] text-lg hover:text-green-500 duration-200 cursor-pointer'/>
                </Link>
            </div>
        }
        </header>
    );
};

export default Header;