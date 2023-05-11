import '../App.css';
import moment from 'moment'


function Weather({data}) {

    function getTime(timezone, sunTime) {

        let x = moment.utc(sunTime, 'X').add(timezone, 'seconds').format('HH:mm a');

        return x;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
            <div className="WeatherInfo" >
            <p>{data.name} , {capitalizeFirstLetter(data.sys.country)}</p>
            <p>{capitalizeFirstLetter(data.weather[0].description)}</p>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather img" />
            <p>{Math.round(data.main.temp - 273.15)}{'\u00b0'}</p>
            <p>Sunrise :{getTime(7200, data.sys.sunrise)} (IST)</p>
            <p>Sunset : {getTime(7200, data.sys.sunset)} (IST) </p>
            {
                    /*<p>{getTime(0, data.sys.sunrise)}(GMT)</p>
                    <p>{getTime(0, data.sys.sunset)} (GMT)</p>
                    <p>{getTime(-18000, data.sys.sunrise)}Eastern Time Zone (UTC-05: 00) </p>
                    <p>{getTime(-18000, data.sys.sunset)}Eastern Time Zone (UTC-05:00)</p>*/
            }
            </div> 
            

    );
}

export default Weather;     
