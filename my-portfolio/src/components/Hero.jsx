import { Grid, Typography, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 220, friction: 120 },
  });

  return (
    <section id="home" ref={ref}>
      <animated.div style={fadeIn}>
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '100vh', p: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Don K Joseph
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              MCA Graduate | Seeking Employment in IT
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              As a student, I aim to leverage my skills and knowledge to contribute to organizational success while embracing learning and growth.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Explore My Portfolio
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ background: '#3D550C', height: 400, borderRadius: 4, position: 'relative' }}>
              {/* Add your profile illustration here */}
            </div>
          </Grid>
        </Grid>
      </animated.div>
    </section>
  );
};
