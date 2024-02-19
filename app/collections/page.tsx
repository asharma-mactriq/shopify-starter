// "use client";
import React , { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { getAllProducts } from "@/query/get-products";

// import {
//   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
//   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
// } from "../links";

import shopifyFetch from "@/utils/shopifyClient";;
import sim from "@/template/products";



export default async function ProductPage() {
  let [collections, collectionImages, products, images, urlProduct, prices] = await shopifyFetch();

  let similar = sim;  
  console.log("PRICES FETCH",prices);
  {prices.map((price, index) => (
    console.log("regular",price.regularPrice,price.compareAtPrice)
  ))}

  return (
    <React.Fragment>
     <section className="bg-white py-10">
      <div className="flex flex-col text-center w-full">
        <h1 className="text-3xl title-font mb-4 text-gray-900 tracking-tight">ADILQADRI PREMIUM PERFUME SPRAY (EDP)</h1>
        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
      </div>
    </section>

    <section className="bg-[#fff9f3] text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
      {products.map((product, index) => (
        <div className="p-4 lg:w-1/3" key={product.id}>
          <div className="bg-white p-3 rounded-xl h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="border border-gray-300 flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={urlProduct[index]} alt={images[index].altText}/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font text-gray-900">{product.handle}</h2>
              {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
              {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
              <div className="flex md:flex py-2">
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <FontAwesomeIcon icon={faStar} className="text-[#f2b01e] h-4 w-4"/>
                    <p className="ml-1 text-sm">(9,451)</p>
              </div>
              <p className="leading-relaxed font-bold text-[#956827]">₹{prices[index].regularPrice}
                {/* {prices[index].compareAtPrice &&  */}
                  <span className="line-through text-xs ml-1 text-black">₹{prices[index].compareAtPrice}</span>
                {/* } */}
              </p>
              <button className="bg-black text-white font-bold rounded-lg w-full p-2 mt-12">Add To Cart</button>
            </div>
          </div>
        </div>
       ))}
      </div>
    </div>
    </section>


   
    <section className="bg-white body-font">
        <div className="container px-16 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-col text-center w-full py-5 text-[#491b0e]">
              <h1 className="text-5xl font-medium font-serif title-font mb-8">Shop By Category</h1>
              <p>Explore our premium range of products</p>
            </div>
            {collections.map((collection, index) => (
            <div className="p-4 lg:w-1/4" key={index}>
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 sm:pt-40 sm:pb-96 overflow-hidden text-center relative">
              <img alt={collectionImages[index].altText} src={collectionImages[index].src} className="h-full w-full object-cover object-center block absolute inset-0"/>
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-white mr-3 inline-flex items-center leading-none pr-3 py-1 border-gray-200">
                  {collection}
                  </span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-[#f9ebe3] text-gray-600 body-font">
      <div className="container mx-auto text-black">
        <div className="flex flex-col text-center w-full py-5">
          <h1 className="text-5xl font-medium font-serif title-font mt-10 tracking-tight">Why Trust Us?</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center py-16 px-32">

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img1.png"/>
              </div>
              <p className="leading-relaxed">Premium</p>
              <p className="leading-relaxed">Quality</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full ">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img2.png"/>
              </div>
              <p className="leading-relaxed">Cruelty</p>
              <p className="leading-relaxed">Free</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img3.png"/>
              </div>
              <p className="leading-relaxed">Long</p>
              <p className="leading-relaxed">Lasting</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img4.png"/>
              </div>
              <p className="leading-relaxed">Variety of</p>
              <p className="leading-relaxed">Fragrances</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#ffffff] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img5.png"/>
              </div>
              <p className="leading-relaxed">Derma</p>
              <p className="leading-relaxed">Tested</p>
            </div>
          </div>

          <div className="p-5 md:w-1/6 sm:w-1/2 w-full">
            <div className="bg-[#eedacf] rounded-xl px-4 py-6">
              <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 mb-8">
                <img className="h-auto max-w-full" src="./img6.png"/>
              </div>
              <p className="leading-relaxed">100%</p>
              <p className="leading-relaxed">Vegan</p>
            </div>
          </div>

        </div>
      </div>
    </section>





    <section className="bg-[#213d2f] body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/> */}
              <div className="w-full">
                {/* <span className="inline-flex"> */}
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faCube} className="h-5 w-5"/>
                  </a>
                {/* </span> */}
                <h2 className="title-font font-medium text-sm text-white mt-5">EASY RETURNS</h2>
                <p className="py-5 text-white">Return product within 7 days of purchase.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CUSTOMER SERVICE</h2>
                <p className="py-5 text-white">We are available from Monday to Saturday to answer your questions.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faLock} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">SECURE PAYMENT</h2>
                <p className="py-5 text-white">Your payment information is processed securely.</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/> */}
              <div className="w-full">
                <span className="inline-flex">
                  <a className="text-white inline-flex">
                    <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5"/>
                  </a>
                </span>
                <h2 className="title-font font-medium text-sm text-gray-900 mt-5 text-white">CONTACT US</h2>
                <p className="py-5 text-white">Need to contact us ? Just send us an e-mail at info@adilqadri.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </React.Fragment>
  );
}