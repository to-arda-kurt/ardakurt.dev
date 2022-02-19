import { Logo } from './logo';
import styles from '../../styles/Navigation.module.css';
import { ThemeChanger } from './theme-changer';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <Logo />
        <div>Navigation</div>
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default Navigation;
