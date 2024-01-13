/* eslint-disable */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Styles from './tech-stack.module.css';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';

function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Element1 />
        <Element2 />
        {/* <Element3 /> */}
        <Element4 />
      </div>
    </section>
  );
}

export default TechStack;

function Element1() {
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

    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        {/* <h2 className={`${Styles.header} `}>Explore.</h2> */}
        <div className={`${Styles.header} `}>
          <StyledTextV2Small text="The Issue" />
        </div>
      </div>
      <div className={`${Styles.col} ${Styles.col60} `}>
          <div className={Styles.headDescription}>
            Solar panels are a good start. But they're hard to produce, and lack efficiency.
          </div>
        <div className={Styles.contentContainer}>
            <div className={`${Styles.content}`} data-aos="zoom-y-out" data-aos-delay="300">
              <h2>Fail Point #1:</h2>
              <p>
                Solar Panels use silicon semiconductors, which is a high demand resource that significantly contributes to the high cost of solar panels.
              </p>
            </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Fail Point #2:</h2>
            <p>
              Solar panels lack versatility and are not as efficient as they could be.
            </p>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Fail Point #3:</h2>
            <p>
              Since silicon requires a very high temperature to be refined, the carbon footprint of normal solar panels is very high.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function Element2() {
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
    <div>
        <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
        <div className={`${Styles.col} ${Styles.col60}`}>
          {/* <SlidingComponent direction="right"> */}
            <div className={Styles.headDescription}>
              The second subteam of the satellite project is responsible for the design and implementation of the instrument that records airglow and atmospheric data.
            </div>
          {/* </SlidingComponent> */}
          <div className={Styles.contentContainer}>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
              <h2>Simulate.</h2>
              <p>
                Run simulations to determine the best way to collect data.
              </p>
            </div>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
              <h2>Solve.</h2>
              <p>
                Use advanced mathematics to interpret the data collected.
              </p>
            </div>
          </div>
        </div>
        <div className={`${Styles.col} ${Styles.col40}`}>
          <div className={`${Styles.header} `}>
            <StyledTextV2Small text="Our Solution" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Element4() {
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

    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        {/* <h2 className={`${Styles.header} `}>Explore.</h2> */}
        <div className={`${Styles.header} `}>
          <StyledTextV2Small text="Engineering Team" />
        </div>
      </div>
      <div className={`${Styles.col} ${Styles.col60} `}>
        {/* <SlidingComponent direction="left"> */}
          <div className={Styles.headDescription}>
            Assemble parts of the satellite and use CAD software to design the satellite.
          </div>
        {/* </SlidingComponent> */}

        <div className={Styles.contentContainer}>
          <div className={Styles.newContent}>
            <div className={`${Styles.content}`}>
              {/* <GridImage
              key="1"
              src="/gallery/gallery1.jpg"
              mobileSrc="/gallery/gallery1.jpg"
              title=""
              id="1"
            /> */}
              <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
            </div>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Learn.</h2>
            <p>
              Develop a radio frequency instrument that can be used to communicate with the satellite.
            </p>
          </div>

          <div className="absolute opacity-100 transform -translate-x-1/4 translate-y-1/4 pointer-events-none" aria-hidden="true">
            <Image
              className={Styles.blobImage}
              height="10000%"
              width="10000%"
              // src="/blob.png"
              src="/betterblueblob.png"
              alt="test"
            />
          </div>
          <div className='relative z-10'>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
              <h2>Test.</h2>
              <p>
                Run low orbit tests to ensure the instrument is working properly.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
function Element3() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Element 3</h2>
        <img className={`${Styles.headerImage} mt-2 `} src="/gallery/gallery1.jpg" alt="compteam" />
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Description
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Item 1</h2>
            <p>
              Description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
