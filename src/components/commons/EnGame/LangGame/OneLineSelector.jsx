/* eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as SoundIcon } from '../images/sound.svg';
import { ReactComponent as Square } from '../images/square.svg';
import MyButton from '../MyButton/MyButton';
import { speakEN } from '../utils/speak';

const OneLineSelector = ({
  data,
  randomData,
  handleCheckLeft,
  handleCheckRight,
  disabledButtons,
  activeIndexes,
  isWrongAnswer,
}) => {
  const [isSpeak, setIsSpeak] = useState(false);

  const isLeftDisabled = disabledButtons.includes(data[0]);
  const isRightDisabled = disabledButtons.includes(randomData[0]);

  const isLeftActive = activeIndexes[0] === data[0];
  const isRightActive = activeIndexes[1] === randomData[0];

  const isLeftError = isWrongAnswer[0] === data[0];
  const isRightError = isWrongAnswer[1] === randomData[0];

  return (
    <li>
      {/* EN */}
      <MyButton
        disabled={isLeftDisabled}
        active={isLeftActive}
        error={isLeftError}
        onClick={() => handleCheckLeft(data[0])}
      >
        {data[0]}
      </MyButton>

      {/* UA */}
      <MyButton
        disabled={isRightDisabled}
        active={isRightActive}
        error={isRightError}
        onClick={() => handleCheckRight(randomData[0])}
      >
        {randomData[1]}
      </MyButton>

      <MyButton
        disabled={isSpeak}
        onClick={() => {
          setIsSpeak(true);
          speakEN(randomData[0], setIsSpeak);
        }}
      >
        {isSpeak ? <Square /> : <SoundIcon />}
      </MyButton>
    </li>
  );
};

export default OneLineSelector;
