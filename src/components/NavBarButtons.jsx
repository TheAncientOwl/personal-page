import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

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
    title: 'Hobbies',
    makeContent: Hobbies,
  },
  {
    title: 'Details',
    makeContent: Details,
  },
];

export default function NavBarButtons({ onClick }) {
  return (
    <div style={{ paddingTop: '55px', paddingBottom: '10px' }}>
      {ButtonsConfig.map((button, index) => {
        return (
          <Button
            onClick={() => {
              const anchor = document.querySelector('#back-to-top-anchor');
              if (anchor) {
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              onClick(button.makeContent);
            }}
            key={index}>
            {button.title}
          </Button>
        );
      })}
    </div>
  );
}

NavBarButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
