'use client';
import { useState, useEffect } from 'react';
import { fetchHeaderData } from '@/app/utils/healpers';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = () => {
  const [headerData, setHeaderData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHeaderData();
      setHeaderData(data); // update the state with fetched data
    };

    fetchData();
  }, []);
  if (!headerData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link href="/">
        <Image
          src={'https:' + headerData.headerLogo.url}
          alt="Header logo"
          width={100}
          height={30}
          className="w-auto"
          priority={false}
          quality={75}
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
