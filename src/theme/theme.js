import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f39c12', // Custom green color
      light: '#80e27e',
      dark: '#087f23',
    },
    secondary: {
      main: '#ff5722', // Custom orange color
    },
    customColor: {
      main: '#6c5ce7', // Your custom color
      contrastText: '#ffffff', // Text color on this background
    },
  },
});

export default theme;
