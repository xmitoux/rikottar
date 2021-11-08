import AppHeader from '../components/hide-appbar';
import AppFooter from '../components/bottom-navigation';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[300],
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
