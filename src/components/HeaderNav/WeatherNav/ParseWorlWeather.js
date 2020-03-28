// 000 windSpeed
function windSpeedRound(windSpeed) {
  return Math.round(((windSpeed * 1000) / 3600) * 10) / 10;
}

// 000 перевести тиск в міліметри ртутного стовпчика (* 0.7501)
function convertPressure(pressure) {
  return Math.round(pressure * 0.736);
}

// 000 time перевести UNIX час в години
function cutTimeZone(timezone) {
  const index = timezone.indexOf(',');
  const cutString = timezone.slice(0, index);
  return cutString;
}

export default function parseWeatherData(data) {
  const weatherData = data.data.weather;
  const weather = {};
  const timeStep = [
    '200',
    '500',
    '800',
    '1100',
    '1400',
    '1700',
    '2000',
    '2300',
  ];

  // request
  const request = data.data.request[0].query;

  weather.timezone = cutTimeZone(request);

  // currentWheather
  const currentWeather = {};
  const currentWheatherData = data.data.current_condition[0];
  currentWeather.tempC = Number(currentWheatherData.temp_C);
  currentWeather.descrEn = currentWheatherData.weatherDesc[0].value;
  currentWeather.desrUk = currentWheatherData.lang_uk[0].value;
  currentWeather.windSpeed = windSpeedRound(currentWheatherData.windspeedKmph);
  currentWeather.windFrom = currentWheatherData.winddir16Point;
  currentWeather.humidity = currentWheatherData.humidity;
  currentWeather.pressure = convertPressure(currentWheatherData.pressure);

  weather.currentWeather = currentWeather;

  // weatherData
  const days = [];
  weatherData.map(el => {
    const hourly = [];
    const daysTmp = {};
    daysTmp.timeDate = el.date;
    daysTmp.sunRise = el.astronomy[0].sunrise;
    daysTmp.sunSet = el.astronomy[0].sunset;
    daysTmp.maxTemp = el.maxtempC;
    daysTmp.minTemp = el.mintempC;
    daysTmp.sunTotalHours = el.sunHour;

    // фільтруєм тільки потрібні години 2, 5, 8, 11, 14, 17, 20, 23
    el.hourly.map(h => {
      timeStep.map(t => {
        if (h.time === t) {
          const hourlyTmp = {};

          hourlyTmp.time = Number(h.time.substr(0, h.time.length - 2));

          hourlyTmp.tempС = Number(h.tempC);

          hourlyTmp.tempFeelsLikeС = Number(h.FeelsLikeC);

          hourlyTmp.windSpeed = windSpeedRound(h.windspeedKmph);

          hourlyTmp.windFrom = h.winddir16Point;

          hourlyTmp.descrEn = h.weatherDesc[0].value;

          hourlyTmp.desrUk = h.lang_uk[0].value;

          hourlyTmp.humidity = Number(h.humidity);

          hourlyTmp.pressure = convertPressure(h.pressure);

          hourlyTmp.chanceOfRain = h.chanceofrain;

          hourly.push(hourlyTmp);

          return 0;
        }
        return 0;
      });
      daysTmp.hourly = hourly;

      return 0;
    });
    days.push(daysTmp);
    return 0;
  });

  weather.days = days;

  return weather;
}
