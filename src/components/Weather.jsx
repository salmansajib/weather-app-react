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
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&units=metric&appid=79505b43acfc416c5d69b32360a27c38`
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
    setSearch('');
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
        <h2 className=' text-3xl font-bold text-black '>
          Loading data, please wait....
        </h2>
      ) : (
        <div>
          <div className=''>
            <h2 className=' text-2xl font-bold mb-3 '>
              {' '}
              {weatherData?.name}, <span> {weatherData?.sys?.country} </span>{' '}
            </h2>
          </div>
          <div className=' text-xl font-normal italic '>
            <span> {getCurrentDate()} </span>
          </div>
          <div className=' text-6xl text-gray-900 font-bold text-center mt-3 '>
            {weatherData?.main?.temp}°C
          </div>
          <p className=' text-gray-900 text-2xl font-medium mb-5 capitalize '>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ''}
          </p>
          <div className=' flex justify-evenly items-center mt-5 py-5 text-xl font-bold text-center '>
            <div>
              <div>
                <p>Wind Speed</p>
                <p className=''>
                  {Math.floor(weatherData?.wind?.speed * 3.6)}Km/h
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>Humidity</p>
                <p className=''>{weatherData?.main?.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
