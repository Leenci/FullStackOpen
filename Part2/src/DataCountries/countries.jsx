import axios from "axios";
const baseUrlCountrie = "https://restcountries.com/v3.1/all"

const api_key = import.meta.env.VITE_SOME_KEY

export const getAllCountries = () => {
    const request = axios.get(baseUrlCountrie)
    return request.then(response => response.data)
}
export const getweatherCapital = (lat, long) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
    return request.then(response => response.data)
}    