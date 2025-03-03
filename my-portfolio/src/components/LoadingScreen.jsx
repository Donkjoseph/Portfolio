import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import logo from '../assets/logo_dkj.png'; // Ensure this path is correct

export const LoadingScreen = ({ initialProgress = 0 }) => {
  const [progress, setProgress] = useState(initialProgress);
  const theme = useTheme(); // Get the current theme mode

  // Determine colors based on the theme mode
  const isDarkMode = theme.palette.mode === 'dark';

  const backgroundColor = isDarkMode ? '#101820' : '#FFFFFF'; // Dark mode or Light mode background
  const textColor = isDarkMode ? '#FEE715' : '#000000'; // Yellow for dark mode, Black for light mode
  const progressBarColor = isDarkMode ? '#FEE715' : '#000000'; // Yellow progress bar in dark mode

  // Simulate loading progress (replace with actual loading logic)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        // Slow down progress as it nears 100%
        const increment = Math.max(1, Math.floor((100 - prevProgress) / 10));
        const newProgress = Math.min(prevProgress + increment, 99);

        // Stop at 99% (you should set to 100% when fully loaded)
        return newProgress >= 99 ? 99 : newProgress;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: backgroundColor, // Dynamically adjust background
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Keep on top of all content
      }}
    >
      {/* Logo Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img
          src={logo} // Path to your logo
          alt="Don K Joseph Logo"
          style={{
            width: 'auto',
            height: '120px', // Adjust logo size as necessary
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Progress Bar Section */}
      <Box sx={{ width: '100%', position: 'absolute', bottom: '40px' }}>
        {/* Background for Progress Bar */}
        <Box
          sx={{
            width: '100%',
            height: '2px',
            backgroundColor: isDarkMode ? '#333333' : '#EEEEEE', // Dark grey in dark mode
            position: 'absolute',
          }}
        />

        {/* Progress bar indicator */}
        <Box
          sx={{
            width: `${progress}%`, // Dynamic width based on progress
            height: '2px',
            backgroundColor: progressBarColor, // Dynamically adjust progress bar color
            position: 'absolute',
            transition: 'width 0.3s ease',
          }}
        />

        {/* Progress percentage text */}
        <Typography
          variant="h5"
          sx={{
            color: textColor, // Dynamically adjust text color
            textAlign: 'right',
            mt: 2,
            mr: 4,
            fontWeight: 'bold',
          }}
        >
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
