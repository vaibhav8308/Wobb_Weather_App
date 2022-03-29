import React, { useState } from 'react'
import './home.css'
function Calculator(props) {
  const [ celsius, setCelsius] =useState(0)
  function  handleCelsius(e){
    setCelsius(e.target.value)
  }

  const fernite = (celsius * 1.8) + 32
  return (
    <div className='calc' >
      <h4>Temperature Convertor</h4>
      <lable>celsius</lable>
      <div><input placeholder='celsius'value={celsius} onChange={handleCelsius} /></div>

      <lable>Fehrenheit</lable>
      <div><input placeholder='farhenheit' value={`${fernite}°F`} /></div>

    </div>
  )
}

export default Calculator