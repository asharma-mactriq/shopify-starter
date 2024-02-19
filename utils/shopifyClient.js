import {
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
} from "../links";

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

// TO DO 
// CHANGE FUNCTION NAME FROM shopifyFetch TO getShopifyProducts 
// REMOVE COLLECTION QUERRY AND RELATED LOGIC FROM getShopifyProducts
// CREATE NEW FUNCTION FOR getShopifyCollections

export default async function shopifyFetch() {
  const client = createStorefrontApiClient({
    storeDomain: `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`,
    apiVersion: "2024-01",
    publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  });

  const collectionQuery = `
    query {
      collections(first: 100) {
        edges {
          node {
            id
            title
            image {
              originalSrc
              altText
            }
          }
        }
      }
    }
  `;

  const productQuery = `
  query {
    products(first: 100) {
      edges {
        node {
          id
          title
          handle
          productType
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
            
          }
        }
      }
    }
  }
`;

try {
  const { data: collectionData, errors: collectionErrors } = await client.request(collectionQuery);
  const { data: productData, errors: productErrors } = await client.request(productQuery);

  if (collectionErrors || productErrors) {
    console.error("Error fetching data:", collectionErrors || productErrors);
    return [[], [], [], [], [], []];
  }

  let collectionsList = [];
  let collectionImages = [];
  let productsList = [];
  let imageList = [];
  let urlProduct = [];
  let prices = [];

  collectionData.collections.edges.forEach(({ node }) => {
    collectionsList.push(node.title);

    if (node.image) {
      collectionImages.push({
        src: node.image.originalSrc,
        altText: node.image.altText
      });
    } else {
      collectionImages.push({
        src: "",
        altText: "No image available"
      });
    }
  });
 console.log("edges",productData.products.edges[0].node.priceRange.minVariantPrice)
  productData.products.edges.forEach(({ node }) => {
    productsList.push(node);

    if (node.images.edges.length > 0) {
      let productImages = [];
      node.images.edges.forEach(({ node: imageNode }) => {
        productImages.push({
          src: imageNode.originalSrc,
          altText: imageNode.altText
        });
      });
      imageList.push(productImages);
      urlProduct.push(productImages[0].src);
    } else {
      imageList.push([]);
      urlProduct.push("");
    }

    prices.push({
      regularPrice: node.priceRange.minVariantPrice.amount,
      compareAtPrice: node.priceRange.maxVariantPrice.amount
    });
  });

  console.log("Collections List:", collectionsList);
  console.log("Collection Images:", collectionImages);
  console.log("Products List:", productsList);
  console.log("Image List:", imageList);
  console.log("URL Product:", urlProduct);
  console.log("Prices:", prices);

  return [collectionsList, collectionImages, productsList, imageList, urlProduct, prices];
} catch (error) {
  console.error("Error fetching data:", error);
  return [[], [], [], [], [], []];
}
}







export async function fetchComboData() {
  const client = createStorefrontApiClient({
    storeDomain: `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`,
    apiVersion: "2024-01",
    publicAccessToken: NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  });

  const productQuery = `
    query {
      products(first: 100, query: "tag:combo offer") {
        edges {
          node {
            id
            title
            handle
            productType
            images(first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data: productData, errors: productErrors } = await client.request(productQuery);

    if (productErrors) {
      console.error("Error fetching product data:", productErrors);
      return [[], [], [], []];
    }

    let comboProducts = [];
    let comboImages = [];
    let comboUrlProduct = [];
    let comboPrices = [];

    productData.products.edges.forEach(({ node }) => {
      comboProducts.push(node);

      if (node.images.edges.length > 0) {
        let productImages = [];
        node.images.edges.forEach(({ node: imageNode }) => {
          productImages.push({
            src: imageNode.originalSrc,
            altText: imageNode.altText
          });
        });
        comboImages.push(productImages);
        comboUrlProduct.push(productImages[0].src);
      } else {
        comboImages.push([]);
        comboUrlProduct.push("");
      }

      comboPrices.push({
        regularPrice: node.priceRange.minVariantPrice.amount,
        compareAtPrice: node.priceRange.maxVariantPrice.amount
      });
    });

    console.log("Combo Products List:", comboProducts);
    console.log("Combo Image List:", comboImages);
    console.log("Combo URL Product:", comboUrlProduct);
    console.log("Combo Prices:", comboPrices);

    return [comboProducts, comboImages, comboUrlProduct, comboPrices];
  } catch (error) {
    console.error("Error fetching combo data:", error);
    return [[], [], [], []];
  }
}












//   // crete a function to loop over products.edges[] and create a productlist
//   // create a function that loop over 
//   const { data, errors, extensions } = await client.request(productQuery);
//   let productsList = [];
//   let imageList = [];
//   let urlProduct = data.products.edges[0].node.images.edges
//   console.log("images",urlProduct,"printing",errors);
//   console.log(data.products.edges.length, "length");
//   for (let i = 0; i < data.products.edges.length; i++) {
//     productsList.push(data.products.edges[i].node);
//   }
//   for (let i = 0; i < urlProduct.length; i++) {
//     imageList.push(urlProduct[i].node.url);
//   }
//   console.log("abc",productsList,"images",imageList);

//   return [productsList,urlProduct];
//   //   console.log(data, errors, extensions);
//   //   const response = await client.fetch(NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN);
//   //   console.log(response);
//   //   return response;
// }

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
