import axios from "axios";

export const geoClient = axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0"
})
