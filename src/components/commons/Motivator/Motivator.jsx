import React, { Component } from 'react';
import motivations from './motivations';

import { ReactComponent as Exclamation } from '../../../assets/image/exclamation.svg';
import { ReactComponent as Refresh } from '../../../assets/image/refresh.svg';
import { ReactComponent as Copy } from '../../../assets/image/copy.svg';

import copyText from '../../../utils/copyText';

import css from './Motivator.module.scss';

class Motivator extends Component {
  state = {
    motivationNumber: '',
  };

  componentDidMount() {
    this.loadNewMotivation();
  }

  loadNewMotivation = () => {
    const randomNumber = arr => Math.floor(Math.random() * arr.length);
    const motivationNumber = String(randomNumber(motivations));
    this.setState({ motivationNumber });
  };

  refreshMotivation = () => {
    this.loadNewMotivation();
  };

  handleCopy = () => {
    const { motivationNumber } = this.state;
    copyText(
      `${motivations[motivationNumber].motivation} ${motivations[
        motivationNumber
      ].author ?? ''}`,
    );
  };

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
          <button
            type="button"
            className={css.btnRefresh}
            onClick={this.refreshMotivation}
          >
            <Refresh className={css.refresh} />
          </button>
          <button
            type="button"
            className={css.btnCopy}
            onClick={this.handleCopy}
          >
            <Copy className={css.copy} />
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
