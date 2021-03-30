import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
  },
});

export default function TopBar() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} align='center'>
      App Bar
    </Typography>
  );
}
