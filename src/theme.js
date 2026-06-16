import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A0A0A', // --ink
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C8A96E', // --gold
      contrastText: '#0B1934',
    },
    error: {
      main: '#FF5A47', // --c-ai
    },
    background: {
      default: '#FFFFFF', // --bg
      paper: '#FAF7F2', // --bg-warm
    },
    text: {
      primary: '#0A0A0A', // --ink
      secondary: '#4A4A4A', // --ink-mid
    },
  },
  typography: {
    fontFamily: 'var(--font-body), system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font-display), system-ui, sans-serif',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // Pill shape buttons
          fontFamily: 'var(--font-body), system-ui, sans-serif',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body), system-ui, sans-serif',
        },
      },
    },
  },
});

export default theme;
