import { useEffect, useRef } from 'react';
import Image from 'next/image';
import SponsorsData from '../../lib/data/SponsorsData';
import Styles from './sponsors.module.css';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';

function Sponsors() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section ref={ref} className="container-70 my-16 py-16 fadeonscroll">
      <div className="absolute opacity-100 transform -translate-x-1/4 -translate-y-1/4 pointer-events-none" aria-hidden="true">
        <Image
          className={Styles.blobImage}
          height="10000%"
          width="10000%"
          src="/betterblueblob.png"
          alt="test"
        />
      </div>
      <div className='relative z-10'>
        <StyledTextV2Small text="Our Sponsors" />
      </div>
      <div className={Styles.sponsorsContainer}>
        {SponsorsData.map((src, index) => {
          return (
            <div className={Styles.images} key={String(index)}>
              <div className="z-20">
                <img width="100%" height="100%" src={src} alt="Sponsors" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sponsors;
