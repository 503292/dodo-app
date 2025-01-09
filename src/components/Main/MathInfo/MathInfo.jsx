import React from 'react';

import start from '../../../assets/image/mathInfo/1-start.png';
import game from '../../../assets/image/mathInfo/2-game.png';
import profile from '../../../assets/image/mathInfo/3-profile.png';

import css from './MathInfo.module.scss';
const title = {
  start: 'Main tabs',
  game: 'Game and settings',
  profile: 'Profile and settings',
};
const about = {
  start: `There are two tabs here. (Game and Profile)

Atop the counter of correct answers and the settings button.

Game tab - arithmetic task and 4 answers (choose one)
Turn the sound to maximum and you will have sound accompaniment.

Profile tab - this is the user's profile card:
- avatar icon
- One of the famous Ukrainian figures - drops out randomly (first and last name). Can be replaced with your first and last name
- Motivational saying of a Ukrainian figure - drops out randomly (you can replace information about yourself, achievements, dream ...)
- Selected country and its flag
- @ email or arbitrary text
- avatar icon (24 different avatars)
- in the lower right corner there is a share button (You can send the card via message to any messenger)

* The application does not collect the information entered by the user and does not transfer it to anyone`,
  game: `Game settings
- you can choose the range of numbers for the tasks minimum and maximum number
(some of them are not clickable - complete the tasks and they will become available)
- you can choose the arithmetic operator for the tasks addition, subtraction, multiplication, squaring, division by 2
- you can turn off the sound
- link to information about the game and the creator's email`,
  profile: `The profile card can be edited in the settings.
- the main icon with a gradient during the progress in the game will reveal a hidden picture (this is the flag of the country you choose)
- avatar (24 pcs.)
- Name - here can be your name or nickname
- Age - you can choose your birthday
- Description - add information about yourself, achievements, dream
- Email, or free text
- Country - select the flag of the country (205 countries of the world)
- Language (171 languages ​​of the world)

* Fields in the profile card can be hidden or shown using the switches`,
};

const MathInfo = () => {
  return (
    <div className={css.wrap}>
      <h3>4e Math</h3>
      <InfoImage src={start} title={title.start} about={about.start} />
      <InfoImage src={game} title={title.game} about={about.game} />
      <InfoImage src={profile} title={title.profile} about={about.profile} />
      <a
        className={css.link}
        href="mailto:4e.manager@gmail.com?subject=ask from 4e!"
      >
        © 4e.manager@gmail.com
      </a>
    </div>
  );
};

export default MathInfo;

const InfoImage = ({ src = '#', title = '', about = '' }) => {
  return (
    <>
      <div className={css.title}>{title}</div>
      <div className={css.wrapImg}>
        <img className={css.img} src={src} alt={title} />
      </div>
      <pre className={css.about}>{about}</pre>
    </>
  );
};
