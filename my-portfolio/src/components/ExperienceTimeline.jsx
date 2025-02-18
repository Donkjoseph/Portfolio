import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import { useTrail, animated } from 'react-spring';
import { styled } from '@mui/material/styles';

// Section container with responsive padding and background
const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: theme.palette.background.paper,
}));

// Timeline container with relative positioning
const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4.5),
  paddingBottom: theme.spacing(4),
}));

// Vertical line connecting timeline dots
const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1.25),
  top: 0,
  bottom: 0,
  width: 2,
  backgroundColor: '#B9B28A',
  zIndex: -1,
}));

// Dot marker for each timeline item
const DotMarker = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: '#B9B28A',
  border: `4px solid #504B38`,
}));

// Styled Paper for experience details
const ExperiencePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  background: 'rgba(185, 178, 138, 0.8)',
  borderRadius: theme.shape.borderRadius,
}));

// Reusable TimelineItem component
const TimelineItem = ({ year, title, company, description }) => (
  <TimelineContainer>
    <TimelineLine />
    <DotMarker />
    <ExperiencePaper elevation={3}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: '#504B38', mb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 500, color: '#EBE5C2', mb: 1 }}
      >
        {company} &bull; {year}
      </Typography>
      <Typography variant="body2" sx={{ color: '#504B38' }}>
        {description}
      </Typography>
    </ExperiencePaper>
  </TimelineContainer>
);

export const ExperienceTimeline = () => {
  const experienceData = [
    {
      year: '2021',
      title: 'Python Developer',
      company: 'Scottech, Toledo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiam eu turpis molestie, dictum et sit mattis felis. Sed dignissim mi eu fringilla ac massa. Duis consequat pellentesque nisl, euismod et felis. Nam sollicitudin lectus, sit amet elementum felis laoreet vitae. Maecenas egestas velit sit amet posuere tempor.',
    },
    {
      year: '2021',
      title: 'Python Developer',
      company: 'AutoGrid Systems, Naperville',
      description:
        'Lorem ipsum dolor sit amet, consectetur adi nisl, euismod et felis. Nam sollicitudin lectus, sit amet elementum felis laoreet vitae. Maecenas egestas velit sit amet posuere tempor.',
    },
    // Add more experiences as needed
  ];

  const trail = useTrail(experienceData.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
  });

  return (
    <Section id="experience">
      <Grid container spacing={4}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{ mb: 4, fontWeight: 700, color: '#504B38', textAlign: 'center' }}
          >
            Experience
          </Typography>
        </Grid>

        {/* Timeline Items */}
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