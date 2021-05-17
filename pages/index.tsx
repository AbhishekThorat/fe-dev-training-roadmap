
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dashboard from './Dashboard';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
        overrides: {
          MuiCssBaseline: {
            '@global': {
              html: {
                height: "100%",
                width: "100%",
              },
              body: {
                height: "100%",
                width: "100%",
              },
              [`#__next`]: {
                height: "100%",
                width: "100%",
              }
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" width="100%" height="100%" flexDirection="column">
        <Dashboard />
      </Box>
    </ThemeProvider>
  )
};

export default App;