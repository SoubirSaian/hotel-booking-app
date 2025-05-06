"use client"
import React, { useState } from 'react';
import { assets, facilityIcons, roomsDummyData } from '@/assets/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import StarRating from '@/components/StarRating';

//checkBox Component
const CheckBox = ({label,selected = false , onChange =()=> {}}) => {
    return (
      <label className='flex items-center gap-3 cursor-pointer pb-2 text-sm'>
        <input type="checkbox" checked={selected} onChange={(e) => {onChange(e.target.checked , label)}}  />

        <span className='font-light select-none'>{label}</span>
      </label>
    )
}
//radioButton Component
const RadioButton = ({label,selected = false , onChange =()=> {}}) => {
    return (
      <label className='flex items-center gap-3 cursor-pointer pb-2 text-sm'>
        <input type="radio" name='sortOptions' checked={selected} onChange={() => {onChange( label)}}  />

        <span className='font-light select-none'>{label}</span>
      </label>
    )
}

const RoomPage = () => {
  const router = useRouter();
  const [openFilters,setOpenFilters] = useState(false);


  const roomTypes = [
    "Single Bed", "Double Bed", "Luxury Room", "Family Suite"
  ];

  const priceRanges = [
    "0 to 500","500 to 1000","1000 to 1500","1500 to 2000"
  ];

  const sortOptions = [
    "Price Low to High","Price High to Low", "Newest First"
  ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-18 px-4'>

      <div>
          <div className='flex flex-col items-start text-left'>
              <h1 className='text-4xl md:text-[40px]'>Hotel Rooms</h1>
              <p className='text-sm md:text-base text-gray-500/90 max-w-174 mt-2'>Take advantage of our limited time offers and special packages to enhance your stay with us and create unforgettable memories</p>
          </div>
          {
            roomsDummyData.map((room,index) => (
              <div key={index} className='flex flex-col md:flex-row items-start gap-4 py-10 border-b border-gray-300 last:pb-0 last:border-0'>
                  <Image onClick={()=> router.push(`/rooms/${room._id}`)} src={room.images[0]} alt='hotel-img' title='View room details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />

                    <div className='md:w-1/2 flex flex-col gap-2'>
                      <p className='text-gray-500'>{room.hotel.city}</p>
                      <p className='text-gray-800 text-3xl cursor-pointer'>{room.hotel.name}</p>

                      <div className='flex items-center'>
                        <StarRating/>
                        <p className='ml-2'>200+ views</p>
                      </div>

                      <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <Image src={assets.locationIcon} alt='icon' />
                        <span>{room.hotel.address}</span>
                      </div>

                      {/* Room Amnities */}
                      <div className='flex flex-wrap items-center gap-3 mt-3 mb-6'>

                          {
                            room.amenities.map((item,index) => (
                              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70'>
                                <Image src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                              </div>
                            ))
                          }
                      </div>

                      {/* room price per night */}
                      <p className='text-xl font-medium text-gray-700'>{room.pricePerNight} /night</p>
                    </div>

              </div>
            ))
          }
      </div>

          {/* filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600'>
          <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilters && 'border-b'} `}>

            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-pointer'>
              <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
                {openFilters ? 'HIDE' : 'SHOW'}
              </span>
              <span className='hidden lg:block'>CLEAR</span>
            </div>
          </div>

          {/* filter option */}
          <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
            <div className='px-5 pt-5'>
                <p className='text-gray-800 font-medium pb-2'>Popular filters</p>
                {
                  roomTypes.map((room,index) => (
                    <CheckBox key={index} label={room} />
                  ))
                }
            </div>

            <div className='px-5 pt-5'>
                <p className='text-gray-800 font-medium pb-2'>Price Ranges</p>
                {
                  priceRanges.map((range,index) => (
                    <CheckBox key={index} label={`$ ${range}`} />
                  ))
                }
            </div>

            <div className='px-5 pt-5 pb-7'>
                <p className='text-gray-800 font-medium pb-2'>Sort By</p>
                {
                  sortOptions.map((option,index) => (
                    <RadioButton key={index} label={option} />
                  ))
                }
            </div>
          </div>
      </div>
    </div>
  )
}

export default RoomPage;
