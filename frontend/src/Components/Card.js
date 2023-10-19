import { getBgColor, getSunData, getTime } from '../utils/functions';
import {MdOutlineClose} from 'react-icons/md'
import WindDegree from '../assets/wind-degree.png'
import {IoIosArrowRoundBack} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({city}) => {
  return (
    <li className="card">

      <div className="top-container" style={{background: `${getBgColor(city.weather[0].description)}`}}>
        <div className="city center">
          <h3>{city.name}, {city.sys.country}</h3>
          <p className='time'>{getTime(city.dt,city.sys.timezone)}</p>
        </div>
        <div className="description center">
          <img src={ `https://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt="" />
          <h5>{city.weather[0].description}</h5>
        </div>
        <div className="temp center">
          <h1>{city.main.temp}<sup className='symbol'>o</sup><span>C</span></h1>
        </div>
        <div className="temp-min-max center">
          <p>Temp Min: {Math.round(city.main.temp_min)}<sup className='symbol'>o</sup>C</p>
          <p>Temp Max: {Math.round(city.main.temp_max)}<sup className='symbol'>o</sup>C</p>
        </div>
        <div className='close-btn'>
          <MdOutlineClose className='btn' onClick={()=>{console.log('clicked')}}/>
        </div>
        <div className='back-btn'>
          <Link to={'/'}><IoIosArrowRoundBack className='btn' style={{width: '25px', height: '25px'}}/></Link>  
        </div>
      </div>

      <div className="bottom-container">

        <div className="left col">
          <p><span className='p-bold'>Pressure: </span>{city.main.pressure}hPa</p>
          <p><span className='p-bold'>Humidity: </span>{city.main.humidity}%</p>
          <p><span className='p-bold'>Visibility: </span>{((city.visibility)/1000).toFixed(1)}km</p>
        </div>

        <div className="middle col">
          <img style={{rotate: `${-135+city.wind.deg}deg`}} src={WindDegree} alt="" />
          <p>{(city.wind.speed).toFixed(1)}m/s {city.wind.deg} <span className='p-bold'>Degree</span></p>
        </div>

        <div className="right col">
        <p><span className='p-bold'>Sunrise: </span> {getSunData(city.sys.sunrise , city.sys.timezone)}</p>
        <p><span className='p-bold'>Sunset: </span> {getSunData(city.sys.sunset , city.sys.timezone)}</p>
        </div>

      </div>

      <Link className='top-layer' to={`/view/${city.id}`}></Link>

    </li>
  )
}

export default Card