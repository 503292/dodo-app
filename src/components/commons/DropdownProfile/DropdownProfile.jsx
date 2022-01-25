import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as Info } from '../../../assets/image/info.svg';
import { ReactComponent as Settings } from '../../../assets/image/setting.svg';
import { ReactComponent as Profile } from '../../../assets/image/profile.svg';

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
            <li className={css.page}>
              <NavLink exact activeStyle={ativeStyle} to="/info">
                <Info />
              </NavLink>
            </li>
            <li className={css.page}>
              <NavLink exact activeStyle={ativeStyle} to="/settings">
                <Settings />
              </NavLink>
            </li>
            <li className={css.page}>
              <NavLink exact activeStyle={ativeStyle} to="/profile">
                <Profile />
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

DropdownProfile.defaultProps = {
  isActive: false,
  refProfile: <></>,
};

DropdownProfile.propTypes = {
  isActive: PropTypes.bool,
  refProfile: PropTypes.node,
};

export default DropdownProfile;
