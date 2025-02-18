import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
import backgroundVideo from '../assets/background1.mp4';


const AnimatedBackground = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 220, friction: 120 },
  });

  // Scroll to the "home" section after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Use react-scroll to scroll to the "home" section
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Parallax
      strength={200}
      style={{ height: '100vh', position: 'relative' }} // Ensure the Parallax takes full viewport height
    >
      {/* Video background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <video
          style={{
            objectFit: 'cover', // Ensures the video covers the whole background
            width: '100%',
            height: '100%',
          }}
          autoPlay
          loop
          muted
        >
          <source
            src={backgroundVideo} // Use the imported video file
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content overlay */}
      <animated.div style={{ ...props, height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 style={{ color: '#fff', fontSize: '4rem', textAlign: 'center' }}>Welcome to My Portfolio</h1>
          <p style={{ color: '#fff', textAlign: 'center' }}>
            Scroll down to explore more.
          </p>
        </div>
      </animated.div>
    </Parallax>
  );
};

export default AnimatedBackground;
