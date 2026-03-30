import React from 'react'

function Quantum({boxStyle,boxHead,boxCenter,boxSmall}) {
  return (
    <div className={boxStyle}>
      <span className='font-bold lg:text-[12px] text-[10px] text-[#0F0F0F] leading-none '>{boxHead}</span>
      <span className='font-bold lg:text-[24px] text-4  text-[#693B93] leading-none'>{boxCenter}</span>
      <span className='font-light text-[#0F0F0F80]  text-[10px] leading-none'>{boxSmall}</span>
    </div>
  )
}

export default Quantum