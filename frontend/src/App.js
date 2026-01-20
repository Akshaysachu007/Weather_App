import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import EmptyState from './components/EmptyState';
import './styles/global.css';
import './App.css';




function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "4c31c8d00d738324c557051b6a0e4744";




  // Function to fetch weather data
  const fetchWeather = async () => {
    if(!city.trim()){
      alert.toast("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError(null);
    
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if(!response.ok){
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className='app'>
      <div className='app-container'>
        <h1 className='app-title'>Weather App</h1>
        <SearchBar
          city={city}
          setCity={setCity}
          loading={loading}
          onSearch={fetchWeather}
        />
        {error && <p className='error-message'>{error}</p>}
        

        

        {weather && !error && (
          <WeatherDisplay weather={weather} />
        )}
        

        {!weather && !error && !loading && (
         <EmptyState />
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Searching...</p>
          </div>
        )}
      </div>
    </div>
        





      
  );


}

export default App;