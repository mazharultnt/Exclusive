import React from 'react'
const SecHead = ({ heading, title }) => {


  return (
    <>
      <div>
        <div className='flex items-center gap-4 font-semibold'>
          <div className='w-5 h-10 bg-primary rounded-sm'></div>
          <h4 className='text-primary'>{title}</h4>
        </div>
        <h2 className='text-[36px] font-semibold mt-6'>{heading}</h2>
      </div>
    </>
  )
}

export default SecHead