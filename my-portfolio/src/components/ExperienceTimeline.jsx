import React from 'react';
import { Grid, Typography, Box, Paper, useTheme } from '@mui/material';
import { useTrail, animated } from 'react-spring';
import { styled } from '@mui/material/styles';

const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.paper,
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4.5),
  paddingBottom: theme.spacing(4),
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1.25),
  top: 0,
  bottom: 0,
  width: 2,
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  zIndex: -1,
}));

const DotMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  border: `4px solid ${theme.palette.mode === 'dark' ? '#C9C7BA' : '#9D1F15'}`,
}));

// **Updated Background and Text Colors**
const ExperiencePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  backgroundColor: theme.palette.mode === 'dark' ? '#C9C7BA' : '#9D1F15', // Background Color Change
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.mode === 'dark' ? '#29292B' : '#FBF7BA', // Text Color Change
}));

const TimelineItem = ({ year, title, company, description }) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? '#29292B' : '#FBF7BA'; // Updated text color

  return (
    <TimelineContainer>
      <TimelineLine />
      <DotMarker />
      <ExperiencePaper elevation={3}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: textColor, mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 500, color: textColor, mb: 1 }}>
          {company} &bull; {year}
        </Typography>
        <Typography variant="body2" sx={{ color: textColor }}>
          {description}
        </Typography>
      </ExperiencePaper>
    </TimelineContainer>
  );
};

export const ExperienceTimeline = () => {
  const experienceData = [
    {
      year: '2024',
      title: 'Python Developer',
      company: 'DataPy',
      description:
        'Developed and maintained Python-based solutions, collaborating with teams to implement efficient and innovative features.',
    },
    {
      year: '2024 - 2025',
      title: 'Full Stack Developer',
      company: 'Comstream Technologies PVT',
      description:
        'Delivered end-to-end web applications by integrating front-end and back-end technologies, ensuring high performance and seamless user experiences.',
    },
  ];

  const trail = useTrail(experienceData.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
  });

  return (
    <Section id="experience">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: (theme) => (theme.palette.mode === 'dark' ? '#C9C7BA' : '#9D1F15'),
              textAlign: 'center',
            }}
          >
            Experience
          </Typography>
        </Grid>
        {experienceData.map((experience, index) => (
          <Grid item xs={12} key={index}>
            <animated.div style={trail[index]}>
              <TimelineItem {...experience} />
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};
