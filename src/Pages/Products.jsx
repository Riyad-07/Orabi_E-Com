import React, { useState } from 'react'
import Container from '../Component/Layer/Container'
import { useLocation } from 'react-router-dom'
import PageTitle from '../Component/Layer/PageTitle'
import { FaCaretDown, FaCaretUp, FaMinus, FaPlus } from 'react-icons/fa'
import ProductLi from '../Component/Layer/ProductLi'
import Pagination from '../Component/Layer/Pagination'

const Products = () => {

    let [down, setDown] = useState(true)
    let [down1, setDown1] = useState(true)
    let [showProduct, setShowProduct] = useState(12)

    let optionValue = (element) => {
        let showNumber = Number(element.target.value)
        setShowProduct(showNumber)
    }
    let [show, setShow] = useState(false)
    let [show1, setShow1] = useState(false)
    let [show2, setShow2] = useState(false)
    let [show3, setShow3] = useState(false)
    let [show4, setShow4] = useState(false)




    return (
        <div>
            <Container>
                <PageTitle />
                <div className='flex justify-between'>
                    <div className=' w-[370px] bg-red-300'>
                        <h3 className='text-xl font-bold text-primary font-DM mb-9'>Shop by Category</h3>
                        <ul className='flex flex-col gap-5 cursor-pointer'>
                            <ProductLi onClick={() => setShow(!show)} catagoryli2='Catagory 01' >
                                <div className="icon ">
                                    <FaPlus className={`absolute -translate-y-1/2 right-2 top-1/2 ${show ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all duration-300`} />
                                    <FaMinus className={`absolute -translate-y-1/2 right-2 top-1/2 ${show ? 'opacity-100 ' : 'opacity-0 rotate-180'} transition-all duration-300`} />
                                </div>
                            </ProductLi>
                            {
                                show && (
                                    <ul className='flex flex-col gap-5'>
                                        <li className='text-second hover:text-primary'>Home 01</li>
                                        <li className='text-second hover:text-primary'>Home 02</li>
                                        <li className='text-second hover:text-primary'>Home 03</li>
                                    </ul>
                                )
                            }
                            <ProductLi catagoryli2='Catagory 02' />
                            <ProductLi onClick={() => setShow1(!show1)} catagoryli2='Catagory 03' >
                                <div className="icon ">
                                    <FaPlus className={`absolute -translate-y-1/2 right-2 top-1/2 ${show1 ? 'opacity-0 rotate-180' : 'opacity-100'} transition-all duration-300`} />
                                    <FaMinus className={`absolute -translate-y-1/2 right-2 top-1/2 ${show1 ? 'opacity-100 ' : 'opacity-0 rotate-180'} transition-all duration-300`} />
                                </div>
                                {
                                    show1 && (
                                        <ul className='flex flex-col gap-5'>
                                            <li className='text-second hover:text-primary'>Home 01</li>
                                            <li className='text-second hover:text-primary'>Home 02</li>
                                            <li className='text-second hover:text-primary'>Home 03</li>
                                        </ul>
                                    )
                                }
                            </ProductLi>
                            <ProductLi catagoryli2='Catagory 04' />
                            <ProductLi catagoryli2='Catagory 05' />
                        </ul>

                        <div className='cursor-pointer mt-14'>
                            <h3 onClick={() => setShow2(!show2)} className='flex justify-between text-xl font-bold text-primary font-DM mb-9 title'>Shop by Color <FaCaretDown /></h3>
                            {
                                show2 && (
                                    <ul className='flex flex-col gap-5 cursor-pointer'>
                                        <ProductLi className='' catagoryli2='Color 01'></ProductLi>
                                        <ProductLi className='' catagoryli2='Color 02'></ProductLi>
                                        <ProductLi className='' catagoryli2='Color 03'></ProductLi>
                                        <ProductLi className='' catagoryli2='Color 04'></ProductLi>
                                    </ul>
                                )
                            }
                        </div>



                        <div className='cursor-pointer mt-14'>
                            <h3 onClick={() => setShow3(!show3)} className='flex justify-between text-xl font-bold text-primary font-DM mb-9 title'>Shop by Brand <FaCaretDown /></h3>
                            {
                                show3 && (
                                    <ul className='flex flex-col gap-5 cursor-pointer'>
                                        <ProductLi className='' catagoryli2='Brand 01'></ProductLi>
                                        <ProductLi className='' catagoryli2='Brand 02'></ProductLi>
                                        <ProductLi className='' catagoryli2='Brand 03'></ProductLi>
                                        <ProductLi className='' catagoryli2='Brand 04'></ProductLi>
                                        <ProductLi className='' catagoryli2='Brand 05'></ProductLi>
                                    </ul>
                                )
                            }
                        </div>

                        <div className='cursor-pointer mt-14'>
                            <h3 onClick={() => setShow4(!show4)} className='flex justify-between text-xl font-bold text-primary font-DM mb-9 title'>Shop by Price <FaCaretDown /></h3>
                            {
                                show4 && (
                                    <ul className='flex flex-col gap-5 cursor-pointer'>
                                        <ProductLi className='' catagoryli2='$0.00 - $9.99'></ProductLi>
                                        <ProductLi className='' catagoryli2='$10.00 - $19.99'></ProductLi>
                                        <ProductLi className='' catagoryli2='$20.00 - $29.99'></ProductLi>
                                        <ProductLi className='' catagoryli2='$30.00 - $39.99'></ProductLi>
                                        <ProductLi className='' catagoryli2='$40.00 - $69.99'></ProductLi>
                                    </ul>
                                )
                            }
                        </div>


                    </div>

                    <div className=' w-[1190px] bg-red-300'>

                        <div >
                            <div className='flex items-center justify-end mb-5 gap-x-10'>
                                <div className='flex items-center gap-2 text-base font-DM text-second'>
                                    <label htmlFor="">Short by:</label>
                                    <div className='relative flex items-center'>
                                        <select onClick={() => setDown1(!down1)} className='flex w-48 px-5 py-1 outline-none appearance-none ' name="" id="">
                                            <option value="Featured">Featured</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                        </select>
                                        <FaCaretDown className={`absolute z-10 -translate-y-1/2 right-2 top-1/2 ${down1 ? "block" : "hidden"}`} />
                                        <FaCaretUp className={`absolute z-10 -translate-y-1/2 right-2 top-1/2 ${down1 ? "hidden" : "block"}`} />
                                    </div>
                                </div>

                                <div className='flex items-center text-base gap-x-2 text-second font-DM'>
                                    <label htmlFor="">Show:</label>
                                    <div className='relative flex items-center '>
                                        <select onChange={optionValue} onClick={() => setDown(!down)} className='flex px-5 py-1 outline-none appearance-none w-36 ' name="" id="">
                                            <option value="12">12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                            <option value="48">48</option>
                                        </select>
                                        <FaCaretDown className={`absolute z-10 -translate-y-1/2 right-2 top-1/2 ${down ? "block" : "hidden"}`} />
                                        <FaCaretUp className={`absolute z-10 -translate-y-1/2 right-2 top-1/2 ${down ? "hidden" : "block"}  `} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Pagination itemsPerPage={showProduct} />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Products