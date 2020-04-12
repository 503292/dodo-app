import { metals, countries } from './helperCurrency';

export default function parseCurrency(data) {
  console.log(data, 'data');
  console.log(countries, 'countries');
  const tmpArr = countries;
  //   console.log(tmpArr, 'tmpArr');
  countries.map(el => {
    data.find(d => {
      if (d.cc === el.name) {
        console.log(d.rate, ' d.rate');
        tmpArr[el.index].rate = d.rate;
        return 0;
      }
      return 0;
    });
    console.log(tmpArr, 'tmpArr');
    return 0;
  });

  //   console.log(metals, 'metals');
}
// 31.10348
