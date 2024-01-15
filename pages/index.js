/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import BasicHero from '@/components/basic-hero/BasicHero';
import TechStackV2 from '@/components/TechStackV2/TechStackV2';
import BigReveal from '@/components/BigReveal/BigReveal';
import AnimatedScrollButton from '@/components/AnimatedScrollButton';
import Sponsors from '../components/sponsors/Sponsors';
import Screen from '../components/screen/Screen';
import HomeAbout from '../components/homeAbout/HomeAbout';
import BetterHero from '@/components/BetterHero/BetterHero';
import VideoHero from '@/components/VideoHero/VideoHero';
import Video from '@/components/video/Video';
import ButtonV2 from '@/components/buttonv2/ButtonV2';
import VerticalSlider from '@/components/SlidingComponentVert/Slider';
import StyledTextSuperSmallV2 from '@/components/StyledTextSuperSmallV2/StyledTextSuperSmallV2';

export default function Home() {
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
        <title>SolarSquared</title>
        <meta
          name="description"
          content="SolarSquared is an corporation that focuses on optimizing solar panels to reduce the cost of production and reduce the carbon footprint of the current solar panel manufacturing process."
        />
        <meta
          name="keywords"
          content="Stem, Solar, Panel, Semiconductor, Energy, Green Energy, Renewable Energy, Efficiency"
        />
      </Head>

      <Video />
      
      <div>
        &nbsp;
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 mb-8 mt-2" data-aos="zoom-y-out" data-aos-delay="300">Solving the world&apos;s energy crisis, one crystal at a time.</p>
          <div className="max-w-xs mx-auto sm:justify-center" data-aos="zoom-y-out" data-aos-delay="600">
            <a href='/about'>
              <ButtonV2>
                <span className="flex items-center"> About Us </span>
              </ButtonV2>
            </a>
            &nbsp;
            <a href='/product'>
              <ButtonV2>
                <span className="flex items-center"> Product </span>
              </ButtonV2>
            </a>
          </div>
        </div>
      </div>
      {/* <BetterHero /> */}
      <HomeAbout />
      <TechStackV2 />
      {/* <Sponsors /> */}
      <VideoHero />

    </Screen>
  );
}
