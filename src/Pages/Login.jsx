import React from 'react'
import PageTitle from '../Component/Layer/PageTitle'
import Container from '../Component/Layer/Container'
import SignUpTitle from '../Component/Layer/SignUpTitle'
import Input from '../Component/Layer/Input'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Login = () => {
    return (
        <div>
            <PageTitle />
            <Container>
                <div className='mt-[127px] pb-16 w-[644px] font-DM text-base leading-30 text-second border-b '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </div>
                <SignUpTitle className='mt-14' title='Returning Customer' />

                <div className='pb-16 border-b '>
                    <div className='flex flex-wrap gap-x-10 gap-y-6'>
                        <Input value1='email' label='Email address' id='email' type='email' placeholder='Enter Your Email' ></Input>
                        <Input value1='password' label='Password' id='password' type='password' placeholder='Enter Your Password' ></Input>
                    </div>

                    <button className='border-[#2b2b2b] bg-white mt-7 w-[200px] font-DM font-bold text-sm text-primary py-4'>Log In</button>
                </div>

                <div className='pb-16 border-b'>
                    <SignUpTitle title='New Customer' className='mt-14' />
                    <p className='mt-[127px]  w-[644px] font-DM text-base leading-30 text-second  '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>

                    <Link to='/sign-up'>
                    <button className='border-[#2b2b2b] bg-primary mt-12 w-[200px] font-DM font-bold text-sm text-white py-4'>Continue</button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Login