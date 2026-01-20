import React from 'react';
import './WeatherDisplay.css';
import WeatherCard from './WeatherCard';

function WeatherDisplay({ weather }) {

    const getWeatherIcon = (icon) => {
        switch (icon) {
            case 'Clear':
                return 'fa-sun';
            case 'Clouds':
                return 'fa-cloud';
            case 'Rain':
                return 'fa-cloud-showers-heavy';
            case 'Snow':
                return 'fa-snowflake';
            case 'Thunderstorm':
                return 'fa-bolt';
            case 'Drizzle':
                return 'fa-cloud-drizzle';
            case 'Mist':
            case 'Fog':
            case 'Haze':
                return 'fa-smog';
            default:
                return 'fa-cloud';
        }
    };

    return (
        <div className='weather-display'>
            <div className='weather-main'>
                <div className='weather-icon-large'>
                    <i className={`fas ${getWeatherIcon(weather.weather[0].icon)}`}></i>
                </div>
                <div className='weather-location'>
                    <h1>{weather.name}, {weather.sys.country}</h1>
                </div>
                <div className='weather-temp'>
                    <h2>{Math.round(weather.main.temp)}°C</h2>
                </div>
                <div className='weather-description'>
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>

            <div className='weather-details'>
                <WeatherCard
                    icon='fa-droplet'
                    label='Humidity'
                    value={`${weather.main.humidity}%`}
                />

                <WeatherCard
                    className="wind-card"
                    icon='fa-wind'
                    label='Wind Speed'
                    value={`${weather.wind.speed} m/s`}
                />

                <WeatherCard
                    className="visibility-card"
                    icon='fa-eye'
                    label='Visibility'
                    value={`${weather.visibility / 1000} km`}
                />


                <WeatherCard
                    icon='fa-gauge'
                    label='Pressure'
                    value={`${weather.main.pressure} hPa`}
                />

            </div>

        </div>
    );
}

export default WeatherDisplay;