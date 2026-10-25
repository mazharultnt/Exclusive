import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Ps5 from '../assets/ps5.png'
import Women from '../assets/women.png'
import Speakers from '../assets/speakers.png'
import Perfumes from '../assets/perfumes.png'
import Delivery from '../assets/delivery.svg'
import Service from '../assets/service.svg'
import Secure from '../assets/secure.svg'

const Featured = () => {
    return (
        <div className='mt-15'>
            <Container>
                <SecHead
                    title="Featured"
                    heading="New Arrival"
                />
                <div className='mt-15 flex gap-7.5'>
                    <div className='relative'>
                        <img src={Ps5} alt="" />
                        <div className='absolute bottom-15 left-5 text-white w-60.5'>
                            <h2 className='font-inter font-semibold text-2xl'>PlayStation</h2>
                            <p className='text-[14px] py-4'>Black and White version of the PS5 coming out on sale.</p>
                            <h3 className='border-b w-20 text-[16px]'>Shop Now</h3>
                        </div>
                    </div>
                    <div >
                        <div className='relative'>
                            <img src={Women} alt="" />
                            <div className='absolute bottom-15 left-5 text-white w-63.75'>
                                <h2 className='font-inter font-semibold text-2xl'>Women's Collection</h2>
                                <p className='text-[14px] py-4'>Featured woman collections that give you another vibe.</p>
                                <h3 className='border-b w-20 text-[16px]'>Shop Now</h3>
                            </div>
                        </div>
                        <div className='mt-8 gap-8 flex'>
                            <div className='relative'>
                                <img src={Speakers} alt="" />
                                <div className='absolute bottom-15 left-5 text-white w-60.5'>
                                    <h2 className='font-inter font-semibold text-2xl'>Speakers</h2>
                                    <p className='text-[14px] py-4'>Amazon wireless speakers</p>
                                    <h3 className='border-b w-20 text-[16px]'>Shop Now</h3>
                                </div>
                            </div>
                            <div className='relative'>
                                <img src={Perfumes} alt="" />
                                <div className='absolute bottom-15 left-5 text-white w-60.5'>
                                    <h2 className='font-inter font-semibold text-2xl'>Perfumes</h2>
                                    <p className='text-[14px] py-4'>GUCCI INTENSE OUD EDP</p>
                                    <h3 className='border-b w-20 text-[16px]'>Shop Now</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-34 ml-29.25 flex justify-between'>
                    <div>
                        <div className='bg-secondary size-20 rounded-full relative mx-[84.5px]'>
                            <div className="absolute rounded-full bg-black size-15  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Delivery} alt="" />
                        </div>
                        <h3 className='text-[20px] font-semibold mt-6 text-center'>FREE AND FAST DELIVERY</h3>
                        <p className='text-[14px] text-center'>Free delivery for all orders over $140</p>
                    </div>
                    <div>
                        <div className='bg-secondary size-20 rounded-full relative mx-[84.5px]'>
                            <div className="absolute rounded-full bg-black size-15  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Service} alt="" />
                        </div>
                        <h3 className='text-[20px] font-semibold mt-6 text-center'>24/7 CUSTOMER SERVICE</h3>
                        <p className='text-[14px] text-center'>Friendly 24/7 customer support</p>
                    </div>
                    <div>
                        <div className='bg-secondary size-20 rounded-full relative mx-[84.5px]'>
                            <div className="absolute rounded-full bg-black size-15  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Secure} alt="" />

                        </div>
                        <h3 className='text-[20px] font-semibold mt-6 text-center'>MONEY BACK GUARANTEE</h3>
                        <p className='text-[14px] text-center'>We reurn money within 30 days</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured