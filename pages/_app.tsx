import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';

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
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
