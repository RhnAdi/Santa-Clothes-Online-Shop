export default function Footer () {
   return (
      <div className='bg-gray-700 mt-24'>
         <div className='container mx-auto p-12 text-white md:flex justify-between '>
            <div>
               <p id='titleFooter' className='font-bold text-xl'><span className='text-green-400'>Santa</span> Clothes.</p>
               <p className='text-gray-400'>Kec.Purwodadi, Kab.Grobogan, Jawa Tengah, Indonesia.</p>
            </div>
            <div className='my-4'>
               <p>Hubungi kami</p>
               <p>Bantuan</p>
               <p>FAQS</p>
            </div>
            <div className='my-4'>
               <p>Facebook</p>
               <p>Instagram</p>
               <p>Twitter</p>
               <p>Tiktok</p>
            </div>
         </div>
         <p className='text-center text-gray-400 py-5'>&copy; Copyright by Santa Clothes.</p>
      </div>
   )
}