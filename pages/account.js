import Image from 'next/image'
import cookie from 'cookie'
import jwt_decode from 'jwt-decode'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import { useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import ImageUpload from '../components/ImageUpload'

export default function Account ({data, error}) {
   // Initial State
   const [errorPage, setErrorPage] = useState(error)
   const [firstName, setFirstName] = useState( data.result.profile.firstName )
   const [lastName, setLastName] = useState(data.result.profile.lastName )
   const [username, setUsername] = useState(data.result.username )
   const [email, setEmail] = useState(data.result.email )
   const [phoneNumber, setPhoneNumber] = useState(data.result.profile.phoneNumber )
   const [address, setAddress] = useState(data.result.profile.address )
   const [successMessage, setSuccessMessage] = useState(false)
   const [errorMessage, setErrorMessage] = useState(false)
   const [loadingEdit, setLoadingEdit] = useState(false)

   // Handle State
   const changeFirstName = (e) => {
      return setFirstName(e.targer.value)
   }
   const changeLastName = (e) => {
      return setLastName(e.target.value)
   }
   const changeUsername = (e) => {
      return setUsername(e.target.value)
   }
   const changeEmail = (e) => {
      return setEmail(e.target.value)
   }
   const changePhoneNumber = (e) => {
      return setPhoneNumber(e.target.value)
   }
   const changeAddress = (e) => {
      return setAddress(e.target.value)
   }
   // Handle Edit Profile
   const editProfile = async () => {
      const body = {firstName, lastName, username, email, phoneNumber, address}
      setLoadingEdit(true)
      await fetch(`/api/account/${data.result._id}`, {
         method : 'put',
         headers : { 'Content-Type' : 'application/json' },
         body : JSON.stringify(body)
      })
      .then(result => result.json())
      .then(result => {
         setLoadingEdit(false)
         if(result.status == 'OK'){ setSuccessMessage(true) }
      })
      .catch(error => {
         setLoadingEdit(false)
         setErrorMessage(true)
      })
   }

   const toLogin = () => {
      return Router.push('/login');
   }
   const toSignUp = () => {
      return Router.push('/signup')
   }
   const logout = async () => {
      await fetch('/api/logout')
      .then(result => setErrorPage(true))
      .catch(error => setErrorPage(false))
      
   }

   return (
      <div>
         <Head>
            <title>Account | Profile</title>
         </Head>
         <Navbar />
         <div id='content' className='container mx-auto pt-28 md:pt-24 px-12'>
            {
               errorPage === true ? 
               (
                  <div className="shadow-2xl container px-5 py-16 mx-auto w-96 md:w-4/5">
                     <div className="w-64 h-44 mb-8 mx-auto">
                        <Image src='/image/error.jpg' layout="responsive" width={600} height={400} />
                     </div>
                     <p className="text-center font-bold text-2xl text-gray-700">Oppsss...!!! Please login.</p>
                     <div className='flex flex-col justify-center w-full mt-8'>
                        <button 
                           onClick={toLogin} 
                           className="bg-gray-700 text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400 w-full md:w-1/2 flex justify-center mx-auto"
                        >
                           Login
                        </button>
                        <p className="text-gray-700 text-center">Or</p>
                        <button 
                           onClick={toSignUp} 
                           className="bg-gray-700 text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400 w-full md:w-1/2 flex justify-center mx-auto"
                        >
                           Sign Up
                        </button>
                     </div>
                  </div>
               ) 
               : 
               (
                  <div className="shadow-2xl container px-5 py-8 mx-auto w-96 md:w-4/5">
                     {
                        successMessage ? <div className="bg-green-200 border rounded-md px-5 py-2 border-green-300 text-green-700 mb-8">Update Success.</div> : null
                     }
                     {
                        errorMessage ? <div className="bg-red-200 border rounded-md px-5 py-2 border-red-300 text-red-700 mb-8">Update Failed.</div> : null
                     }
                     <div className='w-full flex justify-center flex-col'>
                        <ImageUpload />
                        <div className="mt-8">
                           <div className="flex flex-col md:grid md:grid-cols-2 w-full justify-between gap-4">
                              <div className='md:py-2'>
                                 <p className='font-bold text-gray-700'>Fisrt Name<span className='text-red-400'>*</span></p>
                                 <input 
                                    value={firstName ? firstName : ''} 
                                    onChange={changeFirstName} 
                                    type='text' 
                                    placeholder='Fisrt Name' 
                                    className='rounded-md w-full shadow-md' 
                                 />
                              </div>
                              <div className='md:py-2'>
                                 <p className='font-bold text-gray-700'>Last Name<span className='text-red-400'>*</span></p>
                                 <input 
                                    value={lastName ? lastName : ''} 
                                    onChange={changeLastName} 
                                    type='text' 
                                    placeholder='Last Name' 
                                    className='rounded-md w-full shadow-md' 
                                 />
                              </div>
                           </div>
                           <div className='py-2'>
                              <p className='font-bold text-gray-700'>Username<span className='text-red-400'>*</span></p>
                              <input 
                                 value={username ? username : ''} 
                                 onChange={changeUsername} 
                                 type='text' 
                                 placeholder='Username' 
                                 className='rounded-md w-full shadow-md' 
                              />
                           </div>
                           <div className='py-2'>
                              <p className='font-bold text-gray-700'>Email<span className='text-red-400'>*</span></p>
                              <input 
                                 value={email ? email : ''} 
                                 onChange={changeEmail} 
                                 type='email' 
                                 placeholder='Email' 
                                 className='rounded-md w-full shadow-md'
                              />
                           </div>
                           <div className='py-2'>
                              <p className='font-bold text-gray-700'>Phone Number<span className='text-red-400'>*</span></p>
                              <input 
                                 value={phoneNumber ? phoneNumber : ''} 
                                 onChange={changePhoneNumber} 
                                 type='number' 
                                 placeholder='Phone Number' 
                                 className='rounded-md w-full shadow-md' 
                              />
                           </div>
                           <div className='py-2'>
                              <p className='font-bold text-gray-700'>Address<span className='text-red-400'>*</span></p>
                              <input 
                                 value={address ? address : ''} 
                                 onChange={changeAddress} 
                                 type='text' 
                                 placeholder='Address' 
                                 className='rounded-md w-full shadow-md'
                              />
                           </div>
                           {
                              !loadingEdit ? 
                                 <button 
                                    onClick={editProfile} 
                                    className="bg-gray-700 text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400 w-full"
                                 >
                                    Edit Profile
                                 </button>
                              : 
                              <button 
                                 className="text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400 w-full bg-gray-400"
                                 disabled
                              >
                                 Loading ...
                              </button>
                           }
                           <button 
                              onClick={logout}
                              className="bg-gray-300 text-gray-700 py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-200 w-full"
                           >
                              Logout
                           </button>
                        </div>
                     </div>
                  </div>
               ) 
            }
         </div>
         <Footer />
      </div>
   )
}

Account.getInitialProps = async (ctx) => {
   let data = {
      result : {
         _id : '',
         username : '',
         email : '',
         profile : {
            firstName : '',
            lastName : '',
            phoneNumber : '',
            address : '',
         }
      }
   }
   let error = false
   const myCookie = cookie.parse(ctx.req.headers.cookie)
   const authCookie = myCookie.auth
   if(!authCookie){
      error = true
      return {data, error}
   }
   const decode = jwt_decode(authCookie);
   const id = decode.sub
   await fetch(`${process.env.URL}/api/account/${id}`, { method : "get" })
   .then(result => result.json())
   .then(result => {
      return data = result
   })
   .catch(err => error = true)
   return {data, error}
}