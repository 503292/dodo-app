// import axios from 'axios';

// Приват банк API
export const fetchCurrencyPrivatBank = () => {
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  )
    .then(response => response.json())
    .catch(error => console.log(error));
};

// DarkSky API
const proxy = 'https://cors-anywhere.herokuapp.com/';
const accessKey = 'def124adcfa450fb204abe6f0e4e0c62';
const baseDarkSky = 'https://api.darksky.net/forecast/';
const settings = '?lang=uk&exclude=flags&units=si';

export const fetchCurrentWeather = query => {
  return fetch(`${proxy}${baseDarkSky}${accessKey}/${query}${settings}`)
    .then(response => response.json())
    .catch(error => console.log(error));

};
