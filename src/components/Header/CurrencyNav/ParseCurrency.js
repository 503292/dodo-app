import { metals, countries } from './helperCurrency';

export function parseCurrency(data) {
  const dataUSD = data.find(elem => elem.ccy === 'USD');
  dataUSD.buy = Number(dataUSD.buy).toFixed(2);
  dataUSD.sale = Number(dataUSD.sale).toFixed(2);

  const dataEUR = data.find(elem => elem.ccy === 'EUR');
  dataEUR.buy = Number(dataEUR.buy).toFixed(2);
  dataEUR.sale = Number(dataEUR.sale).toFixed(2);

  // const dataRUR = data.find(elem => elem.ccy === 'RUR');
  // dataRUR.buy = Number(dataRUR.buy).toFixed(3);
  // dataRUR.sale = Number(dataRUR.sale).toFixed(3);
  // dataRUR.ccy = 'RUB';

  // const dataBTC = data.find(elem => elem.ccy === 'BTC');
  // dataBTC.buy = Number(dataBTC.buy).toFixed(1);
  // dataBTC.sale = Number(dataBTC.sale).toFixed(1);

  const currency = [dataUSD, dataEUR];

  return currency;
}

export function parseCountries(data) {
  console.log(data, 'data');
  countries.map(el => {
    data.find(d => {
      if (d.cc === el.name) {
        // eslint-disable-next-line no-param-reassign
        el.rate = d.rate.toFixed(2);
      }
      return '';
    });
    return '';
  });
  return countries;
}

export function parseMetals(data) {
  metals.map(el => {
    data.find(d => {
      if (d.cc === el.name) {
        const rate = (d.rate / 31.10348).toFixed(2);
        // eslint-disable-next-line no-param-reassign
        el.rate = rate;
      }
      return '';
    });

    return '';
  });
  return metals;
}
