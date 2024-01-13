/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar2.module.css';
import Logo from '../../assets/SolarSquared.png';
import Logo2 from '../../assets/basiclogo.png';
import ButtonV2 from '../buttonv2/ButtonV2';
import Sidebar from './Sidebar';

const SpanStyle = {
  zIndex: 1,
  color: 'inherit',
  transition: 'all 300ms ease-in-out',
};

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Creating a dynamic parent div for the sidebar to act as portal's root
    const div = document.createElement('div');
    div.setAttribute('id', 'overlay');
    document.querySelector('body').appendChild(div);
    return () => div.remove();
  }, []);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const navList = document.getElementById('navList');
      const navbar = document.getElementById('navbar');
      const title = document.getElementById('clubtitle');
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        navbar.style.border = 'none';
      }

      if (prevScroll < currentScrollPos) {
        // navList.classList.add('fade-up');
        // title.classList.add('fade-up');
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
      } else {
        // navList.classList.remove('fade-up');
        // title.classList.remove('fade-up');
      }

      prevScroll = currentScrollPos;
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="navbar" className={`${styles.navbar}`}>
      <div>
        <Link href="/">
          <a className="flex items-center">
            {/* <Image src={Logo} alt="compteam" height="60px" width="120px"/> */}
            <Image src={Logo2} alt="compteam" height="60px" width="60px"/>
            {/* <h2 id="clubtitle" className={styles.navTitle}>
              SolarSquared
            </h2> */}
          </a>
        </Link>
      </div>
      <div id="navList" className={styles.navbarList}>
        <Link href="/">
          <a className={styles.navLink}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={styles.navLink}>ABOUT US</a>
        </Link>
        <Link href="/teams">
          <a className={styles.navLink}>TEAM</a>
        </Link>
        <Link href="/product">
          <a className={styles.navLink}>PRODUCT</a>
        </Link>
        <Link href="/faqs">
          <a className={styles.navLink}>FAQs</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>CONTACT US</a>
        </Link>
        
      </div>
      <div
        id="hamburger"
        onClick={() => setIsOpen(true)}
        className={styles.humburgerMenu}
      >
        <HiMenuAlt4 size={32} className="block" />
      </div>
      <Sidebar isMounted={isOpen} unmount={() => setIsOpen(false)} />
    </section>
  );
}
export default Navbar2;
