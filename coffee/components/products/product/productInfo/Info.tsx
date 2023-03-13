import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { TiTick } from "react-icons/ti";
import { logos } from "@/components/layout/Footer";

const Info = () => {
    return (
        <div className="text-black lg:w-[50%]">
            <div className="flex gap-2 mb-1">
                <div className="flex text-yellow-500">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </div>
                <span className="text-gray-400 font-bold">(4 نظر)</span>
            </div>
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">ماکیاتو</h1>
            <div className="flex gap-2 my-4 items-center">
                <span className="text-gray-400 text-lg md:text-xl line-through font-bold">$251.24USD</span>
                <h1 className="font-extrabold text-2xl text-[#53A271]">$151.24USD</h1>
            </div>
                <div className="flex gap-2 mb-4 items-center">
                    <h1 className="text-lg font-bold">موجودی:</h1>
                    <div className="flex text-[#28A745] font-extrabold gap-1 text-lg">
                        <h1>موجود در بازار</h1>
                        <TiTick className="text-2xl"/>
                    </div>
                </div>
                <p className="text-gray-400 mb-8 font-semibold">بشتابید! فقط <span className="text-[#28A745] font-extrabold text-xl">20</span> عدد در بازار باقی مانده است!</p>
                <p className="text-gray-400 mb-6 font-semibold">
                بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است! بشتابید! فقط 20 عدد در بازار باقی مانده است!
                </p>
                <div className="flex gap-4 border mb-6 border-gray-400 w-fit items-center py-[2px] px-2 rounded-md">
                    <FaPlus className="text-green-700"/>
                    <span className="font-bold text-2xl text-yellow-600">1</span>
                    <FaMinus className="text-red-700"/>
                </div>
                <div>
                    <div className="flex w-fit text-xl mb-6 text-white bg-[#222222] hover:bg-[#438259] cursor-pointer duration-200 font-bold border border-gray-400 gap-2 px-3 pt-[2px] rounded-md">
                        <FaOpencart />
                        <span>اضافه به سبد خرید</span>
                    </div>
                    <Link href='/' className="text-xl text-white bg-[#222222] border hover:bg-[#438259] cursor-pointer duration-200 border-gray-400 gap-2 px-4 pt-[1px] rounded-md font-bold">الان بخر</Link>
                </div>
                <div className="mt-8">
                    <h1 className="text-lg mb-1 font-bold">دسته بندی:</h1>
                    <span className="text-gray-400 font-semibold">عربیکا سبز, قهوه برشته لایت, قهوه برشته مدیوم</span>
                </div>
            
            <div className="flex justify-center my-6 text-gray-400 text-xl gap-5">
                <FaLinkedinIn className="hover:text-blue-600 duration-200 cursor-pointer"/>
                <FaTiktok className="hover:text-gray-900 duration-200 cursor-pointer"/>
                <ImFacebook className="hover:text-blue-800 duration-200 cursor-pointer"/>
                <ImTwitter className="hover:text-blue-500 duration-200 cursor-pointer"/>
            </div>
            <div className="flex gap-3">
            {
                    logos.map(logo => 
                        <Image key={logo.id} alt='logo' src={logo.image} width={60} height={40} className='rounded-md cursor-pointer'/>
                        )
                }
            </div>
            </div>
    );
};

export default Info;