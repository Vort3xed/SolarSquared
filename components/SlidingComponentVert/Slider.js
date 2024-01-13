import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function VerticalSlider({ children, direction }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const animationDirection = direction === 'up' ? 'fade-up' : 'fade-down';

  return (
    <div data-aos={animationDirection}>
      {children}
    </div>
  );
}

export default VerticalSlider;

