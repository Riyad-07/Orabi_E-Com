import React from 'react'
import Container from './Container'
import { PiNumberTwoBold } from 'react-icons/pi'
import { FaTruck } from 'react-icons/fa'
import { MdOutlineRefresh } from 'react-icons/md'

const ReturnPolicy = () => {
    return (
        <Container className=''>
            <div className='flex justify-between py-5 '>
                <div className='flex items-center gap-x-3'>
                    <PiNumberTwoBold />
                    <p className='hidden md:flex'>Two years warranty</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <FaTruck />
                    <p className='hidden md:flex'>Free shipping</p>
                </div>
                <div className='flex items-center gap-x-3'>
                    <MdOutlineRefresh  className='scale-x-[-1]'/>
                    <p className='hidden md:flex'>Return policy in 30 days</p>
                </div>
            </div>
        </Container>
    )
}

export default ReturnPolicy