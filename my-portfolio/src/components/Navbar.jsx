import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, useMediaQuery, Drawer } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material';
import { useSpring, animated, config } from 'react-spring';
import { styled } from '@mui/material/styles';

const AnimatedWrapper = styled(animated.div)({
  position: 'relative',
  display: 'inline-block',
});

const NavLink = styled(ScrollLink)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(0, 2),
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: 0,
    width: '0%',
    height: 2,
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
  '&.active': {
    '&::after': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const MobileDrawer = styled(animated.div)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'inherit',
}));

export const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [activeLink, setActiveLink] = useState('home');

  const themeRotation = useSpring({
    transform: isDarkMode ? 'rotate(360deg)' : 'rotate(0deg)',
    config: config.stiff,
  });

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? '#29292B' : '#FBF7BA',
        color: isDarkMode ? '#C9C7BA' : '#9D1F15',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1,
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          Don K Joseph
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {['home', 'projects', 'skills', 'contact'].map((link) => (
              <AnimatedWrapper key={link}>
                <NavLink
                  to={link}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => handleSetActive(link)}
                  className={activeLink === link ? 'active' : ''}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </NavLink>
              </AnimatedWrapper>
            ))}
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ ml: 2, transform: 'scale(1)', transition: 'transform 0.3s ease' }}
            >
              <animated.div style={themeRotation}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </animated.div>
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              sx={{ mr: 2, transform: 'scale(1)', transition: 'transform 0.3s ease' }}
            >
              <animated.div style={themeRotation}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </animated.div>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ transition: 'transform 0.3s ease' }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: isDarkMode ? '#29292B' : '#FBF7BA',
            color: isDarkMode ? '#C9C7BA' : '#9D1F15',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <MobileDrawer>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            {['home', 'projects', 'skills', 'contact'].map((link) => (
              <NavLink
                key={link}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => {
                  handleSetActive(link);
                  setMobileOpen(false);
                }}
                sx={{
                  fontSize: '1.5rem',
                  '&::after': { display: 'none' },
                  '&.active': { borderBottom: '2px solid', borderColor: isDarkMode ? '#C9C7BA' : '#9D1F15' },
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </NavLink>
            ))}
          </Box>
        </MobileDrawer>
      </Drawer>
    </AppBar>
  );
};
