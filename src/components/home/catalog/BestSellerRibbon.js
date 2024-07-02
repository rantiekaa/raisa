import React from 'react'
import Medal from '../../../assets/icons/medal.svg'
import MedalBack from '../../../assets/icons/medal-back.svg'

function BestSellerRibbon() {
  return (
    <>
        <img src={Medal} alt="Medal" className='absolute z-20 -top-1 -left-5' />
        <span className='absolute z-30 -rotate-[64deg] top-11 -left-7 text-sm font-peace-sans text-white'>BEST SELLER</span>
        <img src={MedalBack} alt="MedalBack" className='absolute -z-10 top-0 -left-4' />
    </>
  )
}

export default BestSellerRibbon