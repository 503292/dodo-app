import React, { Component } from 'react';
import css from './Motivator.module.css';

import motivations from './motivations';

import { ReactComponent as Exclamation } from '../../../../assets/image/exclamation.svg';
// import { ReactComponent as Quotes } from '../../../../assets/image/quotes.svg';

class Motivator extends Component {
  state = {
    motivationNumber: '',
  };

  componentDidMount() {
    const motivationNumber = String(this.randomNumber(motivations));
    this.setState({ motivationNumber });
  }

  randomNumber = arr => Math.floor(Math.random() * arr.length);

  render() {
    const { motivationNumber } = this.state;
    // console.log(motivations.length, 'mot length');
    let oneMotive = '';
    let oneAuthor = '';

    if (motivationNumber) {
      oneMotive = motivations[motivationNumber].motivation;
      oneAuthor = motivations[motivationNumber].author;
    }
    // console.log(oneMotive, 'oneMotive');
    // console.log(oneAuthor, 'oneAuthor');
    return (
      <>
        <div className={css.container}>
          <Exclamation className={css.exclamation} />
          {/* <Quotes className={css.quotes} /> */}
          <p className={css.text}>{oneMotive}</p>
          {oneAuthor ? (
            <span className={css.author}>{oneAuthor}</span>
          ) : (
            <span role="img" aria-label="Monkey" className={css.author}>
              🙈 🙉 🙊
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Motivator;

// const Motivator = () => <>ddd</>;

// export default Motivator;
