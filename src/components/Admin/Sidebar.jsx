"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    const [isActive,setIsActive] = useState('Dashboard');

    const sidebarLinks = [
        {name: 'Dashboard', path: '/admin/dashboard', icon: assets.dashboardIcon},
        {name: 'AddRoom', path: '/admin/addroom', icon: assets.addIcon},
        {name: 'RoomList', path: '/admin/roomlist', icon: assets.listIcon},
    ];
  return (
    <div className='w-16 md:w-42 h-full border-r text-base border-gray-300 flex flex-col transitio duration-300'>
      {
        sidebarLinks.map((item,index) => (
            <Link key={index} href={item.path} onClick={() => setIsActive(`${item.name}`)} className={`flex px-4 py-3 md:px-8 gap-3 ${isActive === item.name ? 'border-r-4 md:border-r-[6px]  border-blue-600 text-blue-600 bg-blue-600/10' : 'hover:bg-gray-100/90 border-white text-gray-700'}`}>
               <Image src={item.icon} alt={item.name} className='min-h-6 min-w-6' />
               <p className='text-center hidden md:block'>{item.name}</p>
            </Link>
        ))
      }
    </div>
  )
}

export default Sidebar
