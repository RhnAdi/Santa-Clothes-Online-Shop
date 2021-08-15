import userAccount from '../public/icons/user-account.svg'
import { AiFillCamera } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'

export default function ImageUpload () {

   const [imageFile, setImageFile] = useState()

   const changeImage = (e) => {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (data) => setImageFile(data.target.result)
   }
   return (
      <div className='w-32 h-32 relative mx-auto'>
         <Image 
            src={imageFile || userAccount}
            className='rounded-full object-cover object-center'
            layout='fill' 
            alt='profile-picture'
         />
         <div className="absolute right-0 bottom-0">
            <div className="flex justify-center">
               <label
                  htmlFor="image_profile" 
                  className="bg-green-500 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" 
               >
                  <AiFillCamera />
               </label>
               <input 
                  id="image_profile" 
                  type="file" 
                  className="hidden" 
                  onChange={changeImage} 
               />
            </div>
         </div>
      </div>
   )
}