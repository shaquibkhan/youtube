import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-2 p-1 m-2 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button