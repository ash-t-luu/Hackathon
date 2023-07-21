

//creating a fetch to see the weather data

//write logic to access geolocation of the computer using navigator.geolocation
// login for open-meteo 
fetch('https://api.open-meteo.com/v1/forecast?latitude=36.175&longitude=-115.1372&hourly=temperature_2m&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime&forecast_days=1')
    .then((response) => response.json())
    .then((json) => {
            console.log(json);
        })
    .catch((error) => {
        console.log(`Oh no! ${error}`);
    })

//access temperature
//