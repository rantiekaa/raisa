import React from 'react'
import boltAccent from '../../assets/imgs/bolt-accent.svg'
import boltAccent2 from '../../assets/imgs/bolt-accent-2.svg'
import CardCatalog from './CardCatalog'
import { list_catalog } from '../../utils/constant'

function CatalogSection() {
  return (
    <section id='Catalog'>
        <h2 className='py-24 flex justify-center items-center text-6xl font-peace-sans text-center'>OUR <br/> CATALOG</h2>
        <img src={boltAccent} alt="Bolt Accent" className='w-2/5 relative -z-10'/>
        <div className='-my-16 mx-32 grid grid-cols-3 gap-x-10 gap-y-20 justify-items-center'>
            {list_catalog.map((item, idx) => <CardCatalog catalog={item} key={idx} />)}
        </div>
        <div className='flex justify-end'>
            <img src={boltAccent2} alt="Bolt Accent" className='w-2/5 relative -z-10' />
        </div>
    </section>
  )
}

export default CatalogSection