import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hamburger.module.css';
import Logo3 from '../../assets/nobgsolarsquared.png';

// const SpanStyle = {
//   zIndex: 1,
//   color: 'inherit',
//   transition: 'all 300ms ease-in-out',
// };

function Sidebar({ isMounted, unmount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const documentWidthRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      documentWidthRef.current = document.documentElement.clientWidth;
      document.documentElement.classList.add('scroll-lock');
      if (documentWidthRef.current !== document.documentElement.clientWidth) {
        document.documentElement.style.paddingRight = `${
          document.documentElement.clientWidth - documentWidthRef.current
        }px`;
      }
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove('scroll-lock');
        document.documentElement.style.paddingRight = 0;
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
      if (
        document.documentElement.classList.contains('scroll-lock') &&
        isTransitioning
      ) {
        document.documentElement.classList.remove('scroll-lock');
        document.documentElement.style.paddingRight = 0;
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section
      className={`${isTransitioning && isMounted ? styles.active : ''} ${
        styles.navbarWrapper
      }`.trim()}
    >
      <div className={styles.navbar}>
        <div>
          <Link href="/">
            <a className="flex items-center" onClick={unmount}>
              <Image src={Logo3} alt="compteam" height="60px" width="60px" />
            </a>
          </Link>
        </div>
        <div onClick={unmount} className="cursor-pointer">
          <CgClose size={32} className={styles.closeIcon} />
        </div>
      </div>

      <div id="navList" className={styles.navItems}>
        <Link href="/">
          <a className={styles.navLink} onClick={unmount}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.navLink} onClick={unmount}>
            About Us
          </a>
        </Link>
        <Link href="/teams">
          <a className={styles.navLink} onClick={unmount}>
            Team
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink} onClick={unmount}>
            Contact Us
          </a>
        </Link>
        <Link href="/product">
          <a className={styles.navLink} onClick={unmount}>
            Product
          </a>
        </Link>
        
        <Link href="/contact">
          <a className={styles.navLink} onClick={unmount}>
            Contact Us
          </a>
        </Link>
        
      </div>
    </section>,
    document.getElementById('overlay')
  );
}
export default Sidebar;
