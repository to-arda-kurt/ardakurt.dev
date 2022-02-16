import { Logo } from './logo';
import styles from '../../../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <Logo />
        <div className={styles.menuWrapper}>
          <div>Navigation</div>
          <div>Social Menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
