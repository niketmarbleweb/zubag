import { createFileRoute } from '@tanstack/react-router';
import Seo from '../components/seo/Seo';
import HeroSection from '../components/home/HeroSection';
import AboutTeaser from '../components/home/AboutTeaser';
import SolutionsStrip from '../components/home/SolutionsStrip';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { company } from '../data/siteData';
import { orgSchema } from '../lib/seo';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Seo
        title={`${company.name} | ${company.tagline}`}
        description={company.description}
        path="/"
        jsonLd={orgSchema()}
      />
      <HeroSection />
      <AboutTeaser />
      <SolutionsStrip />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}
