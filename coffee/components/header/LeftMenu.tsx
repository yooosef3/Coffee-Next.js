import React, {useState} from 'react';

import { BsXLg } from "react-icons/bs";
import Image from 'next/image';
import Link from "next/link";
import { RiArrowDownSLine } from 'react-icons/ri';
import coffee1 from '../../public/images/3.webp';
import coffee2 from '../../public/images/4.webp';

type LeftMenuPropsTypes = {
    left: boolean,
    setLeft: React.Dispatch<React.SetStateAction<boolean>>
}
type MenuOptionsType = {
    collections?: boolean,
    aroma?: boolean,
    shop?: boolean,
    pages?: boolean
}
const LeftMenu = ({left, setLeft}:LeftMenuPropsTypes) => {
   
    const [menu, setMenu] = useState<MenuOptionsType>({
        collections: false,
        aroma: false,
        shop: false,
        pages: false,
    });
    return (
        <div className={`fixed  ${left ? 'left-0' : '-left-[300px]'} duration-1000 top-0 bottom-0 bg-zinc-900 w-[300px] overflow-y-auto z-30`}>
            <BsXLg className="hover:text-red-600 duration-200 cursor-pointer m-5" onClick={()=> setLeft(!left)}/>
            <ul>
                <li className="border-b border-gray-500 p-5">
                    <Link href='/' className="font-bold w-full text-xl text-gray-500 hover:text-green-500 duration-200">خانه</Link>
                </li>
                <li className="border-b cursor-pointer border-gray-500 p-5">
                    <div className="flex justify-between items-center" onClick={()=> setMenu({collections : !menu.collections})}>
                        <span className={`font-bold text-xl ${menu.collections ? 'text-green-500' : 'text-gray-500'}`}>محصولات</span>
                        <RiArrowDownSLine className={`font-bold text-xl ${menu.collections ? 'rotate-[180deg] text-green-500': 'text-gray-500'} duration-300 text-gray-500`}/>
                    </div>
                    <section className={`pr-3 pt-5 ${menu.collections ? 'block' : 'hidden'}`}>
                        <h1 className='font-bold mb-2 mt-5 text-lg'>عربیکا سبز</h1>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>آمریکانو</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>کاپوچینو</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>دابل اسپرسو</Link>
                            </li>
                        </ul>
                        <h1 className='font-bold mb-2 mt-5 text-lg'>قهوه برشته لایت</h1>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>لاته</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>ماکیاتو</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>شکلات نعنایی</Link>
                            </li>
                        </ul>
                        <h1 className='font-bold mb-2 mt-5 text-lg'>قهوه برشته تیره</h1>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>موکا</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>وانیل</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>موکای سفید</Link>
                            </li>
                        </ul>
                        <h1 className='font-bold mb-2 mt-5 text-lg'>قهوه برشته مدیوم</h1>
                        <ul className='flex flex-col gap-2'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>موکا</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>کارامل</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>موکای سفید</Link>
                            </li>
                        </ul>
                    </section>
                </li>
                <li className="border-b cursor-pointer border-gray-500 p-5">
                    <div className="flex justify-between items-center" onClick={()=> setMenu({aroma : !menu.aroma})}>
                        <span className={`font-bold text-xl ${menu.aroma ? 'text-green-500' : 'text-gray-500'}`}>رایحه معطر</span>
                        <RiArrowDownSLine className={`font-bold text-xl ${menu.aroma && 'rotate-[180deg]'} duration-300 ${menu.aroma ? 'text-green-500' : 'text-gray-500'}`}/>
                    </div>
                    <section className={`my-4 ${menu.aroma ? 'flex flex-col' : 'hidden'} gap-5`}>
                        <Link href='/'>
                            <Image alt='coffee' width={300} height={200} src={coffee1} className='rounded-md hover:grayscale duration-200'/>
                            <h1 className='text-center font-bold text-gray-300 hover:text-green-300 duration-200 mt-1'>عربیکا برشته</h1>
                        </Link>
                        <Link href='/'>
                            <Image alt='coffee' width={300} height={200} src={coffee2} className='rounded-md hover:grayscale duration-200'/>
                            <h1 className='text-center font-bold text-gray-300 hover:text-green-300 duration-200 mt-1'>عربیکا سبز</h1>
                        </Link>
                    </section>
                </li>
                <li className="border-b border-gray-500 p-5">
                    <Link href='/beans' className="font-bold text-xl text-gray-500 hover:text-green-500 duration-200">دانه های قهوه</Link>
                </li>
                <li className="border-b border-gray-500 p-5">
                    <Link href='/' className="font-bold text-xl text-gray-500 hover:text-green-500 duration-200">بلاگ</Link>
                </li>
                <li className="border-b cursor-pointer border-gray-500 p-5">
                    <div className="flex justify-between items-center" onClick={()=> setMenu({shop : !menu.shop})}>
                        <span className={`font-bold ${menu.shop ? 'text-green-500':'text-gray-500'} text-xl`}>فروشگاه</span>
                        <RiArrowDownSLine className={`font-bold text-xl ${menu.shop ? 'rotate-[180deg] text-green-500': 'text-gray-500'} duration-300 text-gray-500`}/>
                    </div>
                    <section className={`pr-3 pt-10 ${menu.shop ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col gap-4'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>لیست محصولات</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>سبد خرید</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>حساب من</Link>
                            </li>
                    </ul>
                    </section>
                </li>
                <li className="border-b cursor-pointer border-gray-500 p-5">
                    <div className="flex justify-between items-center" onClick={()=> setMenu({pages : !menu.pages})}>
                        <span className={`font-bold text-xl ${menu.pages?'text-green-500': 'text-gray-500'}`}>صفحات</span>
                        <RiArrowDownSLine className={`font-bold text-xl ${menu.pages ? 'rotate-[180deg] text-green-500': 'text-gray-500'} duration-300 text-gray-500`}/>
                    </div>
                    <section className={`pr-3 pt-10 ${menu.pages ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col gap-4'>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>درباره ما</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>تماس با ما</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>FAQ</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>قوانین پرداخت</Link>
                            </li>
                            <li>
                                <Link className='text-gray-400 font-bold duration-200 hover:text-green-300' href='/'>شرایط و ضوابط</Link>
                            </li>
                    </ul>
                    </section>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;