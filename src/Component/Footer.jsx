import React from 'react'
import Container from './Layer/Container'
import { Link } from 'react-router-dom'
import logo from '../../public/image/Footerlogo.png'
import Image from './Layer/Image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Title = ({ t }) => {
    return (
        <h2 className={`text-base font-DM font-bold text-primary`}>{t}</h2>
    )
}

const Li = ({ li }) => {
    return (
        <li className={`font-DM text-sm  text-[#6D6D6D] hover:text-primary`}>
            <Link>
                {li}
            </Link>
        </li>
    )
}

const Footer = () => {
    return (
        <div className='pt-3 md:pt-28'>
            {/* flex flex-wrap justify-between pt-4 md:grid md:grid-cols-12 gap-y-5 */}
            <Container className='grid grid-cols-6 gap-4 md:grid-cols-12 '>
                <div className='col-span-2 cursor-pointer'>
                    <Title t='Home' />
                    <ul className='flex flex-col gap-2 mt-4'>
                        <Li li='Home' />
                        <Li li='Shop' />
                        <Li li='About' />
                        <Li li='Contact' />
                        <Li li='Journal' />
                    </ul>
                </div>
                <div className='col-span-2 cursor-pointer'>
                    <Title t='Shop' />
                    <ul className='flex flex-col gap-2 mt-4'>
                        <Li li='Category 1' />
                        <Li li='Category 2' />
                        <Li li='Category 3' />
                        <Li li='Category 4' />
                        <Li li='Category 5' />
                    </ul>
                </div>
                <div className='col-span-2 cursor-pointer'>
                    <Title t='Help' />
                    <ul className='flex flex-col gap-2 mt-4'>
                        <Li li='Privacy Policy' />
                        <Li li='Terms & Conditions' />
                        <Li li='Special E-shop' />
                        <Li li='Shipping' />
                        <Li li='Secure Payments' />
                    </ul>
                </div>
                <div className='col-span-3 cursor-pointer'>
                    <p className='md:w-[186px] w-auto text-base font-DM font-bold text-primary'>(052) 611-5711 company@domain.com</p>
                    <p className='font-DM text-sm  text-[#6D6D6D] hover:text-primary mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='col-span-3 '>
                    <Image imageClass='!w-auto' src={logo} />
                </div>

            </Container>
            <Container className='flex items-center gap-10 pb-4 mt-16 sm:justify-between'>
                <div className="flex gap-3 px-3 text-base md:gap-6 text-primary icon md:px-0">
                    <Link>
                        <FaFacebookF />
                    </Link>
                    <Link>
                        <FaLinkedinIn />
                    </Link>
                    <Link>
                        <FaInstagram />
                    </Link>
                </div>

                <p className='font-DM text-sm  text-[#6D6D6D] hover:text-primary'>2020 Orebi Minimal eCommerce Figma Template by <Link>Adveits</Link></p>
            </Container>
        </div>
    )
}

export default Footer