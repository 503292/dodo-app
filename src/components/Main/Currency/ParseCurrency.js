export default function parseCurrency(data) {
  const dataUSD = data.find(elem => elem.ccy === 'USD');
  dataUSD.buy = Number(dataUSD.buy).toFixed(2);
  dataUSD.sale = Number(dataUSD.sale).toFixed(2);

  const dataEUR = data.find(elem => elem.ccy === 'EUR');
  dataEUR.buy = Number(dataEUR.buy).toFixed(2);
  dataEUR.sale = Number(dataEUR.sale).toFixed(2);

  const dataRUR = data.find(elem => elem.ccy === 'RUR');
  dataRUR.buy = Number(dataRUR.buy).toFixed(3);
  dataRUR.sale = Number(dataRUR.sale).toFixed(3);
  dataRUR.ccy = 'RUB';
  const currency = [dataUSD, dataEUR, dataRUR];
  return currency;
}
