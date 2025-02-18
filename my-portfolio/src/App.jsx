import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme/theme';
import { Navbar, Hero, Projects, Skills, Contact, ScrollTop } from './components';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LoadingScreen } from './components/LoadingScreen'; // Import the loading screen component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', newTheme);
  };

  // Simulate content loading
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    // Simulate loading (e.g., data fetching) for 2 seconds
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
      {/* Show the loading screen until isLoading is false */}
      {isLoading ? (
        <LoadingScreen /> // Show loading screen while content is loading
      ) : (
        <>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Hero />
          <ExperienceTimeline />
          <Projects />
          <Skills />
          <Contact />
          <ScrollTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
