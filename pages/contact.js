import Head from 'next/head';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import Screen from '../components/screen/Screen';
import ContactForm from '../components/ContactForm/ContactForm';



function ContactUs() {
  return (
    <Screen>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact Information of SolarSquared"
        />
        <meta
          name="keywords"
          content="Stem, POTD, Blair Sat, Magnet Sat, Biology, Biology Olympiad, Satellite"
        />
      </Head>
      <section className="container-70 overflow-hidden">
        <div className=''>
          <div className="mt-28 mb-12 pt-10 pb-8 sm:mt-20 sm:mb-10">
            <StyledTextV2Small text="Interested? Let's talk!"/>
            <ContactForm />

          </div>
        </div>
      </section>
    </Screen>
  );
}
export default ContactUs;
