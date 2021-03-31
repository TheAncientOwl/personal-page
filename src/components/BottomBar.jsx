import React from 'react';

import { makeStyles, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    //borderColor: 'green',
    borderColor: 'transparent',

    marginTop: '50px',
    marginBottom: '50px',
  },
});

export default function BottomBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton>
        <GitHubIcon />
      </IconButton>
    </div>
  );
}
