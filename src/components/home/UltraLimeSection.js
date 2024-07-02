import React from 'react'
import Leg from '../../assets/imgs/leg.svg'
import StepPink from '../../assets/imgs/step-pink.gif'
import StepOrange from '../../assets/imgs/step-orange.png'
import Ultra from '../../assets/imgs/vektor ultra.svg'
import Under from '../../assets/imgs/under-step.png'
import Background from '../../assets/imgs/background-step.png'

function UltraLimeSection() {
  return (
    <section className="mt-28 relative bg-cover bg-center" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-wrap relative ">
        <div className=" w-1/2 ">
          <div className="mt-[300px] flex items-center justify-center">
            <div className="text-8xl leading-[110px] font-peace-sans mx-auto">
              STEP <br /> ON OUR <br />
              FRESH <br /> GEAR!
            </div>
          </div>
          <div className="mt-[75px]">
            <p className="absolute ml-6 mt-[50px] text-[62px]  font-peace-sans text-[#BEFF40] z-[1]">ULTRA LIME</p>
            <img className="" src={Ultra} alt="Ultra" />
          </div>
        </div>
        <div className=" w-1/2">
          <div className="">
            <img className="absolute" src={Leg} alt="Leg" />
          </div>
          <div className="ml-[70px]">
            <img className="mt-[300px]" src={StepPink} alt="Step" />
          </div>
        </div>
        <div className="relative -bottom-[10rem]">
          <img src={StepOrange} alt="Step-Orange" className="relative " />
        </div>
        <div>
          <img className="relative -mt-[400px] mr-10 mb-[30px] w-screen" src={Under} alt="Background Under" />
        </div>
      </div>
    </section>
  )
}

export default UltraLimeSection
