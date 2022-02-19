import Link from 'next/link';
import styles from '../../styles/components/Button.module.css';

const Button = ({ type, toGo, text }) => {
  return (
    <div className={`${styles[type]} ${styles.button}`}>
      <Link href={toGo}>{text}</Link>
    </div>
  );
};

export default Button;
