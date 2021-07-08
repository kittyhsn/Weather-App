//previous

let currentTime = document.querySelector("#current-date");
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = now.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentTime.innerHTML = `${days[day]} ${hours}:${minutes}`;

//now

function displayData(response) {
  let h3 = document.querySelector("h3");
  h3.innerHTML = response.data.name;
  let currentTemp = document.querySelector("h2");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
}

function fetchData(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  let apiKey = "8c77dcd79b440a9f66da7835894f7c98";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayData);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", fetchData);

//currentButton

function searchLocation(position) {
  let apiKey = "8c77dcd79b440a9f66da7835894f7c98";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(url).then(displayData);
}

function fetchLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", fetchLocation);
