import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ButtonGroup, Button } from '@material-ui/core';

import About from './About';
import Hobbies from './Hobbies';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Details from './Details';

const ButtonsConfig = [
  {
    title: 'About',
    makeContent: About,
  },
  {
    title: 'Hobbies',
    makeContent: Hobbies,
  },
  {
    title: 'Skills',
    makeContent: Skills,
  },
  {
    title: 'Experience',
    makeContent: Experience,
  },
  {
    title: 'Projects',
    makeContent: Projects,
  },
  {
    title: 'Details',
    makeContent: Details,
  },
];

const useStyles = makeStyles({
  root: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
});

export default function NavBarButtons({ onClick }) {
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.root} variant='text'>
      {ButtonsConfig.map((button, index) => {
        return (
          <Button onClick={() => onClick(button.makeContent)} key={index}>
            {button.title}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

NavBarButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
