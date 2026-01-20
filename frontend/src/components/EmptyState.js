import React from 'react';
import './WeatherDisplay.css';

function EmptyState() {
    return (
        <div className="empty-state">
          <div className="empty-state-icon">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
            <h2 className="empty-state-title">Welcome to the Weather App</h2>
            <p className="empty-state-text">Search for a city to get started</p>
            <p className="empty-state-subtext">Enter a city name in the search bar above and click "Search" to see the current weather information.</p>
        </div>
    );
}

export default EmptyState;