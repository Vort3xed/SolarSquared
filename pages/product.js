/* eslint-disable */
import Head from 'next/head';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import Screen from '../components/screen/Screen';
import Renderer from '../components/3DRenderer/Renderer';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/3DRenderer/renderer.module.css';
import { Leads } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Product</title>
        <meta
          name="description"
          content="Leardership team of SolarSquared"
        />
        <meta
          name="keywords"
          content="Stem, POTD, Blair Sat, Magnet Sat, Biology, Biology Olympiad, Satellite"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <StyledTextV2Small text="Our Product" />
        </div>
        
        <div className={Styles.card}>
        <div className="z-10 w-full text-center h-2/3 mb-18 mt-4 overflow-hidden rounded-lg">
            <Renderer />
          </div>
        </div>


      </section>
    </Screen>
  );
}

export default Teams;
