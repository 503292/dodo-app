import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Calculator from '../../commons/Calculator';

import { updateCurrency } from '../../../redux/currency/currencyActions';

import css from './Currency.module.scss';

// helpers
const getCurrency = () => JSON.parse(localStorage.getItem('currency')) ?? [];
const getCurrencyMark = () =>
  JSON.parse(localStorage.getItem('currencyMark')) ?? 'USD';
const getСontries = () => JSON.parse(localStorage.getItem('contries')) ?? [];
const getMetals = () => JSON.parse(localStorage.getItem('metals')) ?? [];

const Currency = () => {
  const dispatch = useDispatch();
  const [currency] = useState(getCurrency());
  const [currencyMark, setCurrencyMark] = useState(getCurrencyMark());
  const [contries] = useState(getСontries());
  const [metals] = useState(getMetals());

  const checkMarkCurrency = async e => {
    const cMark = e.currentTarget.nextSibling.firstChild.textContent;

    localStorage.setItem('currencyMark', JSON.stringify(cMark));
    setCurrencyMark(cMark);
    dispatch(updateCurrency(cMark));
  };

  return (
    <div>
      {currency && contries && metals && (
        <div className={`${css.currencyContainer} scrollbarThumb`}>
          <div className={css.wrapTop}>
            {currency.length > 0 ? (
              <div className={css.wrapPB}>
                <div className={css.cash}>
                  <div className={css.headCurrency}>
                    <p>Валюта</p>
                    <p>Продати</p>
                    <p>Купити</p>
                  </div>
                  <div className={css.bodyCurrency}>
                    {currency.map(el => (
                      <label
                        className={css.lable}
                        htmlFor={el.ccy}
                        key={el.ccy}
                      >
                        <input
                          className={`${css.checkInput} ${el.ccy}`}
                          name="checkMarkCurrency"
                          type="radio"
                          id={`${el.ccy}`}
                          onChange={e => checkMarkCurrency(e)}
                          checked={el.ccy === currencyMark ? 'checked' : false}
                        />
                        <div className={css.checkRow}>
                          <p>{el.ccy}</p>
                          <p>
                            {el.buy}
                            <span> грн</span>
                          </p>
                          <p>
                            {el.sale}
                            <span> грн</span>
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <Calculator />
          </div>

          {contries && metals && (
            <div className={css.card}>
              {metals.map(el => (
                <div key={el.name} className={css.oneMetal}>
                  <div className={css.metalWrap}>
                    <p className={`${css.en} ${css[`${el.color}`]}`}>{el.en}</p>
                    <p className={css.uk}>{el.uk}</p>
                  </div>
                  <div className={css.wrapPriceM}>
                    <p className={css.priceM}>{el.rate}</p>
                    <p>грн/грам</p>
                  </div>
                </div>
              ))}

              {console.log(contries, 'contries')}
              {contries.map(el => (
                <div key={el.name} className={css.oneCountry}>
                  <div className={css.wrapFlag}>
                    <img src={el.url} alt="country" />
                    <p className={css.country}>{el.country}</p>
                  </div>
                  <div className={css.wrapRate}>
                    <p className={css.val}>{el.currency}</p>
                    <p className={css.price}>
                      {el.rate} <span>грн</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Currency;
