import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './better-hero.module.css'
import ButtonV2 from '../buttonv2/ButtonV2'
import SlidingComponent from '../SlidingComponent/Slider'
import VerticalSlider from '../SlidingComponentVert/Slider'
import StyledTextV2Small from '../StyledTextV2/StyledTextV2'
import StyledTextSuperSmallV2 from '../StyledTextSuperSmallV2/StyledTextSuperSmallV2'

export default function BetterHero() {
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
                
                {/* { isDesktop ? (
                    <div>
                        <div className="absolute opacity-30 transform translate-x-1/4 -translate-y-1/2 pointer-events-none" aria-hidden="true">
                            <Image 
                            className={styles.blobImage}
                            height="10000%"
                            width="10000%"
                            src="/betterblueblob.png"
                            alt="test"
                            />
                        </div>
                        
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Poolesville&apos;s Satellite Program</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="600">
                                <ButtonV2>
                                    <span className="flex items-center"> About Us </span>
                                </ButtonV2>
                                <div className='p-2 items-center'>
                                    <ButtonV2>
                                        <span className="flex items-center"> Join </span>
                                    </ButtonV2>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : ( */}
                        <div className='relative z-10'> 
                            <VerticalSlider direction="down">
                                <StyledTextSuperSmallV2 text="SolarSquared" />
                            </VerticalSlider>
                            {/* <StyledTextSuperSmallV2 text="SolarSquared" data-aos="fade-down" data-aos-delay="300"/> */}
                            <div className="max-w-3xl mx-auto">
                                <p className="text-xl text-gray-600 mb-8 mt-2" data-aos="zoom-y-out" data-aos-delay="300">Solving the world&apos;s energy crisis, one crystal at a time.</p>
                                <div className="max-w-xs mx-auto sm:justify-center" data-aos="zoom-y-out" data-aos-delay="600">
                                    <ButtonV2>
                                        <span className="flex items-center"> About Us </span>
                                    </ButtonV2>
                                    &nbsp;
                                    <ButtonV2>
                                            <span className="flex items-center"> Join </span>
                                    </ButtonV2>
                                </div>
                            </div>
                        </div>
                    {/* )} */}
                
            </div>

        </div>
        
        <SlidingComponent direction="right">
                    <div className="flex flex-col items-center justify-center" />
        </SlidingComponent>


    </div>
    )
  }