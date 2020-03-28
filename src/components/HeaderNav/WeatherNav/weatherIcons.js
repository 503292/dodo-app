import bolt from '../../../assets/image/weather/bolt.svg';
import smog from '../../../assets/image/weather/smog.svg';
import cloud from '../../../assets/image/weather/cloud.svg';
import sun from '../../../assets/image/weather/sun.svg';
import cloudSunRain from '../../../assets/image/weather/cloud-sun-rain.svg';
import cloudSun from '../../../assets/image/weather/cloud-sun.svg';
import cloudShowersHeavy from '../../../assets/image/weather/cloud-showers-heavy.svg';
import snow from '../../../assets/image/weather/snowflake.svg';
import cloudMeatball from '../../../assets/image/weather/cloud-meatball.svg';

import cloudMoon from '../../../assets/image/weather/cloud-moon.svg';
import moon from '../../../assets/image/weather/moon.svg';
import cloudMoonRain from '../../../assets/image/weather/cloud-moon-rain.svg';

import thermometer from '../../../assets/image/weather/thermometer.svg';

// const icons = {
//   bolt,
//   smog,
//   cloud,
//   sun,
//   cloud_sun_rain: cloudSunRain,
//   cloud_sun: cloudSun,
//   cloud_showers_heavy: cloudShowersHeavy,
//   snow,
//   cloud_meatball: cloudMeatball,

//   cloud_moon_rain: cloudMoonRain,
//   cloud_moon: cloudMoon,
//   moon,

//   thermometer,
// };

export default function switchIcon(descrEn, isDay) {
  switch (descrEn) {
    case 'Moderate or heavy rain in area with thunder':
    case 'Patchy light rain in area with thunder':
    case 'Thundery outbreaks in nearby':
      return bolt;

    case 'Fog':
    case 'Mist':
    case 'Freezing drizzle':
    case 'Freezing fog':
      return smog;

    case 'Cloudy':
    case 'Overcast':
      if (!isDay) {
        return cloudMoon;
      }
      return cloud;

    case 'Clear':
    case 'Sunny':
      if (!isDay) {
        return moon;
      }
      return sun;

    case 'Light rain shower':
    case 'Light freezing rain':
    case 'Moderate rain':
    case 'Moderate rain at times':
    case 'Light rain':
    case 'Light drizzle':
    case 'Patchy light drizzle':
    case 'Patchy light rain':
      if (!isDay) {
        return cloudMoonRain;
      }
      return cloudSunRain;

    case 'Partly cloudy':
      return cloudSun;

    case 'Torrential rain shower':
    case 'Moderate or heavy rain shower':
    case 'Moderate or Heavy freezing rain':
    case 'Heavy rain':
    case 'Heavy rain at times':
    case 'Heavy freezing drizzle':
    case 'Patchy rain nearby':
      return cloudShowersHeavy;

    case 'Moderate or heavy snow in area with thunder':
    case 'Patchy light snow in area with thunder':
    case 'Light snow showers':
    case 'Moderate or heavy sleet showers':
    case 'Light sleet showers':
    case 'Moderate or heavy snow showers':
    case 'Heavy snow':
    case 'Patchy heavy snow':
    case 'Moderate snow':
    case 'Patchy moderate snow':
    case 'Light snow':
    case 'Patchy light snow':
    case 'Moderate or heavy sleet':
    case 'Light sleet':
    case 'Blowing snow':
    case 'Patchy freezing drizzle nearby':
    case 'Patchy sleet nearby':
    case 'Patchy snow nearby':
    case 'Blizzard':
      return snow;

    case 'Moderate or heavy showers of ice pellets':
    case 'Light showers of ice pellets':
    case 'Ice pellets':
      return cloudMeatball;

    default:
      return thermometer;
  }
}
