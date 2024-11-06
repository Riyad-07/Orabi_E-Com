import React, { useState } from 'react'
import PageTitle from '../Component/Layer/PageTitle'
import Container from '../Component/Layer/Container'
import SignUpTitle from '../Component/Layer/SignUpTitle'
import Input from '../Component/Layer/Input'

const SignUp = () => {

    let Division = ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"]
    const Districts = ["Bagerhat", "Bandarban", "Barguna", "Barisal", "B Brahmanbaria", "Brahmanbaria", "Bogra", "Brahmanbaria", "Chandpur", "Chattogram", "Chuadanga", "Cox's Bazar", "Dhaka", "Dinaipur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jatiyo", "Jhalokati", "Jhalokati", "Jinaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"];

    let[fName , setFName] = useState('')
    let[fNameE, setFNameE] = useState('')

    
    let[lName , setLName] = useState('')
    let[lNameE, setLNameE] = useState('')
    
    let[email , setEmail] = useState('')
    let[emailE, setEmailE] = useState('')
    
    let[number , setNumber] = useState('')
    let[numberE, setNumberE] = useState('')
    
    let[password , setPassword] = useState('')
    let[passwordE, setPasswordE] = useState('')
    
    let[rePassword , setRePassword] = useState('')
    let[rePasswordE, setRePasswordE] = useState('')

    let firstName = (e) => {
        setFName(e.target.value)
        setFNameE('')  
    }

    let lastName = (e) => {
        setLName(e.target.value)
        setLNameE('')  
    }

    let emailError = (e) => {
        setEmail(e.target.value)
        setEmailE('')  
    }

    let numberError = (e) => {
        setNumber(e.target.value)
        setNumberE('')  
    }
    let handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordE('')  
    }
    let rePasswordError = (e) => {
        setRePassword(e.target.value)
        setRePasswordE('')  
    }

    

    let handleValidation = () => {
        if(!fName){
            setFNameE('Please Enter Your First Name')
        }
        if(!lName){
            setLNameE('Please Enter Your Last Name')
        }
        if(!email){
            setEmailE('Please Enter Your Email')
        }
        if(!number){
            setNumberE('Please Enter Your Number')
        }
        if(!password){
            setPasswordE('Please Enter Your Password')
        }
        // if(!rePassword){
        //     setRePasswordE('Your Password is Not Match')
        // }
        if(password !== rePassword){
            setRePasswordE('Your Password is Not Match')
        }
    }

    return (
        <div>
            <PageTitle />
            <Container>
                <p className='text-base font-DM text-second leading-30 my-28 max-w-[644px] '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>

                <div className='pb-16 border-b '>
                    <SignUpTitle title='Your Personal Details' />
                    <div className='flex flex-wrap gap-x-10 gap-y-6'>


                        
                        <Input onChange={firstName}  value1={fName} id="First" placeholder='First Name' type='text' label='First Name' >
                            <p className='absolute left-0 text-red-500 top-full'>{fNameE}</p>
                        </Input>
                        
                        <Input onChange={lastName} value1={lName} id="Second" placeholder='Last Name' type='text' label='Last Name' >
                        <p className='absolute left-0 text-red-500 top-full'>{lNameE}</p>
                        </Input>
                        
                        <Input onChange={emailError} value1={email} id="email" placeholder=' company@domain.com' type='email' label='Email address' >
                        <p className='absolute left-0 text-red-500 top-full'>{emailE}</p>
                        </Input>
                        
                        <Input onChange={numberError} value1={number} id="Telephone" placeholder='Your phone number' type='number' label='Telephone' >
                        <p className='absolute left-0 text-red-500 top-full'>{numberE}</p>
                        </Input>
                    </div>
                </div>

                
                <div className='pb-16 border-b mt-14'>
                    <SignUpTitle title='New Customer' />
                    <div className='flex flex-wrap gap-x-10 gap-y-6'>
                        <Input id="address1" placeholder='4279 Zboncak Port Suite 6212' type='text' label='Address 1' />
                        <Input id="addres2" placeholder='-' type='text' label='Address 2' />
                        <Input id="city" placeholder=' Your city' type='text' label='City' />
                        <Input id="post" placeholder='05228' type='number' label='Post Code' />

                        <div className='w-[508px]'>
                            <h2 className='mb-3 font-bold leading-6 font-DM text-primary '>Division</h2>
                            <select onChange={Division} className='w-full pb-3 outline-none placeholder:text-second placeholder:font-DM placeholder:text-sm' name="" id="">
                                <option value="Please select">Please select</option>
                                {
                                    Division.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='w-[508px]'>
                            <h2 className='mb-3 font-bold leading-6 font-DM text-primary '>Division</h2>
                            <select onChange={Districts} className='w-full pb-3 outline-none placeholder:text-second placeholder:font-DM placeholder:text-sm' name="" id="">
                                <option value="Please select">Please select</option>
                                {
                                    Districts.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>


                    </div>
                </div>

                
                <div className='pb-16 border-b mt-14'>
                    <SignUpTitle title='Your Password' />
                    <div className='flex flex-wrap gap-x-10 gap-y-6'>
                        <Input onChange={handlePassword} value1={password} label='Password' placeholder='Password' type='Password' >
                        <p className='absolute left-0 text-red-500 top-full'>{passwordE}</p>
                        </Input>
                        <Input onChange={rePasswordError} value1={rePassword} label='Repeat Password' placeholder='Repeat Password' type='Password' >
                        <p className='absolute left-0 text-red-500 top-full'>{rePasswordE}</p>
                        </Input>
                    </div>
                </div>

                <div className='flex items-center mt-16'>
                    <input className='mr-4 relative w-3 h-3 appearance-none border bg-white border-second after:content-[""] after:absolute after:h-2.5 after:w-2.5 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-second checked:after:border checked:after:border-white' id='checkbox' type="checkbox" />
                    <label className='text-sm font-DM text-second' htmlFor="checkbox">I have read and agree to the Privacy Policy</label>
                </div>

                <div className='flex items-center mt-6 text-sm font-DM text-second gap-x-8'>
                    <p className=''>
                        Subscribe Newsletter
                    </p>
                    <div className='flex items-center gap-x-4'>
                        <input className='relative w-3 h-3 appearance-none border bg-white border-second after:content-[""] after:absolute after:h-2.5 after:w-2.5 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-second checked:after:border checked:after:border-white' id='yes' type="radio" name='subscribe' />
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <input className='w-3 h-3 border appearance-none border-second bg-white after:content-[""] after:absolute after:top-1/2 after:left-1/2 checked:after:border-white checked:after:border checked:after:bg-second relative after:-translate-x-1/2 after:-translate-y-1/2 after:h-2.5 after:w-2.5' id='no' type="radio" name='subscribe' />
                        <label htmlFor="no">No</label>
                    </div>
                </div>
                <button onClick={handleValidation} className='text-center text-white w-[200px] bg-primary py-4 text-sm font-bold font-DM mt-7'>Log in </button>
            </Container>
        </div>
    )
}

export default SignUp