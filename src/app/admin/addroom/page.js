"use client"
import { assets } from '@/assets/assets';
import Title from '@/components/Title';
import Image from 'next/image';
import React, { useState } from 'react'

const AddRoomPage = () => {
    const [images,setImages] = useState({1: null, 2: null, 3: null, 4: null});

    const [input,setInput] = useState({
        roomType: '',
        pricePerNight: 0,
        amenities:{
            'Free Wifi': false,
            'Free Breakfast': false,
            'Room Service': false,
            'Mountain View': false,
            'Pool Access': false,
        }
    });
  return (
    <form className='flex flex-col justify-center items-center'>
        <Title title='Add Room' subtitle='Fill in the details carefully and accurate room details, pricing and amenities to enhance the user booking experience'/>

        {/* Upload area for images */}
        <p className='text-gray-800 mt-5'>Upload Image</p>
        <div className='grid grid-cols-2 gap-4 my-2'>
            {
                Object.keys(images).map((key) => (

                    <label key={key} htmlFor={`roomImages${key}`}>
                        <Image src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt='image' className='max-h-13 cursor-pointer opacity-80' />
                        <input 
                         onChange={(e) => {setImages({...images, [key]:e.target.files[0]})}}
                         type="file"
                         accept='image/*' 
                         id={`roomImages${key}`} 
                         hidden 
                        />
                    </label>
                ))
            }
        </div>

        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='max-w-48'>
                <p className='text-gray-800 mt-3'>Room type:</p>
                <select onChange={(e) => setInput({...input, roomType:e.target.value})} value={input.roomType} className='w-full border border-gray-300 rounded mt-1 pt-2 opacity-70'>
                    <option >Select room type</option>
                    <option value="Single bed">Single Bed</option>
                    <option value="Double bed">Double Bed</option>
                    <option value="Luxury room">Luxury Room</option>
                    <option value="Family suite">Family Suite</option>
                </select>
            </div>
        </div>

        <div>
            <p className='text-gray-800 mt-4'>
                Price <span className='text-xs'>/night</span>
            </p>
            <input 
                type="number"
                // placeholder='0'
                value={input.pricePerNight}
                onChange={(e) => setInput({...input, pricePerNight:e.target.value})}
                className='w-24 border border-gray-300 rounded mt-1 p-2' />
        </div>

        <p className='text-gray-800 mt-3'>Amenities</p>
        <div className='flex mt-1 flec-col flex-wrap text-gray-400 max-w-sm'>
            {
                Object.keys(input.amenities).map((amenity,index) => (
                    <div key={index}>
                        <input 
                            type="checkbox"  
                            id={`amenities${index+1}`}
                            checked={input.amenities[amenity]}
                            onChange={(e) => setInput({...input, amenities:{...input.amenities, [amenity]: !input.amenities[amenity]}})}
                        />

                        <label htmlFor={`amenities${index+1}`}>{amenity}</label>
                    </div>
                ))
            }
        </div>

        <button className='mt-6 px-8 py-2 bg-primary text-white rounded cursor-pointer'>Add room</button>
    </form>
  )
}

export default AddRoomPage
