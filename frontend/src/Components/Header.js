import WeatherSign from '../assets/weather-sign.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-wrapper">
            <img src={WeatherSign} alt="weather-sign" />
            <h2>Weather App</h2>
        </div>
    </div>
  )
}

export default Header