import Image from 'next/image';
import HeroContent from '../sub/main-body/hero/HeroContent';

const HeroSection = ({ data }) => {
  return (
    <section className="relative w-full h-[55vh] lg:h-[65vh] xl:h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={'https:' + data.heroBackgroundMedia}
          alt="A hero image background"
          fill
          className="w-full h-full object-cover object-center"
          priority
          quality={75}
        />
      </div>
      <HeroContent data={data} />
    </section>
  );
};

export default HeroSection;
