/* eslint-disable jsx-a11y/media-has-caption */
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
      {/* <BasicHero /> */}
      <BetterHero />
      <HomeAbout />
      <TechStackV2 />
      <Sponsors />
    </Screen>
  );
}
