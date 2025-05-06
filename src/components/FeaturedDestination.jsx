"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { roomsDummyData } from '@/assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'

const FeaturedDestination = () => {
    const router = useRouter(); 
  return (
    <div className='flex flex-col mt-20 '>
        {/* Title component */}
        <Title title='Featured Destinations' subtitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experience'/>

      <div className='flex flex-wrap items-center justify-center gap-6 mt-6'>
        {
            roomsDummyData.slice(0,4).map((item,index) => (
                <HotelCard key={index} room={item} index={index} />
            ))
        }
      </div>

        {/* scrollTo(0,0) means to the tpo of the window */}
      <button onClick={() => {router.push('/rooms');}} className='my-12 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>View all destinations</button>
    </div>
  )
}

export default FeaturedDestination
