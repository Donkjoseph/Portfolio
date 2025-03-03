import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './theme/theme';
import { Navbar, Hero, Projects, Skills, Contact, ScrollTop } from './components';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { LoadingScreen } from './components/LoadingScreen'; // Import the loading screen component
import { SocialIcons } from './components/SocialIcons'; // Import SocialIcons component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [loadingProgress, setLoadingProgress] = useState(0); // Add loading progress state

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', newTheme);
  };

  // Simulate content loading with progress updates
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    let progressInterval;
    let loadTime = 2000; // Total loading time in ms
    let steps = 20; // Number of progress updates
    let stepTime = loadTime / steps;
    
    // Start at 0 and increment to simulate real loading
    progressInterval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        // Calculate next progress value
        const nextProgress = prevProgress + (100 / steps);
        
        // If we're at or near 100%, clear interval and finish loading
        if (nextProgress >= 99) {
          clearInterval(progressInterval);
          
          // Small delay before finishing to show 100%
          setTimeout(() => {
            setLoadingProgress(100);
            setIsLoading(false);
          }, 200);
          
          return 99;
        }
        
        return nextProgress;
      });
    }, stepTime);

    // Cleanup interval if component unmounts
    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
      {/* Show the loading screen until isLoading is false */}
      {isLoading ? (
        <LoadingScreen initialProgress={loadingProgress} /> // Pass the progress value
      ) : (
        <>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Hero />
          <ExperienceTimeline />
          <Projects />
          <Skills />
          <Contact />
          <ScrollTop />
          <SocialIcons /> {/* Render the SocialIcons component */}
        </>
      )}
    </ThemeProvider>
  );
}

export default App;