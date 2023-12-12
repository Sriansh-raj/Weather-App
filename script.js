function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'b13989793f184149a91141538230103';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weather = data.current.condition.text;
            const temperature = data.current.temp_c;
            const humidity = data.current.humidity;
            const wind = data.current.wind_kph;

            document.getElementById('description').innerText = `Weather: ${weather}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${wind} km/h`;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Sorry, something went wrong. Please try again.');
        });
}
