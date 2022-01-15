import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { parseCurrency, parseCountries, parseMetals } from './ParseCurrency';

import { ReactComponent as ArrowL } from '../../../assets/image/arrow-l.svg';
import { ReactComponent as ArrowR } from '../../../assets/image/arrow-r.svg';
import { loaderOn, loaderOff } from '../../../redux/global/globalActions';

import switchCurrency from './switchCurrency';

import {
  fetchCurrencyPrivatBank,
  fetchCurrencyNBU,
} from '../../../services/api';

import css from './CurrencyNav.module.css';

const getMark = () => {
  const localMark = JSON.parse(localStorage.getItem('currencyMark'));
  if (localMark) {
    return localMark;
  }
  return 'USD';
};

const CurrencyNav = () => {
  const dispatch = useDispatch();
  const markFromStore = useSelector(state => state.currencyMark);
  const [currency, setCurrency] = useState([]);
  const [currencyMark, setCurrencyMark] = useState('');

  const getCurrency = async () => {
    await fetchCurrencyPrivatBank()
      .then(data => {
        const currencyParse = parseCurrency(data);
        localStorage.setItem('currency', JSON.stringify(currencyParse));
        localStorage.setItem('currencyMark', JSON.stringify(getMark()));

        setCurrency(currencyParse);
        setCurrencyMark(getMark());
        dispatch(loaderOff());
      })
      .catch(() => {
        dispatch(loaderOff());
      });

    fetchCurrencyNBU()
      .then(data => {
        const contries = parseCountries(data);
        const metals = parseMetals(data);

        localStorage.setItem('contries', JSON.stringify(contries));
        localStorage.setItem('metals', JSON.stringify(metals));
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('😉');
      });
  };

  useEffect(() => {
    dispatch(loaderOn());
    getCurrency();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (markFromStore) {
      setCurrencyMark(markFromStore);
      localStorage.setItem('currencyMark', JSON.stringify(markFromStore));
    }
  }, [markFromStore]);

  const gryvnyaToCurrency = currency.find(el => el.ccy === currencyMark);

  return (
    <>
      {gryvnyaToCurrency && (
        <div className={css.wrapCurrency}>
          <div className={css.currencyMark}>
            {switchCurrency(gryvnyaToCurrency.ccy)}
          </div>

          <div>
            <p title="Продати" className={css.gryvnyaBuy}>
              <ArrowR className={css.arrowR} />
              {/* <span>▶</span> */}
              {gryvnyaToCurrency.buy}
            </p>
            <p title="Купити" className={css.gryvnyaSale}>
              <ArrowL className={css.arrowL} />
              {/* <span>◀</span> */}
              {gryvnyaToCurrency.sale}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencyNav;
