import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme/theme';
import { Navbar, Hero, Projects, Skills, Contact, ScrollTop } from './components';
// import AnimatedBackground from './components/AnimatedBackground';
import { ExperienceTimeline } from './components/ExperienceTimeline';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* <AnimatedBackground /> */}
      <Hero />
      <ExperienceTimeline />
      <Projects />
      <Skills />
      <Contact />
      <ScrollTop />
    </ThemeProvider>
  );
}

export default App;
