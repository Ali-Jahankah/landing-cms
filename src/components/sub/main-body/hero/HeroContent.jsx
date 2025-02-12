import HeroButton from './HeroButton';
const HeroContent = ({ data }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center z-10 bg-[#000000CC]">
      <div className="space-y-4 px-4 max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl tracking-wide md:leading-relaxed bg-gradient-to-r from-lightBlue to-buttonBackground bg-clip-text text-transparent">
          {data.heroTitle}
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl text-buttonBackground font-bold underline underline-offset-8 decoration-lime-400 text-shadow"
          style={{ textShadow: '0px 1px 0px #00b3ff' }}
        >
          {data.heroSubHeading}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 bg-white p-4 rounded-lg max-w-lg mx-auto">
          <input
            type="email"
            placeholder={data.heroInputPlaceholder}
            className="w-full text-lightText md:w-72 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightBlue mb-4 md:mb-0"
            aria-label="Email input for signup"
          />
          <HeroButton data={data.heroButtonText} />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
