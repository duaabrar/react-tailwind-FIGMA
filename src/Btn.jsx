import React from 'react'

function Btn({text,btnStyle}) {
  return (
   <button className={btnStyle}>{text}</button>
  )
}

export default Btn