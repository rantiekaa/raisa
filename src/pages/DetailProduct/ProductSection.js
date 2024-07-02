import PinkSocks from "../../assets/imgs/Pink-Socks.svg";
import PinkSocksExampleFront from "../../assets/imgs/Pink-Socks-Example-1.svg";
import PinkSocksExampleBack from "../../assets/imgs/Pink-Socks-Example-2.svg";
import ButtonPlusMinus from "../../components/common/ButtonPlusMinus";
import ChevronRight from "../../assets/icons/chevron-right.svg"
import { useState } from "react";

/**
 * 
 * @param item | name, price, sizes  
 *  
 */
const ProductSection = ({item}) => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [errorSelectedSize, setErrorSelectedSize] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const [errorQuantity, setErrorQuantity] = useState(false)

  const onClickSizes = (e) => {
    setSelectedSize(e.target.value)
    setErrorSelectedSize(false)
  }

  const onPlusClick = () => {
    setQuantity((prev) => prev + 1)
    setErrorQuantity(false)
  }

  const onMinusClick = () => {
    if(quantity > 0) {
      setQuantity((prev) => prev - 1)
      setErrorQuantity(false)
    }
  }

  const onOrderClick = () => {
    let error = false
    if (!selectedSize) {
      setErrorSelectedSize(true)
      error = true
    }
    if (!quantity || quantity == 0){
      setErrorQuantity(true)
      error = true
    }
    if (error) return

    const message = `Hallo, Terima kasih telah memesan produk NK1\n\nNama Produk : ${item.name}\nSize : ${selectedSize}\nJumlah : ${quantity}`
    const href = 'https://wa.me/' + process.env.REACT_APP_PHONE_NUMBER + '?text=' +  encodeURIComponent(message)

    console.log(href)
    window.location.replace(href)
  }

  return (
    <section className="flex w-full mt-20 gap-20">
      <div className="w-full">
        <div className="bg-yellow -skew-x-12 aspect-[7/3] relative -ml-5 mb-12 2xl:mb-18 flex justify-center">
          <img src={PinkSocks} alt="Pink Socks" className="skew-x-12 absolute ml-5 w-4/5" />
        </div>
        <div className="flex gap-10 justify-end mr-[8%]">
          <div className="bg-grey -skew-x-12 w-1/3 aspect-[7/4] flex justify-center items-center">
            <img src={PinkSocksExampleFront} alt="Sample Socks Front" className="skew-x-12" />
          </div>
          <div className="bg-grey -skew-x-12 w-1/3 aspect-[7/4] flex justify-center items-center">
            <img src={PinkSocksExampleBack} alt="Sample Socks Back" className="skew-x-12" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-peace-sans text-pink text-2xl 2xl:text-3xl mb-5">RUNNING</h2>
        <h1 className="font-peace-sans text-5xl 2xl:text-7xl mb-5 text-dark-content">{item.name}</h1>
        <p className="text-xl 2xl:text-2xl">RP. {item.price}</p>
        <div className="flex mt-12 justify-between mr-32">
          <div>
            <div className="font-peace-sans text-2xl 2xl:text-3xl mb-3">Sizes { errorSelectedSize ? <div className="text-red-900 text-base font-sans">Please select the size</div> : null }</div>
            <div className="flex gap-5">
            {
              item.sizes.map((size, i) => <button className={ "bg-black text-white clip-sizes px-3 2xl:px-5 py-1 2xl:py-2 min-w-14 2xl:min-w-16 font-peace-sans text-lg 2xl:text-xl " + (selectedSize === size ? "bg-pink hover:bg-dark-pink" : "hover:bg-dark-content")} key={i} onClick={onClickSizes} value={size}>{size}</button>)
            }
            </div>
          </div>
          <div>
            <button className="bg-black clip-right h-full text-white font-peace-sans text-4xl px-3"><img src={ChevronRight} alt="Right" /></button>
          </div>
        </div>
        <div className="flex flex-col mt-12 justify-between">
          <div className="font-peace-sans text-2xl 2xl:text-3xl mb-5">Quantity { errorQuantity ? <div className="text-red-900 text-base font-sans">Please fill the quantity</div> : null } </div>
          
          <div className="flex gap-5 mb-14">
            <ButtonPlusMinus type="minus" onClick={onMinusClick}/>
            <input type="text" className="outline outline-black w-14 2xl:w-16 text-center text-xl 2xl:text-2xl" readOnly value={quantity}/>
            <ButtonPlusMinus type="plus" onClick={onPlusClick} />
          </div>
        </div>
        <button className="clip-order bg-primary font-peace-sans text-white px-10 py-4 text-2xl" onClick={onOrderClick}>ORDER</button>
      </div>
    </section>
  );
};

export default ProductSection;
