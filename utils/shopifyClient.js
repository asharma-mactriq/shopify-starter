import {
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
} from "../links";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export default async function shopifyFetch() {
  // INIT SHOPIFY CLIENT
  const client = createStorefrontApiClient({
    storeDomain: `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`,
    apiVersion: "2024-01",
    publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  });

  const productQuery = `
  query {
  products(first: 100) {
    edges {
      node {
        id
        title
        handle
        productType
      }
    }
  }
}
  `;

  const { data, errors, extensions } = await client.request(productQuery);
  let productsList = [];
  console.log(data.products.edges.length, "length");
  for (let i = 0; i < data.products.edges.length; i++) {
    productsList.push(data.products.edges[i].node);
  }
  console.log(productsList);

  return productsList;
  //   console.log(data, errors, extensions);
  //   const response = await client.fetch(NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN);
  //   console.log(response);
  //   return response;
}

async function getProductDetails() {
  const client = createStorefrontApiClient({
    storeDomain: `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`,
    apiVersion: "2024-01",
    publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  });
  const productId = "gid://shopify/Product/9013589147948"; // Replace with the actual product ID

  const productQuery = `
  query GetProductDetails($productId: ID!) {
  product(id: $productId) {
    id
    title
    handle
    productType
    description
    images(first: 3) {
      edges {
        node {
          id
          originalSrc
          altText
        }
      }
    }
    variants(first: 5) {
      edges {
        node {
          id
          title
          priceV2 {
            amount
            currencyCode
          }
          sku
        }
      }
    }
  }
}
  `;

  const { data, errors, extensions } = await client.request(productQuery, {
    variables: {
      productId,
    },
  });
  console.log("data", data);
  return data;
}

export { getProductDetails };
