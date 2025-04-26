const apiURL = "https://goweather.herokuapp.com/weather/";
let searchHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];

document.addEventListener("DOMContentLoaded", () => {
  renderHistory();

  document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();
    if (city) {
      loadWeather(city);
    }
  });
});

async function loadWeather(city) {
  try {
    const response = await fetch(apiURL + city);
    const data = await response.json();

    if (!data.temperature) {
      throw new Error('City not found');
    }

    displayWeather(city, data);
    saveToHistory(city);
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("weather-card").style.display = "none";
    alert("Failed to fetch weather. Try another city.");
  }
}
