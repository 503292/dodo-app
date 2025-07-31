import React from 'react';
import css from './AddTaskForm.module.scss';

import BtnCrissCross from '../BtnCrissCross/BtnCrissCross';
import { ReactComponent as Idea } from '../../../assets/image/tasks/idea.svg';
import { ReactComponent as Plan } from '../../../assets/image/tasks/plan.svg';
import { ReactComponent as Implementation } from '../../../assets/image/tasks/implementation.svg';
import { ReactComponent as Goal } from '../../../assets/image/tasks/goal.svg';

import { getColor } from '../../../utils/Priority';

const TopAddForm = ({ priority, onClick }) => {
  return (
    <div className={css.topAddForm}>
      <div className={css.wrapTitle}>
        {getIcon(priority)}
        <p className={css.title}>{priority}</p>
      </div>
      <BtnCrissCross
        onClick={() => onClick()}
        className={css[`${getColor(priority)}`]}
      />
    </div>
  );
};

export default TopAddForm;

const getIcon = el => {
  switch (el) {
    case 'план':
      return <Plan className={css[getColorSVG(el)]} />;
    case 'виконання':
      return <Implementation className={css[getColorSVG(el)]} />;
    case 'ціль':
      return <Goal className={css[getColorSVG(el)]} />;
    default:
      return <Idea className={css[getColorSVG(el)]} />;
  }
};

const getColorSVG = el => {
  switch (el) {
    case 'план':
      return 'normalPrioritySVG';
    case 'виконання':
      return 'highPrioritySVG';
    case 'ціль':
      return 'longPrioritySVG';
    default:
      return 'lowPrioritySVG';
  }
};
