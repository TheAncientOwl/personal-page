import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export default function ItalicGreen({ component, children }) {
  return (
    <Typography component={component} style={{ fontStyle: 'italic' }} color='primary'>
      {children}
    </Typography>
  );
}

ItalicGreen.defaultProps = {
  component: 'span',
};

ItalicGreen.propTypes = {
  component: PropTypes.string,
  children: PropTypes.string.isRequired,
};
