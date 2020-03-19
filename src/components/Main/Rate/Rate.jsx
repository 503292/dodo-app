import React, { Component } from 'react';
import { getRatePrivatBank } from '../../../services/api';

import css from './Rate.module.css';

class Rate extends Component {
  state = { rate: [] };

  componentDidMount() {
    getRatePrivatBank()
      .then(data => {
        // console.log(data);
        const dataUSD = data.find(elem => elem.ccy === 'USD');
        dataUSD.buy = Number(dataUSD.buy).toFixed(2);
        dataUSD.sale = Number(dataUSD.sale).toFixed(2);
        dataUSD.ccy = 'Доллар';

        const dataEUR = data.find(elem => elem.ccy === 'EUR');
        dataEUR.buy = Number(dataEUR.buy).toFixed(2);
        dataEUR.sale = Number(dataEUR.sale).toFixed(2);
        dataEUR.ccy = 'Євро';

        const dataRUR = data.find(elem => elem.ccy === 'RUR');
        dataRUR.buy = Number(dataRUR.buy).toFixed(3);
        dataRUR.sale = Number(dataRUR.sale).toFixed(3);
        dataRUR.ccy = 'Рубль';
        const rate = [dataUSD, dataEUR, dataRUR];

        this.setState({
          rate,
        });
      })
      .catch(error => {
        this.setState({
          rate: error,
        });
      });
  }

  render() {
    const { rate } = this.state;
    console.log(rate);

    return (
      <>
        <div className={css.rateContainer}>
          {rate.length > 0 && (
            <table className={css.rateTable}>
              <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Купівля</th>
                  <th>Продаж</th>
                </tr>
              </thead>
              <tbody>
                {rate.map(elem => (
                  <tr key={elem.ccy}>
                    <td>{elem.ccy}</td>
                    <td>{elem.buy}</td>
                    <td>{elem.sale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
}

export default Rate;
