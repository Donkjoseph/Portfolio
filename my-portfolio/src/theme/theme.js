import { createTheme } from '@mui/material/styles';

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4A90E2' }, // Muted blue for primary actions
    secondary: { main: '#50E3C2' }, // Soft teal for secondary actions
    background: { default: '#1F1F1F', paper: '#2C2C2C' }, // Dark background shades
    text: { primary: '#FFFFFF', secondary: '#B0B0B0' }, // Light text with a slight grayish tone
  },
  typography: {
    fontFamily: 'Urbanist, Arial, sans-serif', // Set the Urbanist font globally
    h1: {
      fontWeight: 700, // Neat bold weight for large headers
    },
    h2: {
      fontWeight: 600, // Slightly lighter for sub-headers
    },
    h3: {
      fontWeight: 500, // Normal weight for smaller headers
    },
    h4: {
      fontWeight: 500, // Normal weight
    },
    h5: {
      fontWeight: 400, // Regular weight for smaller text
    },
    h6: {
      fontWeight: 300, // Lighter weight for even smaller text
    },
    body1: {
      fontWeight: 400, // Standard weight for body text
    },
    body2: {
      fontWeight: 300, // Lighter weight for secondary body text
    },
    button: {
      fontWeight: 500, // Neat, readable weight for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '8px', textTransform: 'none', fontWeight: 500 },
      },
    },
  },
});

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0073E6' }, // Professional blue
    secondary: { main: '#FF9F00' }, // Accent orange for a vibrant touch
    background: { default: '#F7F7F7', paper: '#FFFFFF' }, // Soft white background
    text: { primary: '#212121', secondary: '#757575' }, // Darker text for contrast
  },
  typography: {
    fontFamily: 'Urbanist, Arial, sans-serif', // Set the Urbanist font globally
    h1: {
      fontWeight: 700, // Neat bold weight for large headers
    },
    h2: {
      fontWeight: 600, // Slightly lighter for sub-headers
    },
    h3: {
      fontWeight: 500, // Normal weight for smaller headers
    },
    h4: {
      fontWeight: 500, // Normal weight
    },
    h5: {
      fontWeight: 400, // Regular weight for smaller text
    },
    h6: {
      fontWeight: 300, // Lighter weight for even smaller text
    },
    body1: {
      fontWeight: 400, // Standard weight for body text
    },
    body2: {
      fontWeight: 300, // Lighter weight for secondary body text
    },
    button: {
      fontWeight: 500, // Neat, readable weight for buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: '8px', textTransform: 'none', fontWeight: 500 },
      },
    },
  },
});
