"use client"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HotelCard = ({room,index}) => {
  return (
    <Link href={`/rooms`+ room._id} key={room._id} onClick={()=>scrollTo(0,0)}  className='relative max-w-70 w-full overflow-hidden rounded-xl bg-white text-gray-500/90 shadow-[0_4px_4px_rgba(0,0,0,0.05)]'>
        <Image src={room.images[0]} alt='img' />

        { (index % 2 === 0) && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded'>Best Seller</p>}

        <div className='p-4 pt-5'>

            <div className='flex items-center justify-between'>

                 <p className='text-xl font-medium text-gray-800`'>{room.hotel.name}</p>
                <div className='flex items-center gap-1'>
                    <Image src={assets.starIconFilled} alt='filled' /> 
                    4.5
                </div>
            </div>

            <div className='flex items-center gap-1'>
                <Image src={assets.locationIcon} alt='icon' />
                <span>{room.hotel.address}</span>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p className='text-xl text-gray-800'>${room.pricePerNight} /night</p>
                <button className='px-4 py-2 text-sm font-medium border border-gray-400 rounded hover:bg-gray-50 transition-all cursor-pointer' >Book Now</button>
            </div>
        </div>
    </Link>
  )
};

export default HotelCard;
