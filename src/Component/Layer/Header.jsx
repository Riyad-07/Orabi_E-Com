import React, { useEffect, useState } from 'react'
import logo from '../../../public/image/Logo.png'
import Image from './Image'
import Container from './Container'
import Li from './Li'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { FaCaretDown, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    let [show, setShow] = useState(false)
    let [show1, setShow1] = useState(false)
    let [cart, setCart] = useState(false)

    let a = useSelector((item)=>item.allCart.addCart)
    

    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.98) {
                setShow(false)
            } else {
                setShow(true)
            }
        }
        resize()

        window.addEventListener("resize", resize)

    }, [])


    return (
        <nav className='bg-red-400 '>
            <Container className="relative flex items-center justify-end px-3 py-4 md:justify-center md:py-8 md:px-0">
                <Image className='absolute -translate-y-1/2 md:left-0 left-3 top-1/2' to="/" src={logo} alt="Logo.png" />


                <ul className={`absolute transition-all duration-500 left-0 flex flex-col w-full font-bold text-center bg-gray-400 md:w-auto md:flex-row md:bg-transparent top-full md:static gap-x-10 font-DM ${show ? "translate-x-0" : "-translate-x-full"} z-10 `}>
                    <Li megamanu="!hidden" className="text-primary" to="/" li="Home" />
                    <Li megamanu="!hidden" to="/products" li="Shop" />
                    <Li megamanu="!hidden" to="/about" li="About" />
                    <Li megamanu="!hidden" to="/contacts" li="Contacts" />
                    <Li megamanu="!hidden" to="/journal" li="Journal" />
                </ul>



                <div className='flex items-center cursor-pointer md:hidden gap-x-5'>
                    <div className='flex gap-x-5 text-primary'>
                        <div className="flex gap-x-0.5 one">
                            <div className="relative account">
                                <div onClick={() => setShow1(!show1)} className="flex gap-x-2 one">
                                    <FaUser />
                                    <FaCaretDown />
                                </div>
                                <div className={`${show1 ? "opacity-100 visible" : "opacity-0 invisible"} absolute right-0 mt-5 top-full z-10`}>
                                    <Link to='/log-in'>
                                    <p className='py-4 text-sm font-bold text-center hover:text-primary hover:bg-white text-white font-DM bg-primary w-[200px] transition-all duration-500'>My Account</p>
                                    </Link>
                                    <p className='text-white py-4 text-center hover:text-primary hover:bg-white font-DM w-[200px] bg-primary transition-all duration-500'>Log Out</p>
                                </div>

                            </div>
                        </div>
                        <div className="one">
                            <div className='relative'>
                                <div onClick={() => setCart(!cart)} className="relative one">
                                    <FaShoppingCart />
                                    <p className='absolute mb-5 text-base text-white -top-4 -right-2'>{a.length}</p>
                                </div>
                                <div className={`${cart ? "opacity-100 visible" : "opacity-0 invisible"} maincart md:w-[360px] bg-[#4a8885] absolute top-full p-4 right-0 mt-5 z-10 `}>
                                    <div className="flex items-center md:justify-between top gap-x-3">
                                        <div className="w-20 h-20 bg-gray-400 img">
                                            <Link to='/'>
                                                <img className='object-cover w-full h-full' src="" alt="image" />
                                            </Link>
                                        </div>
                                        <div className="text-sm font-bold center font-DM text-primary">
                                            <p >Black Smart Watch</p>
                                            <span>$44.00</span>
                                        </div>
                                        <div onClick={() => setCart(false)} className="icon">
                                            X
                                        </div>
                                    </div>

                                    <p className='text-base leading-6 font-DM text-[#767676] md:my-7 my-3'>Subtotal: <span className='text-primary'>  $44.00</span></p>



                                    <div className="flex w-full text-sm font-bold text-center md:justify-between bottom font-DM gap-x-3 ">
                                        <div className='transition-all duration-500 border border-primary md:w-[148px] bg-white text-primary md:py-4 hover:bg-primary hover:text-white px-1 md:px-0 py-2 w-[100px]'>View Cart</div>
                                        <div className='transition-all duration-500 border border-primary md:w-[148px] bg-white text-primary md:py-4 hover:bg-primary hover:text-white px-1 md:px-0 py-2 w-[100px]'>Checkout</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setShow(!show)} className="text-2xl aricon ">
                        <AiOutlineAlignRight />
                    </div>
                </div>


            </Container>
        </nav>
    )
}

export default Header