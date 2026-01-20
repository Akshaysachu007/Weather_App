import React from 'react';
import './WeatherDisplay.css';


function WeatherCard({icon ,label ,value}){
    return(
        <div className='weather-card'>
             <div className='weather-card-icon'>
                <i className={`fas ${icon}`}></i>
             </div>
             <div  className='weather-card-content'>
                <p className='weather-card-label'>{label}</p>
                <p className='weather-card-value'>{value}</p>
             </div>
             
        </div>    
    );
}

export default WeatherCard;