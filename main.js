const apiKey = "fa751b1de739d10f650b6739ee1f51b7";
const city = "Abuja"; // Replace with the name of the city you want weather data for
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function checkWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

checkWeather();
