import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',
    marginTop: '180px',
    textAlign: 'center',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

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
