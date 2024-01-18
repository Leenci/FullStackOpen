import { useEffect, useState } from "react"
import { getweatherCapital } from "./countries"

const Weather = ({lat, long, capital}) =>{
    const [weather, setWeather] = useState({
        coord: {
        lon: -58.67,
        lat: -34.58
        },
        weather: [
        {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n"
        }
        ],
        base: "stations",
        main: {
        temp: 299.4,
        feels_like: 299.4,
        temp_min: 297.6,
        temp_max: 301.21,
        pressure: 1005,
        humidity: 59
        },
        visibility: 10000,
        wind: {
        speed: 3.09,
        deg: 90
        },
        clouds: {
        all: 0
        },
        dt: 1705366267,
        sys: {
        type: 2,
        id: 2081827,
        country: "AR",
        sunrise: 1705309031,
        sunset: 1705360213
        },
        timezone: -10800,
        id: 3433522,
        name: "Hurlingham",
        cod: 200
        })
        
    useEffect(() => {
            getweatherCapital(lat, long)
            .then(weatherCapital => {
                setWeather(weatherCapital)
            })
           
        }, [])
    const temp = weather.main.temp - 273
    const src = "https://openweathermap.org/img/wn/"+ (weather.weather[0].icon)  + "@2x.png"
    const windKmPh = weather.wind.speed * 3.6
    console.log(src)
    return(
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature {Math.floor(temp)}°C</p>
            <img src={src} alt="" />
            <p>wind {Math.floor(windKmPh)}km/h</p>
        </div>
    )
    }
    export default Weather