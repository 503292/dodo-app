import React from 'react';

import BtnCopy from '../BtnCopy/BtnCopy';
import BoxWithBorder from '../BoxWithBorder/BoxWithBorder2';

import mono from '../../../assets/image/payments/mono.jpg';
import donatello from '../../../assets/image/payments/donatello.jpg';
import paypal from '../../../assets/image/payments/paypal.jpg';
import css from './Payments.module.scss';

const myEmail = 'kalysh.max@gmail.com';
const cardNumber = '4441 1111 2094 2549';

const Payments = () => {
  return (
    <>
      <h3 className={css.title}>Підтримати проЄкт (Donate)</h3>
      <div className={css.wrap}>
        <BoxWithBorder>
          <Payment
            img={mono}
            title="Mono bank"
            link="https://send.monobank.ua/jar/3UHTfdgMsP"
            card={<MonoCard text={cardNumber} />}
          />
        </BoxWithBorder>

        <BoxWithBorder>
          <Payment
            img={donatello}
            title="Donatello"
            link="https://donatello.to/4e.manager"
            card={null}
          />
        </BoxWithBorder>

        <BoxWithBorder>
          <Payment
            img={paypal}
            title="PayPal"
            link={null}
            card={<Email text={myEmail} />}
          />
        </BoxWithBorder>
      </div>
    </>
  );
};

export default Payments;

const Payment = ({ img = '/', title = '', link = '/', card = null }) => {
  return (
    <div className={css.wrapPayment}>
      <h4>{title}</h4>

      {link ? (
        <a href={link} className={css.wrapImg}>
          <img src={img} alt={title} />
        </a>
      ) : (
        <div className={css.wrapImg}>
          <img src={img} alt={title} />
        </div>
      )}

      {link ? (
        <a href={link}>
          <span role="img" aria-label="link">
            🔗{' '}
          </span>
          {link}
        </a>
      ) : null}
      {card ? <>{card}</> : null}
    </div>
  );
};

const MonoCard = ({ text }) => {
  return (
    <div className={css.wrapCopy}>
      <p>
        <span role="img" aria-label="card">
          💳{' '}
        </span>
        Номер картки банки <br /> {text}
      </p>
      <BtnCopy text={text} />
    </div>
  );
};
const Email = ({ text }) => {
  return (
    <div className={css.wrapCopy}>
      <p>{text}</p>
      <BtnCopy text={text} />
    </div>
  );
};
