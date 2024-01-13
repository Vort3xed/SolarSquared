/* eslint-disable */
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ButtonV2 from '../buttonv2/ButtonV2';
import styles from './home-about.module.css';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';

function HomeAbout() {
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
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      {/* <div className="absolute opacity-70 transform -translate-x-1/4 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                    <Image 
                    className={styles.blobImage}
                    height="10000%"
                    width="10000%"
                    // src="/blob.png"
                    src="/goldblob.png"
                    alt="test"
                    />
                    
                </div> */}
                
                
    <div className='z-10'>
      <div className='relative z-20'>
      {/* <BottomGlitter text="About Us" /> */}
      <StyledTextV2Small text="About Us"/>
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
          We are AVE, a company with a vision to solve the current climate crisis with innovative solutions. 
        </p>
      </div>
      
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <ButtonV2 data-aos="zoom-y-out" data-aos-delay="300">
            <span className="z-50 block">View our Product</span>
          </ButtonV2>
        </a>
      </Link>
      </div>
      </div>
    </section>
  );
}

export default HomeAbout;
