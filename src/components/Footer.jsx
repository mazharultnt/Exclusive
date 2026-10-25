import React from 'react'
import Container from './Container'
import QR from '../assets/QR.png'
import GooglePlay from '../assets/GooglePlay.png'
import AppStore from '../assets/AppStore.png'
import { RiFacebookLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
    return (
        <>
            <div className='bg-black text-white mt-25'>
                <Container>
                    <div className='flex gap-21'>
                        <div className='pt-20 '>
                            <ul className='space-y-6'>
                                <li className='font-inter text-2xl font-bold'>Exclusive</li>
                                <li className='text-[20px] font-semibold'>Subscribe</li>
                                <li>Get 10% off your first order</li>
                                <li className='relative'><input type="text" placeholder='Enter your email' className='border p-2' /><LuSendHorizontal className='text-2xl absolute right-3 top-2' />
                                </li>
                            </ul>
                        </div>
                        <div className='pt-20'>
                            <ul className='space-y-6'>
                                <li className='font-semibold text-[20px]'>Support</li>
                                <li className='w-54.25'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                                <li>exclusive@gmail.com</li>
                                <li>+88015-88888-9999</li>
                            </ul>
                        </div>
                        <div className='pt-20'>
                            <ul className='space-y-6'>
                                <li className='font-semibold text-[20px]'>My Account</li>
                                <li className='w-54.25'>Login / Register</li>
                                <li>Cart</li>
                                <li>Wishlist</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                        <div className='pt-20'>
                            <ul className='space-y-6'>
                                <li className='font-semibold text-[20px]'>Quick Link</li>
                                <li className='w-54.25'>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='pt-20'>
                            <ul className='space-y-6'>
                                <li className='font-semibold text-[20px]'>Download App</li>
                                <li className='w-60'>Save $3 with App New User Only</li>
                                <div className='flex gap-2'>
                                    <div>
                                        <img src={QR} alt="" />
                                    </div>
                                    <div>
                                        <div>
                                            <img src={GooglePlay} alt="" />
                                        </div>
                                        <div>
                                            <img src={AppStore} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6 mt-6">
                                    <RiFacebookLine className='text-2xl text-white' />
                                    <TbBrandTwitter className='text-2xl text-white' />
                                    <FaInstagram className='text-2xl text-white' />
                                    <RiLinkedinLine className='text-2xl text-white' />
                                </div>
                            </ul>
                        </div>
                    </div>
                </Container>
                <div className='text-secondary w-full border-b pt-20 pb-5'></div>
                <div className='text-center text-secondary'>&copy;Copyright Rimel 2022. All right reserved</div>

            </div>
        </>
    )
}

export default Footer