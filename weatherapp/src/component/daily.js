import React from 'react'
import './daily.css'
function Daily(props) {
  return (
    <div>
      <p className='heading'>Weekly Weather Forecast for {props.city}</p>
      <div className='weekly-container'>

        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
        <div className='card'>
          <h6>Day:</h6>
          <h6>Temperature:</h6>
          <h6>Weather:</h6>
        </div>
      </div>
    </div>
  )
}

export default Daily