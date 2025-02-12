import { fetchHeaderData } from '@/utils/healpers';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = async () => {
  const data = await fetchHeaderData();
  return (
    <div>
      <Link href="/">
        <Image
          src={'https:' + data.headerLogo.url}
          alt="Header logo"
          width={100}
          height={30}
          className="w-auto"
          priority={false}
          quality={75}
          role="img"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
