import Link from 'next/link';
import styles from '../../../styles/components/Menu.module.css';

export const Menu = () => {
  const links = [
    { name: 'Projects', toGo: '/projects' },
    { name: 'About me', toGo: '/about-me' },
    { name: 'Articles', toGo: '/articles' },
  ];

  return (
    <nav className={styles.Menu}>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.toGo}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
