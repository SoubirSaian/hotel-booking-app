"use client"
import React, { useState } from 'react'
import { assets, dashboardDummyData } from '@/assets/assets'
import Title from '@/components/Title'
import Image from 'next/image'

const DashboardPage = () => {
  const [dashboardData,setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
        <Title title='Dashboard' subtitle='Monitor your room listing, track booking, analyze your revenue - all in one place. Stay updated with real time insights to operate smooth operation.' />

        <div className='flex justify-center gap-4 my-6'>
          {/* Total booking */}
          <div className='flex bg-primary/3 border border-primary/10 rounded p-4 pr-8'>
              <Image src={assets.totalBookingIcon} alt='total-icon' className='max-sm:hidden h-10' />
              <div className='flex flex-col font-medium sm:ml-4'>
                <p className='text-blue-500 text-lg'>Total booking</p>
                <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
              </div>
          </div>

          {/* Total revenue */}
          <div className='flex bg-primary/3 border border-primary/10 rounded p-4 pr-8'>
              <Image src={assets.totalRevenueIcon} alt='total-icon' className='max-sm:hidden h-10' />
              <div className='flex flex-col font-medium sm:ml-4'>
                <p className='text-blue-500 text-lg'>Total revenue</p>
                <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
              </div>
          </div>
          

        </div>

        {/* recent booking */}
        <h2 className='text-center text-xl text-blue-500/90 font-medium mb-5'>Recent booking</h2>
        <div className='w-full max-w-3xl mx-auto border border-gray-300 rounded-lg max-h-80 overflow-y-scroll '>
            <table className='w-full'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-gray-800 font-medium'>User Name</th>
                  <th className='px-4 py-3 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                  <th className='px-4 py-3 text-gray-800 font-medium'>Total Amount</th>
                  <th className='px-4 py-3 text-gray-800 font-medium'>Payment Status</th>
                </tr>
              </thead>

              <tbody className='text-sm'>
                {
                  dashboardData.bookings.map((item,index) => (
                    <tr key={index}>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300'>{item.user.username}</td>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300'>${item.totalPrice}</td>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300'>
                          <button className={`mx-auto px-3 py-1 text-xs rounded-full ${item.isPaid ? 'bg-green-200 text-green-500': 'bg-amber-200 text-yellow-400'}`}>

                            {item.isPaid ? 'Completed' : 'Pending'}
                          </button>
                        </td>
                        
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default DashboardPage
