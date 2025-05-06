"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '@/assets/assets';
import StarRating from '@/components/StarRating';
import Image from 'next/image';

const SingleRoom = () => {
    const {id} = useParams();
    // console.log(params);
    
    const [room,setRoom] = useState(null);
    const [mainImage,setMainImage] = useState(null);

    

    useEffect(() => {
       const hotelRoom = roomsDummyData.find( (room) => room._id === id );
       hotelRoom && setRoom(hotelRoom);
       hotelRoom && setMainImage(hotelRoom.images[0]);
        // console.log(room);
        
    },[]);

  return room &&  (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl'>
                {room?.hotel?.name} <span className='text-sm'>{room?.roomType}</span>
            </h1>
            <p className='text-sx px-3 py-1.5 rounded-full bg-orange-300'>20% Off</p>
        </div>

        {/* Star Rating */}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>
        {/* room address */}
        <div className='flex items-center gap-1 text-gray-500'>
            <Image src={assets.locationIcon} alt='location-icon' />
            <span>{room.hotel.address}</span>
        </div>
        {/* Room image */}
        <div className='flex flex-col lg:flex-row gap-6 mt-6'>
            <div className='w-full lg:w-1/2'>
                <Image src={mainImage} alt='main-image' className='w-full rounded-xl shadow-lg object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-2 lg:w-1/2 w-full'>
                {
                    room.images.length > 1 && room.images.map((img,index) => (
                        <Image key={index} onClick={() => setMainImage(img)} src={img} alt='room-image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === img && 'outline-3 outline-orange-500'}`} />
                    ))
                }
            </div>
        </div>
        {/* room highlights */}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl'>Experience luxury like never before </h1>

                <div className='flex flex-wrap items-center mt-3 mb-6 gap-2'>
                    {
                        room.amenities.map((item,index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <Image src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* room price per night */}
            <p className='text-2xl font-medium'>${room.pricePerNight} /night</p>
        </div>

        {/* checkin checkout form */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

            <div className='flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col'>

                        <label htmlFor="checkInDate" className='font-medium'>Chek In</label>
                        <input className='w-full rounded border border-gray-300 px-3 py-2 mt-2' type="date"  id="checkInDate" placeholder='Check In' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300 '></div>
                    <div className='flex flex-col'>

                        <label htmlFor="checkOutDate" className='font-medium'>Chek Out</label>
                        <input className='w-full rounded border border-gray-300 px-3 py-2 mt-2' type="date"  id="checkOutDate" placeholder='Check Out' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300 '></div>
                    <div className='flex flex-col'>

                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input className='w-full rounded border border-gray-300 px-3 py-2 mt-2' type="number"  id="guests" placeholder='0' required />
                    </div>
            </div>

            <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 text-base cursor-pointer '>Book Now</button>
        </form>

        {/* common specifications */}
        <div className='mt-16 space-y-4'>

            {
                roomCommonData.map((spec,index) => (
                    <div key={index} className='flex items-start gap-3'>
                        <Image src={spec.icon}  alt='icon' className='w-6.5'/>
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* description */}
        <div className='max-w-3xl borde-y border-gray-300 my-15 py-5 text-gray-500'>
            <p>Guests will be allocated on the ground floor on the basis of availavility. You get a comfortable two bedroom apartment has true city feelings. The price is quoted is for two guests, at the guests slot, please mark the number of the guests , to get the exact price for groups.  The guests will be allocated ground floor according to availability.  You get the comfortable two bedroom apartment has true city feelings.</p>
        </div>

            {/* hosted by */}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                {/* <Image src={room?.hotel?.owner?.image} alt='host-img' className='h-14 w-14 md:h-18 md:w-18 rounded-full' height={14} width={14} /> */}
                <div>
                    <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                    <div className='flex items-center mt-1'>
                        <StarRating/>
                        <p className='ml-2'>200+ reviews</p>
                    </div>
                </div>
            </div>

            <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact now</button>
        </div>
    </div>
  )
}

export default SingleRoom
