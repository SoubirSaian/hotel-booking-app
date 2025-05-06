import { roomsDummyData } from '@/assets/assets';
import Title from '@/components/Title';
import React, { useState } from 'react'

const RoomListPage = () => {
  const [rooms,setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title title='Room Listing' subtitle='View, Edit or manage all listed rooms. Keep the information up to date to provide best experience for users' />

      <p className='text-gray-500 mt-8'>All Rooms</p>
      <div className='w-full max-w-3xl mx-auto border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3'>
            <table className='w-full'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-gray-800 font-medium'>Name</th>
                  <th className='px-4 py-3 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                  <th className='px-4 py-3 text-gray-800 font-medium'>Price/Night</th>
                  <th className='px-4 py-3 text-gray-800 font-medium'> Actions</th>
                </tr>
              </thead>

              <tbody className='text-sm'>
                {
                  rooms.map((item,index) => (
                    <tr key={index}>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300'>{item.roomType}</td>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300 max-sm:hidden'>{item.amenities.join(', ')}</td>
                        <td className='px-4 py-3 text-gray-500 border-t border-gray-300'>${item.pricePerNight}</td>
                        <td className='px-4 py-3 text-red-500 border-t border-gray-300'>
                          <label htmlFor="" className='relative inline-flex items-center gap-2 cursor-pointer text-gray-900'>
                            <input type="checkbox" className='sr-only peer' checked={item.isAvailable} />
                            <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'>
                            </div>
                            <span className='dot absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-500 ease-in-out peer-checked:translate-x-5'></span>
                          </label>
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

export default RoomListPage
