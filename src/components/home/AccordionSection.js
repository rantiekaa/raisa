import React, { useState } from 'react'
import HeaderTrail from '../../assets/imgs/header-trail.svg'
import FooterTrail from '../../assets/imgs/FooterTrail.svg'
import SubtractHeader from '../../assets/imgs/SubtractHeader.svg'
import SubtractFooter from '../../assets/imgs/SubtractFooter.svg'
import EndSectionTrailRight from '../../assets/imgs/SectionTrailRight.svg'
import EndSectionTrailLeft from '../../assets/imgs/SectionTrailLeft.svg'
import LineTrail from '../../assets/imgs/LineTrail.svg'
import ShoeRun from '../../assets/imgs/ShoeRun.png'

const AccordionSection = () => {
  const contents = [
    { title: 'RUNNING', description: 'For your daily activity' },
    { title: 'TRAINING', description: 'For your daily activity' },
    { title: 'TRAIL RUN', description: 'For your daily activity' },
    { title: 'RESTING', description: 'For your daily activity' },
  ]
  const [isHover, setIsHover] = useState([false, true, false, false])

  const onHoverAccordion = (index) => {
    setIsHover((prev) =>
      prev.map((item, i) => {
        if (i === index) return true
        return false
      })
    )
  }

  return (
    <section className="w-full 2xl:-mt-[180px] xl:-mt-[150px] z-10 2xl:-bottom-[22rem] overflow-hidden">
      <img src={HeaderTrail} alt="HeaderTrail" className="relative w-full z-10" />
      <img src={SubtractHeader} alt="SubtractHeader" className="w-full 2xl:-mt-20 xl:-mt-20 sm:-mt-0 md:-mt-0" />

      <div className="flex my-10 justify-between -skew-x-12 gap-5 2xl:gap-10 accordion">
        {contents.map((content, i) => (
          <div className={'h-[24rem] 2xl:h-[35rem] w-1/5 text-white relative transition-all before:transition-all after:transition-all ' + (isHover[i] ? 'grow bg-primary before:bg-primary after:bg-primary' : 'bg-black before:bg-black after:bg-black')} key={i} onMouseEnter={() => onHoverAccordion(i)}>
            <img src={ShoeRun} alt="Shoe Run" className={'absolute z-10 top-0 right-0 w-[70%] 2xl:w-3/4 skew-x-12 transition-all ' + (isHover[i] ? 'opacity-100' : 'opacity-0')} />
            <img src={LineTrail} alt="Line Trail" className={'absolute top-[30%] transition-all ' + (isHover[i] ? 'opacity-100' : 'opacity-0')} />
            <div className={'absolute -translate-y-1/2 font-peace-sans whitespace-nowrap text-4xl 2xl:text-6xl transition-all ' + (isHover[i] ? 'translate-x-0 rotate-0 top-[80%] skew-x-12 text-2xl 2xl:text-5xl left-16 2xl:left-20' : '-translate-x-1/2 -rotate-90 left-[50%] top-[50%]')}>{content.title}</div>
            <div className={'absolute top-[83%] left-[4.35rem] 2xl:left-[5.4rem] skew-x-12 text-lg 2xl:text-2xl transition-all ' + (isHover[i] ? 'opacity-100' : 'opacity-0')}>{content.description}</div>
          </div>
        ))}
      </div>

      <img src={SubtractFooter} alt="SubtractHeader" className="w-full 2xl:-mb-20 xl:-mb-20 sm:-mb-10 md:-mb-10" />
      <img src={FooterTrail} alt="FooterTrail" className="w-full" />

      <div className="relative flex justify-between w-full mt-3">
        <img src={EndSectionTrailLeft} alt="EndSectionTrailLeft" className="relative 2xl:w-full max-w-[40%]" />
        <img src={EndSectionTrailRight} alt="EndSectionTrailRight" className="relative 2xl:w-full max-w-[40%]" />
      </div>
    </section>
  )
}

export default AccordionSection
