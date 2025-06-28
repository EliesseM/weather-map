      `
      <div>
      <h2>${cityResult.city}</h2>
        <h3>${response.current_weather.temperature}${
        response.current_weather_units.temperature
      }</h3>
        <p><strong>Heure du relevé :</strong> ${hourPart} h</p>
        <p><strong>Vitesse du vent :</strong> ${windSpeed} ${
        response.current_weather_units.windspeed
      }</p>
        <p><strong>Direction du vent :</strong>
          <span style="
            font-size: ${arrowSize}px;
            display: inline-block;
            transform: rotate(${windDirection}deg);
            transform-origin: center;">
            ⬆
          </span> (${windDirection}°)
        </p>
        <button id="favoris" value=${serializeCoordinates(
          coordinates
        )}>Favoris</button>
      </div>
    `