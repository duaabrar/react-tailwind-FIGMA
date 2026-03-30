import React from 'react'

function Round({roundText, roundStyle}) {
  return (
    <div className={roundStyle}>
      {roundText}
    </div>
  )
}

export default Round