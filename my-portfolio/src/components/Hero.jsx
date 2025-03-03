import React from 'react';
import { Grid, Typography, Button, Box, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/material/styles';
import ThreeBackground from '../components/ThreeBackground';
import logo from '../assets/logo_dkj.png';

const Section = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 2),
  position: 'relative',
  overflow: 'hidden',
}));

const ContentWrapper = styled(animated.div)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
}));

const IllustrationBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#C9C7BA' : '#9D1F15',
  height: 400,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(4) },
}));

const HeroContent = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const primaryColor = isDarkMode ? '#C9C7BA' : '#9D1F15';
  const secondaryColor = isDarkMode ? '#ffffff' : '#000000';

  return (
    <>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: primaryColor }}>
        Don K Joseph
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, color: primaryColor, fontWeight: 500 }}>
        MCA Graduate | Full Stack Developer
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, color: secondaryColor }}>
        Skilled in both front-end and back-end development, I design and implement seamless, scalable web solutions.
        Eager to leverage my expertise in modern frameworks and technologies, I’m currently open to new opportunities and collaborations.
      </Typography>
      <Button variant="contained" color="secondary" size="large" aria-label="Download Portfolio" href="/assets/Resume.pdf" download="Don_K_Joseph_Resume.pdf">
        Download Portfolio
      </Button>
    </>
  );
};

export const Hero = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 120 },
  });

  return (
    <>
      <ThreeBackground isDarkMode={theme.palette.mode === 'dark'} />
      <Section id="home" ref={ref}>
        <ContentWrapper style={fadeIn}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <HeroContent />
            </Grid>
            <Grid item xs={12} md={6}>
              <IllustrationBox>
                <img src={logo} alt="Profile Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
              </IllustrationBox>
            </Grid>
          </Grid>
        </ContentWrapper>
      </Section>
    </>
  );
};
