import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";
import Product from "./Product";
import React from "react";
import coffee1 from '../../../public/images/1-min_510X510_crop_center.webp';
import coffee2 from '../../../public/images/5-min_2be9cf66-7d48-419d-ac56-0a3325da6f6f_510X510_crop_center.webp';
import coffee3 from '../../../public/images/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.webp';
import coffee4 from '../../../public/images/8-min_b82d3683-3973-4400-a66e-446f7bb06898_510X510_crop_center.webp';

const products = [
    {id:1, price: 2400, off: 2100, percent: -12 ,name: 'coffee 1', image: coffee4 },
    {id:2, price: 2400, off: 2100, percent: -12 ,name: 'coffee 2', image: coffee2 },
    {id:3, price: 2400, off: 2100, percent: -12 ,name: 'coffee 3', image: coffee3 },
    {id:4, price: 2400, off: 2100, percent: -12 ,name: 'coffee 4', image: coffee1 },
]
const SliderTwo = () => {
    return (
        <>
      <Swiper 
      loop={false}
      autoplay={{
        delay: 4000,
      }} 
      modules={[ Autoplay]} 
      className="SliderOne w-[90%]">
        {
          products.map(product => (
            <SwiperSlide key={product.id} className='relative p-5 lg:p-0 group bg-white shadow-md rounded-md overflow-hidden'>
                <Product 
                    name={product.name}
                    price={product.price}
                    off={product.off}
                    percent={product.percent}
                    image={product.image}
                />
            </SwiperSlide>
            )
          )
        }
      </Swiper>
    </>
    );
};

export default SliderTwo;