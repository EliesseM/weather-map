async function fetchWeatherData(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
  let response = await fetch(url);
  response = await response.json();

  return response;
}
async function fetchCityData(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  let cityResponse = await fetch(url);
  cityResponse = await cityResponse.json();
  return cityResponse;
}
export { fetchWeatherData, fetchCityData };
