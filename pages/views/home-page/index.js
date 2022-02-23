import { Card } from '../../../components/cards/card';
import Hero from '../../../components/hero';
import { SectionHeader } from '../../../components/section-header';
import Cards from '../../../components/cards';

import { last3post } from '../../../lib/api';

const HomePage = (i) => {
  return (
    <>
      <Hero />
      <SectionHeader title="Last Projects" button="All Projects" />
      <Cards />
      <SectionHeader title="Last Articles" button="All Articles" />
      <Cards />
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const allPosts = await last3post();

  return {
    props: {
      allPosts,
    },
  };
}
