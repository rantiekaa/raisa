import React from 'react'
import ButtonPlusMinus from '../common/ButtonPlusMinus'
import { useNavigate } from 'react-router-dom'
import BestSellerRibbon from './catalog/BestSellerRibbon'
import NewArrivalRibbon from './catalog/NewArrivalRibbon'
import DiscountRibbon from './catalog/DiscountRibbon'

/**
 * 
 * @param {object} catalog - {id, img, name, price, ?ribbon, sizes} 
 * 
 */
function CardCatalog({catalog}) {
  const navigate = useNavigate()

  const onPlusClick = () => {
    navigate('/detail-product/' + catalog.id)
  }

  const RenderRibbon = (ribbon) => {
    if(ribbon?.type){
      return <DiscountRibbon percentage={ribbon.value} />
    }
    switch (ribbon) {
      case 'new':
        return <NewArrivalRibbon />;
      case 'best':
        return <BestSellerRibbon />;
      default:
        return null;
    }
  };  

  return (
    <div className='relative max-w-80'>
      {RenderRibbon(catalog?.ribbon)}
      <img src={catalog.img} alt="Shoes" className='absolute -left-6 top-0 z-10 h-[115%]'/>
      <div className='drop-shadow-lg bg-red-100 h-60 w-80 flex justify-end p-2'>
        <div>
          <h3 className='font-peace-sans text-xl'>{catalog.name}</h3>
          <h4>RP. {catalog.price}</h4>
          <div className='flex flex-col items-end gap-2 mt-6'>
            <div className='w-5 h-5 rounded-full bg-purple'></div>
            <div className='w-5 h-5 rounded-full bg-pink'></div>
            <div className='w-5 h-5 rounded-full bg-yellow'></div>
          </div>
          <div className='flex justify-end mt-6'>
            <ButtonPlusMinus type='plus' onClick={onPlusClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCatalog