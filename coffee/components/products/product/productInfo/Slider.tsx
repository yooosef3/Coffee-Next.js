import "swiper/css";
import "swiper/css/navigation";

import  { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";
import pic1 from '../../../../public/images/7-min_9fc89350-7a36-4414-9f9b-0d9306e5e43c_510X510_crop_center.webp'
import pic2 from '../../../../public/images/10-min_510X510_crop_center.webp'
import pic3 from '../../../../public/images/11-min_510X510_crop_center.webp'

function Slider() {

  return (
    <div className="  h-[400px] lg:w-[50%]">
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }} 
        className="detail xl:w-[80%] shadow-xl rounded-lg"
      >
        <SwiperSlide>
          <Image src={pic1} width={800} height={500} alt='pic'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic2} width={800} height={500} alt='pic'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} width={800} height={500} alt='pic'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} width={800} height={500} alt='pic'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;