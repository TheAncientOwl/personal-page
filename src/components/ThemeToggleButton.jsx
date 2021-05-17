import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip, Zoom } from '@material-ui/core';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness2Icon from '@material-ui/icons/Brightness2';

import './border.css';

export default function ThemeToggleButton({ onClick }) {
  const [light, setLight] = useState(true);

  return (
    <Tooltip arrow title={'Switch Dark Mode'} TransitionComponent={Zoom}>
      <IconButton
        onClick={() => {
          setLight(!light);
          onClick();
        }}>
        {light ? <Brightness7Icon style={{ color: 'grey' }} /> : <Brightness2Icon style={{ color: 'grey' }} />}
      </IconButton>
    </Tooltip>
  );
}

ThemeToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
