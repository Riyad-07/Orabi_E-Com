import React from 'react'
import { Link } from 'react-router-dom'

const Megamenu = ({menuli, to}) => {
  return (
    <li className='text-sm font-DM text-[#767676] mb-3 hover:text-primary transition-all duration-300 hover:font-bold'>
        <Link className='block w-[120px] ' to={to}>{menuli}</Link>
    </li>
  )
}

export default Megamenu