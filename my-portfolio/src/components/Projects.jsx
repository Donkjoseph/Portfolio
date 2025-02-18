import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';  // If you are using react-router, otherwise use 'a' tag for normal links

// Import images from the assets folder
import musicSurveyImage from '../assets/netflix-clone.png';
import ecoHiveImage from '../assets/ecohive.png';

export const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const fadeInUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 220, friction: 120 },
  });

  const projects = [
    {
      id: 1,
      title: 'CineStream',
      description: 'A React app that auto-updates top movies from an API in a Netflix-style UI',
      tech: 'React | HTML | CSS | Figma | API',
      image: musicSurveyImage,
      link: 'https://netflix-clone-9083b.web.app/'  // Link to the project
    },
    {
      id: 2,
      title: 'Eco Hive',
      description: 'Eco-friendly marketplace for browsing, purchasing and selling products.',
      tech: 'HTML | CSS | JS | Python | Django | Figma',
      image: ecoHiveImage,
      link: 'https://ecohive.pythonanywhere.com/'  // Link to the project
    },
    {
      id: 3,
      title: 'Eco Hive2',
      description: 'Eco-friendly marketplace for browsing and purchasing products with image processing for product quality.',
      tech: 'HTML | CSS | JS | Python | Django',
      link: 'https://example.com/eco-hive2'  // Link to the project
    }
  ];

  return (
    <section id="projects" ref={ref}>
      <animated.div style={fadeInUp}>
        <Grid container spacing={4} sx={{ p: 8 }}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>Featured Projects</Typography>
          </Grid>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Card sx={{ height: 400, background: 'rgba(42, 42, 42, 0.8)', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                {/* Use the imported image for the project */}
                <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{project.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{project.tech}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  {/* Button that links to the project URL */}
                  <Button variant="outlined" color="secondary" component="a" href={project.link} target="_blank" rel="noopener noreferrer">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </animated.div>
    </section>
  );
};
