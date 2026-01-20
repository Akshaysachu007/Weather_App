import React from 'react';
import './SearchBar.css';



function SearchBar({city, setCity, fetchWeather, loading ,onSearch}) {
    const handlekeyPress = (e) => {
        if(e.key === 'Enter'){
            onSearch();
        }
    };

    return(
        <div className='search-bar'>
            <div className='search-input-wrapper'>
                <i className='fas fa-search search-icon'></i>
                <input 
                   type = "text"
                   className = 'search-input'
                   placeholder = 'Search for a city...'
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   onKeyPress={handlekeyPress}
                />
            </div>

            <button 
                onClick={onSearch}
                className='search-button'
                disabled={loading}
                >{loading ? 'Searching...' : 'Search'}
                </button>
        </div>
    );
}

export default SearchBar;

