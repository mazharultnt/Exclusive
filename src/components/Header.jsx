import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <>
      <div className='bg-black text-white py-3'>
        <Container>
          <div className='flex justify-between'>
            <div></div>
            <p className='text-sm flex gap-2'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='border-b'>ShopNow</span></p>
            <select name="" id="" className='bg-black text-sm'>
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Spanish</option>
              <option value="">Valyrian</option>
            </select>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Header