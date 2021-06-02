import { Toolbar, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NavBarButtons from './NavBarButtons';
import NavBarNameTitle from './NavBarNameTitle';

const useStyles = makeStyles({
  navbar: {
    position: 'sticky',
    top: 0,
    background: 'black',
    zIndex: '999',
  },
});

export default function NavBar({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <Toolbar style={{ flexDirection: 'column' }}>
        <NavBarNameTitle />
        <NavBarButtons onClick={onClick} />
      </Toolbar>
    </div>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
