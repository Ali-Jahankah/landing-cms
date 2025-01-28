import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={150} height={50} />
      </Link>
    </div>
  );
};

export default HeaderLogo;
