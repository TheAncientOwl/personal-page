import React, { useState } from 'react';
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
    <div style={{ paddingTop: '55px', paddingBottom: '10px' }}>
      {ButtonsConfig.map((button, index) => {
        const col = currentButton === button.title ? 'green' : 'inherit';
        return (
          <Button
            style={{ color: `${col}` }}
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
        );
      })}
    </div>
  );
}

NavBarButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};
