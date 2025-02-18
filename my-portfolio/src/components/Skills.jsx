import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTrail, animated } from 'react-spring';
import { styled } from '@mui/material/styles';
import { Code, DesignServices, Phone } from '@mui/icons-material';

// Styled Section Container
const SkillsSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: theme.palette.background.default,
}));

// Header container with icons
const HeaderContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

// Skill Card with advanced styling and hover effects
const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'linear-gradient(135deg, rgba(185,178,138,0.85) 0%, rgba(185,178,138,0.65) 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'default',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

// Reusable SkillCard component
const SkillItem = ({ skill }) => (
  <SkillCard elevation={4}>
    <Typography
      variant="h6"
      sx={{ color: '#504B38', fontWeight: 600 }}
      aria-label={`Skill: ${skill}`}
    >
      {skill}
    </Typography>
  </SkillCard>
);

export const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Define the list of skills
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'FIGMA',
    'GIT',
    'Selenium & Cucumber',
    'C',
    'C++',
    'Java',
    'Python',
  ];

  // Create a trail animation for the skills cards
  const trail = useTrail(skills.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 220, friction: 120 },
  });

  return (
    <SkillsSection id="skills" ref={ref}>
      {/* Header */}
      <HeaderContainer>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, color: '#504B38' }}
        >
          Technical Skills
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Code sx={{ fontSize: 60, color: 'secondary.main', mx: 1 }} />
          <DesignServices sx={{ fontSize: 60, color: 'secondary.main', mx: 1 }} />
          <Phone sx={{ fontSize: 60, color: 'secondary.main', mx: 1 }} />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ mt: 1, color: '#504B38' }}
        >
          Mastery & Expertise
        </Typography>
      </HeaderContainer>

      {/* Skill Cards */}
      <Grid container spacing={4} justifyContent="center">
        {trail.map((style, index) => (
          <Grid item xs={6} sm={4} md={3} key={skills[index]}>
            <animated.div style={style}>
              <SkillItem skill={skills[index]} />
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </SkillsSection>
  );
};