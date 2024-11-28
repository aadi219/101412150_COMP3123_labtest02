import axios from "axios";

export const weatherClient = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
});