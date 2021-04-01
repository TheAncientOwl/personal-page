import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

import BottomBar from './BottomBar';

const useStyles = makeStyles({
  root: {
    marginTop: '250px',
    textAlign: 'center',
    minHeight: '50vh',
  },
});

export default function AppContent({ children, onThemeSwitch }) {
  const classes = useStyles();
  return (
    <>
      <Typography component='div' className={classes.root}>
        {children}
      </Typography>
      <BottomBar onThemeSwitch={onThemeSwitch} />
    </>
  );
}

AppContent.propTypes = {
  children: PropTypes.any.isRequired,
  onThemeSwitch: PropTypes.func.isRequired,
};
