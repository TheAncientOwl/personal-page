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
    textAlign: 'center',
    marginTop: '10px',
  },
});

export default function NavBar({ onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBarNameTitle />
      <NavBarButtons onClick={onClick} />
    </div>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
