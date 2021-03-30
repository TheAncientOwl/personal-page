import React from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, Button } from '@material-ui/core';

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

export default function NavBarButtons({ onClick }) {
  return (
    <ButtonGroup style={{ paddingTop: '50px' }} variant='text'>
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
