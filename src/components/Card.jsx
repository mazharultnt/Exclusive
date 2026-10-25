import React from 'react'
import { Rate } from 'antd'
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Card = ({ imgSrc, percent, title, price, disPrice, review, num }) => {
    return (
        <>
            <div className='w-67.5 group'>
                <div className='relative bg-[#F5F5F5] overflow-hidden'>
                    <span className='absolute left-3 top-3 px-3 py-2 bg-primary rounded-sm text-xs text-white'>{percent}</span>
                    <img src={imgSrc} className='px-10 py-8.75' alt="" />
                    <div className='absolute top-3 right-3 space-y-2'>
                        <div className=' size-8.5 flex items-center justify-center bg-white rounded-full'>
                            <CiHeart className='text-2xl' />
                        </div>
                        <div className='h-8.5 w-8.5 flex items-center justify-center bg-white rounded-full'>
                            <MdOutlineRemoveRedEye className='text-2xl' />
                        </div>
                    </div>
                    <button className='bg-black text-white font-medium w-full py-2.25 absolute -bottom-11 group-hover:bottom-0 duration-200 ease-linear cursor-pointer'>Add to Cart</button>
                </div>
                <h3 className='mt-4 mb-2'>{title}</h3>
                <div className='flex gap-3'>
                    <h4 className='text-primary font-medium'>${disPrice}</h4>
                    <h4 className='text-[#0000006b] line-through font-medium'>${price}</h4>
                </div>
                <div className='flex gap-4'>
                    <Rate allowHalf defaultValue />
                    <h4>{review}</h4>
                </div>
            </div>
        </>
    )
}

export default Card