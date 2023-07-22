//creating a fetch to see the weather data

// https://api.open-meteo.com/v1/forecast?latitude=36.175&longitude=-115.1372&hourly=temperature_2m&temperature_unit=fahrenheit&precipitation_unit=inch&timeformat=unixtime&forecast_days=1

//write logic to access geolocation of the computer using navigator.geolocation
// login for open-meteo 

//creating functionality to get the latitude and longitude of the user's location
//first cb is success, second is error

let latitude;
let longitude;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude, longitude);

        // 33.793036
        // -117.9673424

        // 'https://api.open-meteo.com/v1/forecast?latitude=36.175&longitude=-115.1372&hourly=temperature_2m&daily=weathercode&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=1'

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=1`)
            .then((response) => response.json())
            .then((json) => {
                const weatherObj = json;
                console.log(weatherObj);
                // console.log(weatherObj.hourly.time);
                // console.log(weatherObj.hourly.temperature_2m);

                //hourly: {time: array(24), temp: array (24)}
                //for the pop up - make it display the temperature at the time of the hour 

                const lastFive = [];
                //iterating over the time array to change the string to just the hours
                for (let str of weatherObj.hourly.time) {
                    lastFive.push(str.slice(str.length - 5));
                }
                console.log('new time arr', lastFive);

                //get current hour and compare to the time to do the functionality below 
                const date = new Date().toTimeString();
                let currentTime = date.slice(0, 5);
                let numberCurrTime = parseInt(currentTime);
                // console.log('numberCurrTime', numberCurrTime);

                currentTime = Math.floor(numberCurrTime);
                // console.log(currentTime);
                // console.log(currentTime);

                // const currentMinute = date.slice(3, 5);
                // console.log(currentMinute);

                // let currentHour = date.slice(0, 2);
                // console.log(currentHour);

                // if (Number(currentMinute) >= 30) {
                //     // console.log(currentMinute);
                //     console.log(true)
                //     console.log(Number(currentHour) += 1);
                //     // console.log(Number(currentHour) + 1);
                // }

                //how do we access the temperature array and time array to line up? by index? iterating? 
                //store in an object: key: time, value: temp
                const timeAndTemp = {};

                for (let i = 0; i <= 23; i++) {
                    timeAndTemp[i] = weatherObj.hourly.temperature_2m[i];
                }
                console.log(timeAndTemp);

                const temperatureContent = document.querySelector('h2');
                temperatureContent.textContent = `Outside temperature is
        ${timeAndTemp[currentTime]} °F`;
                // temperatureContent.innerHTML = `Today's Temperature
                // ${timeAndTemp[currentTime]} °F`;
                document.querySelector('#container').appendChild(temperatureContent);

                console.log(weatherObj.daily.weathercode);

                //create obj - key would be the code, value the image src
                const weatherCodeObj = {
                    0: "images/vector-sun-icon.jpg",
                    1: "images/mainly_clear.jpeg",
                    2: "images/mainly_clear.jpeg",
                    3: "images/mainly_clear.jpeg",
                    45: "images/fog.jpeg",
                    48: "images/fog.jpeg",
                    51: "images/drizzle.jpeg",
                    53: "images/drizzle.jpeg",
                    55: "images/drizzle.jpeg",   
                }

                const image = document.createElement('img');
                const imageDiv = document.createElement('div');
                let displayImage;

                //functionality
                for (let key in weatherCodeObj) {
                    // console.log('hello');
                    if (weatherObj.daily.weathercode == key) {
                        displayImage = weatherCodeObj[key];
                        console.log(displayImage);
                        // image.setAttribute('id', 'sun');
                        // document.querySelector('body').appendChild(imageDiv);
                        // imageDiv.appendChild(image);
                    }
                }

                // const image = document.createElement('img');
                // const imageDiv = document.createElement('div');
                image.setAttribute('src', displayImage);
                image.setAttribute('id', 'img');
                document.querySelector('body').appendChild(imageDiv);
                imageDiv.appendChild(image);
            })
            .catch((error) => {
                console.log(`Oh no! ${error}`);
            })
    }, function () {
        alert('Could not get your position');
    })
}