import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.instagram.com/stempotd/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a 
        href="https://github.com/stempotd" 
        target="_blank" 
        rel="noreferrer"
      >
        <FaGithub className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="mailto:contact@stempotd.org"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
