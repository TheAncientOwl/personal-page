import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export default function Highlight({ component, children }) {
  return (
    <Typography component={component} style={{ fontStyle: 'italic' }} color='primary'>
      {children}
    </Typography>
  );
}

Highlight.defaultProps = {
  component: 'span',
};

Highlight.propTypes = {
  component: PropTypes.string,
  children: PropTypes.string.isRequired,
};
