import FlashSaleCard from "./FlashSaleCard"
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

export default function FlashSale () {
   return (
      <div className='my-12 bg-gray-700 px-12 py-8 rounded-lg'>
         <div className='mb-4 flex justify-between'>
            <p className='font-bold text-lg font-poppins text-white'><span className='text-yellow-400'>Flash</span>Sale</p>
            <button className='font-poppins bg-gray-500 text-sm py-1 px-4 rounded-md text-gray-200 focus:ring-2 focus:ring-gray-400'>More</button>
         </div>
         <Swiper slidesPerView={1} spaceBetween={1} navigation={true} pagination={{
               "clickable": true
            }} breakpoints={{
            "640": {
               "slidesPerView": 2,
               "spaceBetween": 2
            },
            "768": {
               "slidesPerView": 3,
               "spaceBetween": 5
            },
            "1024": {
               "slidesPerView": 5,
               "spaceBetween": 10
            }
         }} className="">
            <SwiperSlide className='flex justify-center'>
               <FlashSaleCard productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (11).jpg' productBrand='Adidas' productDiscount='40%' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <FlashSaleCard productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (10).jpg' productBrand='Sweet' productDiscount='15%' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <FlashSaleCard productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (9).jpg' productBrand='Pinker' productDiscount='50%' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <FlashSaleCard productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (5).jpg' productBrand='Jasuke' productDiscount='15%' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
               <FlashSaleCard productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (8).jpg' productBrand='Pinker' productDiscount='45%' />
            </SwiperSlide>
         </Swiper>
      </div>
   )
}