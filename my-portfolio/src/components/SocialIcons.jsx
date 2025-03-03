import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { IconButton, Box, useTheme } from '@mui/material';

export const SocialIcons = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Light mode: background: #FEE715, icon: #101820, hover: #FFD700
  // Dark mode: background: #C9C7BA, icon: #29292B, hover: #B5B3A9
  const bgColor = isDarkMode ? "#C9C7BA" : "#FEE715";
  const iconColor = isDarkMode ? "#29292B" : "#101820";
  const hoverColor = isDarkMode ? "#B5B3A9" : "#FFD700";

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        right: 16,
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2,
      }}
    >
      <IconButton
        href="https://www.instagram.com"
        target="_blank"
        sx={{
          backgroundColor: bgColor,
          padding: 2,
          borderRadius: '50%',
          '&:hover': { backgroundColor: hoverColor },
        }}
      >
        <FaGithub size={30} color={iconColor} />
      </IconButton>

      <IconButton
        href="https://www.pinterest.com"
        target="_blank"
        sx={{
          backgroundColor: bgColor,
          padding: 2,
          borderRadius: '50%',
          '&:hover': { backgroundColor: hoverColor },
        }}
      >
        <FaTwitter size={30} color={iconColor} />
      </IconButton>

      <IconButton
        href="https://www.linkedin.com"
        target="_blank"
        sx={{
          backgroundColor: bgColor,
          padding: 2,
          borderRadius: '50%',
          '&:hover': { backgroundColor: hoverColor },
        }}
      >
        <FaLinkedin size={30} color={iconColor} />
      </IconButton>
    </Box>
  );
};
