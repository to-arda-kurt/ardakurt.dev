import Button from '../button';
import Image from 'next/image';

import styles from '../../styles/components/Hero.module.css';

const Hero = () => {
  return (
    <>
      {' '}
      <div className={styles.hero}>
        <div className={styles.col}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heroTitle}>
              Hey! <br />
              It’s Arda.
            </h1>
            <p className={styles.heroText}>
              I’m Front-end Developer in London. I love designing and building
              web projects. This website is my digital garden, portfolio and
              blog.
            </p>
          </div>
          <Button type="primary" toGo="/about-us" text="More About Me" />
        </div>

        <div className={styles.col}>
          <div className={styles.heroImage}></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
