import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import DownBar from './DownBar';

export default function Content({ children }) {
  return (
    <>
      <Typography align='center'>{children}</Typography>
      <DownBar />
    </>
  );
}

Content.propTypes = {
  children: PropTypes.any,
};
