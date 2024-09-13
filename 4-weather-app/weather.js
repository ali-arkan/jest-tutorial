

import axios from 'axios';

async function fetchWeather(city) {
    try {
        const apiKey = 'a9538fa206671f1a660683fb553e083f'; // Replace 'YOUR_API_KEY' with your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        //Current Data: https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=a9538fa206671f1a660683fb553e083f

        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
}

export default fetchWeather;
