import React from 'react';
import { ReactComponent as ArrowD } from '../../../../../assets/image/arrows/arrow-d.svg';
import { ReactComponent as ArrowDl } from '../../../../../assets/image/arrows/arrow-dl.svg';
import { ReactComponent as ArrowDr } from '../../../../../assets/image/arrows/arrow-dr.svg';
import { ReactComponent as ArrowL } from '../../../../../assets/image/arrows/arrow-l.svg';
import { ReactComponent as ArrowR } from '../../../../../assets/image/arrows/arrow-r.svg';
import { ReactComponent as ArrowT } from '../../../../../assets/image/arrows/arrow-t.svg';
import { ReactComponent as ArrowTl } from '../../../../../assets/image/arrows/arrow-tl.svg';
import { ReactComponent as ArrowTr } from '../../../../../assets/image/arrows/arrow-tr.svg';

export default function switchWind(wind) {
  switch (wind) {
    case 'N':
      return <ArrowT />;
    case 'NNE':
    case 'NE':
    case 'ENE':
      return <ArrowTr />;
    case 'E':
      return <ArrowR />;
    case 'ESE':
    case 'SE':
    case 'SSE':
      return <ArrowDl />;
    case 'S':
      return <ArrowD />;
    case 'SSW':
    case 'SW':
    case 'WSW':
      return <ArrowDr />;

    case 'W':
      return <ArrowL />;
    case 'WNW':
    case 'NW':
    case 'NNW':
      return <ArrowTl />;

    default:
      return '';
  }
}

// const switchWind = wind => {
//   console.log(allWinds[wind]);

//   return ``;
// };
// export default switchWind;
