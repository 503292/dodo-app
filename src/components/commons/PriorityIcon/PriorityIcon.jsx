import React from 'react';
import css from './PriorityIcon.module.scss';

import { ReactComponent as Idea } from '../../../assets/image/tasks/idea.svg';
import { ReactComponent as Plan } from '../../../assets/image/tasks/plan.svg';
import { ReactComponent as Implementation } from '../../../assets/image/tasks/implementation.svg';
import { ReactComponent as Goal } from '../../../assets/image/tasks/goal.svg';

const PriorityIcon = ({ priority, styles = {} }) => {
  return <> {getIcon(priority, styles)}</>;
};

export default PriorityIcon;

const getIcon = (el, styles) => {
  switch (el) {
    case 'план':
      return <Plan style={styles} className={css[getColorSVG(el)]} />;
    case 'виконання':
      return <Implementation style={styles} className={css[getColorSVG(el)]} />;
    case 'ціль':
      return <Goal style={styles} className={css[getColorSVG(el)]} />;
    default:
      return <Idea style={styles} className={css[getColorSVG(el)]} />;
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
