// import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getCurrencyPrivatBank = () => {
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  )
    .then(response => response.json())
    .catch(error => console.log(error));
};
