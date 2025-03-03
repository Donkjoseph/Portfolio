import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#9D1F15' },        // Crimson red for main headings, navbar text, and info blocks
    secondary: { main: '#000000' },        // Black for the rest of headings and texts
    background: { default: '#FBF7BA', paper: '#FBF7BA' }, // Pale yellow for background
    text: { primary: '#000000', secondary: '#000000' },
  },
  typography: {
    fontFamily: "'Onest', sans-serif",
    h1: { fontWeight: 700, color: '#9D1F15' },
    h2: { fontWeight: 600, color: '#9D1F15' },
    h3: { fontWeight: 500, color: '#9D1F15' },
    h4: { fontWeight: 500, color: '#000000' },
    h5: { fontWeight: 400, color: '#000000' },
    h6: { fontWeight: 300, color: '#000000' },
    body1: { fontWeight: 400, color: '#000000' },
    body2: { fontWeight: 300, color: '#000000' },
    button: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          // Optional: you can use the primary color for button backgrounds
          backgroundColor: '#9D1F15',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#8C1B12',
          },
        },
      },
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#C9C7BA' },         // Pale taupe for main headings, navbar text, and info blocks
    secondary: { main: '#ffffff' },         // White for the rest of headings and texts
    background: { default: '#29292B', paper: '#29292B' }, // Jet black for background
    text: { primary: '#ffffff', secondary: '#ffffff' },
  },
  typography: {
    fontFamily: "'Onest', sans-serif",
    h1: { fontWeight: 700, color: '#C9C7BA' },
    h2: { fontWeight: 600, color: '#C9C7BA' },
    h3: { fontWeight: 500, color: '#C9C7BA' },
    h4: { fontWeight: 500, color: '#ffffff' },
    h5: { fontWeight: 400, color: '#ffffff' },
    h6: { fontWeight: 300, color: '#ffffff' },
    body1: { fontWeight: 400, color: '#ffffff' },
    body2: { fontWeight: 300, color: '#ffffff' },
    button: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          backgroundColor: '#C9C7BA',
          color: '#29292B',
          '&:hover': {
            backgroundColor: '#B5B3A9',
          },
        },
      },
    },
  },
});
