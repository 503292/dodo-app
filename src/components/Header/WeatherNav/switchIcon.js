import React from 'react';

import { ReactComponent as Bolt } from '../../../assets/image/weather/bolt.svg';
import { ReactComponent as Smog } from '../../../assets/image/weather/smog.svg';
import { ReactComponent as Cloud } from '../../../assets/image/weather/cloud.svg';
import { ReactComponent as Sun } from '../../../assets/image/weather/sun.svg';
import { ReactComponent as CloudSunRain } from '../../../assets/image/weather/cloud-sun-rain.svg';
import { ReactComponent as CloudSun } from '../../../assets/image/weather/cloud-sun.svg';
import { ReactComponent as CloudShowersHeavy } from '../../../assets/image/weather/cloud-showers-heavy.svg';
import { ReactComponent as Snow } from '../../../assets/image/weather/snowflake.svg';
import { ReactComponent as CloudMeatball } from '../../../assets/image/weather/cloud-meatball.svg';

import { ReactComponent as CloudMoon } from '../../../assets/image/weather/cloud-moon.svg';
import { ReactComponent as Moon } from '../../../assets/image/weather/moon.svg';
import { ReactComponent as CloudMoonRain } from '../../../assets/image/weather/cloud-moon-rain.svg';

import { ReactComponent as Thermometer } from '../../../assets/image/weather/thermometer.svg';

export default function switchIcon(descrEn, isDay) {
  switch (descrEn.trim()) {
    case 'moderate or heavy rain in area with thunder':
    case 'patchy light rain in area with thunder':
    case 'thundery outbreaks in nearby':
    case 'thundery outbreaks possible':
      return <Bolt />;

    case 'fog':
    case 'mist':
    case 'freezing drizzle':
    case 'freezing fog':
      return <Smog />;

    case 'cloudy':
    case 'overcast':
      return <Cloud />;

    case 'clear':
    case 'sunny':
      if (isDay === 'no') {
        return <Moon />;
      }
      return <Sun />;

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
    case 'light rain shower, light rain and hail with thunderstorm':
    case 'light rain and hail with thunderstorm':
    case 'light rain with thunderstorm':
    case 'rain and hail with thunderstorm, squalls':
      if (isDay === 'no') {
        return <CloudMoonRain />;
      }
      return <CloudSunRain />;

    case 'partly cloudy':
      if (isDay === 'no') {
        return <CloudMoon />;
      }
      return <CloudSun />;

    case 'torrential rain shower':
    case 'moderate or heavy rain shower':
    case 'moderate or heavy freezing rain':
    case 'heavy rain':
    case 'heavy rain at times':
    case 'heavy freezing drizzle':
    case 'patchy rain nearby':
    case 'light sleet showers':
    case 'moderate or heavy rain with thunder':
    case 'thunderstorm, rain and hail with thunderstorm, squalls':
    case 'light rain with thunderstorm, rain and hail with thunderstorm, squalls':
    case 'light rain with thunderstorm, heavy rain and hail with thunderstorm, squalls':
    case 'thunderstorm in vicinity, rain and hail with thunderstorm, squalls':
      return <CloudShowersHeavy />;

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
    case 'light rain and snow shower':
    case 'light rain and snow shower, rain and snow shower':
      return <Snow />;

    case 'moderate or heavy showers of ice pellets':
    case 'light showers of ice pellets':
    case 'ice pellets':
      return <CloudMeatball />;

    default:
      return <Thermometer />;
  }
}
