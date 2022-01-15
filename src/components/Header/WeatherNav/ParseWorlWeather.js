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
// add plus for temperature
function addPlus(temp) {
  if (temp > 0) {
    return `+${temp}`;
  }
  return temp;
}
// get day of week
function getDayOfWeek(data) {
  const days = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    "П'ятниця",
    'Субота',
  ];
  const day = days[data.getDay()];
  return day;
}

// get day of month
function getDayOfMonth(data) {
  return data.getDate();
}

// get month
function getNameMonth(data) {
  const months = [
    'Січня',
    'Лютого',
    'Березня',
    'Квітня',
    'Травня',
    'Червня',
    'Липня',
    'Серпня',
    'Вересня',
    'Жовтня',
    'Листопада',
    'Грудня',
  ];
  const month = months[data.getMonth()];
  return month;
}

// cut and conver sunrise/sunset
function cutSunTime(data) {
  const tmp = data.substr(-2);

  if (tmp === 'PM') {
    const cutHours = +data.substr(0, 2) + 12;
    const cutMinutes = data.substr(2, 3);
    const cutPm = cutHours + cutMinutes;
    return cutPm;
  }
  const cutAm = data.substr(0, 5);
  return cutAm;
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
  currentWeather.isDayTime = currentWheatherData.isdaytime;
  currentWeather.tempC = addPlus(Number(currentWheatherData.temp_C));
  currentWeather.descrEn = currentWheatherData.weatherDesc[0].value.toLowerCase();
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
    daysTmp.index = weatherData.indexOf(el);
    const timeDate = new Date(el.date);
    daysTmp.dayOfWeek = getDayOfWeek(timeDate);
    daysTmp.dayOfMonth = getDayOfMonth(timeDate);
    daysTmp.month = getNameMonth(timeDate);

    daysTmp.sunRise = cutSunTime(el.astronomy[0].sunrise);
    daysTmp.sunSet = cutSunTime(el.astronomy[0].sunset);

    daysTmp.maxTemp = addPlus(el.maxtempC);
    daysTmp.minTemp = addPlus(el.mintempC);
    daysTmp.sunTotalHours = el.sunHour;

    // фільтруєм тільки потрібні години 2, 5, 8, 11, 14, 17, 20, 23
    el.hourly.map(h => {
      timeStep.map(t => {
        if (h.time === t) {
          const hourlyTmp = {};

          hourlyTmp.time = Number(h.time.substr(0, h.time.length - 2));

          hourlyTmp.isDayTime = h.isdaytime;

          hourlyTmp.tempС = addPlus(Number(h.tempC));

          hourlyTmp.tempFeelsLikeС = addPlus(Number(h.FeelsLikeC));

          hourlyTmp.windSpeed = windSpeedRound(h.windspeedKmph);

          hourlyTmp.windFrom = h.winddir16Point;

          hourlyTmp.descrEn = h.weatherDesc[0].value.toLowerCase();

          hourlyTmp.desrUk = h.lang_uk[0].value;

          hourlyTmp.humidity = Number(h.humidity);

          hourlyTmp.pressure = convertPressure(h.pressure);

          hourlyTmp.chanceOfRain = h.chanceofrain;

          hourly.push(hourlyTmp);

          return null;
        }
        return null;
      });
      daysTmp.hourly = hourly;

      return null;
    });
    days.push(daysTmp);
    return null;
  });

  weather.days = days;

  return weather;
}
