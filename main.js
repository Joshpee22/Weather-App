const apiKey = "fa751b1de739d10f650b6739ee1f51b7";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

// Define the searchBtn and searchBox variables by selecting the corresponding elements
const searchBtn = document.querySelector("#searchBtn");
const searchBox = document.querySelector("#searchBox");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}&q=${city}`);

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return; // Stop execution if there's an error
        }
        
        const data = await response.json();
        console.log("Weather Data:", data); // Log the weather data to console for debugging

        document.querySelector(".city").innerHTML = data.name; // Update city name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".error").style.display = "none"; // Hide error if previous search was unsuccessful
        document.querySelector(".weather").style.display = "block"; // Show weather data
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

// Attach event listener to the search button to trigger the checkWeather function
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim(); // Trim whitespace from the input value
    if (city) {
        checkWeather(city);
    } else {
        console.log("Please enter a city name.");
    }
});
