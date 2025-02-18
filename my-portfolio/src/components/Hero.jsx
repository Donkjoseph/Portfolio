import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/material/styles';

// Styled Section Container
const Section = styled('section')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 2),
  background: theme.palette.background.default,
}));

// Content Wrapper with fade-in animation
const ContentWrapper = styled(animated.div)(({ theme }) => ({
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
}));

// Illustration Box with responsive design
const IllustrationBox = styled(Box)(({ theme }) => ({
  background: '#EBE5C2',
  height: 400,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    marginTop: theme.spacing(4),
  },
}));

// Reusable Hero Content Component
const HeroContent = () => (
  <>
    <Typography
      variant="h2"
      gutterBottom
      sx={{ fontWeight: 700, color: '#504B38' }}
    >
      Don K Joseph
    </Typography>
    <Typography
      variant="h5"
      sx={{ mb: 4, color: '#504B38', fontWeight: 500 }}
    >
      MCA Graduate | Seeking Employment in IT
    </Typography>
    <Typography
      variant="h6"
      sx={{ mb: 4, color: '#504B38' }}
    >
      As a student, I aim to leverage my skills and knowledge to contribute to
      organizational success while embracing learning and growth.
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      size="large"
      aria-label="Explore My Portfolio"
    >
      Explore My Portfolio
    </Button>
  </>
);

export const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Fade-in animation for the hero section
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 120 },
  });

  return (
    <Section id="home" ref={ref}>
      {/* Content Wrapper with Animation */}
      <ContentWrapper style={fadeIn}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Column: Text Content */}
          <Grid item xs={12} md={6}>
            <HeroContent />
          </Grid>

          {/* Right Column: Illustration */}
          <Grid item xs={12} md={6}>
            <IllustrationBox>
              {/* Insert your profile illustration or image here */}
            </IllustrationBox>
          </Grid>
        </Grid>
      </ContentWrapper>
    </Section>
  );
};