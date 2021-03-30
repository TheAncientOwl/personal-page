import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    paddingTop: '15px',
  },
});

export default function NavBarNameTitle() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant='h4'>
      Delegeanu Alexandru
    </Typography>
  );
}
