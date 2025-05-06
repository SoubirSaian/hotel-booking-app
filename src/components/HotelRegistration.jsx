import { assets, cities } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const HotelRegistration = () => {
    
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-100 flex items-center justify-center bg-black/70'>
        <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'> 
            <Image src={assets.regImage} alt='reg-img' className='hidden md:block w-1/2 rounded-xl' />

            <div className='relative flex flex-col items-center md:w-1/2 p-8'>
                <Image src={assets.closeIcon} alt='close-icon' className=' absolute top-4 right-4 w-4 h-4 cursor-pointer' />
                <p className='text-2xl font-semibold mt-4'>Register your hotel</p>

                {/* hotel name */}
                <div className='w-full mt-4'>
                    <label htmlFor="name" className='font-medium text-gray-500'>Hotel Name</label>
                    <input id='name' type="text" placeholder='type here' className='w-full mt-1 px-3 py-2.5 font-light border border-gray-200 rounded outline-indigo-500' required />
                </div>
                {/* Contact */}
                <div className='w-full mt-4'>
                    <label htmlFor="contact" className='font-medium text-gray-500'>Phone </label>
                    <input id='contact' type="text" placeholder='type here' className='w-full mt-1 px-3 py-2.5 font-light border border-gray-200 rounded outline-indigo-500' required />
                </div>
                {/* Address*/}
                <div className='w-full mt-4'>
                    <label htmlFor="address" className='font-medium text-gray-500'>Address </label>
                    <input id='address' type="text" placeholder='type here' className='w-full mt-1 px-3 py-2.5 font-light border border-gray-200 rounded outline-indigo-500' required />
                </div>
                {/* Select city name */}
                <div className='w-full mt-4 max-w-60 mr-auto'>
                    <label htmlFor="city" className='font-medium text-gray-500'>City</label>
                    <select id="city" className='w-full mt-1 px-3 py-2.5 font-light border border-gray-200 rounded outline-indigo-500'>
                        <option value="">Select City</option>
                        {
                            cities.map((city,index) => (
                                <option key={index} value={city} >{city}</option>
                            ))
                        }
                    </select>
                </div>

                <button className='mr-auto mt-2 px-4 py-2.5 text-white bg-indigo-400 hover:bg-indigo-600 rounded transition-all cursor-pointer'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default HotelRegistration
