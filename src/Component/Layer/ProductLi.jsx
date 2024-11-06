import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ProductLi = ({  catagoryli2, children, onClick, className }) => {

    


    return (
        <>

            <li onClick={onClick} className={`relative leading-7 text-second hover:text-primary ${className}`}>
                {catagoryli2} {children}
                
            </li>

        </>
    )
}

export default ProductLi