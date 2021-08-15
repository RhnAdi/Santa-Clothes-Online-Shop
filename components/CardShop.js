import Image from 'next/image'
import Router from 'next/router'

export default function CardShop ({productName, productPrice, productImage}) {
   return(
     <div className='shadow-lg w-48 bg-white p-5 rounded-lg font-poppins border-2 border-gray-200 hover:shadow-2xl'>
       <div className='mb-2 rounded-md'>
         <Image src={`/image/${productImage}`} width={200} height={220} className='rounded-md object-cover object-center' alt='image-product' />
       </div>
       <p className='font-bold text-sm text-gray-800'>{productName}</p>
       <p className='text-gray-500 text-sm font-bold'>Supreme</p>
       <div className='flex justify-between items-center mt-5'>
         <p className='font-bold text-gray-700'>{productPrice}</p>
         <button className='bg-gray-700 text-white font-bold py-1 px-5 rounded-md text-sm focus:ring-4 focus:ring-gray-400' onClick={() => Router.push('/detail')} >Buy</button>
       </div>
     </div>
   )
 }