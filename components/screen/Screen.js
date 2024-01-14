import { useEffect } from 'react';
import Footer from '../footer/Footer';
import SocialsBar from '../socialsbar/SocialsBar';
import Navbar2 from '../navbar2/Navbar2';

function Screen({ children }) {
  useEffect(() => {
    const callback = (e) => {
      document.querySelector('.cursor').style.top = `${e.clientY}px`;
      document.querySelector('.cursor').style.left = `${e.clientX}px`;
    };
    document
      .getElementById('overlayScreen')
      .addEventListener('mousemove', callback);
    return () =>
      document
        .getElementById('overlayScreen')
        .removeEventListener('mousemove', callback);
  }, []);

  return (
    <main id="overlayScreen" className="h-full relative">
      <div className="cursor" />
      <Navbar2 />
      {/* <SocialsBar /> */}
      {children}
      <Footer />
    </main>
  );
}

export default Screen;
