let weather = {
    "apikey":"b37ac47ff7eb19f563b1be85e71a0eb1",
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apikey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity}=data.main;
        const{speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather at Avik's House";
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText=humidity+" % humidity";
    }
    weather.fetchWeather("Kolkata");
    };
