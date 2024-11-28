import React from 'react'

const InputControl = ({placeholder, handleChange}) => {
  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={handleChange}
        className='input input-bordered w-full max-w-xs' />
    </div>
  )
}

export default InputControl