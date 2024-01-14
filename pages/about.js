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
          <StyledTextV2Small text="About Us" />
          <div className="mt-6">

            <p className="text-lg">
            Our team consists of 3 students from the Science, Math, Computer Science magnet program at Poolesville High School. Each of us still hold unique skill sets, with some being perfected outside the realm of the classroom:
            
            </p>
            <ul>
              <li className="text-lg">Eric has extensive experience in the fields of business and marketing through his qualification and involvement in interdisciplinary business competitions such as International DECA</li>
              <li className="text-lg">Agneya has significant experience in computer science and research, notably through his involvement in programming machine learning models and web applications</li>
              <li className="text-lg">Veronica has vast experience in research and project management through her leadership in multiple STEM-based clubs and research projects such as by leading her school’s portion of a county-wide high school satellite initiative</li>
            </ul>

            <p className="text-lg pt-3">With family in heavily polluted areas (India and China), we could not bear to see the degradation of our world, thus motivating us to make an impact on the current climate situation.</p>
          </div>

        </div>
        {/* <div className="mt-20 mb-6 sm:mt-8 sm:mb-4">
          <StyledTextV2Small text="Operation" />
          <div className="mt-6">
            <p className="text-lg">
              We hold meetings every friday either online or at the Rockville Library.
            </p>
          </div>
        </div> */}
        

        {/* <div className='relative z-10'>
          <BasicGridImages />
        </div> */}
      </section>

    </Screen>
  );
}

export default About;
