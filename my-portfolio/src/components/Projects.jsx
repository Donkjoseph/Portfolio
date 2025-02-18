import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { styled } from '@mui/material/styles';
import musicSurveyImage from '../assets/netflix-clone.png';
import ecoHiveImage from '../assets/ecohive.png';

// Section container with responsive padding and background
const Section = styled('section')(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: theme.palette.background.default,
}));

// Header for the projects section
const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

// Styled Card with a subtle shadow, hover lift, and border-radius
const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  background: 'rgba(185, 178, 138, 0.85)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[6],
  },
}));

// Overlay to give images a stylish gradient effect
const GradientOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
}));

// Styled CardMedia container for better image handling
const MediaWrapper = styled(Box)({
  position: 'relative',
  height: 220,
  overflow: 'hidden',
});

// Styled Button with custom margin and colors
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  borderColor: '#504B38',
  color: '#504B38',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: '#504B38',
    color: '#EBE5C2',
    borderColor: '#504B38',
  },
}));

// Reusable ProjectCard component
const ProjectCard = ({ title, description, tech, image, link }) => (
  <StyledCard>
    {image && (
      <MediaWrapper>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={`${title} project`}
          sx={{ objectFit: 'cover' }}
        />
        <GradientOverlay />
      </MediaWrapper>
    )}
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ color: '#504B38' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: '#EBE5C2' }}>
        {tech}
      </Typography>
      <Typography variant="body2" sx={{ color: '#504B38' }}>
        {description}
      </Typography>
      <Box sx={{ mt: 3 }}>
        {link && (
          <StyledButton
            variant="outlined"
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
          >
            Go to Website
          </StyledButton>
        )}
      </Box>
    </CardContent>
  </StyledCard>
);

export const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Entrance animation for the section
  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 220, friction: 120 },
  });

  const projects = [
    {
      id: 1,
      title: 'CineStream',
      description:
        'A React app that auto-updates top movies from an API in a Netflix-style UI.',
      tech: 'React | HTML | CSS | Figma | API',
      image: musicSurveyImage,
      link: 'https://netflix-clone-9083b.web.app/',
    },
    {
      id: 2,
      title: 'Eco Hive',
      description:
        'Eco-friendly marketplace for browsing, purchasing and selling products.',
      tech: 'HTML | CSS | JS | Python | Django | Figma',
      image: ecoHiveImage,
      link: 'https://ecohive.pythonanywhere.com/',
    },
    {
      id: 3,
      title: 'Eco Hive2',
      description:
        'Eco-friendly marketplace for browsing and purchasing products with image processing for product quality.',
      tech: 'HTML | CSS | JS | Python | Django',
      // No image provided, so CardMedia will be skipped
      link: 'https://example.com/eco-hive2',
    },
  ];

  return (
    <Section id="projects" ref={ref}>
      <animated.div style={fadeInUp}>
        <Header>
          <Typography
            variant="h3"
            sx={{ mb: 2, fontWeight: 700, color: '#504B38' }}
          >
            Featured Projects
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#504B38' }}>
            Explore a selection of my latest work
          </Typography>
        </Header>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </animated.div>
    </Section>
  );
};