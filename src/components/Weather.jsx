import { useEffect, useState } from 'react';
import Search from './Search';

function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=79505b43acfc416c5d69b32360a27c38`
      );
      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  useEffect(() => {
    fetchWeatherData('dhaka');
  }, []);

  console.log(weatherData);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <h2>Loading data, please wait....</h2>
      ) : (
        <div>
          <div className=''>
            <h2>
              {' '}
              {weatherData?.name}, <span> {weatherData?.sys?.country} </span>{' '}
            </h2>
          </div>
          <div className=''>
            <span> {getCurrentDate()} </span>
          </div>
          <div className=''>{weatherData?.main?.temp}</div>
          <p className=''>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ''}
          </p>
          <div className=''>
            <div>
              <div>
                <p className=''>{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div>
              <div>
                <p className=''>{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
