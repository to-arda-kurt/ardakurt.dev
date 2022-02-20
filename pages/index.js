import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '../utils/page-header';
import { Footer } from '../components/footer';
import Navigation from '../components/navigation';
import HomePage from './views/home-page';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHeader />
      <Navigation />
      <main className={styles.main}>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
