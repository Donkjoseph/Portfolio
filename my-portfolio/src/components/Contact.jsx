import { Grid, TextField, Button, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Fade } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" ref={ref}>
      <Fade in={inView} timeout={1000}>
        <Grid container spacing={6} sx={{ p: 8, minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{ mb: 6, fontWeight: 700 }}>Get In Touch</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <form>
              <TextField fullWidth label="Name" margin="normal" variant="outlined" />
              <TextField fullWidth label="Email" margin="normal" variant="outlined" />
              <TextField fullWidth label="Message" multiline rows={4} margin="normal" variant="outlined" />
              <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 4 }}>Connect with me</Typography>
            <div>
              <Button href="https://github.com/Donkjoseph" target="_blank" sx={{ mx: 2 }}>
                <FaGithub size={32} color="#81B622" />
              </Button>
              <Button href="www.linkedin.com/in/donkjoseph" target="_blank" sx={{ mx: 2 }}>
                <FaLinkedin size={32} color="#81B622" />
              </Button>
              <Button href="https://twitter.com" target="_blank" sx={{ mx: 2 }}>
                <FaTwitter size={32} color="#81B622" />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Fade>
    </section>
  );
};
