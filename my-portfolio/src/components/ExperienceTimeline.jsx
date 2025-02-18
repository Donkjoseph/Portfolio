import { Grid, Typography, Box, Paper } from '@mui/material';
import { useSpring, animated } from 'react-spring';

// Sample experience data
const experienceData = [
  {
    year: '2021',
    title: 'Senior Python Developer',
    company: 'Scottech, Toledo',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiam eu turpis molestie, dictum et sit mattis felis. Sed dignissim mi eu fringilla ac massa. Duis consequat pellentesque nisl, euismod et felis. Nam sollicitudin lectus, sit amet elementum felis laoreet vitae. Maecenas egestas velit sit amet posuere tempor.`,
  },
  {
    year: '2021',
    title: 'Python Developer',
    company: 'AutoGrid Systems, Naperville',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiam eu turpis molestie, dictum et sit mattis felis. Sed dignissim mi eu fringilla ac massa. Duis consequat pellentesque nisl, euismod et felis. Nam sollicitudin lectus, sit amet elementum felis laoreet vitae. Maecenas egestas velit sit amet posuere tempor.`,
  },
  // Add more experiences as needed
];

export const ExperienceTimeline = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  return (
    <section>
      <animated.div style={fadeIn}>
        <Grid container spacing={4} sx={{ p: 4 }}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
              Experience
            </Typography>
          </Grid>
          {experienceData.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ position: 'relative', paddingLeft: '35px', paddingBottom: '30px' }}>
                {/* Timeline Line */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '10px',
                    top: '0',
                    height: '100%',
                    borderLeft: '2px solid #81B622',
                    zIndex: -1,
                  }}
                />

                {/* Dot marker */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#FF9F00',
                    border: '4px solid #1A1A1A',
                  }}
                />

                {/* Experience details */}
                <Paper sx={{ padding: '20px', background: 'rgba(42, 42, 42, 0.8)', borderRadius: '8px' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: 'secondary.main' }}>
                    {experience.company}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {experience.description}
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </animated.div>
    </section>
  );
};
