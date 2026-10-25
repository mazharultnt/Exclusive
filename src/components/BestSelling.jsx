import React, { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import Card from './Card'
import coat from '../assets/coat.png'
import bag from '../assets/bag.png'
import cooler from '../assets/cooler.png'
import shelf from '../assets/shelf.png'
import JBL from '../assets/jbl.png'
import CountDown from './CountDown'
import { countDownDateAndTime } from 'countdown-date-time';

const BestSelling = () => {

    const conduct_date = '2026-09-12 12:12:12';
    const [count, setCount] = useState({})

    useEffect(() => {
        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)
        }, 1000)
    }, [])

    return (
        <div>
            <Container>
                <div >
                    <div className='flex items-center gap-4 font-semibold'>
                        <div className='w-5 h-10 bg-primary rounded-sm'></div>
                        <h4 className='text-primary'>This Month</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2 className='text-[36px] font-semibold mt-6'>Best Selling Products</h2>
                        <Button className='mt-5'>View All</Button>
                    </div>
                </div>
                <div className='flex justify-between mt-15'>
                    <Card
                        imgSrc={coat}

                        title="The north coat"
                        price="360"
                        disPrice="260"
                        review="(66)"
                    />
                    <Card
                        imgSrc={bag}

                        title="Gucci duffle bag"
                        price="1160"
                        disPrice="960"
                        review="(66)"
                    />
                    <Card
                        imgSrc={cooler}

                        title="RGB liquid CPU Cooler"
                        price="160"
                        disPrice="170"
                        review="(55)"
                    />
                    <Card
                        imgSrc={shelf}

                        title="Small BookSelf"
                        disPrice="360"
                        review="(66)"

                    />
                </div>
                <div className=' flex gap-13 bg-[url(./assets/CategoryBG.png)] bg-cover bg-center bg-no-repeat mt-35'>
                    <div className='my-17.5 ml-14 w-110.75'>
                        <h3 className='text-xl text-[#00FF66]'>Categories</h3>
                        <h2 className='text-5xl font-semibold font-inter my-8 text-white'>Enhance Your Music Experience</h2>
                        <div className='flex gap-9.5 items-center'>
                            <div className='bg-white rounded-full size-15.5 '>
                                <h2 className='text-xl font-semibold text-center'>{count.days}</h2>
                                <h3 className='text-xs font-medium text-center'>Days</h3>
                            </div>
                            <div className='bg-white rounded-full size-15.5 '>
                                <h2 className='text-xl font-semibold text-center'>{count.hours}</h2>
                                <h3 className='text-xs font-medium text-center'>Hours</h3>
                            </div>
                            <div className='bg-white rounded-full size-15.5 '>
                                <h2 className='text-xl font-semibold text-center'>{count.minutes}</h2>
                                <h3 className='text-xs font-medium text-center'>Minutes</h3>
                            </div>
                            <div className='bg-white rounded-full size-15.5 '>
                                <h2 className='text-xl font-semibold text-center'>{count.seconds}</h2>
                                <h3 className='text-xs font-medium text-center'>Seconds</h3>
                            </div>
                        </div>
                        <button className='mt-8 bg-[#00FF66] px-12 py-4 rounded-sm text-white'>Buy Now!</button>
                    </div>
                    <div className='mt-19.75 mr-12.5 mb-22.75'>
                        <img src={JBL} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BestSelling