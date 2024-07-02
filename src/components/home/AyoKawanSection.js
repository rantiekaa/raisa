import React from 'react'
import BgAyoKawan from '../../assets/imgs/cek.png'

const AyoKawanSection = () => {
  return (
    <section>
        <div className='relative mt-20 flex items-center justify-center w-full h-full'>
            <h1 className='absolute text-white font-peace-sans lg-cutom:text-6xl -mt-[15rem] xl:-mt-[30rem] 2xl:-mt-[30rem] xxs:-mt-[7rem] xl:text-6xl 2xl:text-8xl xxs:text-3xl lg-cutom:-mt-80'>AYO KAWAN!</h1>
            <img src={BgAyoKawan} className='w-full h-full' alt="Ayo Kawan Background" />
        </div>
    </section>
  )
}

export default AyoKawanSection