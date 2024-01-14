/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StyledTextV2Small from '../StyledTextV2Small/StyledTextV2';
import Styles from './Footer.module.css';

function Footer() {
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
    <footer className={`${Styles.footer} container-70`}>
      <StyledTextV2Small text="Get In Touch" />

      <div className={Styles.linksContainer}>
        <div className="flex-2 md:flex-1">
          <div className="mb-3 flex flex-col">
            <h3 className="text-2xl">Email</h3>
            <h4 className="text-lg font-extralight">
              <a href="mailto:ave.engineering1@gmail.com">ave.engineering1@gmail.com</a>
            </h4>
          </div>
          <div className="my-3 flex flex-col">
            <h3 className="text-2xl">Social Media</h3>
            <h4 className="text-lg font-extralight">
              <a href="https://www.instagram.com/avengineering/" target="_blank" rel='noreferrer'>www.instagram.com/avengineering/</a> <br />
              <a href="https://github.com/avengineering" target="_blank" rel='noreferrer'>github.com/avengineering</a> <br />
            </h4>
          </div>
        </div>
        <div className="flex-4 md:flex-1 md:mx-4 sm:mx-0 sm:mt-8">
          <h3 className="text-2xl">Other Pages</h3>
          <Link href="/about">
            <a className="pl-1 block text-lg my-1 font-extralight">About Us</a>
          </Link>
          <Link href="/teams">
            <a className="pl-1 block text-lg my-1 font-extralight">Team</a>
          </Link>
          <Link href="/events">
            <a className="pl-1 block text-lg my-1 font-extralight">Events</a>
          </Link>
        </div>
        <div className="flex-4 md:flex-1 sm:mt-8">
          <h3 className="text-2xl">Get Help</h3>
          <a
            href="https://docs.google.com/forms/"
            className="block pl-1 text-lg my-1 font-extralight"
            target="_blank"
            rel="noreferrer"
          >
            Join Us
          </a>
          <Link href="/faqs">
            <a className="block pl-1 text-lg my-1 font-extralight">FAQs</a>
          </Link>
          <Link href="/contact">
            <a className="pl-1 block text-lg my-1 font-extralight">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className={Styles.copyrightBottom}>
        <h6>
          © {new Date().getFullYear()} SolarSquared. All rights
          reserved.
        </h6>
        <h6 className="flex items-center">
          Crafted with&nbsp;<span className="text-2xl">♥</span>&nbsp;by Agneya Tharun
        </h6>
        
      </div>
    </footer>
  );
}

export default Footer;
