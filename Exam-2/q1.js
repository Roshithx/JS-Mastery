 
weatherData ={

coord: {

lon: 72.8479,

lat: 19.0144

},

weather: [

{

id: 711,

main: "Smoke",

description: "smoke",

icon: "50n"

}

],

base: "stations",

main: {

temp: 82.38,

feels_like: 83.86,

temp_min: 82.38,

temp_max: 82.38,

pressure: 1009,

humidity: 54

},

visibility: 2500,

wind: {

speed: 4.61,

deg: 170

},

clouds: {

all: 0

},

dt: 1669572570,

sys: {

type: 1,

id: 9052,

country: "IN",

sunrise: 1669512183,

sunset: 1669552175

},

timezone: 19800,

id: 1275339,

name: "Mumbai",

cod: 200

}


// a. Display the country and place
    console.log(weatherData.sys.country);
    console.log(weatherData.name);
        
    // b. Display the temperature and minimum temperature

    console.log(`temprature:${weatherData.main.temp}`);
    console.log(`minimum temprature:${weatherData.main.temp_min}`);
    
    // c. Display the wind speed and pressure


    console.log(`wind speed:${weatherData.wind.speed}`);
    console.log(`pressure:${weatherData.main.pressure}`);