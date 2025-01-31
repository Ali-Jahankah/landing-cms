import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Missing Contentful environment variables. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.'
  );
}
let client;

try {
  client = createClient({
    space,
    accessToken
  });
} catch (error) {
  throw new Error('Contentful client initialization failed.');
}

export default client;
