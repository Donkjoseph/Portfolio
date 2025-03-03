import React from 'react';
import { Grid, TextField, Button, Typography, useTheme, IconButton } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { styled } from '@mui/material/styles';

const ContactSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.default,
  minHeight: '100vh',
}));

const SocialButton = ({ href, icon: Icon, label }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const iconColor = isDarkMode ? '#ffffff' : '#000000'; // Dark mode: white, Light mode: black

  return (
    <IconButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      sx={{
        mx: 1,
        padding: 0, // Removes padding
        background: 'transparent', // Ensures no background color
        '&:hover': { background: 'transparent' }, // Ensures no hover background effect
      }}
    >
      <Icon size={32} color={iconColor} />
    </IconButton>
  );
};

const ContactForm = () => {
  return (
    <form>
      <TextField fullWidth label="Name" margin="normal" variant="outlined" required inputProps={{ 'aria-label': 'Name' }} />
      <TextField fullWidth label="Email" margin="normal" variant="outlined" type="email" required inputProps={{ 'aria-label': 'Email' }} />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" variant="outlined" required inputProps={{ 'aria-label': 'Message' }} />
      <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }} type="submit" aria-label="Send Message">
        Send Message
      </Button>
    </form>
  );
};

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#C9C7BA' : '#9D1F15';

  return (
    <ContactSection id="contact" ref={ref}>
      <Fade in={inView} timeout={1000}>
        <Grid container spacing={6} sx={{ p: 4 }}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: primaryColor,
                textAlign: 'center',
              }}
            >
              Get In Touch
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 4, color: primaryColor, textAlign: 'center' }}>
              Connect with me
            </Typography>
            <div>
              <SocialButton href="https://github.com/Donkjoseph" icon={FaGithub} label="GitHub" />
              <SocialButton href="https://www.linkedin.com/in/donkjoseph" icon={FaLinkedin} label="LinkedIn" />
              <SocialButton href="https://twitter.com" icon={FaTwitter} label="Twitter" />
            </div>
          </Grid>
        </Grid>
      </Fade>
    </ContactSection>
  );
};
