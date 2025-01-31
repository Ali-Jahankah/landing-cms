import { contentfulDataConfig } from '../config/contentfulData';
import client from './contentful';
const { headerOptions, landingPageOptions, footerOptions } =
  contentfulDataConfig;
export const fetchLandingPageData = async () => {
  try {
    const entries = await client.getEntries({
      ...landingPageOptions.getEntries
    });
    if (entries.items.length === 0) {
      console.error(landingPageOptions.error);
      return null;
    }
    const data = entries.items[0];
    if (
      !data?.fields?.hero ||
      !data?.fields?.features ||
      !data?.fields?.final
    ) {
      console.error('Invalid structure in landing page data:', data);
      return null;
    }
    const landingPageData = {
      hero: {
        heroTitle: data.fields.hero.fields.heroTitle,
        heroBackgroundMedia:
          data.fields.hero.fields.heroBackgroundMedia.fields.file.url,
        heroButtonText: data.fields.hero.fields.heroButtonText,
        heroInputPlaceholder: data.fields.hero.fields.heroInputPlaceholder,
        heroSubHeading: data.fields.hero.fields.heroSubHeading
      },
      features: {
        headerIcon:
          data.fields.features.fields.header.fields.featureSectionIcon.fields
            .file.url,
        headerTitle: data.fields.features.fields.header.fields.title,
        cards: data.fields.features.fields.cards
      },
      final: {
        buttonText: data.fields.final.fields.buttonText,
        description: data.fields.final.fields.description,
        href: data.fields.final.fields.href,
        title: data.fields.final.fields.title
      }
    };
    return landingPageData;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
};
export const fetchHeaderData = async () => {
  try {
    const entries = await client.getEntries({
      ...headerOptions.getEntries
    });

    if (entries.items.length === 0) {
      console.error(headerOptions.error);
      return null;
    }
    const data = entries.items[0];

    if (!data?.fields?.headerLogo) {
      console.error('Invalid structure in header data:', data);
      return null;
    }
    const headerData = {
      headerLogo: {
        url: data.fields.headerLogo.fields.file.url
      }
    };

    return headerData;
  } catch (error) {
    console.error('Error fetching header data:', error);
    return null;
  }
};

export const fetchFooterData = async () => {
  try {
    const entries = await client.getEntries({
      ...footerOptions.getEntries
    });

    if (entries.items.length === 0) {
      console.error(footerOptions.error);
      return null;
    }

    const data = entries.items[0];
    if (!data?.fields?.footerLogo) {
      console.error('Invalid structure in footer data:', data);
      return null;
    }
    const footerData = {
      footerLogo: {
        url: data.fields.footerLogo.fields.file.url
      },
      footerDescription1: data.fields.footerDescription1,
      footerDescription2: data.fields.footerDescription2,
      footerLinks: data.fields.links.fields.links,
      appDeveloperLink: data.fields.authorProfileLink
    };

    return footerData;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
};
