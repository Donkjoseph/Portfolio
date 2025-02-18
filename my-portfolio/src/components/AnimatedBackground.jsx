import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
import backgroundVideo from '../assets/background1.mp4';

const AnimatedBackground = () => {
  // Fade and slide in the overlay text
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
  });

  // Scroll to the "home" section after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Parallax strength={200} style={{ height: '100vh', position: 'relative' }}>
      {/* Video background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <video
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated overlay */}
      <animated.div
        style={{
          ...props,
          height: '100vh',
          backgroundColor: 'rgba(80,75,56,0.5)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <h1 style={{ color: '#504B38', fontSize: '4rem', textAlign: 'center' }}>
            Welcome to My Portfolio
          </h1>
          <p style={{ color: '#504B38', textAlign: 'center' }}>
            Scroll down to explore more.
          </p>
        </div>
      </animated.div>
    </Parallax>
  );
};

export default AnimatedBackground;
