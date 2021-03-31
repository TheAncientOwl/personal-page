import { AppBar, Toolbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NavBarButtons from './NavBarButtons';
import NavBarNameTitle from './NavBarNameTitle';

export default function NavBar({ onClick }) {
  return (
    <AppBar elevation={0} color='inherit'>
      <Toolbar style={{ flexDirection: 'column' }}>
        <NavBarNameTitle />
        <NavBarButtons onClick={onClick} />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
