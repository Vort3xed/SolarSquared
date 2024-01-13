import Head from 'next/head';
import Link from 'next/link';
import StyledTextV2Small from '@/components/StyledTextV2Small/StyledTextV2';
import Screen from '../components/screen/Screen';


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
            <div className='mt-3'>
              <Link href="https://www.instagram.com/stempotd/">
                <a className="py-1 block text-lg my-1 font-extralight"><p className="text-3xl sm:text-2xl">https://www.instagram.com/stempotd/</p></a>
              </Link>
              <Link href="https://github.com/stempotd">
                <a className="py-1 block text-lg my-1 font-extralight"><p className="text-3xl sm:text-2xl">https://github.com/stempotd</p></a>
              </Link>
              <Link href="https://www.linkedin.com/company/stempotd/">
                <a className="py-1 block text-lg my-1 font-extralight"><p className="text-3xl sm:text-2xl">https://www.linkedin.com/company/stempotd/</p></a>
              </Link>
              <Link href="mailto:contact@stempotd.org">
                <a className="py-1 block text-lg my-1 font-extralight"><p className="text-3xl sm:text-2xl">contact@stempotd.org</p></a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Screen>
  );
}
export default ContactUs;
