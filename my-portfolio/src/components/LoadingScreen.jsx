import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

export const LoadingScreen = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(16, 24, 32, 0.7)', // Semi-transparent dark background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Ensure it stays on top of all other content
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress size={60} sx={{ color: '#FEE715' }} /> {/* Spinner with yellow color */}
        <Typography variant="h6" sx={{ color: '#FEE715', mt: 2 }}>Loading...</Typography>
      </Box>
    </Box>
  );
};
