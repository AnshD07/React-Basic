import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'white',
    className = '',
    ...props
}) {
  return ( 
    <button className={`mx-2 ${bgColor} ${textColor} ${className} `}  {...props}>  //! if pass extra argument on button components
        {children}
    </button>
 
  )
}

export default Button
