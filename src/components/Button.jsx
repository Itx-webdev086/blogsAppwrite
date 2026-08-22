/* eslint-disable no-unused-vars */


function Button({
      children,
      type = 'button',
      bgColor = 'bg-teal-500',
      textColor = 'text-white',
      className = '',
      ...props
})
 {
    return (
        <button
        type={type}
         className={`rounded px-3 py-2 cursor-pointer ${className} ${bgColor} ${textColor}`} {...props}
        >{children}</button>
    )
}

export default Button

