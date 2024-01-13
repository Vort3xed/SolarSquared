import styles from './grid-gallery.module.css';

function GridImage({ src, mobileSrc, title, id }) {
    return (
      <div className={styles.wrapper}>
        <svg width="0" height="0">
          <defs>
            <clipPath id={id} clipPathUnits="objectBoundingBox">
              <circle
                cx="0.5"
                cy="1.2"
                r="0"
                transform="translate(0.5 1.2) scale(0.8806584362139918 1) translate(-0.5 -1.2)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className={styles.imgBoxWrapper} style={{ clipPath: `url(#${id})` }}>
          <div className={styles.image}>
            <picture>
              <source media="(max-width: 600px)" srcSet={mobileSrc} alt={title} />
              <img src={src} alt={title} />
            </picture>
          </div>
          <div className={styles.text}>{title}</div>
        </div>
      </div>
    );
  }

export default GridImage;