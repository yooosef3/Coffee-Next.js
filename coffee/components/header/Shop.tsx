import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React from 'react';

const Shop = () => {
    return (
        <li>
            <div className="font-bold text-xl flex items-center gap-2 pb-4 hover:text-green-400 duration-150 cursor-pointer hover:border-b hover:border-green-400">
                <h1>فروشگاه</h1>
                <IoIosArrowDown />
            </div>
        </li>
    );
};

export default Shop;