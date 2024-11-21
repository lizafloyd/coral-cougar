import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Fragment } from 'react';
import { Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export function ButtonUsage() {
  return <Button variant="contained">Hello world</Button>;
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#fbe3ef',
      main: '#ee298D',
      dark: '#ee0074',
      contrastText: '#fff',
      background: '#282c34'
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Typography color={theme.palette.primary.light}></Typography>
        <div className="App">
          <header className="App-header">
            <ButtonUsage />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div></ThemeProvider>

    </>
  );
}

export default App;
