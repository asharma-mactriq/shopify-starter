import {
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
} from "../links";

export async function shopifyFetch({ query }) {
  // const endpoint = NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  // const endpoint = `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}`;
  const endp = `${NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;
  const key = NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  console.log(query, endpoint);
  try {
    const result = await fetch(endp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: JSON.stringify({ query }),
    });
    console.log(result);
    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
