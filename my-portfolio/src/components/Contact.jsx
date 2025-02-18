import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { styled } from '@mui/material/styles'; // Import styled utility

// Styled Section Container
const ContactSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.default,
  minHeight: '100vh',
}));

// Social Media Button Component
const SocialButton = ({ href, icon: Icon, label }) => (
  <Button
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    sx={{
      mx: 2,
      minWidth: 0,
      p: 1,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  >
    <Icon size={32} color="#B9B28A" />
  </Button>
);

// Reusable Form Component
const ContactForm = () => (
  <form>
    <TextField
      fullWidth
      label="Name"
      margin="normal"
      variant="outlined"
      required
      inputProps={{ 'aria-label': 'Name' }}
    />
    <TextField
      fullWidth
      label="Email"
      margin="normal"
      variant="outlined"
      type="email"
      required
      inputProps={{ 'aria-label': 'Email' }}
    />
    <TextField
      fullWidth
      label="Message"
      multiline
      rows={4}
      margin="normal"
      variant="outlined"
      required
      inputProps={{ 'aria-label': 'Message' }}
    />
    <Button
      variant="contained"
      color="secondary"
      size="large"
      sx={{ mt: 3 }}
      type="submit"
      aria-label="Send Message"
    >
      Send Message
    </Button>
  </form>
);

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <ContactSection id="contact" ref={ref}>
      {/* Fade-in Animation */}
      <Fade in={inView} timeout={1000}>
        <Grid container spacing={6} sx={{ p: 4 }}>
          {/* Header */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{ mb: 6, fontWeight: 700, color: '#504B38', textAlign: 'center' }}
            >
              Get In Touch
            </Typography>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{ mb: 4, color: '#504B38', textAlign: 'center' }}
            >
              Connect with me
            </Typography>
            <div>
              <SocialButton
                href="https://github.com/Donkjoseph"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/donkjoseph"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialButton
                href="https://twitter.com"
                icon={FaTwitter}
                label="Twitter"
              />
            </div>
          </Grid>
        </Grid>
      </Fade>
    </ContactSection>
  );
};