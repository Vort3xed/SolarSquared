import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import BasicGridImages from '@/components/gridGallery/BasicGridImages';
import Image from 'next/image';
import Screen from '../components/screen/Screen';
import styles from './blob.module.css'

function About() {
  const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
      if (window.innerWidth > 1300) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
  
      const updateMedia = () => {
        if (window.innerWidth > 1300) {
          setDesktop(true);
        } else {
          setDesktop(false);
        }
      };
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
    }, []);
  
  return (
    <Screen>
      
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="SolarSquared is an organization that creates educational content to help train for the Biology Olympiad and other under-represented olympiads. 
          We also let students gain research experience by letting them work on our big projects, such as the satellite project."
        />
        <meta
          name="keywords"
          content="Stem, POTD, Blair Sat, Magnet Sat, Biology, Biology Olympiad, Satellite"
        />
      </Head>
      <section className="container-70 pt-28 md:pt-16 sm:pt-12">
        <div className="mt-12 mb-6 sm:mt-8 sm:mb-4">
          <StyledTextV2Small text="About Us"/>
          <div className="mt-6">
            <div className="absolute opacity-70 transform -translate-x-1/4 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                    <Image 
                    className={styles.blobImage}
                    height="10000%"
                    width="10000%"
                    src="/betterblueblob.png"
                    alt="test"
                    />
                </div>
            <div className='relative z-10'>
            <p className="text-lg">
              Stem-POTD is a program to overshadow the satellite project taking place at Poolesville High School.
            </p>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <StyledTextV2Small text="Operation"/>
          <div className="mt-6">
            <p className="text-lg">
              We hold meetings every friday either online or at the Rockville Library. 
            </p>
          </div>
        </div>
        { isDesktop ? (
          <div className="absolute opacity-70 transform translate-x-1/4 -translate-y-1/4 pointer-events-none" aria-hidden="true">
              <Image 
              className={styles.blobImage}
              height="10000%"
              width="10000%"
              src="/betterblueblob.png"
              alt="test"
              />
          </div>
          ) : (
            <div/>
          )}
          
            <div className='relative z-10'>
              <BasicGridImages />
            </div>
      </section>
    </Screen>
  );
}

export default About;
