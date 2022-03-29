import React, { useEffect, useState } from 'react'
import './home.css'
import Daily from './daily'
import Calculator from './calculator'
import Map from './Map'
function Home() {
    const [cityName, setCityName] = useState(null)
    const [searchCity, setSearchCity] = useState("pune")
    const [weather, setWeather] = useState(" ")

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=808b66d32078f716a4444d5d461fbb7d`)
            const data = await res.json();
            console.log(data)
            setCityName(data.main)
            setWeather(data.weather[0])

        }
        getData()
    }, [searchCity])



    return (

        <div className='main-container'>
            <div className='header'>My Weather App</div>
            <input className='search' placeholder='Search Here' type="search" value={searchCity} onChange={(e) => { setSearchCity(e.target.value) }} />

            {!cityName ? (
                <h4>No City Found</h4>
            ) : (
                <div className='parent'>
                    <div className='div1' >
                        <div className='current-container'>
                            <h4>Today's Forecast for {searchCity}</h4>
                            <div className='div1-child'>

                                <span className='tmp'> Current Temperature :</span><span className='span'>{cityName.temp}°C</span>
                                <span className='span' >  <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} /></span>


                                <h5>Weather Condition:  <span className='span'>{weather.description}</span></h5>
                                <h5>Highest Temp.:<span className='span'>{cityName.temp_max}°C</span> </h5>
                                <h5>Lowest Temp.:<span className='span'>{cityName.temp_min}°C</span></h5>
                            </div>

                        </div>

                        <Daily city={searchCity} />


                    </div>


                    <div className='div1'>
                        <div>
                        <Map/>
                        </div>
                        <div>
                            <Calculator celsius={cityName.temp} />
                        </div>

                    </div>
                </div>
            )
            }


        </div>
    )
}

export default Home














