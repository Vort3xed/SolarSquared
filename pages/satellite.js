import Head from 'next/head';
import AdvFeatures from '@/components/AdvancedFeatures/advancedfeatures';
import Screen from '../components/screen/Screen';

function Satellite() {
  return (
    <Screen>
      <Head>
        <title>Satellite Project</title>
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
      <AdvFeatures/>
    </Screen>
  );
}

export default Satellite;
