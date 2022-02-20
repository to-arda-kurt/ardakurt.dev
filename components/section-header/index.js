import Button from '../button';

import styles from '../../styles/components/SectionHeader.module.css';

export const SectionHeader = ({ title, button }) => {
  return (
    <div className={styles.Section}>
      <h1>{title}</h1>
      <Button type="section" toGo="/projects" text={button} />
    </div>
  );
};
