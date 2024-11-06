import React from 'react'
import Container from './Container';
import { useLocation } from 'react-router-dom';
import { FaGreaterThan } from 'react-icons/fa';

const PageTitle = ({className}) => {
    const location = useLocation();
    let value = location.pathname.split("/")[1];

    return (
        <div className={`${className} py-32`}>
            <Container>
                <h2 className='text-5xl font-bold capitalize font-DM text-primary'>{value}</h2>
                <p className='flex items-center gap-2 mt-3 text-xs capitalize text-second font-DM hover:text-primary'>Home <FaGreaterThan /> {value} </p>
            </Container>
        </div>
    )
}

export default PageTitle