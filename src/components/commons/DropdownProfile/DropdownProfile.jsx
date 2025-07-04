import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { ReactComponent as Info } from '../../../assets/image/nav/info.svg';
import { ReactComponent as Donate } from '../../../assets/image/nav/donate.svg';
import { ReactComponent as Settings } from '../../../assets/image/nav/setting.svg';
// import { ReactComponent as Profile } from '../../../assets/image/nav/profile.svg';
import { ReactComponent as Notes } from '../../../assets/image/nav/notes.svg';
import { ReactComponent as Game } from '../../../assets/image/nav/game.svg';

import css from './DropdownProfile.module.scss';

const DropdownProfile = ({ isActive, refProfile }) => {
  const ativeStyle = {
    color: 'tomato',
    fill: 'tomato',
  };
  return (
    <>
      {isActive ? (
        <nav ref={refProfile} className={css.wrapDropdownSettings}>
          <ul className={css.listPages}>
            <li>
              <NavLink exact activeStyle={ativeStyle} to="/lang_game">
                EN
              </NavLink>
            </li>

            <li>
              <NavLink exact activeStyle={ativeStyle} to="/math_game">
                <Game />
              </NavLink>
            </li>

            <li>
              <NavLink exact activeStyle={ativeStyle} to="/menu">
                <Notes />
              </NavLink>
            </li>

            <li>
              <NavLink exact activeStyle={ativeStyle} to="/info">
                <Donate />
              </NavLink>
            </li>

            <li>
              <NavLink exact activeStyle={ativeStyle} to="/settings">
                <Settings />
              </NavLink>
            </li>

            {/* <li>
              <NavLink exact activeStyle={ativeStyle} to="/profile">
                <Profile />
              </NavLink>
            </li> */}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

DropdownProfile.defaultProps = {
  isActive: false,
  refProfile: {},
};

DropdownProfile.propTypes = {
  isActive: PropTypes.bool,
  refProfile: PropTypes.shape(PropTypes.any.isRequired),
};

export default DropdownProfile;
