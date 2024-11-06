import React from 'react'
import Container from './Container'
import Image from './Image'
import add1 from '../../../public/Add/Ad_1.jpg'
import add2 from '../../../public/Add/Ad_2.jpg'
import add3 from '../../../public/Add/Ad_3.jpg'

const Add01 = () => {
    return (
        <Container className='pt-12 md:pt-[175px]'>
            <div className='flex xl:justify-between md:gap-x-6 gap-x-4'>
                <div className='xl:h-[780px] xl:w-[780px] h-auto w-auto'>
                <Image to='/' imageClass='h-full object-cover' src={add1} alt="add01"/>
                </div>
                <div className='xl:h-[780px] xl:w-[780px] flex flex-col justify-between h-auto w-auto'>
                    <div className='xl:w-[780px] xl:h-[370px] h-auto w-auto'>
                        <Image to='/' imageClass='h-full object-cover' src={add2} alt="add01"/>
                    </div>
                    <div className='xl:w-[780px] xl:h-[370px] h-auto w-auto'>
                        <Image to='/' imageClass='h-full object-cover' src={add3} alt="add01"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Add01