import React from 'react'
import Plus from '../../assets/icons/plus.svg'
import Minus from '../../assets/icons/minus.svg'

/**
 * 
 * @param type plus | minus 
 * 
 */ 

function ButtonPlusMinus({type = 'plus', onClick}) {
  return (
    <div className='cursor-pointer w-11 h-11 rounded-full bg-primary flex justify-center items-center text-white text-4xl' onClick={onClick}>
      { type === 'plus' ? <img src={Plus} alt="Plus" /> : <img src={Minus} alt="Minus" /> }
    </div>
  )
}

export default ButtonPlusMinus