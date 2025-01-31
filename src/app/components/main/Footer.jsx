import Image from 'next/image';
import { fetchFooterData } from '@/app/utils/healpers';
import Link from 'next/link';

const Footer = async () => {
  const data = await fetchFooterData();

  return (
    <footer
      className="flex justify-between flex-col-reverse md:flex-row p-4 bg-darkText text-buttonBackground"
      role="contentinfo"
    >
      <div className="flex flex-col items-start py-4 space-y-2">
        <Image
          src={'https:' + data.footerLogo.url}
          alt={`Logo of ${data.footerLogo.title}`}
          width={128}
          height={26}
          loading="lazy"
          className="w-[128px] h-[26px]"
        />
        <p className="text-sm">{data.footerDescription1}</p>
        <p className="text-sm">{data.footerDescription2}</p>
        <a
          href={data.appDeveloperLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
          aria-label="Visit the app developer's website"
        >
          Developed by Ali Jahankhah
        </a>
      </div>

      <div className="flex flex-wrap gap-4 py-7 px-3 flex-1 justify-start">
        {data.footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.fields.href}
            className="font-semibold px-3 w-32"
            aria-label={`Link to ${link.fields.label}`}
            title={link.fields.label}
          >
            {link.fields.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
