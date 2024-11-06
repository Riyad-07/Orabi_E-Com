import React from 'react'
import Container from './Layer/Container'
import { Link } from 'react-router-dom'
import add2 from '../../public/Add2.png'

const Add2 = () => {
  return (
    <Container className='lg:pt-[130px] md:pt-10 pt-5'>
        <Link>
            <img className='w-auto' src={add2} alt="" />
        </Link>
    </Container>
  )
}

export default Add2