function searchCity(city) {
  let apiKey() = "4bcdoaaff781057betcf5af877a53545";
  let apiUrl() = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${metric}`;

  axios.get(apiUrl).then(refreshweather);
}













function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
