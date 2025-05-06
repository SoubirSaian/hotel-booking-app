import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const StarRating = ({rating = 4}) => {
    //means default value of rating is 4
  return (
    <>
        {
            Array(5).fill('').map((_,index) => (
                <Image key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined } alt='star-icon' className='w-4 h-4' />
            ))
        }
    </>
  )
}

export default StarRating
