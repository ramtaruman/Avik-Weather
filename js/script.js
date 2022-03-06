let weather = {
    "apikey":"b37ac47ff7eb19f563b1be85e71a0eb1",
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=b37ac47ff7eb19f563b1be85e71a0eb1")
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather;
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
    }
    };
