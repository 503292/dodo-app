import React, { Component } from 'react';

import { getRatePrivatBank } from '../../../services/api';
import css from './DollarRate.module.css';

class DollarRate extends Component {
  state = {
    rate: [],
  };

  componentDidMount() {
    getRatePrivatBank()
      .then(data => {
        const dataUSD = data.find(elem => elem.ccy === 'USD');
        dataUSD.buy = Number(dataUSD.buy).toFixed(2);
        dataUSD.sale = Number(dataUSD.sale).toFixed(2);

        const dataEUR = data.find(elem => elem.ccy === 'EUR');
        dataEUR.buy = Number(dataEUR.buy).toFixed(2);
        dataEUR.sale = Number(dataEUR.sale).toFixed(2);

        const dataRUR = data.find(elem => elem.ccy === 'RUR');
        dataRUR.buy = Number(dataRUR.buy).toFixed(3);
        dataRUR.sale = Number(dataRUR.sale).toFixed(3);

        const rate = [dataUSD, dataEUR, dataRUR];

        this.setState({
          rate,
          // loader: false,
        });
      })
      .catch(error => {
        this.setState({
          rate: error,
          // loader: false,
        });
      });
  }

  render() {
    const { rate } = this.state;

    const gryvnyaToDollar = rate.find(el => el.ccy === 'USD');
    // console.log(dollar, 'dollar');

    return (
      <div className={css.wrapRate}>
        <p className={css.dollarMark}>$</p>
        <div>
          {gryvnyaToDollar && (
            <p title="продати" className={css.gryvnyaBuy}>
              <span>◀</span>
              {gryvnyaToDollar.buy}
              {/* <span>▶</span> */}
            </p>
          )}
          {gryvnyaToDollar && (
            <p title="купити" className={css.gryvnyaSale}>
              <span>▶</span>
              {gryvnyaToDollar.sale}
              {/* <span>◀</span> */}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default DollarRate;

// const DollarRate = () => (
//   <div className={css.wrapRate}>
//     <p className={css.dollar}>${/* € */}</p>
//     <p className={css.gryvnya}>
//       =24.5<span> грн</span>
//     </p>
//   </div>
// );

// export default DollarRate;
