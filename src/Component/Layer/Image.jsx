import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({to, src, alt, className, imageClass}) => {
  return (
    <Link to={to} className={`${className}`}>
        <picture >
            <img className={`w-full ${imageClass}`}  src={src} alt={alt} />
        </picture>
    </Link>
  )
}

export default Image