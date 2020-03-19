// import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getRatePrivatBank = () => {
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    // 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    // ' https://api.privatbank.ua/p24api/exchange_rates?json&date=18.03.2020',
  )
    .then(response => response.json())
    .catch(error => console.log(error));
};
