import React, { Component } from 'react';

// material-ui
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DollarRate from './DollarRate/DollarRate';
import Weather from './Weather/Weather';
import Logo from './Logo/Logo';
import BtnLogin from './BtnLogin/BtnLogin';

import css from './Header.module.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <div className={css.wrapHeader}>
          <AppBar position="static">
            <Toolbar>
              <Avatar alt="Remy Sharp" src="../../../../" />
              <Typography
                variant="h6"
                // className={classes.title}
              >
                Dodo
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>

          <Logo />
          <Weather />
          <DollarRate />
          <BtnLogin />
        </div>
      </>
    );
  }
}

export default Header;
