const proxy = 'https://cors-anywhere.herokuapp.com/';

// Приват банк API валюта
export const fetchCurrencyPrivatBank = () => {
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  )
    .then(response => response.json())
    .catch(error => console.log(error));
};

// Приват банк API переклад назви міста з української на англійську // api не працює
// export const fetchFindCityTranslate = query => {
//   return fetch(
//     `${proxy}https://api.privatbank.ua/p24api/infrastructure?json&tso&city=${query}`,
//   )
//     .then(response => response.json())
//     .catch(error => console.log(error, 'err'));
// };

// DarkSky API // api не використовується
// const baseDarkSky = 'https://api.darksky.net/forecast/';
// const apiKey1 = 'def124adcfa450fb204abe6f0e4e0c62';
// const settings1 = '?lang=uk&exclude=flags&units=si';

// export const fetchDarkSkyWeather = query => {
//   return fetch(`${proxy}${baseDarkSky}${apiKey1}/${query}${settings1}`)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// };

// worldweatheronline.com API 26.03.2020 -> 26.05.2020
const baseWorldWeather =
  'http://api.worldweatheronline.com/premium/v1/weather.ashx';
const apiKey2 = '04ed5da5f92b43529f2110352202603';
const settings2 =
  '&format=json&num_of_days=7&extra=localObsTime,isDayTime&fx=yes&cc=yes&mca=no&tp=1&showlocaltime=yes&lang=uk';

export const fetchWorldWeather = query => {
  return fetch(
    `${proxy}${baseWorldWeather}?key=${apiKey2}&q=${query}${settings2}`,
  )
    .then(response => response.json())
    .catch(error => console.log(error));
};