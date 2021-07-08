// feature 1

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

// feature 2

function search(event) {
  event.preventDefault();
  let city = document.querySelector("h3");
  let searchCity = document.querySelector("#city-input");
  city.innerHTML = searchCity.value;
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

//feature 3
