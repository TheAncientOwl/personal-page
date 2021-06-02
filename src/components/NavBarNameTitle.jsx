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

  const color = scrollY === 0 ? 'primary' : 'inherit';
  const paddingTop = scrollY === 0 ? '45px' : '30px';
  const paddingBottom = scrollY === 0 ? '55px' : '20px';

  return (
    <Typography
      color={color}
      style={{
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: `${paddingTop}`,
        paddingBottom: `${paddingBottom}`,
        transition: 'all 0.3s ease',
      }}
      component='div'
      variant={scrollY === 0 ? 'h4' : 'h6'}>
      Delegeanu Alexandru
    </Typography>
  );
}
