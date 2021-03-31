import { Avatar, Grid, Container, Typography } from '@material-ui/core';
import React from 'react';

import Img from '../images/avatar.jpg';

export default function About() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Avatar component='span' style={{ height: '160px', width: '160px' }} src={Img} />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Container>
            <Typography>
              About Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
