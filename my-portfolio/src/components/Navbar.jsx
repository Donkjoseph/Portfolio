import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/material/styles';

// Styled container for animated icon wrapper
const AnimatedIconWrapper = styled(animated.div)({
  display: 'inline-block',
});

// Custom animated icon button with scaling on hover
const AnimatedIconButton = ({ children, ...props }) => {
  const [hoverProps, setHover] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  return (
    <AnimatedIconWrapper
      onMouseEnter={() => setHover({ transform: 'scale(1.1)' })}
      onMouseLeave={() => setHover({ transform: 'scale(1)' })}
      style={hoverProps}
    >
      <IconButton {...props} aria-label="theme toggle">
        {children}
      </IconButton>
    </AnimatedIconWrapper>
  );
};

// Styled NavLink using react-scroll's Link for smooth scrolling with custom styles
const NavLink = styled(ScrollLink)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 500,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

// Navbar component
export const Navbar = ({ toggleTheme, isDarkMode }) => {
  // Rotation animation for the theme icon on theme change
  const themeRotation = useSpring({
    transform: isDarkMode ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? 'rgba(26, 26, 26, 0.9)' : '#F8F3D9',
        color: isDarkMode ? '#F8F3D9' : '#504B38',
        backdropFilter: 'blur(10px)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        {/* Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1,
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
          }}
        >
          Don K Joseph
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="home" smooth duration={500}>
            Home
          </NavLink>
          <NavLink to="projects" smooth duration={500}>
            Projects
          </NavLink>
          <NavLink to="skills" smooth duration={500}>
            Skills
          </NavLink>
          <NavLink to="contact" smooth duration={500}>
            Contact
          </NavLink>

          {/* Theme Toggle Button */}
          <AnimatedIconButton onClick={toggleTheme} color="inherit" sx={{ ml: 2 }}>
            <animated.div style={themeRotation}>
              {isDarkMode ? (
                <Brightness7 aria-label="light mode" />
              ) : (
                <Brightness4 aria-label="dark mode" />
              )}
            </animated.div>
          </AnimatedIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};