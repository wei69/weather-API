const api = {
    key:"45bc806237c4b9a09efe8aee3777a94c",
    base : "https://api.openweathermap.org/data/2.5/"

}

const Searchbox =  document.querySelector(".search-box");
Searchbox.addEventListener('keypress',setQuery);

function setQuery(e){
if(e.keyCode == 13){
    getresult(Searchbox.value)
}

}


function getresult(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json()
    }).then(displayResults)
}

function displayResults(weather){
    console.log(weather);
     let city = document.querySelector(".location .city")
     city.innerHTML = `${weather.name}`,`${weather.sys.country}`
     let now  = new Date();
     let date = document.querySelector(".location .date");
     date.innerHTML = datebulider(now)
     let temp = document.querySelector('.now .tem');
     temp.innerHTML = `${Math.round(weather.main.temp)}<span>*C</span>`;
     let weather_el = document.querySelector(".now .weather");
     weather_el.innerHTML = weather.weather[0].main;
     let hi_low = document.querySelector('.hi-low');
     hi_low.innerHTML = `${weather.main.temp_min}*C/ ${weather.main.temp_max} `
}


function datebulider(d){
    var months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
let days = ["sunday","monday","tueday","wednesday","thursday","friday","satuday"]
let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()]
let year = d.getFullYear()
return ` ${day} ${date} ${month} ${year}`
}