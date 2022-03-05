let weather = {
    "apikey":"b37ac47ff7eb19f563b1be85e71a0eb1"
    fetchWeather:function(){
        fetch("http://api.openweathermap.org/data/2.5/weather?lat=22.4662&lon=88.4050&units=metric&appid=b37ac47ff7eb19f563b1be85e71a0eb1").then((response)=>response.json());
    }
}