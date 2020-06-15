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

// worldweatheronline.com API 26.03.2020 -> 26.05.2020
const baseWorldWeather =
  'http://api.worldweatheronline.com/premium/v1/weather.ashx';

// const apiKey = 'b71a24e3a604422a9a263408200405';  // end 05.07.2020 ?
const apiKey = '482a809a7ca8447893c190815201506'; // end 14.08.2020 500pcs
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
