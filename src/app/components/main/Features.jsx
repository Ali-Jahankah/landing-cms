import FeatureCard from '../sub/main-body/features/FeatureCard';

const Features = ({ data }) => {
  return (
    <section className="features-section py-12">
      <h2 className="text-2xl md:text-3xl px-2 my-5 lg:text-4xl font-bold text-darkText text-center">
        {data?.headerTitle}
      </h2>
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-3">
        {data.cards.map((card, index) => (
          <FeatureCard key={index} card={card.fields} />
        ))}
      </div>
    </section>
  );
};

export default Features;
