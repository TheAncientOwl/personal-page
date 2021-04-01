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

  const color = scrollY === 0 ? 'green' : 'inherit';
  const paddingTop = scrollY === 0 ? '45px' : '30px';
  const paddingBottom = scrollY === 0 ? '55px' : '20px';

  return (
    <Typography
      style={{ color: `${color}`, paddingTop: `${paddingTop}`, paddingBottom: `${paddingBottom}` }}
      component='div'
      variant={scrollY === 0 ? 'h4' : 'h6'}>
      Delegeanu Alexandru
    </Typography>
  );
}
