const apiKey = `60e7aaba3a3c86218823eff929b9f75b`; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("location").innerText = `Location: ${data.name}`;
            document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        } else {
            alert("City not found");
        }
    } catch (error) {
        alert("Error fetching data");
    }
}