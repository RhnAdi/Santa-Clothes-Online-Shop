import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ImagesDetail from '../components/ImagesDetail'
import ProductDescription from '../components/ProductDescription'
import Footer from '../components/Footer'

export default function Detail () {
   // Initial State
   const Price = 14.99
   const colors = ['Black', 'Pink', 'Green', 'Red']
   const sizes = ['L', 'XL', 'XXL']
   const [color, setColor] = useState()
   const [size, setSize] = useState()
   const [quantity, setQuantity] = useState(1)

   // Handle Function
   const changeColor = (e) => {
      return setColor(e.target.getAttribute('data-color'))
   }
   const changeSize = (e) => {
      return setSize(e.target.getAttribute('data-size'))
   }
   const changeQuantity = (e) => {
      return setSize(e.target.value)
   }
   const changeQuantityButton = (e) => {
      if(e.target.getAttribute('data-quantity') == 'kurang'){
         if(quantity === 1){
            return
         }
         return setQuantity(quantity - 1)
      } 
      if(e.target.getAttribute('data-quantity') == 'tambah'){
         return setQuantity(quantity + 1)
      }
   }

   return (
      <>
      <Head>
         <title>Detail | Kaos Distro Pria</title>
      </Head>
      <div className='font-poppins'>
         <Navbar />
         <div id='content' className='container mx-auto pt-28 md:pt-24 px-12'>
            <div className='grid md:grid-cols-2 gap-16'>
               <div className='mx-auto md:mx-0 w-72 sm:w-96 md:w-auto'>
                  <ImagesDetail />
               </div>
               <div className=''>
                  <div className='mb-4'>
                     <p className='text-gray-800 text-2xl mt-8 font-bold'>Kaos Distro Pria</p>
                     <p className='text-gray-500 text-xl font-bold'>Price : ${Price}</p>
                  </div>
                  <ProductDescription />
                  <div className='mt-4'>
                     <p className='text-gray-600 font-bold'>Colors :</p>
                     <div className='flex mt-2'>
                        {
                           colors.map((productColor, key) => {
                              return <button key={key} data-color={productColor} className={`${productColor} w-8 h-8 shadow-md rounded-md mr-4 focus:ring-4 ${color == productColor? 'ring-4' : ''}`} onClick={changeColor} ></button>
                           })
                        }
                     </div>
                  </div>
                  <div className='mt-4 text-gray-600'>
                     <p className='font-bold'>Size :</p>
                     <div className='flex mt-2 font-bold'>
                        {
                           sizes.map((productSize, key) => {
                              return <button key={key} data-size={productSize} className={`px-2 py-1 shadow-md rounded-md mr-4 focus:ring-4 ${size == productSize ? 'ring-4' : ''}`} onClick={changeSize}>{productSize}</button>
                           })
                        }
                     </div>
                  </div>
                  <div className='flex mt-4 flex-wrap'>
                     <p className='text-gray-600 font-bold mr-4'>Quantity :</p>
                     <div className='flex'>
                        <button 
                           data-quantity='kurang' 
                           className='bg-gray-300 px-2 rounded-md font-bold text-gray-700'
                           onClick={changeQuantityButton}
                        >-</button>
                        <input 
                           type='number' 
                           className='mx-2 rounded-md font-bold text-gray-700 h-7 text-sm w-16' 
                           value={quantity} 
                           onChange={changeQuantity}
                        />
                        <button 
                           data-quantity="tambah"
                           className='bg-gray-300 px-2 rounded-md font-bold text-gray-700'
                           onClick={changeQuantityButton}
                        >+</button>
                     </div>
                  </div>
                  <div className='bg-gray-300 rounded-md shadow-md px-4 py-2 text-gray-700 mt-4 flex justify-between'>
                     <p className='font-bold'>Total Payment</p>
                     <p className='font-bold'>${Price * quantity}</p>
                  </div>
                  <div className='mt-4'>
                     <button className='bg-gray-700 rounded-md text-white py-2 px-4 w-full focus:bg-gray-600 focus:ring-4 ring-gray-300'>Go to Payment</button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
      </>
   )
}