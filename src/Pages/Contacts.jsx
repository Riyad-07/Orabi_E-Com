import React from 'react'
import SignUpTitle from '../Component/Layer/SignUpTitle'
import PageTitle from '../Component/Layer/PageTitle'
import Container from '../Component/Layer/Container'
import Input from '../Component/Layer/Input'

const Contacts = () => {
    return (
        <div>
            <PageTitle />
            <Container>
                <SignUpTitle title='Fill up a Form' />
                <div>
                    
                    <Input divClass='w-[780px] mb-6' label='Name' placeholder='Your Name Here' id='name' type='text'></Input>
                    
                    <Input divClass='w-[780px] mb-6' type='email' label='Email' placeholder='Your email Here' id='email'></Input>
                    
                    {/* <Input divClass='w-[780px] mb-6' type='textarea' label='Message' placeholder='Your message Here' id='message'></Input> */}

                    
                    <div className='w-[780px] mb-6'>
                        <label className='mb-3 font-bold leading-6 font-DM text-primary ' htmlFor="messag">Message</label>
                        <textarea  className='w-full outline-none placeholder:text-second placeholder:font-DM placeholder:text-sm `} id={id} type={type} placeholder={placeholder} value1={value1} />
                {children}' name="" id="messag" placeholder='Your Message Here'></textarea>
                    </div>
                    <button className='border-[#2b2b2b] bg-primary mt-12 w-[200px] font-DM font-bold text-sm text-white py-4'>Post</button>
                </div>
                <div>
                    <iframe className='pt-36' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.476278180495!2d90.3790065187923!3d23.741210273265793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1725621960029!5m2!1sen!2sbd" width="100%" height="572px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </div>
    )
}

export default Contacts