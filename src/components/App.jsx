import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import About from './About';
import AppContent from './AppContent';
import NavBar from './NavBar';

export default function App() {
  const [content, setContent] = useState(<About />);
  const [lightTheme, setLightTheme] = useState(true);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiContainer: {
            root: {
              color: lightTheme ? 'black' : 'white',
            },
          },
          MuiButton: {
            root: {
              color: lightTheme ? 'black' : 'white',
            },
          },
          MuiAccordion: {
            root: {
              background: lightTheme ? 'white' : 'black',
              color: lightTheme ? 'black' : 'white',
            },
          },
          MuiToolbar: {
            root: {
              background: lightTheme ? 'white' : 'black',
              color: lightTheme ? 'black' : 'white',
            },
          },
        },
        palette: {
          background: {
            default: lightTheme ? 'white' : 'black',
          },
          primary: {
            main: '#0EA10B',
          },
          secondary: {
            main: '#A1A399',
          },
        },
      }),
    [lightTheme]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <NavBar onClick={setContent} />
          <div id='back-to-top-anchor' />
          <Container fixed maxWidth='md'>
            <AppContent onThemeSwitch={() => setLightTheme(!lightTheme)}>{content}</AppContent>
          </Container>
        </>
      </ThemeProvider>
    </>
  );
}
