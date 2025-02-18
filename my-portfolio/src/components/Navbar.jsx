import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link } from 'react-scroll';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <AppBar 
      position="sticky" 
      sx={{
        background: isDarkMode ? 'rgba(26, 26, 26, 0.9)' : '#fff', // Dark mode vs Light mode background
        color: isDarkMode ? '#fff' : '#000', // Text color change
        boxShadow: 'none', // Optional: Remove box-shadow for cleaner look
        backdropFilter: 'blur(10px)',
        transition: 'background 0.3s ease, color 0.3s ease', // Smooth transition when toggling themes
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Don K Joseph
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="home" smooth={true} duration={500}>
            <IconButton color="inherit">Home</IconButton>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <IconButton color="inherit">Projects</IconButton>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <IconButton color="inherit">Skills</IconButton>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <IconButton color="inherit">Contact</IconButton>
          </Link>

          {/* Theme toggle button */}
          <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}  {/* Toggle icon */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
