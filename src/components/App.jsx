import React, { useState } from 'react';
import { makeStyles, CssBaseline, Container } from '@material-ui/core';

import TopBar from './TopBar';
import Content from './Content';

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
        <TopBar onContentChange={setContent} />
        <Content>{content}</Content>
      </Container>
    </>
  );
}
