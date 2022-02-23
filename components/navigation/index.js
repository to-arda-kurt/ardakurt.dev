import { Logo } from './logo';
import { Menu } from './menu';
import styles from '../../styles/components/Navigation.module.css';
import { ThemeChanger } from './theme-changer';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <Logo />
        <Menu />
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default Navigation;
