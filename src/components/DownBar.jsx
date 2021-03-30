import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
  },
});

export default function DownBar() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} align='center'>
      Down Bar
    </Typography>
  );
}
