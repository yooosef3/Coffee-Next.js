import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type ProductPropsType = {
    percent?: number,
    off?:number,
    name: string,
    price: number,
    image:any ,
    hover?: any,
    separate?: boolean
}
const Product = ({percent, off, image, name, price}:ProductPropsType) => {
    return (
        <div className="sm:flex sm:items-center">
                    <span dir="ltr" className="absolute bg-[#54A06F] right-0 group-hover:-right-11 duration-1000 h-6 p-1 rounded-tl-lg rounded-bl-lg">{percent}%</span>
                    <div>
                        <Link href='/'>
                            <Image src={image} width={350} height={500} className='sm:w-[200px]' alt='product'/>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href='/'>
                            <h1 className="text-black font-bold text-2xl">{name}</h1>
                        </Link>
                        <div className="font-semibold text-xl">
                            <span className="text-gray-400 mr-2 line-through">${off.toLocaleString()}USD</span>
                            <span className="text-[#54A06F] ">${price.toLocaleString()}USD</span>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex text-yellow-500">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                            <span className="text-gray-400 font-bold">(4نظر)</span>
                        </div>
                        <button className="border border-gray-300 w-fit hover:bg-[#54a06f] hover:text-white font-bold text-gray-600 pt-1 px-2 rounded-md duration-200">اضافه به سبد خرید</button>
                    </div>
        </div>
    );
};

export default Product;