import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from'swiper/react'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation])

export default function CaurselBanner () {
   return (
      <Swiper slidesPerView={1} spaceBetween={10} navigation={true} pagination={{
         "clickable": true
         }} breakpoints={{
         "640": {
            "slidesPerView": 1,
            "spaceBetween": 20
         },
         "768": {
            "slidesPerView": 2,
            "spaceBetween": 40
         },
         "1024": {
            "slidesPerView": 3,
            "spaceBetween": 50
         }
      }} className="">
         <SwiperSlide>
            <div className='bg-white rounded-md flex justify-center'>
               <Image src='/image/banner-1.jpg' width={400} height={250} className='rounded-md shadow-md' />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='bg-white rounded-md flex justify-center'>
               <Image src='/image/banner-2.jpg' width={400} height={250} className='rounded-md shadow-md' />
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className='bg-white rounded-md flex justify-center'>
               <Image src='/image/banner-3.jpg' width={400} height={250} className='rounded-md shadow-md' />
            </div>
         </SwiperSlide>
      </Swiper>
   )
}