import { AppBar, Toolbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NavBarButtons from './NavBarButtons';
import NavBarNameTitle from './NavBarNameTitle';

export default function NavBar({ onClick }) {
  return (
    <AppBar style={{ alignItems: 'center' }} elevation={0} color='inherit' position='fixed'>
      <Toolbar>
        <NavBarNameTitle />
      </Toolbar>
      <Toolbar>
        <NavBarButtons onClick={onClick} />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
