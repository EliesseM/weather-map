async function fetchWeatherData(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
  let response = await fetch(url);
  response = await response.json();

  return response;
}
async function fetchCityData(lat, lng) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=fr`;
  let cityResponse = await fetch(url);
  cityResponse = await cityResponse.json();
  return cityResponse;
}
export { fetchWeatherData, fetchCityData };
