import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from '@material-ui/core';

import About from './About';
import Hobbies from './Hobbies';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Details from './Details';

const ButtonsConfig = [
  {
    title: 'About',
    component: <About />,
  },
  {
    title: 'Skills',
    component: <Skills />,
  },
  {
    title: 'Experience',
    component: <Experience />,
  },
  {
    title: 'Projects',
    component: <Projects />,
  },
  {
    title: 'Hobbies',
    component: <Hobbies />,
  },
  {
    title: 'Details',
    component: <Details />,
  },
];

export default function NavBarButtons({ onClick }) {
  const [currentButton, setCurrentButton] = useState(ButtonsConfig[0].title);

  return (
    <div style={{ paddingBottom: '10px' }}>
      <Grid container justify='center' spacing={2}>
        {ButtonsConfig.map((button, index) => {
          return (
            <Grid key={index} item>
              <Button
                color={currentButton === button.title ? 'primary' : 'secondary'}
                onClick={() => {
                  const anchor = document.querySelector('#back-to-top-anchor');
                  if (anchor) {
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                  setCurrentButton(button.title);
                  onClick(button.component);
                }}
                key={index}>
                {button.title}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

NavBarButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
