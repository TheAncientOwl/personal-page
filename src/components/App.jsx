import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import AppContent from './AppContent';
import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    //borderStyle: 'solid',
    borderWidth: '0.5px',
    borderColor: 'green',
  },
});

export default function App() {
  const [content, setContent] = useState('idk');
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} fixed maxWidth='md'>
        <NavBar onClick={setContent} />
        <AppContent>{content}</AppContent>
      </Container>
    </>
  );
}
