import React, { useState, useEffect } from 'react'
import { hashtag } from '../../utils/constant'
import CardBestSeller from './CardBestSeller'
import { getCatalogById } from '../../utils/constant'
import Loading from '../common/Loading'

function BestSellerSection() {

  const [item, setItem] = useState(null)

  useEffect(() => {
    // simulasi fetch best catalog
    setTimeout(() => {
      setItem(getCatalogById(1))
    }, 5000)
  }, [])
  

  return (
    <section className='p-32'>
      <div className='flex flex-col justify-center items-center text-7xl 2xl:text-8xl font-peace-sans text-transparent'>
        <h2 className='text-black'>#{hashtag}</h2>
        <h2 className='text-stroke'>#{hashtag}</h2>
        <h2 className='text-stroke'>#{hashtag}</h2>
        <h2 className='text-stroke fading-effect'>#{hashtag}</h2>
      </div>
      <div className='flex justify-center py-20' id='BestSeller'>
          { item ? <CardBestSeller id={item.id} name={item.name} price={item.price} /> : <Loading /> }
      </div>
    </section>
  )
}

export default BestSellerSection