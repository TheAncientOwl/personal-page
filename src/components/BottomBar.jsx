import { IconButton, makeStyles, Tooltip, Zoom, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import PropTypes from 'prop-types';
import ThemeToggleButton from './ThemeToggleButton';

const useStyles = makeStyles({
  root: {
    marginTop: '50px',
    marginBottom: '50px',
  },
});

const ButtonsConfig = [
  {
    tooltip: 'GitHub',
    icon: <GitHubIcon />,
    link: 'https://github.com/TheAncientOwl',
    onClick: undefined,
  },
  {
    tooltip: 'Facebook',
    icon: <FacebookIcon />,
    link: 'https://www.facebook.com/delegeanu.alexandru/',
    onClick: undefined,
  },
  {
    tooltip: 'dele.alex.o.o@gmail.com',
    icon: <MailIcon />,
    onClick: undefined,
  },
];

function Copyright() {
  return (
    <Typography color='secondary' style={{ position: 'realtive', float: 'right', fontSize: '15px' }}>
      Copyright 2020
    </Typography>
  );
}

export default function BottomBar({ onThemeSwitch }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Copyright />
      {ButtonsConfig.map((button, index) => {
        return (
          <Tooltip key={index} arrow title={button.tooltip} TransitionComponent={Zoom}>
            <IconButton style={{ color: 'gray' }} href={button.link} onClick={button.onClick} target='_blank'>
              {button.icon}
            </IconButton>
          </Tooltip>
        );
      })}

      <ThemeToggleButton onClick={onThemeSwitch} />
    </div>
  );
}

BottomBar.propTypes = {
  onThemeSwitch: PropTypes.func.isRequired,
};
