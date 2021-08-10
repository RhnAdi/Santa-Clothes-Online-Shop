import Link from 'next/link'
import Image from 'next/image'
import { Popover, Menu } from'@headlessui/react'
import { BsFillHouseDoorFill, BsFillGridFill, BsFillTagFill, BsPeopleCircle, BsFillCaretDownFill } from 'react-icons/bs'
import { FaShoppingCart, FaTshirt } from 'react-icons/fa'
import { GiLargeDress } from 'react-icons/gi'

export default function Navbar () {
   return (
      <Popover className='fixed w-full z-50'>
      <div id='navbar' className='bg-gray-700' >
         <div className='container px-12 flex mx-auto justify-between py-4 flex-wrap' >
            <div className='flex justify-center w-full md:w-auto text-center md:text-right'>
               <p id='logo' className='font-bold text-lg md:text-2xl text-white w-full md:w-auto sm:text-center mb-2 md:mb-0'><span className='text-green-400'>Santa</span> Clothes.</p>
            </div>
            <div className='flex justify-between w-full md:w-auto'>
               <div className='w-auto bg-white flex justify-center rounded-md px-2 w-10/12 md:w-auto mr-4' id='search'>
                  <Image src='/icons/search.svg' width={20} height={20} />
                  <input placeholder='Search' className='w-full h-8 ml-1 focus:outline-none font-poppins' />
               </div>
               <div className='hidden lg:flex text-white font-poppins'>
                  <Link href='/#home'>
                     <a className='mx-2 py-1 px-2 hover:bg-gray-600 rounded-md'>Home</a>
                  </Link>
                  <div>
                     <Menu>
                     <Menu.Button>
                        <a className='flex items-center mx-2 py-1 px-2 hover:bg-gray-600 rounded-md'><span className='mr-1'>Categories</span><BsFillCaretDownFill /></a>
                     </Menu.Button>
                     <Menu.Items className='absolute bg-white text-black my-8 shadow-md p-5 rounded-md'>
                        <div className='my-2 w-64'>
                           <div className='flex items-center px-4 py-1 hover:bg-gray-700 rounded-md my-2 group hover:text-white cursor-pointer'>
                              <FaTshirt />
                              <p className='ml-2'>Mens</p>
                           </div>
                           <div className='flex items-center px-4 py-1 hover:bg-gray-700 rounded-md my-2 group hover:text-white cursor-pointer'>
                              <GiLargeDress />
                              <p className='ml-2'>Womens</p>
                           </div>
                        </div>
                     </Menu.Items>
                     </Menu>
                  </div>
                  <Link href='/#home'>
                     <a className='mx-2 py-1 px-2 hover:bg-gray-600 rounded-md'>Flash Sale</a>
                  </Link>
                  <Link href='/'><a className='flex justify-center items-center mx-2 py-1 px-2 hover:bg-gray-600 rounded-md' >
                     <FaShoppingCart size={24} />
                  </a></Link>
                  <div className='flex justify-center rounded-full ml-2'>
                     <Image src='/icons/user-account.svg' width={30} height={30} className='rounded-full' />
                  </div>
               </div>
               <Popover.Button
                  className='lg:hidden flex items-center justify-center focus:bg-gray-600 rounded-md px-2 py-1'
               >
                  <div className='flex justify-center'><Image src='/icons/menu.svg' width={25} height={25} /></div>
               </Popover.Button>
            </div>
         </div>
      </div>
      <Popover.Panel >
         <div className='container px-12 my-2 font-poppins text-gray-700'>
            <div className='shadow-md rounded-md p-5 bg-white'>
               <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-3'>
                  <div className='mr-2 text-gray-700 group-hover:text-white'>
                     <BsFillHouseDoorFill />
                  </div>
                  <Link href='/'><a className=''>Home</a></Link>
               </div>
               <Menu className='w-full'>
                  <div className='w-full'>
                     <Menu.Button className='w-full'>
                        <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-3 w-full'>
                           <div className='mr-2 text-gray-700 group-hover:text-white'>
                              <BsFillGridFill />
                           </div>
                           <div className='w-full' >
                              <p className='flex justify-between w-full items-center'>
                                 <span>Categories</span>
                                 <BsFillCaretDownFill />
                              </p>
                           </div>
                        </div>
                     </Menu.Button>
                     <Menu.Items>
                        <div className='ml-4 border-t border-gray-300'>
                           <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-2 w-full'>
                                 <div className='mr-2 text-gray-700 group-hover:text-white'>
                                    <FaTshirt />
                                 </div>
                                 <div className='w-full' >
                                    <p className='flex justify-between w-full items-center'>
                                       <span>Mens</span>
                                    </p>
                                 </div>
                           </div>
                           <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-2 w-full'>
                                 <div className='mr-2 text-gray-700 group-hover:text-white'>
                                    <GiLargeDress />
                                 </div>
                                 <div className='w-full' >
                                    <p className='flex justify-between w-full items-center'>
                                       <span>Womens</span>
                                    </p>
                                 </div>
                           </div>
                        </div>
                     </Menu.Items>
                  </div>
               </Menu>
               <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-5'>
                  <div className='mr-2 text-gray-700 group-hover:text-white'>
                     <BsFillTagFill />
                  </div>
                  <Link href='/'><a className=''>Flash Sale</a></Link>
               </div>
               <hr></hr>
               <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-5'>
                  <div className='mr-2 text-gray-700 group-hover:text-white'>
                     <FaShoppingCart />
                  </div>
                  <Link href='/'><a className=''>Cart</a></Link>
               </div>
               <div className='item group cursor-pointer hover:text-white flex items-center hover:bg-gray-700 px-4 py-1 rounded-md my-5'>
                  <div className='mr-2 text-gray-700 group-hover:text-white'>
                     <BsPeopleCircle />
                  </div>
                  <Link href='/'><a className=''>Account</a></Link>
               </div>
               
            </div>
         </div>
      </Popover.Panel>
      </Popover>
   )
}