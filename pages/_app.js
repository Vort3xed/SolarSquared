/* eslint-disable */
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
