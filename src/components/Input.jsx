import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type= 'text',
    className,
    ...props
}, ref)
{
    const id = useId()
    return (
     <div className='w-full flex flex-col'>
        {label && <label className='px-3 mb-2'
        htmlFor={id}
        >
            {label}
            </label>}
            <input type={type}
            className={`rounded py-1 px-2 bg-gray-200 text-black outline-none focus:bg-teal-400 border border-gray-400 ${className}`}
            ref={ref}
            {...props}
            id={id}
             />
     </div>
    )
})

export default Input
