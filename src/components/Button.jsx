import React from 'react'
const Button = ({children,className}) => {


  return (
    <>
      <button className={`px-12 py-4 bg-primary text-white rounded-sm ${className}`}>
        {children}  
      </button>
    </>
  )
}

export default Button