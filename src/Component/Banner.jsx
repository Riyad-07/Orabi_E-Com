import React, { useState } from 'react'
import Slider from 'react-slick';
import Image from '../Component/Layer/Image'
import banner01 from '../../public/Banner/Banner01.jpg'
import banner02 from '../../public/Banner/Banner02.png'

const Banner = () => {

  let [active, setActive] = useState(0)

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: 'absolute',
          top: "50%",
          left: '10%',
          transform: 'translateY(-50%)',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`flex items-center border-r-2  text-[10px] ${i == active? "text-primary border-primary":"text-transparent border-white"}`}
        style={{
          width: "22px",
          height:"30px",
        }}
      >
        0{i + 1}
      </div>
    ),
    
    beforeChange: (item, index) => {
      setActive(index)
    },
    
    responsive: [
      {
        breakpoint: 767,
        settings: {
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position: 'absolute',
                bottom: "3px",
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`flex justify-center items-center border-b  text-[9px] ${i == active? "text-primary border-primary":"text-transparent border-white"}`}
              style={{
                width: "30px",
                height:"22px",
              }}
            >
              0{i + 1}
            </div>
          ),
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position: 'absolute',
                bottom: "3px",
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`flex justify-center items-center border-b  text-[7px] ${i == active? "text-primary border-primary":"text-transparent border-white"}`}
              style={{
                width: "15px",
                height:"15px",
              }}
            >
              0{i + 1}
            </div>
          ),
          
        }
      }
    ]

  };



  return (
    <div className=''>
      <Slider {...settings}>
        <div className=''>
          <Image to='/' className='w-auto ' src={banner01} alt='Banner01' />
        </div>
        <div>
          <Image to='/' className='w-auto ' src={banner02} alt='Banner02' />
        </div>
        <div>
          <Image to='/' className='w-auto ' src={banner01} alt='Banner01' />
        </div>
      </Slider>
    </div>
  )
}

export default Banner