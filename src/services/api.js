const proxy = 'https://cors-anywhere.herokuapp.com/';

// Приват банк API валюта
export const fetchCurrencyPrivatBank = () => {
  return (
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(response => response.json())
      // eslint-disable-next-line
      .catch(error => console.log('Привіт).'))
  );
};

// API всі валюти валюти НБУ
export const fetchCurrencyNBU = () => {
  return (
    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
      .then(response => response.json())
      // eslint-disable-next-line
      .catch(error => console.log('error'))
  );
};

// worldweatheronline.com API
const baseWorldWeather =
  'http://api.worldweatheronline.com/premium/v1/weather.ashx';

const apiKey = 'cc81b08379fc411581e145229213103'; // Trial ending on 12 Mar, 2021
const settings2 =
  '&format=json&num_of_days=7&extra=localObsTime,isDayTime&fx=yes&cc=yes&mca=no&tp=1&showlocaltime=yes&lang=uk';

export const fetchWorldWeather = query => {
  return (
    fetch(`${proxy}${baseWorldWeather}?key=${apiKey}&q=${query}${settings2}`)
      .then(response => response.json())
      // eslint-disable-next-line
      .catch(error => console.log('Привіт).'))
  );
};
