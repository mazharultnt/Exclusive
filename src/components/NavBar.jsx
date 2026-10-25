import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const NavBar = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between py-7'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className='flex gap-12'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className='flex gap-6 items-center'>
            <div className='relative py-1.75 pl-5 bg-[#F5F5F5]'>
              <input type="text" className='pr-17.5' placeholder='What are you looking for?' />
              <HiOutlineMagnifyingGlass className='absolute top-2 right-3 text-2xl' />
            </div>
            <div className='flex gap-4 items-center'>
              <CiHeart className='text-[32px]'/>
              <IoCartOutline className='text-[32px]'/>
            </div>
          </div>
        </div>
      </Container>
      <div className='border-b w-screen text-black'></div>
    </>
  )
}

export default NavBar