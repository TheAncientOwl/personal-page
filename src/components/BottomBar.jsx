import { IconButton, makeStyles, Tooltip, Zoom, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';

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

const ButtonsConfig = [
  {
    tooltip: 'GitHub',
    icon: <GitHubIcon />,
    link: 'https://github.com/TheAncientOwl',
    onClick: undefined,
  },
  {
    tooltip: 'LinkedIn',
    icon: <LinkedInIcon />,
    link: 'https://ro.linkedin.com/',
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
    <Typography style={{ color: 'gray', position: 'realtive', float: 'right', fontSize: '15px' }}>
      Copyright 2020
    </Typography>
  );
}

export default function BottomBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {ButtonsConfig.map((button, index) => {
        return (
          <Tooltip key={index} arrow title={button.tooltip} TransitionComponent={Zoom}>
            <IconButton style={{ color: 'gray' }} href={button.link} onClick={button.onClick} target='_blank'>
              {button.icon}
            </IconButton>
          </Tooltip>
        );
      })}
      <Copyright />
    </div>
  );
}
