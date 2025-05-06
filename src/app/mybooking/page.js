"use client"
import React, { useState } from 'react'
import { assets, userBookingsDummyData } from '@/assets/assets'
import Title from '@/components/Title'
import Image from 'next/image'

const page = () => {
    const [bookings,setBookings] = useState(userBookingsDummyData);
  return (
    <div className='py-28 px-4 md:px-12 lg:px-16 '>
       <Title title='My Booking' subtitle='Easily manage your past, current and upcoming hotel reservation in one place. Plan your trips seamlessly with just one clicks' />

       <div className='w-full mt-8 max-w-6xl text-gray-800'>
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 font-medium text-base py-3'>
            <div className='w-1/3'>Hotel</div>
            <div className='w-1/3'>Date & Timings</div>
            <div className='w-1/3'>Payments</div>
        </div>

        {
            bookings.map((book,index) => (
                <div key={index} className='w-full grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 font-medium py-6 first:border-t '>
                        {/* Hotel Details */}
                    <div className='flex flex-col md:flex-row'>
                       <Image src={book.room.images[0]} alt='room0img' className='min-md:w-30 rounded shadow object-cover' />
                       <div className='flex flex-col gap-1.5 min-md:mt-3 min-md:ml-4'>
                            <p className='text-2xl'>
                                {book.hotel.name} <span className='text-sm'>{book.room.roomType}</span>
                            </p>
                            <div className='flex items-center gap-1 text-sm text-gray-500'>

                                <Image src={assets.locationIcon} alt='location-icon' />
                                <span>{book.hotel.address}</span>
                            </div>
                            <div className='flex items-center gap-1 text-sm text-gray-500'>

                                <Image src={assets.guestsIcon} alt='location-icon' />
                                <span>Guests: {book.guests}</span>
                            </div>

                            <p>Total: ${book.totalPrice}</p>
                       </div>
                    </div>
                        {/* Book & Timings */}
                    <div className='flex flex-row md:items-center gap-8 mt-2'>
                        <div>
                            <p>Check Ins:</p>
                            <p className='text-gray-500 text-sm'>{new Date(book.checkInDate).toDateString()}</p>
                        </div>
                        <div>
                            <p>Check Out:</p>
                            <p className='text-gray-500 text-sm'>{new Date(book.checkOutDate).toDateString()}</p>
                        </div>
                    </div>
                     {/* payment details */}
                     <div className='flex flex-col items-start justify-center pt-3'>
                        <div className='flex items-center gap-2'>
                            <div className={`h-3 w-3 rounded-full ${book.isPaid ? 'bg-green-500' : 'bg-red-500'}`}>

                            </div>
                            <p className={`text-sm ${book.isPaid?'text-green-500':'text-red-500'}`}>
                                {book.isPaid ? 'Paid' : 'Unpaid'}
                            </p>
                        </div>
                        {
                            !book.isPaid && <button className='mt-4 px-4 py-1.5 text-xs rounded-full border border-gray-400 hove:bg-gry-50 transition cursor-pointer'>Pay Now</button>
                        }
                     </div>
                </div>
            ))
        }

       </div>
    </div>
  )
}

export default page
