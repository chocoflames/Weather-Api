let loader = document.querySelector(".load");
let resultDiv = document.querySelector(".result");

let cityName = document.querySelector(".cityname");
let getWeatherBtn = document.querySelector(".getbtn");
let apikey = "3f7ed28dfd0378653a9ba3512d1f30e3";

async function getWeather() {
  loader.style.display = "block";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apikey}`;
  let data = fetch(api);

  let result =await (await data).json();
//   result = result.json();
  loader.style.display = "none";
  resultDiv.style.display = "block";
  console.log(result);

  let temp = result.main.temp;
  // convert kelvin to celsius
  temp = Math.floor(temp - 273.15);

  let name = result.name;
  let weather = result.weather[0];

  let icon = weather.icon;
  let description = weather.description;
//   let wind = wind.deg;

  console.log(temp, name, icon, description);

  let cityDetail = document.querySelector(".cityDetail");
  let desc = document.querySelector(".desc");
//   let dege = document.querySelector(".deg");
  let tempdata = document.querySelector(".temp");
  let wIcon = document.querySelector(".icon-img");
  let imgLink = `http://openweathermap.org/img/wn/${icon}@4x.png`;
  cityDetail.textContent = name;
  desc.textContent = description;
//   dege.textContent = deg;
  tempdata.textContent = temp;
  wIcon.src = imgLink;
}

getWeatherBtn.addEventListener("click", getWeather);
