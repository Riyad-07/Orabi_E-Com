import React from 'react'

const Heading = ({title,className}) => {
  return (
    <h2 className={`font-DM font-bold text-primary text-2xl md:text-[39px] text-center lg:text-start ${className}`}>
        {title}
    </h2>
  )
}

export default Heading