import Button from '../../button';

import styles from '../../../styles/components/Card.module.css';

export const Card = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardImage}>Image</div>
      <div className={styles.CardInfo}>
        <h1 className={styles.CardInfoHeader}>Countries App</h1>
        <p className={styles.CardInfoStack}>
          React, Axios, Context, Styled Components
        </p>
        <p className={styles.CardInfoText}>
          Countries app uses Countries Rest Api to show useful information about
          all countries with borders of countries. Using Axios for fetch data
          and mobile first approach.
        </p>
        <div className={styles.CardInfoButtons}>
          <Button type="secondary" toGo="/about-us" text="Source" />
          <Button type="primary" toGo="/about-us" text="Live" />
        </div>
      </div>
    </div>
  );
};
