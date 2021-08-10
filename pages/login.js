import Router from 'next/router'
import Link from 'next/link'
import { useState } from "react"

export default function signup () {
   // Initial State
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [message, setMessage] = useState('')

   // Handler
   const changeEmail = (e) => setEmail(e.target.value)
   const changePassword = (e) => setPassword(e.target.value)

   const data = { email, password }

   const handleLogin = () => {
      fetch('http://localhost:3000/api/login', {
         method   : 'POST',
         headers  : { 'Content-Type' : 'application/json' },
         body     : JSON.stringify(data)
      })
      .then(result => result.json())
      .then(res => {
         if(res.status == 200){
            Router.push('/')
         }
      })
      .catch(error => {
         setMessage('Login Failed.')
         console.log(error)
      })
   }

   return (
      <div id='signupPage' className='flex h-screen justify-center'>
         <div className='flex flex-col justify-center p-5 w-96'>
            <p className="text-2xl font-bold text-gray-700 border-b-4 border-gray-700 w-36 py-3">Login</p>
            {message ? <p className='px-3 text-yellow-600 bg-yellow-200 my-2 rounded-md py-2'>{message}</p> : null}
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
            <button className='bg-gray-700 text-white py-2 font-bold my-3 rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-gray-400' onClick={handleLogin} >Login</button>
            <p className='text-sm text-gray-500 text-center font-bold mt-3'>Or create your account ? <Link href='/signup'><a className='text-blue-400'>Sign Up here</a></Link></p>
         </div>
      </div>
   )
}