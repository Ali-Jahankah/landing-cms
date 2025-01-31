import Image from 'next/image';

const FeatureCard = ({ card }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-y-lightBlue border-x-2 border-y-2 border-solid">
      <Image
        src={'https:' + card.featureImage.fields.file.url}
        alt={card.featureTitle + ' iamge'}
        width={200}
        height={150}
        className="w-full h-40 object-cover rounded-md"
        loading="lazy"
      />
      <h1 className="mt-4 text-xl font-semibold text-black">
        {card.featureTitle}
      </h1>
      <p className="mt-2 text-darkText">{card.featureDescription}</p>
    </div>
  );
};

export default FeatureCard;
