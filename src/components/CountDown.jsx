import React from 'react'

const CountDown = ({Days,Hours,Minutes,Seconds}) => {
  return (
    <>
    <div className='flex gap-9.5 items-center'>
        <div>
            <h3 className='text-xs font-medium'>Days</h3>
            <h2 className='text-3xl font-bold'>{Days}</h2>
        </div>
        <div>
            <h3 className='text-xs font-medium'>Hours</h3>
            <h2 className='text-3xl font-bold'>{Hours}</h2>
        </div>
        <div>
            <h3 className='text-xs font-medium'>Minutes</h3>
            <h2 className='text-3xl font-bold'>{Minutes}</h2>
        </div>
        <div>
            <h3 className='text-xs font-medium'>Seconds</h3>
            <h2 className='text-3xl font-bold'>{Seconds}</h2>
        </div>
    </div>
    </>
  )
}

export default CountDown