import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';


function App() {

    const [data, setData] = useState([{}]);
    const [city, setCity] = useState("");
    const apiKey = '4d6cea2fa6646232ecab13eea891d823';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

   
    function handleChange(event) {
        setCity(event.target.value);
    }

    function onSubmitHandler (event){
        event.preventDefault();

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData(data)).then(() => console.log(data)).then(event.target.reset());
        console.log(data.weather[0].icon);
    }

  return (
      <div className="App">

          <form className="searchForm" onSubmit={onSubmitHandler}>
              <div className="searchInput"><input id="cityName" htmlFor="cityName" placeholder="Enter City..." onChange={handleChange} type="text" /> <input className="submit" type="submit" value="Send" /></div>
          </form>

          {typeof data.main !== 'undefined' ? <Weather data={data} /> : <p className="cityNotFound">City not found</p>
          }

    </div>
  );
}

export default App;
