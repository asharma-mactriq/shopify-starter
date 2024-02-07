// "use client";

import Image from "next/image";
import { getAllProducts } from "../query/get-products";
import {
  NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
} from "../links";

import shopifyFetch from "../utils/shopifyClient";

export default async function Home() {
  let data = await shopifyFetch();

  if (data) {
    console.log("DATA", data);
  }
  // return <div>This is home</div>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - {product.handle} (
            {product.productType})
          </li>
        ))}
      </ul>
    </div>
  );
}
