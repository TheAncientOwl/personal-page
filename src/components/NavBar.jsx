import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import NavBarButtons from './NavBarButtons';
import NavBarNameTitle from './NavBarNameTitle';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',

    position: 'fixed',
    width: '100%',
    background: 'inherit',
    textAlign: 'center',
  },
});

export default function NavBar({ onClick }) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <NavBarNameTitle />
      <NavBarButtons onClick={onClick} />
    </header>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
