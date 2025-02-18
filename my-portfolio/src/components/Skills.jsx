import { Grid, Card, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Code, DesignServices, Phone } from '@mui/icons-material';

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 220, friction: 120 },
  });

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'FIGMA', 'GIT', 'Selenium & Cucumber', 
    'C', 'C++', 'Java', 'Python'
  ];

  return (
    <section id="skills" ref={ref}>
      <animated.div style={fadeInUp}>
        <Grid container spacing={4} sx={{ p: 8, minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>Technical Skills</Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Code sx={{ fontSize: 80, color: 'secondary.main', mx: 4 }} />
            <DesignServices sx={{ fontSize: 80, color: 'secondary.main', mx: 4 }} />
            <Phone sx={{ fontSize: 80, color: 'secondary.main', mx: 4 }} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              {skills.map((skill) => (
                <Grid item xs={6} md={2} key={skill}>
                  <Card sx={{ p: 2, textAlign: 'center', background: 'rgba(42, 42, 42, 0.8)' }}>
                    <Typography variant="h6">{skill}</Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </animated.div>
    </section>
  );
};
