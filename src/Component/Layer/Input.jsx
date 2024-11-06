import React from 'react'

const Input = ({ title, label, placeholder, id, type, className, onChange, value1, children, divClass}) => {
    return (
            <div className={`w-[508px] relative ${divClass}`}>
                {/* <h3 className='mb-3 font-bold leading-6 font-DM text-primary '>{title}</h3> */}
                <label className='font-bold leading-6 font-DM text-primary' htmlFor={id}>{label}</label>
                <input onChange={onChange} className={`w-full pb-3 outline-none placeholder:text-second placeholder:font-DM placeholder:text-sm mt-2`} id={id} type={type} placeholder={placeholder} value1={value1} />
                {children}
            </div>
    )
}

export default Input