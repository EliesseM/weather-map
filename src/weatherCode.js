const weatherCodeToEmoji = {
  0: "☀️", // Clear sky
  1: "🌤️", // Mainly clear
  2: "⛅", // Partly cloudy
  3: "☁️", // Overcast
  45: "🌫️", // Fog
  48: "🌫️❄️", // Depositing rime fog
  51: "🌦️", // Drizzle - light
  53: "🌧️", // Drizzle - moderate
  55: "🌧️💧", // Drizzle - dense
  56: "🌧️❄️", // Freezing Drizzle - light
  57: "🌧️❄️❄️", // Freezing Drizzle - dense
  61: "🌦️", // Rain - slight
  63: "🌧️", // Rain - moderate
  65: "🌧️🌧️", // Rain - heavy
  66: "🌧️❄️", // Freezing Rain - light
  67: "🌧️❄️❄️", // Freezing Rain - heavy
  71: "🌨️", // Snow fall - slight
  73: "🌨️❄️", // Snow fall - moderate
  75: "❄️❄️❄️", // Snow fall - heavy
  77: "🌨️✨", // Snow grains
  80: "🌦️", // Rain showers - slight
  81: "🌧️", // Rain showers - moderate
  82: "🌧️💥", // Rain showers - violent
  85: "🌨️", // Snow showers - slight
  86: "🌨️❄️", // Snow showers - heavy
  95: "⛈️", // Thunderstorm - slight/moderate
  96: "⛈️🌨️", // Thunderstorm with hail - slight
  99: "⛈️❄️❄️", // Thunderstorm with hail - heavy
};
export { weatherCodeToEmoji };
