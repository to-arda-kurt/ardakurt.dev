import Button from '../button';

import styles from '../../styles/components/SectionHeader.module.css';

export const SectionHeader = (props) => {
  return (
    <div className={styles.Section}>
      <h1>Projects</h1>
      <Button type="section" toGo="/projects" text="All Projects" />
    </div>
  );
};
