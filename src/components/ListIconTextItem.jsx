import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItem, ListItemIcon, Divider, Typography } from '@material-ui/core';

export default function ListIconTextItem({ icon, prop1, prop2 }) {
  return (
    <>
      <ListItem>
        <ListItemIcon style={{ color: 'grey' }}>{icon}</ListItemIcon>
        <ListItemText>
          <i>{prop1}</i> &gt;{' '}
          <Typography component='span' color='primary'>
            {prop2}
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
}

ListIconTextItem.propTypes = {
  icon: PropTypes.any.isRequired,
  prop1: PropTypes.any.isRequired,
  prop2: PropTypes.any,
};
