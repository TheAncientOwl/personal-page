import React, { useState } from 'react';
import { makeStyles, CssBaseline, Container } from '@material-ui/core';

import AppBar from './AppBar';
import AppContent from './AppContent';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    borderStyle: 'solid',
    borderWidth: '0.5px',
  },
});

export default function App() {
  const [content, setContent] = useState('Default content');
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} fixed maxWidth='md'>
        <AppBar onContentChange={setContent} />
        <AppContent>{content}</AppContent>
      </Container>
    </>
  );
}
