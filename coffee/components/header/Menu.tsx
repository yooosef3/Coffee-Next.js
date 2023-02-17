import Aroma from "./Aroma";
import Collections from "./Collections";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Pages from "./Pages";
import React from 'react';
import Shop from "./Shop";

const Menu = () => {
    return (
        <menu className='hidden lg:block'>
            <ul className="flex justify-center gap-10">
                <li className="hover:text-green-400 hover:border-b hover:border-green-400 duration-150 cursor-pointer">
                    <Link className="font-bold text-xl" href='/'>خانه</Link>
                </li>
                <Collections />
                <Aroma />
                <li className="hover:text-green-400 hover:border-b hover:border-green-400 duration-150 cursor-pointer">
                    <Link className="font-bold text-xl" href='/'>دانه های قهوه</Link>
                </li>
                <li className="hover:text-green-400 hover:border-b hover:border-green-400 duration-150 cursor-pointer">
                    <Link className="font-bold text-xl" href='/'>بلاگ</Link>
                </li>
                <Shop />
                <Pages />
            </ul>
        </menu>
    );
};

export default Menu;