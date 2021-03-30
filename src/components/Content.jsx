import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';

import DownBar from './DownBar';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
  },
});

export default function Content({ children }) {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.root} align='center'>
        {children}
      </Typography>
      <DownBar />
    </>
  );
}

Content.propTypes = {
  children: PropTypes.any,
};
