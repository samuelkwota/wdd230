const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'YOUR_CITY_NAME';
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(weatherAPIURL);
        const data = await response.json();

        updateWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeather(data) {
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
    const weatherIconElement = document.getElementById('weather-icon');

    if (temperatureElement && conditionElement && weatherIconElement) {
        temperatureElement.textContent = `${data.main.temp}°C`;
        conditionElement.textContent = data.weather[0].description;
        weatherIconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    }
}

// Call the getWeather function to initiate the process
getWeather();