import React from 'react'
import Banner from '../Component/Banner'
import Slider from '../Component/Slider'
import ReturnPolicy from '../Component/Layer/ReturnPolicy'
import Add01 from '../Component/Layer/Add01'
import Arrivals from '../Component/Arrivals'
import Bestselling from '../Component/Bestselling'
import Add2 from '../Component/Add2'
import SpecialOffer from '../Component/SpecialOffer'

const Home = () => {
  return (
    <>
      <Banner/>
      <ReturnPolicy/>
      <Add01/>
      <Arrivals/>
      <Bestselling/>
      <Add2/>
      <SpecialOffer/>
    </>
  )
}

export default Home