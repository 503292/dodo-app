// eslint-disable-next-line no-unused-vars
const PROXY = 'https://cors-anywhere.herokuapp.com/';

// Приват банк API валюта
export const fetchCurrencyPrivatBank = () => {
  return fetch(
    `${PROXY}https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11`,
  )
    .then(response => response.json())
    .catch(() => console.log('Привіт). Щось ся стало. Api pryvat24'));
};

// API всі валюти валюти НБУ
export const fetchCurrencyNBU = () => {
  return fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`,
  )
    .then(response => response.json())
    .catch(error => console.log(error, 'Привіт). Щось ся стало. Api NBU'));
};

// worldweatheronline.com API
/*
 * change by hand
 * - local version work without {PROXY}
 * - prod version with
 */
const baseWorldWeather =
  'http://api.worldweatheronline.com/premium/v1/weather.ashx';

const apiKey = 'e107b6ccb15c472f96d95937232611'; // Trial ending on 25 Dec, 2023
const settings2 =
  '&format=json&num_of_days=7&extra=localObsTime,isDayTime&fx=yes&cc=yes&mca=no&tp=1&showlocaltime=yes&lang=uk';
export const fetchWorldWeather = query => {
  return (
    fetch(`${baseWorldWeather}?key=${apiKey}&q=${query}${settings2}`) // on master add-unshift "${proxy}" in url string
      .then(response => response.json())
      // eslint-disable-next-line
      .catch(() => console.log('Some trouble with wheather'))
  );
};
