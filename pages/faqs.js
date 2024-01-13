import { useEffect } from 'react';
import jQuery from 'jquery';
import Head from 'next/head';
import { BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';
import Screen from '../components/screen/Screen';
import options from '../lib/data/FaqData';
import styles from '../styles/faq.module.css';


function FAQs() {
  useEffect(() => {
    jQuery(`.${styles.title}`).on('click', function titleClicked() {
      const clickedElement = jQuery(this);
      clickedElement
        .parent()
        .parent()
        .find('.rotate-90')
        .removeClass('rotate-90');

      if (clickedElement.parent().hasClass(styles.active)) {
        clickedElement.children().last().removeClass('rotate-90');
        clickedElement.parent().removeClass(styles.active);
        clickedElement.next().slideUp(280);
      } else {
        clickedElement
          .parent()
          .parent()
          .find(`.${styles.item}`)
          .removeClass(styles.active);

        clickedElement.parent().parent().find(`.${styles.body}`).slideUp(280);
        clickedElement.children().last().addClass('rotate-90');
        clickedElement.parent().addClass(styles.active);
        clickedElement.next().slideDown(280);
      }
    });
  }, []);

  return (
    <Screen>
      <Head>
        <title>FAQs</title>
        <meta
          name="description"
          content="Frequently asked questions about PHS Computer Team"
        />
        <meta
          name="keywords"
          content="PHS, PHS Computer Team, Computer, Computer Team, Team, Programming, Cybersecurity, Machine Learning, Competitive Programming, ACSL, CyberPatriot, USACO"
        />
      </Head>


      <div className="relative z-10">
        <div className="absolute left-1/2 transform -translate-x-1/8 pointer-events-none" aria-hidden="true">
          <Image 
            className={styles.blobImage}
            height="1000%"
            width="1000%"
            src="/betterblueblob.png"
            alt="test"
          />
          {/* eslint-disable-next-line */}
        </div>
      </div>


      <section className="container-70 pt-16 sm:pt-8 sm:w-4/5 xs:w-[85%]">
        <div className="mt-6 mb-20 sm:mt-8 sm:mb-20 xs:mt-4 xs:mb-16">
          <h1 className="text-6xl xl:text-5xl xl:leading-snug sm:text-4xl text-center">
            FAQs
          </h1>
        </div>
        <div className="grid gap-4 sm:gap-2">
          {options.map(({ title, body }) => {
            return (
              <div className={styles.item} key={title.props.children}>
                <button type="button" className={styles.title}>
                  <h2 className="text-2xl text-left sm:text-xl">{title}</h2>
                  <BsChevronRight className="ml-4 w-8 shrink-0" />
                </button>
                <div className={styles.body}>
                  <div className="text-left text-lg">{body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Screen>
  );
}

export default FAQs;
