import { Disclosure } from '@headlessui/react'
import { FaAngleDown } from 'react-icons/fa'

export default function ProductDescription () {
   return (
      <Disclosure>
         <Disclosure.Button className='w-full'>
            <div className='bg-gray-200 rounded-md px-4 py-1 flex justify-between items-center'>
               <p className='text-md font-bold text-gray-600'>Description</p>
               <p className='text-md font-bold text-gray-600'><FaAngleDown /></p>
            </div>
         </Disclosure.Button>
         <Disclosure.Panel>
            <div className='ml-4 py-2'>
               <p>
                  <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit.<br/>
                  Nunc nec nisl eu tortor facilisis luctus.<br/>
                  Nulla vestibulum orci vel luctus tempor.<br/>
                  Mauris vitae enim semper, tempus sapien quis, laoreet ex.<br/>
                  Donec fringilla ante in tellus ultricies luctus.<br/>
                  Pellentesque ultrices mi et placerat consectetur.<br/>
                  Mauris rutrum felis in cursus dictum.<br/>
               </p>
            </div>
         </Disclosure.Panel>
      </Disclosure>
   )
}