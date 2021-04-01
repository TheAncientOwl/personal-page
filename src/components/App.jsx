import { Container, createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';
import React, { useState } from 'react';
import About from './About';
import AppContent from './AppContent';
import NavBar from './NavBar';

const useStyles = makeStyles({
  root: {
    borderStyle: 'solid',
    borderWidth: '0.5px',
    //borderColor: 'green',
    borderColor: 'transparent',
    minHeight: '100vh',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
  },
});

export default function App() {
  const [content, setContent] = useState(<About />);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main style={{ background: 'white' }}>
          <NavBar onClick={setContent} />

          <div id='back-to-top-anchor' />

          <Container className={classes.root} fixed maxWidth='md'>
            <AppContent>{content}</AppContent>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
