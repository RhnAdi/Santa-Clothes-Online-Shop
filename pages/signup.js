import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react"

export default function Signup () {
   // Initial State
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [verifyPassword, setVerifyPassword] = useState('')
   const [wrongPassword, setWrongPassword] = useState(false)
   const [message, setMessage] = useState('')

   // Handler
   const changeUsername = (e) => setUsername(e.target.value)
   const changeEmail = (e) => setEmail(e.target.value)
   const changePassword = (e) => setPassword(e.target.value)
   const changeVerifyPassword = (e) => { 
      setVerifyPassword(e.target.value)
      setWrongPassword(false) 
   }

   const data = { username, email, password }

   const handleSignUp = () => {
      if(password !== verifyPassword){
         return setWrongPassword(true)
      }
      fetch('/api/signup', {
         method   : 'POST',
         headers  : { 'Content-Type' : 'application/json' },
         body     : JSON.stringify(data)
      })
      .then(result => result.json())
      .then(res => {
         setMessage(res.message)
         if(res.status == 200){
            setMessage(res.message)
            Router.push('/')
         }
      })
      .catch(error => {
         setMessage('Sign Up Failed.')
      })
   }

   return (
      <>
      <Head>
         <title>Santa Clothes | Sign Up</title>
      </Head>
      <div id='signupPage' className='flex h-screen justify-center'>
         <div className='flex flex-col justify-center p-5 w-96'>
            <p className="text-2xl font-bold text-gray-700 border-b-4 border-gray-700 w-36 py-3">Sign Up</p>
            {message ? <p className='px-3 text-yellow-600 bg-yellow-200 my-2 rounded-md py-2'>{message}</p> : null}
            <div className='py-2'>
               <p className='font-bold text-gray-700'>Username<span className='text-red-400'>*</span></p>
               <input type='text' placeholder='Username' className='rounded-md w-full shadow-md' value={username} onChange={changeUsername} />
            </div>
            <div className='py-2'>
               <p className='font-bold text-gray-700'>Email<span className='text-red-400'>*</span></p>
               <input type='email' placeholder='Email' className='rounded-md w-full shadow-md' value={email} onChange={changeEmail} />
            </div>
            <div className='py-2'>
               <p className='font-bold text-gray-700'>Password<span className='text-red-400'>*</span></p>
               <div>
                  <input type='password' placeholder='Password' className='rounded-md w-full shadow-md' value={password} onChange={changePassword} />
               </div>
            </div>
            <div className='py-2'>
               <p className='font-bold text-gray-700'>Verify Password<span className='text-red-400'>*</span></p>
               <input type='password' placeholder='Password' className='rounded-md w-full shadow-md' value={verifyPassword} onChange={changeVerifyPassword} />
               {wrongPassword ? <p className='text-red-400'>Error when verifying password.</p> : null}
            </div>
            <button className='bg-gray-700 text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400' onClick={handleSignUp} >Sign Up</button>
            <p className='text-sm text-gray-500 text-center font-bold mt-3'>Or you already have an account ? <Link href='/login'><a className='text-blue-400'>login here</a></Link></p>
         </div>
      </div>
      </>
   )
}