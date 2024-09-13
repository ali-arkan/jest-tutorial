import fetchWeather from './weather';
const city = 'Istanbul';

describe('fetchWeather', () => {
    it('fetches weather data for a given city', async () => {
        const weatherData = await fetchWeather(city);
        expect(weatherData).toBeDefined();
        expect(weatherData.name).toEqual(city);
        expect(weatherData.main.humidity).toEqual(71);
        expect(weatherData.visibility).toEqual(10000);
    });

    it('throws an error when city is invalid', async () => {
        const city = 'NonexistentCity';
        await expect(fetchWeather(city)).rejects.toThrow();
    });
});


