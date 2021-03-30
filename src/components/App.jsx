import React from 'react';

import { makeStyles, Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    borderStyle: 'solid',
    borderWidth: '0.5px',
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} fixed maxWidth='md'>
        Hello there
      </Container>
    </>
  );
}
