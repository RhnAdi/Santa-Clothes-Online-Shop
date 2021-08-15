import Image from 'next/image'

export default function Banner () {
   return (
      <div className='flex flex-col flex-col-reverse md:flex-row shadow-md rounded-lg border-2 border-gray-200 px-12 py-16 mb-8 items-center'>
         <div className='md:w-1/2'>
            <p className='text-gray-700 font-bold font-poppins text-2xl'>Belanja Pakaian Brand Lokal disini.</p>
            <p className='text-gray-500 font-bold font-poppins text-lg'>Kita menjual pakaian yang berkualitas dan awet.</p>
            <button className='bg-gray-700 text-white px-8 py-2 rounded-md font-bold mt-4 focus:ring-4 focus:ring-gray-300'>Belanja sekarang</button>
         </div>
         <div className='flex justify-center md:w-1/2'>
            <Image src='/image/banner-image.svg' width={300} height={300} />
         </div>
      </div>
   )
}