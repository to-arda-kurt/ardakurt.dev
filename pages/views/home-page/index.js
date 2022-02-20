import { Card } from '../../../components/cards/card';
import Hero from '../../../components/hero';
import { SectionHeader } from '../../../components/section-header';
import Cards from '../../../components/cards';

const HomePage = () => {
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
