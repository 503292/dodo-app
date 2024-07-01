/* eslint-disable */
import React, { useState } from 'react';
import { ReactComponent as SoundIcon } from '../images/sound.svg';
import { ReactComponent as Square } from '../images/square.svg';
import MyButton from '../MyButton/MyButton';
import { speakEN, speakUA } from '../utils/speak';

const OneLineSelector = ({
  data,
  randomData,
  handleCheckLeft,
  handleCheckRight,
  disabledButtons,
  activeIndexes,
  isWrongAnswer,
}) => {
  const [isSpeakUA, setIsSpeakUA] = useState(false);
  const [isSpeakEN, setIsSpeakEN] = useState(false);

  const isLeftDisabled = disabledButtons.includes(data[0]);
  const isRightDisabled = disabledButtons.includes(randomData[0]);

  const isLeftActive = activeIndexes[0] === data[0];
  const isRightActive = activeIndexes[1] === randomData[0];

  const isLeftError = isWrongAnswer[0] === data[0];
  const isRightError = isWrongAnswer[1] === randomData[0];

  return (
    <li>
      <MyButton
        disabled={isSpeakUA}
        onClick={() => {
          setIsSpeakUA(true);
          speakUA(data[1], setIsSpeakUA);
        }}
      >
        {isSpeakUA ? <Square /> : <SoundIcon />}
      </MyButton>
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
        disabled={isSpeakEN}
        onClick={() => {
          setIsSpeakEN(true);
          speakEN(randomData[0], setIsSpeakEN);
        }}
      >
        {isSpeakEN ? <Square /> : <SoundIcon />}
      </MyButton>
    </li>
  );
};

export default OneLineSelector;
