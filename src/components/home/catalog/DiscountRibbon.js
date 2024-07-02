import React from 'react'

/**
 * 
 * @param percentage number 
 * 
 */
function DiscountRibbon({percentage}) {
  return (
    <div className='background-star absolute z-20 -top-7 -left-7 w-20 aspect-[1/1] flex flex-col text-sm leading-4 justify-center items-center font-peace-sans text-white'>
        <span>{percentage}%</span>
        <span>SALE!</span>
    </div>
  )
}

export default DiscountRibbon