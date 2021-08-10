import Image from 'next/image'
import Router from 'next/router'

export default function CardShop ({productName, productPrice, productImage}) {
   return(
     <div className='shadow-lg w-48 bg-white p-5 rounded-md font-poppins hover:shadow-2xl'>
       <div className=''>
         <Image src={`/image/${productImage}`} width={200} height={220} className='rounded-md' />
       </div>
       <p className='font-bold text-sm'>{productName}</p>
       <div className='flex justify-between items-center mt-5'>
         <p>{productPrice}</p>
         <button className='bg-gray-700 text-white font-bold py-1 px-5 rounded-md text-sm focus:ring-4 focus:ring-gray-400' onClick={() => Router.push('/detail')} >Buy</button>
       </div>
     </div>
   )
 }