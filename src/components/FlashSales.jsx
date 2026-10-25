import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CountDown from './CountDown'
import { countDownDateAndTime } from 'countdown-date-time';
import Card from './Card';
import GamePad from '../assets/gamepad.png'
import KeyBoard from '../assets/keyboard.png'
import Monitor from '../assets/monitor.png'
import Chair from '../assets/chair.png'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Button from './Button';



const FlashSales = () => {


   const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-4 cursor-pointer'
        onClick={onClick}
      >
        <FaArrowRight className='text-2xl text-black'/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-18 cursor-pointer'
        onClick={onClick}
        >
        <FaArrowLeft className='text-2xl text-black '/>
      </div>
    );
  }

 



  const conduct_date = '2026-08-30 12:12:12';
  const [count, setCount] = useState({})

  useEffect(() => {
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown)
    }, 1000)
  }, [])

  return (
    <div className='mt-35'>
      <Container>
        <div className='flex gap-21.75 items-end'>
          <SecHead
            title="Today’s"
            heading="Flash Sales"
          />
          <CountDown
            Days={count.days}
            Hours={count.hours}
            Minutes={count.minutes}
            Seconds={count.seconds}
          />
        </div>
        <div className='mt-10'>
          <Slider.default {...settings}>
            <div>
              <Card
                imgSrc={GamePad}
                percent="-40%"
                title="HAVIT HV-G92 Gamepad"
                price="160"
                disPrice="140"
                review="(88)"
              />
            </div>
            <div>
              <Card
                imgSrc={KeyBoard}
                percent="-35%"
                title="AK-900 Wired Keyboard"
                price="1160"
                disPrice="960"
                review="(75)"
              />
            </div>
            <div>
              <Card
                imgSrc={Monitor}
                percent="-30%"
                title="IPS LCD Gaming Monitor"
                price="400"
                disPrice="370"
                review="(79)"
              />
            </div>
            <div>
              <Card
                imgSrc={Chair}
                percent="-25%"
                title="S-Series Comfort Chair "
                price="400"
                disPrice="375"
                review="(77)"
              />
            </div>
            <div>
              <Card
                imgSrc={GamePad}
                percent="-40%"
                title="HAVIT HV-G92 Gamepad"
                price="160"
                disPrice="140"
                review="(90)"
              />
            </div>
            <div>
              <Card
                imgSrc={KeyBoard}
                percent="-35%"
                title="AK-900 Wired Keyboard"
                price="1160"
                disPrice="960"
                review="(75)"
              />
            </div>
            <div>
              <Card
                imgSrc={Monitor}
                percent="-30"
                title="IPS LCD Gaming Monitor"
                price="400"
                disPrice="370"
                review="(99)"
              />
            </div>
            <div>
              <Card
                imgSrc={Chair}
                percent="-25"
                title="S-Series Comfort Chair "
                price="400"
                disPrice="375"
                review="(99)"
              />
            </div>
          </Slider.default>
        </div>
        <Button className='mx-auto block mt-10'>View All Products</Button>
        <div className=' border-b border-secondary mt-15 mb-20'></div>
      </Container>
    </div>
  )
}

export default FlashSales