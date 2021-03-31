import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItem, ListItemIcon, Divider } from '@material-ui/core';

export default function ListIconTextItem({ icon, prop1, prop2 }) {
  return (
    <>
      <ListItem>
        <ListItemIcon style={{ color: 'gray' }}>{icon}</ListItemIcon>
        <ListItemText>
          <span style={{ fontStyle: 'italic' }}>{prop1}</span> &gt; <span style={{ color: 'green' }}>{prop2}</span>
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
