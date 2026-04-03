import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';


export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Ahmedabad",
        temp: 24.84,
        tempMin: 25.05,
        tempMax: 26,
        humidity: 50,
        feelsLike: 30,
        weather: "smoke",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by SKYLER</h2>
            <SearchBox updateInfo={updateInfo}/> 
            <InfoBox info={weatherInfo}/>
        </div>
    )
};
