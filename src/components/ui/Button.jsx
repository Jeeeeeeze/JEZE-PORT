import React from 'react'

function Button({ children, className, onClick, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button