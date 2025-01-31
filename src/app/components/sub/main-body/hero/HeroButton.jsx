'use client';

const handleClick = () => alert('This is a sign up button!');
const HeroButton = ({ data }) => {
  return (
    <button
      className="hover:bg-darkBlue text-buttonBackground 
bg-lightBlue  px-6 py-3 rounded-lg w-full md:w-auto transition duration-500"
      onClick={handleClick}
      aria-label={data || 'Sign up'}
    >
      {data}
    </button>
  );
};

export default HeroButton;
