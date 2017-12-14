import axios from 'axios'

const API_KEY = 'fd07e50cba2bb15dee738a169b3da5be'


const API = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

//middleware gateway actions and promisses

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${API}&q=${city},br`
    const request = axios.get(url)
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}