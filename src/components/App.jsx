import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import About from './About';
import AppContent from './AppContent';
import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',
  },
});

export default function App() {
  const [content, setContent] = useState(About());
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <NavBar onClick={setContent} />

      <Container className={classes.root} fixed maxWidth='md'>
        <AppContent>{content}</AppContent>
      </Container>
    </>
  );
}
