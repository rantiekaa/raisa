import React from 'react'
import ShoesLarge from '../../assets/imgs/shoes-large.svg'
import ButtonOrder from '../common/ButtonOrder'
import { useNavigate } from 'react-router-dom'

function CardBestSeller({id, name, price}) {
  const navigate = useNavigate()

  const onAddToBagClick = () => {
    navigate('/detail-product/' + id)
  }

  const SpaceToNewLine = (string) => {
    const parts = string.split(" ");
    return (
      <div>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            {part}
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  return (
    <div className="bg-grey relative aspect-[2/1] w-[80%]">
      <img src={ShoesLarge} alt="Shoes" className="absolute right-0 w-7/12" />
      <div className="py-10 px-14 2xl:px-16 flex flex-col gap-5 2xl:gap-10">
        <h3 className="text-primary text-2xl 2xl:text-4xl font-peace-sans">
          #BESTSELLER
        </h3>
        <h2 className="font-peace-sans text-6xl 2xl:text-8xl">
          {SpaceToNewLine(name)}
        </h2>
        <p className="text-2xl 2xl:text-4xl">RP. {price}</p>
        <div>
          <ButtonOrder
            onClick={onAddToBagClick}
            title="Add To Bag"
            className="w-36 2xl:w-48 aspect-[3/1]"
          />
        </div>
        <div className="flex gap-3 2xl:gap-6">
          <div className="w-8 2xl:w-10 h-8 2xl:h-10 rounded-full bg-purple"></div>
          <div className="w-8 2xl:w-10 h-8 2xl:h-10 rounded-full bg-pink"></div>
          <div className="w-8 2xl:w-10 h-8 2xl:h-10 rounded-full bg-yellow"></div>
        </div>
      </div>
    </div>
  );
}

export default CardBestSeller;
