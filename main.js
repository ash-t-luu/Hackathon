

//creating a fetch to see the weather data

// https://api.open-meteo.com/v1/forecast?latitude=36.175&longitude=-115.1372&hourly=temperature_2m&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime&forecast_days=1

//write logic to access geolocation of the computer using navigator.geolocation
// login for open-meteo 

fetch('https://api.open-meteo.com/v1/forecast?latitude=36.175&longitude=-115.1372&hourly=temperature_2m&daily=weathercode&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=1')
    .then((response) => response.json())
    .then((json) => {
        const weatherObj = json;
        console.log(weatherObj);
        console.log(weatherObj.hourly.time[0]);
        console.log(weatherObj.hourly.temperature_2m[0]);
        console.log(weatherObj.daily.weathercode);

        //create element to store temperature h2?
        //create innerhtml content to store temp
        //create element to store time h3
        //create innerhtml content to store time

        //how do we access the temperature array and time array to line up? by index? iterating? 
        //use template literal to access the value from the object? 

    })
    .catch((error) => {
        console.log(`Oh no! ${error}`);
    })


    // {
    //     "latitude": 36.16438,
    //     "longitude": -115.143936,
    //     "generationtime_ms": 0.17893314361572266,
    //     "utc_offset_seconds": 0,
    //     "timezone": "GMT",
    //     "timezone_abbreviation": "GMT",
    //     "elevation": 609,
    //     "hourly_units": {
    //         "time": "unixtime",
    //         "temperature_2m": "°F"
    //     },
    //     "hourly": {
    //         "time": [
    //             1689897600,
    //             1689901200,
    //             1689904800,
    //             1689908400,
    //             1689912000,
    //             1689915600,
    //             1689919200,
    //             1689922800,
    //             1689926400,
    //             1689930000,
    //             1689933600,
    //             1689937200,
    //             1689940800,
    //             1689944400,
    //             1689948000,
    //             1689951600,
    //             1689955200,
    //             1689958800,
    //             1689962400,
    //             1689966000,
    //             1689969600,
    //             1689973200,
    //             1689976800,
    //             1689980400
    //         ],
    //         "temperature_2m": [
    //             113.5,
    //             111.1,
    //             111.3,
    //             107.7,
    //             103.7,
    //             99.8,
    //             99.3,
    //             96.2,
    //             95.4,
    //             92.2,
    //             91.8,
    //             93.3,
    //             91.1,
    //             88.6,
    //             92.5,
    //             97.4,
    //             101.9,
    //             104.8,
    //             106.7,
    //             109.8,
    //             111.5,
    //             112.4,
    //             113.5,
    //             114.2
    //         ]
    //     }
    // }