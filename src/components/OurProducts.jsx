import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Card from './Card'
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import DogFood from '../assets/dogfood.png'
import Dslr from '../assets/dslr.png'
import Laptop from '../assets/laptop.png'
import Button from './Button';

const OurProducts = () => {

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

  return (
    <div className='mt-17.5'>
        <Container>
            <SecHead
            title="Our Products"
            heading="Explore Our Products"
            />
            <div className="mt-15">
                <Slider.default {...settings}>
                    <div>
                        <Card
                        imgSrc={DogFood}
                                     
                                        title="Breed Dry Dog Food"
                                        
                                        disPrice="100"
                                        review="(35)"
                        />
                        <Card
                        imgSrc={DogFood}
                                      
                                        title="Breed Dry Dog Food"

                                        disPrice="100"
                                        review="(35)"
                        />
                        
                    </div>
                    <div>
                        <Card
                        imgSrc={Dslr}
                                   
                                        title="CANON EOS DSLR Camera"
                                      
                                        disPrice="360"
                                        review="(95)"
                        />
                        <Card
                        imgSrc={Dslr}
                                      
                                        title="CANON EOS DSLR Camera"
                                       
                                        disPrice="360"
                                        review="(95)"
                        />
                    </div>
                    <div>
                        <Card
                        imgSrc={Laptop}
                                       
                                        title="ASUS FHD Gaming Laptop"
                                   
                                        disPrice="700"
                                        review="(325)"
                        />
                        <Card
                        imgSrc={Laptop}
                                       
                                        title="ASUS FHD Gaming Laptop"
                                    
                                        disPrice="700"
                                        review="(325)"
                        />
                    </div>
                    <div>
                        <Card
                        imgSrc={DogFood}
                                     
                                        title="Breed Dry Dog Food"
                                        
                                        disPrice="100"
                                        review="(35)"
                        />
                        <Card
                        imgSrc={DogFood}
                                      
                                        title="Breed Dry Dog Food"

                                        disPrice="100"
                                        review="(35)"
                        />
                        
                    </div>
                   <div>
                        <Card
                        imgSrc={Laptop}
                                       
                                        title="ASUS FHD Gaming Laptop"
                                   
                                        disPrice="700"
                                        review="(325)"
                        />
                        <Card
                        imgSrc={Laptop}
                                       
                                        title="ASUS FHD Gaming Laptop"
                                    
                                        disPrice="700"
                                        review="(325)"
                        />
                    </div>
                </Slider.default>
            </div>
            <Button className='mx-auto block mt-15'>View All Products</Button>
        </Container>
    </div>
  )
}

export default OurProducts