import Image from 'next/image';

const FeatureCard = ({ card }) => {
  return (
    <div className="bg-white p-2 flex md:flex-col rounded-lg shadow-lg border-y-lightBlue border-x-2 border-y-2 border-solid">
      <Image
        src={'https:' + card.featureImage.fields.file.url}
        alt={card.featureTitle + ' iamge'}
        width={200}
        height={150}
        className="w-5/12 md:w-full object-cover h-40 rounded-md"
        loading="lazy"
      />
      <div className="flex flex-col px-2">
        <h1 className="text-xl font-semibold text-black">
          {card.featureTitle}
        </h1>
        <p className="mt-2 text-darkText">{card.featureDescription}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
