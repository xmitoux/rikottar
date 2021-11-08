import AppHeader from '../components/hide-appbar';
import AppFooter from '../components/bottom-navigation';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb7c5',
    },

    text: {
      primary: '#fc89ac',
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },

    MuiFab: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader title="Rikotter"></AppHeader>
      <Component {...pageProps} />
      <AppFooter />
    </ThemeProvider>
  );
}

export default MyApp;
