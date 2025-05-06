import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { assets, exclusiveOffers } from '@/assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-10 lg:px-14 bg-slate-50 pt-14 pb-10'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>

            <Title title='Exclusive Offers' subtitle='Take advantage of our limited time offers and special packages to enhance your stay and create unfogettable memories' align='left' />
            <button className='group flex items-center gap-2 font-medium cursor-pointer'>
                View all offers 
                <Image src={assets.arrowIcon} alt='arrow-icon'
                className='transition-all group-hover:translate-x-1' />
            </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8'>
            {
                exclusiveOffers.map((item,index) => {
                    return (
                    <div key={index} style={{backgroundImage: `url(${item.image})`}} className='relative flex flex-col items-start justify-between gap-1 pt-10 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' >

                        <p className='absolute top-4 left-4 px-3 py-1 bg-white  text-xs text-gray-800 rounded-full '>{item.priceOff} % off</p>

                        <div>
                            <p className='text-2xl font-medium'>{item.title}</p>
                            <p>{item.description}</p>
                            <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                        </div>
                        <button className='group flex items-center gap-2 font-medium cursor-pointer'>
                            View all offers 
                            <Image src={assets.arrowIcon} alt='arrow-icon'
                             className='transition-all group-hover:translate-x-1' />
                        </button>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ExclusiveOffers
