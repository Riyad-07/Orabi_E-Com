import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Li = ({ li, to, className, children, megamanu, }) => {
  
  return (
    <li className='group'>
      <Link className={`text-[#767676] text-sm hover:text-primary transition-all duration-300 ${className}`} to={to}>
        {li}
      </Link>



      <div className={`static hidden md:absolute top-0 group-hover:md:flex invisible h-full gap-12  opacity-0 cursor-pointer bg-amber-300 left-full group-hover:visible group-hover:opacity-100 transition-all duration-1000  px-10 py-7 ${megamanu} group-hover:block `}>
        {children}
      </div>

    </li>
  )
}

export default Li