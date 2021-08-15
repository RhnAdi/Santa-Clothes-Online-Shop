import Image from 'next/image'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


export default function ImagesDetail() {

   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   return (
      <div className='bg-gray-700 p-5 rounded-md'>
         <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2 mb-5">
            <SwiperSlide className='flex justify-center'>
               <Image src='/image/tshirt (1).jpg' width={300} height={320} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <Image src='/image/tshirt (2).jpg' width={300} height={320} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <Image src='/image/tshirt (3).jpg' width={300} height={320} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <Image src='/image/tshirt (4).jpg' width={300} height={320} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
         </Swiper>
         <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
            <SwiperSlide>
               <Image src='/image/tshirt (1).jpg' width={200} height={220} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide>
               <Image src='/image/tshirt (2).jpg' width={200} height={220} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide>
               <Image src='/image/tshirt (3).jpg' width={200} height={220} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
            <SwiperSlide>
               <Image src='/image/tshirt (4).jpg' width={200} height={220} className='rounded-md' alt='image-detail' />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}