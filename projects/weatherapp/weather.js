const apikey="10309173af6c076ab94574a0ca9b70cc";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const search_box= document.querySelector(".search input");
const search_button= document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city){
  const response =await fetch(apiurl  + city + `&appid=${apikey}`); 
  if(response.status ==404){

  showAlert();
  document.querySelector(".weather").style.display = "none";


   
     document.querySelector(".weather").style.display="none";
  }else{
      let data = await response.json();
      console.log(data);
   document.querySelector(".city").innerHTML= data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °c";
   document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
   document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
    if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Clouds"){
 weatherIcon.src= "images/clouds.png";
}
else if (data.weather[0].main == "Rain"){
 weatherIcon.src= "images/rain.png";

}
else if(data.weather[0].main == "Mist"){
 weatherIcon.src= "images/mist.png";

}
else if (data.weather[0].main == "Drizzle"){
 weatherIcon.src= "images/drizzle.png";
}
else if(data.weather[0].main =="Snow"){
 weatherIcon.src= "images/snow.png";
}
else{
  weatherIcon.src="images/wind.png"
}
document.querySelector(".weather").style.display="block"; 
    document.querySelector(".error").style.display="none";
 }

  }

   search_button.addEventListener("click",function(){
    checkWeather(search_box.value);
   })

   search_button.addEventListener("click", function() {
  checkWeather(search_box.value);
  search_box.value = ""; 
})
search_box.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkWeather(search_box.value);
    search_box.value = ""; 
  }
});


        function showAlert() {
  document.querySelector(".alert").style.display = "block";
}
function closeAlert() {
  document.querySelector(".alert").style.display = "none";
}
