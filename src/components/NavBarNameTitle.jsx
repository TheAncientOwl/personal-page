import React, { useEffect, useState } from 'react';

import { Typography } from '@material-ui/core';

export default function NavBarNameTitle() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <Typography style={{ paddingTop: '45px' }} component='div' variant={scrollY === 0 ? 'h3' : 'h4'}>
      Delegeanu Alexandru
    </Typography>
  );
}
