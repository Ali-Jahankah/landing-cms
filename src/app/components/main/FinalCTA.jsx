import Link from 'next/link';

const FinalCTA = ({ data }) => {
  return (
    <section
      aria-labelledby="cta-title"
      className="py-16 px-4 md:px-8 lg:px-16 bg-border text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue leading-tight">
          {data?.title}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-darkText">
          {data?.description}
        </p>
        <Link
          href={data?.href}
          className="mt-6 inline-block hover:bg-buttonBackground hover:text-darkBlue font-semibold text-lg md:text-xl px-6 py-3 rounded-lg shadow-md bg-lightBlue text-buttonBackground transition duration-500"
          aria-label="Read more"
        >
          {data?.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
