import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slide({ children, direction }) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const animationDirection = direction === 'left' ? 'slide-left' : 'slide-right';

  return (
    <div data-aos={animationDirection}>
      {children}
    </div>
  );
}

export default Slide;

