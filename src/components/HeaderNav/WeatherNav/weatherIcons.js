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

export default function switchIcon(descrEn, isDay) {
  switch (descrEn) {
    case 'moderate or heavy rain in area with thunder':
    case 'patchy light rain in area with thunder':
    case 'thundery outbreaks in nearby':
    case 'thundery outbreaks possible':
      return bolt;

    case 'fog':
    case 'mist':
    case 'freezing drizzle':
    case 'freezing fog':
      return smog;

    case 'cloudy':
    case 'overcast':
      return cloud;

    case 'clear':
    case 'sunny':
      if (isDay === 'no') {
        return moon;
      }
      return sun;

    case 'light rain shower':
    case 'light freezing rain':
    case 'moderate rain':
    case 'moderate rain at times':
    case 'light rain':
    case 'light drizzle':
    case 'patchy light drizzle':
    case 'patchy light rain':
    case 'patchy rain possible':
    case 'patchy light rain with thunder':
    case 'light rain shower, light rain with thunderstorm':
    case 'light rain with thunderstorm':
      if (isDay === 'no') {
        return cloudMoonRain;
      }
      return cloudSunRain;

    case 'partly cloudy':
      if (isDay === 'no') {
        return cloudMoon;
      }
      return cloudSun;

    case 'torrential rain shower':
    case 'moderate or heavy rain shower':
    case 'moderate or heavy freezing rain':
    case 'heavy rain':
    case 'heavy rain at times':
    case 'heavy freezing drizzle':
    case 'patchy rain nearby':
    case 'light sleet showers':
      return cloudShowersHeavy;

    case 'moderate or heavy snow in area with thunder':
    case 'patchy light snow in area with thunder':
    case 'light snow showers':
    case 'light snow shower':
    case 'moderate or heavy sleet showers':
    case 'moderate or heavy snow showers':
    case 'heavy snow':
    case 'patchy heavy snow':
    case 'moderate snow':
    case 'patchy moderate snow':
    case 'light snow':
    case 'patchy light snow':
    case 'moderate or heavy sleet':
    case 'light sleet':
    case 'blowing snow':
    case 'patchy freezing drizzle nearby':
    case 'patchy sleet nearby':
    case 'patchy sleet possible':
    case 'patchy snow nearby':
    case 'patchy snow possible':
    case 'blizzard':
      return snow;

    case 'moderate or heavy showers of ice pellets':
    case 'light showers of ice pellets':
    case 'ice pellets':
      return cloudMeatball;

    default:
      return thermometer;
  }
}
