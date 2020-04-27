import React, { Component } from 'react';
import css from './Motivator.module.css';

import motivations from './motivations';

import { ReactComponent as Exclamation } from '../../../../assets/image/exclamation.svg';
import { ReactComponent as Refresh } from '../../../../assets/image/refresh.svg';
import { ReactComponent as Refresh1 } from '../../../../assets/image/refresh-1.svg';

class Motivator extends Component {
  state = {
    motivationNumber: '',
  };

  componentDidMount() {
    const motivationNumber = String(this.randomNumber(motivations));
    this.setState({ motivationNumber });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { motivationNumber } = this.state;
  //   if (prevState.motivationNumber !== motivationNumber) {
  //     this.setState({ motivationNumber });
  //   }
  // }

  randomNumber = arr => Math.floor(Math.random() * arr.length);

  // refreshMotivation = e => {
  //   e.preventDefault;
  // };

  render() {
    const { motivationNumber } = this.state;
    let oneMotive = '';
    let oneAuthor = '';

    if (motivationNumber) {
      oneMotive = motivations[motivationNumber].motivation;
      oneAuthor = motivations[motivationNumber].author;
    }

    return (
      <>
        <div className={css.container}>
          <Exclamation className={css.exclamation} />
          <button type="button" className={css.btnRefresh}>
            {/* <Refresh className={css.refresh} /> */}
            <Refresh1 className={css.refresh} />
          </button>

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
