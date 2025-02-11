import Features from './components/main/Features';
import FinalCTA from './components/main/FinalCTA';
import HeroSection from './components/main/HeroSection';
import NoContent from './components/main/NoContent';
import { fetchLandingPageData } from './utils/healpers';
export default async function Home() {
  const landingPage = await fetchLandingPageData();
  return landingPage ? (
    <>
      <HeroSection data={landingPage.hero} />
      <Features data={landingPage.features} />
      <FinalCTA data={landingPage.final} />
    </>
  ) : (
    <NoContent />
  );
}
