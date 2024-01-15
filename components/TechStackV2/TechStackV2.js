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
          Solar panels are a good start. But they're hard to produce and lack efficiency.
        </div>
        <div className={Styles.contentContainer}>
          <div className={`${Styles.content}`} data-aos="zoom-y-out" data-aos-delay="300">
            <h2>Fail Point #1:</h2>
            <p>
              Solar panels use silicon semiconductors, which are a highly demanded resource that significantly contribute to the cost of solar panels.
            </p>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Fail Point #2:</h2>
            <p>
              Solar panels lack versatility because of their size, weight, and opacity.
            </p>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Fail Point #3:</h2>
            <p>
              The carbon footprint of producing traditional solar panels is high due to the energy expenditure of reaching high temperatures during refinement.
            </p>
          </div>
          <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
            <h2>Fail Point #4:</h2>
            <p>
              Industry standard solar panels are not efficient and require a large surface area to produce a significant amount of power.
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
            Scrap the silicon, drop the weight, and raise the efficiency. Congratulations, you have our product.
          </div>
          {/* </SlidingComponent> */}
          <div className={Styles.contentContainer}>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
              <h2>Price</h2>
              <p>
                Silicon requires temperatures around 2000 degrees celsius to be refined. Our product uses perovskite crystals, which can be refined at only 80 degrees celsius.
              </p>
            </div>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
              <h2>Power</h2>
              <p>
                Perovskite crystals are 250% more efficient than silicon semiconductors. You're getting more bang for your buck.
              </p>
            </div>
            <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
              <h2>Payload</h2>
              <p>
                Regular solar panels are heavy and bulky. Our product, sitting at only 30 microns thick, is significantly lighter than the industry standard.
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
          <StyledTextV2Small text="Our Impact" />
        </div>
      </div>
      <div className={`${Styles.col} ${Styles.col60} `}>
        <div className={Styles.headDescription}>
          Not only is this good for the economy, it's also good for the environment.
        </div>

        <div className={Styles.contentContainer}>
            
              <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="500">
                <h2>Footprint</h2>
                <p>
                  Our novel semiconductor manufacturing process has a carbon footprint 22% lower than the industry standard.
                </p>
              </div>


              <div className={Styles.content} data-aos="zoom-y-out" data-aos-delay="600">
                <h2>Power</h2>
                <p>
                  Our panels increase power production by 20%. Higher efficiency mean less panel needed to reach the same power output.
                </p>
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
