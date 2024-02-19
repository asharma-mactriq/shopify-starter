import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://perfect-interior-design.myshopify.com',
  cache: new InMemoryCache(),
  headers: {
    'X-Shopify-Storefront-Access-Token': '4ef3a96503fec8ee66d327703b4727f4',
  },
});

export default client;