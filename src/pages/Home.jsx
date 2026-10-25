import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
import Categories from '../components/Categories'
import BestSelling from '../components/BestSelling'
import OurProducts from '../components/OurProducts'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <>
    <Banner/>
    <FlashSales/>
    <Categories/>
    <BestSelling/>
    <OurProducts/>
    <Featured/>
    </>
  )
}

export default Home