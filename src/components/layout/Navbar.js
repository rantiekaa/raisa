import React from 'react'
import logo from '../../assets/imgs/logo.svg'
import bag from '../../assets/icons/bag.svg'
import search from '../../assets/icons/search.svg'
import bestProduct from '../../assets/icons/best-product-of-month.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between items-center w-100 mx-32 pt-10'>
        <ul>
          <Link to='/'>
              <img src={logo} alt="Logo NK1" />
          </Link>
        </ul>
        <ul className='flex items-center gap-5'>
            <li>
              <a href='/#BestSeller'>
                <img src={bestProduct} alt="BEST PRODUCT OF MONTH" style={{scale: '0.8'}} />
              </a>
            </li>
            <li>
            <a href="/#Catalog">
              ALL PRODUCT
            </a>
            </li>
            <li>MEN</li>
            <li>WOMEN</li>
        </ul>
        <ul className='flex gap-5'>
            <li><img src={bag} alt="Bag" /></li>
            <li><img src={search} alt="Search" /></li>
        </ul>
    </nav>
  )
}

export default Navbar