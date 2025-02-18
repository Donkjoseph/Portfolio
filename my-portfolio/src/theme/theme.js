import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#F8F3D9' },
    secondary: { main: '#EBE5C2' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#504B38', secondary: '#B9B28A' },
  },
  typography: {
    fontFamily: "'Onest', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 300 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 300 },
    button: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '8px', textTransform: 'none', fontWeight: 500 },
      },
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F8F3D9' },
    secondary: { main: '#EBE5C2' },
    background: { default: '#1F1F1F', paper: '#2C2C2C' },
    text: { primary: '#F8F3D9', secondary: '#EBE5C2' },
  },
  typography: {
    fontFamily: "'Onest', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 300 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 300 },
    button: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '8px', textTransform: 'none', fontWeight: 500 },
      },
    },
  },
});
