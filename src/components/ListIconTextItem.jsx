import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItem, ListItemIcon, Divider } from '@material-ui/core';

export default function ListIconTextItem({ icon, text1, text2 }) {
  return (
    <>
      <ListItem>
        <ListItemIcon style={{ color: 'gray' }}>{icon}</ListItemIcon>
        <ListItemText>
          <span style={{ fontStyle: 'italic' }}>{text1}</span>: <span style={{ color: 'green' }}> {text2}</span>
        </ListItemText>
      </ListItem>
      <Divider />
    </>
  );
}

ListIconTextItem.propTypes = {
  icon: PropTypes.any.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string,
};
