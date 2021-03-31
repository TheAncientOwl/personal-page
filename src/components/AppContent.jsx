import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',
    //borderColor: 'transparent',

    marginTop: '250px',
    textAlign: 'center',
  },
});

export default function AppContent({ children }) {
  const classes = useStyles();
  return (
    <Typography component='div' className={classes.root}>
      {children}
    </Typography>
  );
}

AppContent.propTypes = {
  children: PropTypes.any.isRequired,
};
