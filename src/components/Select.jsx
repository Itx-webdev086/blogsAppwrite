import React, { useId } from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
      
    const id = useId()

    return (
         <div className='w-full flex flex-col gap-y-2'>
            {label && <label
            className='px-3 mb-2'
            htmlFor={id}
            >
            {label}
            </label>}
            <select
                id={id}
                {...props}
                ref={ref}
                className={`rounded border border-gray-400 ${className}`}
            >
            {options?.map((option) => 
            <option key={option} value={option}>
                      {option}
            </option>    
            )}
            </select>

               
         </div>       
    )
}

export default React.forwardRef(Select)
