import { metals, countries } from './helperCurrency';

export function parseCountries(data) {
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
